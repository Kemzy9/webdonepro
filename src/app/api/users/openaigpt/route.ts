import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import * as dotenv from 'dotenv';
import { MessageParam } from '@anthropic-ai/sdk/resources/messages';
import imageCache from '../imageCache';
import axios from 'axios';

dotenv.config();

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

let conversationHistory: MessageParam[] = [];

// Function to convert image URL to base64
async function imageUrlToBase64(imageUrl: string): Promise<{ base64: string; mimeType: string }> {
  const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  const buffer = Buffer.from(response.data, 'binary');
  const base64 = buffer.toString('base64');
  const mimeType = response.headers['content-type'];
  return { base64, mimeType };
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const prompt = formData.get('prompt') as string;
    const imageId = formData.get('imageId') as string;

    if (!prompt || !imageId) {
      return NextResponse.json({ error: 'Prompt and Image ID are required' }, { status: 400 });
    }

    const imageUrl = imageCache.get(imageId);
    console.log(`Anthropic route - Retrieved image: ${imageId} -> ${imageUrl}`);

    if (!imageUrl) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    // Convert image to base64
    const { base64, mimeType } = await imageUrlToBase64(imageUrl);

    const enhancedPrompt = `Analyze the following image and ${prompt}`;

    let messages: MessageParam[] = [
      {
        role: "assistant",
        content: `I am a specialized web development AI assistant focused on:
        
TECHNICAL EXPERTISE:
If image needs use links of images from Pexels and Unsplash
Generate a comprehensive landing page (minimum 2000 lines) based on the provided image
        - Creating modern, responsive websites using HTML5 and Tailwind CSS
        - Implementing clean, semantic markup and optimized code
        - Following mobile-first design principles
        - Ensuring accessibility and performance best practices
        
        DESIGN APPROACH:
        - Modern, minimalist, and professional layouts
        - Creative component structures
        - Interactive and engaging user interfaces
        - Responsive design patterns
        
        I will provide detailed, production-ready code with Tailwind CSS optimizations and modern design patterns.`
      },
      ...conversationHistory,
      {
        role: "user",
        content: [
          {
            type: "text",
            text: enhancedPrompt
          },
          {
            type: "image",
            source: {
              type: "base64",
              media_type: mimeType,
              data: base64
            }
          }
        ]
      }
    ];

    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4096,
      temperature: 0.75,
      top_p: 0.95,
      top_k: 40,
      messages: messages,
    });

    const assistantResponse = response.content[0].text;

    conversationHistory.push({ role: "user", content: enhancedPrompt });
    conversationHistory.push({ role: "assistant", content: assistantResponse });

    if (conversationHistory.length > 10) {
      conversationHistory = conversationHistory.slice(-10);
    }

    return NextResponse.json({ result: assistantResponse });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 });
  }
}
