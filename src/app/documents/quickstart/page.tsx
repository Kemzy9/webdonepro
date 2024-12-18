 'use client'
import React from "react";
import Link from "next/link";

const QuickStart = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <div className="mb-8">
        <Link href="/documents" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
          ← Back to Documentation
        </Link>
      </div>
      
      <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-4">
        Getting Started
      </div>
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Quickstart Guide
      </h1>
      
      <div className="space-y-8">
        {/* Project Setup */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Project Setup</h2>
          <div className="space-y-4">
            <p className="text-gray-300">Create a new Next.js project with the following command:</p>
            <div className="bg-black/30 p-4 rounded-lg">
              <code className="text-blue-400">
                npx create-next-app@latest my-webdone-app --typescript --tailwind --app
              </code>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Install Dependencies</h2>
          <div className="bg-black/30 p-4 rounded-lg mb-4">
            <code className="text-blue-400">
              npm install @prisma/client mongodb mongoose stripe @stripe/stripe-js next-auth
            </code>
          </div>
          <p className="text-gray-300">
            This installs all the necessary packages for database, authentication, and payment processing.
          </p>
        </section>

        {/* Environment Setup */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Environment Setup</h2>
          <p className="text-gray-300 mb-4">Create a .env.local file in your project root with the following variables:</p>
          <div className="bg-black/30 p-4 rounded-lg">
            <code className="text-purple-400">
              {`# Database
MONGODB_URI=your_mongodb_uri

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key`}
            </code>
          </div>
        </section>

        {/* Project Structure */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
          <div className="bg-black/30 p-4 rounded-lg">
            <code className="text-gray-300">
              {`my-webdone-app/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   └── stripe/
│   ├── documents/
│   └── page.tsx
├── components/
├── lib/
│   ├── mongodb.ts
│   └── stripe.ts
├── models/
└── public/`}
            </code>
          </div>
        </section>

        {/* Running the App */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Running the App</h2>
          <div className="space-y-4">
            <p className="text-gray-300">Start the development server:</p>
            <div className="bg-black/30 p-4 rounded-lg">
              <code className="text-blue-400">npm run dev</code>
            </div>
            <p className="text-gray-300">
              Your app will be available at <span className="text-blue-400">http://localhost:3000</span>
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Set up <Link href="/documents/mongodb-setup" className="text-blue-400 hover:text-blue-300">MongoDB Integration</Link></li>
            <li>• Configure <Link href="/documents/stripe-setup" className="text-blue-400 hover:text-blue-300">Stripe Payments</Link></li>
            <li>• Implement <Link href="/documents/google-auth" className="text-blue-400 hover:text-blue-300">Google Authentication</Link></li>
            <li>• Set up <Link href="/documents/email-setup" className="text-blue-400 hover:text-blue-300">Email Notifications</Link></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default QuickStart;
