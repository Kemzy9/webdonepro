 'use client'
import React from "react";
import Link from "next/link";

const StripeSetup = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <div className="mb-8">
        <Link href="/documents" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
          ← Back to Documentation
        </Link>
      </div>
      
      <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-4">
        Integration Guide
      </div>
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Stripe Integration Setup
      </h1>
      
      <div className="space-y-8">
        {/* Prerequisites */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Stripe account (create one at stripe.com if you haven&apos;t already)</li>
            <li>• Node.js installed on your system</li>
            <li>• Basic understanding of async/await and API routes</li>
          </ul>
        </section>

        {/* Installation */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-black/30 p-4 rounded-lg mb-4">
            <code className="text-blue-400">npm install stripe @stripe/stripe-js</code>
          </div>
          <p className="text-gray-300">
            This will install both the Stripe server-side SDK and the client-side library.
          </p>
        </section>

        {/* Configuration */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
          <ol className="space-y-4">
            <li className="text-gray-300">
              <span className="text-blue-400 font-semibold">1.</span> Create a .env.local file in your project root:
              <div className="bg-black/30 p-4 rounded-lg my-2">
                <code className="text-purple-400">
                  STRIPE_SECRET_KEY=sk_test_your_key_here<br/>
                  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
                </code>
              </div>
            </li>
            <li className="text-gray-300">
              <span className="text-blue-400 font-semibold">2.</span> Create a Stripe instance in your API route:
              <div className="bg-black/30 p-4 rounded-lg my-2">
                <code className="text-purple-400">
                  import Stripe from &apos;stripe&apos;;<br/>
                  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
                </code>
              </div>
            </li>
          </ol>
        </section>

        {/* Implementation */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Implementation Example</h2>
          <div className="space-y-4">
            <p className="text-gray-300">Create an API route for handling payments:</p>
            <div className="bg-black/30 p-4 rounded-lg">
              <code className="text-purple-400 text-sm">
                {`// app/api/create-payment/route.ts\n
export async function POST(req: Request) {
  const { amount, currency = 'usd' } = await req.json();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }));
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}`}
              </code>
            </div>
          </div>
        </section>

        {/* Testing */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Testing</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Use Stripe&apos;s test card numbers (e.g., 4242 4242 4242 4242)</li>
            <li>• Test webhook integration using Stripe CLI</li>
            <li>• Verify successful payment flow in Stripe Dashboard</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default StripeSetup;
