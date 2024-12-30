import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import type { MessageStreamEvent, Message } from '@anthropic-ai/sdk/resources/messages';
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { MessageParam } from '@anthropic-ai/sdk/resources/messages';

dotenv.config();

// Add API key validation
if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error('ANTHROPIC_API_KEY is not set in environment variables');
}

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '', // Provide empty string as fallback
});

const unlinkAsync = promisify(fs.unlink);

// Create a Map to store conversation histories for different sessions
const sessionConversations = new Map<string, MessageParam[]>();

// Helper function to get or create conversation history for a session
const getConversationHistory = (sessionId: string): MessageParam[] => {
  if (!sessionConversations.has(sessionId)) {
    sessionConversations.set(sessionId, []);
  }
  return sessionConversations.get(sessionId) || [];
};

// Helper function to update conversation history for a session
const updateConversationHistory = (
  sessionId: string, 
  messages: MessageParam[]
) => {
  sessionConversations.set(sessionId, messages);
};

// Helper function to clear conversation history for a session
const clearConversationHistory = (sessionId: string) => {
  sessionConversations.delete(sessionId);
};

export async function POST(req: NextRequest) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        // Validate API key before proceeding
        if (!process.env.ANTHROPIC_API_KEY) {
          controller.enqueue(encoder.encode(`0:Error: API key not configured\n`));
          controller.close();
          return;
        }

        const formData = await req.formData();
        const prompt = formData.get('prompt') as string;
        const selectedCode = formData.get('selectedCode') as string;
        const isContinuation = formData.get('isContinuation') === 'true';
        const file = formData.get('image') as File | null;
        const sessionId = formData.get('sessionId') as string;
        const userId = formData.get('userId') as string;

        // Validate required fields
        if (!prompt || !sessionId || !userId) {
          controller.enqueue(encoder.encode(`0:Error: Prompt, sessionId, and userId are required\n`));
          controller.close();
          return;
        }

        let enhancedPrompt = `${prompt}${selectedCode}`;
        const conversationHistory = getConversationHistory(sessionId);

        let messages: MessageParam[] = [
          {
            role: 'assistant',
            content: `I am Claude, a highly capable AI assistant specializing in web development and design. My expertise includes:

            TECHNICAL CAPABILITIES:
            - Expert-level HTML5, CSS3, and modern JavaScript
            - Advanced Tailwind CSS implementations with custom configurations
            - Responsive and adaptive design patterns
            - Modern UI/UX best practices and accessibility standards
            - Animation and interactive element creation
            
            DESIGN APPROACH:
            - Contemporary, clean, and professional layouts
            - Mobile-first and responsive design methodology
            - Modern design trends and patterns
            - Creative component structures and compositions
            - Semantic and accessible markup
            
            CODE QUALITY:
            - Clean, maintainable, and well-documented code
            - Performance-optimized implementations
            - Best practices for SEO and accessibility
            - Modular and reusable component design
            
            I maintain context throughout our conversation and can provide detailed explanations for all code modifications and design decisions. I'll help you create sophisticated, modern web solutions while ensuring code quality and best practices.`
          },
          ...conversationHistory,
          { role: 'user', content: enhancedPrompt }
        ];

        if (file && !isContinuation) {
          const tempPath = path.join('/tmp', file.name);
          const buffer = await file.arrayBuffer();
          await fs.promises.writeFile(tempPath, new Uint8Array(buffer));

          const base64Image = await fs.promises.readFile(tempPath, { encoding: 'base64' });
          // Restrict mime type to allowed values
          const mimeType = file.type as "image/jpeg" | "image/png" | "image/gif" | "image/webp";
          if (!['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(file.type)) {
            throw new Error('Unsupported image type');
          }

          messages.push({
            role: 'user' as const,
            content: [
              {
                type: 'text',
                text: enhancedPrompt
              },
              {
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: mimeType,
                  data: base64Image
                }
              }
            ]
          });

          await unlinkAsync(tempPath);
        }

        const response = await anthropic.messages.create({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 4096,
          temperature: 0.75,
          top_p: 0.95,
          top_k: 40,
          messages: messages,
          stream: true,
        }).catch(error => {
          if (error.error?.type === 'authentication_error') {
            throw new Error('Invalid API key or authentication failed');
          }
          throw error;
        });

        let textContent = '';
        let codeContent = '';
        let isInCodeBlock = false;

        for await (const part of response) {
          if ('type' in part && part.type === 'content_block_delta') {
            const delta = part.delta;
            if ('text' in delta) {
              const content = delta.text || '';
              
              if (content.includes('```')) {
                isInCodeBlock = !isInCodeBlock;
                if (isInCodeBlock) {
                  codeContent += '```';
                } else {
                  codeContent += '```\n';
                  controller.enqueue(encoder.encode(`html:${codeContent}\n`));
                  codeContent = '';
                }
              } else if (isInCodeBlock) {
                codeContent += content;
              } else {
                textContent += content;
                controller.enqueue(encoder.encode(`${content}\n`));
              }
            }
          }
        }

        // Send any remaining content
        if (textContent) {
          controller.enqueue(encoder.encode(`${textContent}\n`));
        }
        if (codeContent) {
          controller.enqueue(encoder.encode(`${codeContent}\n`));
        }

        // Update conversation history for this session
        const updatedMessages: MessageParam[] = [
          ...messages, 
          { 
            role: 'assistant' as const, 
            content: textContent + codeContent 
          }
        ];
        updateConversationHistory(sessionId, updatedMessages);

      } catch (error) {
        console.error('Error processing request:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        controller.enqueue(encoder.encode(`0:Error: ${errorMessage}\n`));
      } finally {
        controller.close();
      }
    }
  });

  return new NextResponse(stream);
}

// Add endpoint to clear session
export async function DELETE(req: NextRequest) {
  try {
    const { sessionId } = await req.json();
    if (!sessionId) {
      return new NextResponse(JSON.stringify({ error: 'Session ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    clearConversationHistory(sessionId);
    return new NextResponse(JSON.stringify({ message: 'Session cleared successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Failed to clear session' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
//in this code coreaclty replying this work correct
