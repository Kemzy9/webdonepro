'use client'
import React from "react";
import Link from "next/link";

const EmailSetup = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <div className="mb-8">
        <Link href="/documents" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
          ← Back to Documentation
        </Link>
      </div>
      
      <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-4">
        Quick Setup Guide
      </div>
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Setting Up Email Notifications 📧
      </h1>
      
      <div className="space-y-8">
        {/* Getting Started */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <h2 className="text-2xl font-semibold">Quick Start with Resend</h2>
          </div>

          <div className="space-y-4 text-gray-300">
            <p className="text-lg">Hey there! Let's get your email notifications up and running in no time 🚀</p>
            
            <div className="bg-black/30 p-4 rounded-lg space-y-3">
              <p>1️⃣ First things first, install Resend:</p>
              <code className="text-blue-400 block">npm install resend</code>
              
              <p>2️⃣ Grab your API key from <a href="https://resend.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Resend's dashboard</a></p>
              
              <p>3️⃣ Add it to your .env file:</p>
              <code className="text-purple-400 block mt-2">
                RESEND_API_KEY=re_123your_api_key_here
              </code>
            </div>
          </div>
        </section>

        {/* Basic Implementation */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">✨ Let's Send Some Emails!</h2>
          <div className="space-y-4">
            <p className="text-gray-300">Here's a simple example to send your first email:</p>
            <div className="bg-black/30 p-4 rounded-lg">
              <code className="text-purple-400 text-sm">
                {`import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Send your first email 🎉
await resend.emails.send({
  from: 'you@yourdomain.com',
  to: 'user@email.com',
  subject: 'Welcome aboard! 🚀',
  html: '<h1>Welcome to our awesome app!</h1>'
});`}
              </code>
            </div>
          </div>
        </section>

        {/* Cool Features */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">🎨 Cool Features You'll Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/30 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-400 mb-2">📱 React Email</h3>
              <p className="text-gray-300">Build beautiful emails using React components!</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-400 mb-2">📊 Analytics</h3>
              <p className="text-gray-300">Track opens, clicks, and delivery stats!</p>
            </div>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">🎯 Popular Use Cases</h2>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Welcome emails for new users
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Password reset notifications
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Order confirmations
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Newsletter updates
            </p>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">💡 Pro Tips</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-blue-500/10 p-4 rounded-lg">
              <p className="font-medium mb-2">🔥 Using a custom domain?</p>
              <p>Verify your domain in Resend's dashboard for better deliverability!</p>
            </div>
            <div className="bg-purple-500/10 p-4 rounded-lg">
              <p className="font-medium mb-2">⚡ Need testing?</p>
              <p>Use Resend's preview feature to test your emails before sending!</p>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">🤔 Need Help?</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Check out the <a href="https://resend.com/docs" className="text-blue-400 hover:underline">Resend docs</a></li>
            <li>• Join our Discord community</li>
            <li>• Email not showing up? Check your spam folder!</li>
            <li>• Remember to use a valid "from" address</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default EmailSetup;
