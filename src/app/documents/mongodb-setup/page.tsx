 'use client'
import React from "react";
import Link from "next/link";

const MongoDBSetup = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <div className="mb-8">
        <Link href="/documents" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
          ← Back to Documentation
        </Link>
      </div>
      
      <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-4">
        Database Setup
      </div>
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        MongoDB Integration Guide
      </h1>
      
      <div className="space-y-8">
        {/* Prerequisites */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• MongoDB Atlas account (or local MongoDB installation)</li>
            <li>• Node.js and npm installed</li>
            <li>• Basic understanding of NoSQL databases</li>
          </ul>
        </section>

        {/* Installation */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-black/30 p-4 rounded-lg mb-4">
            <code className="text-blue-400">npm install mongodb mongoose</code>
          </div>
          <p className="text-gray-300">
            This installs both the MongoDB native driver and Mongoose ODM for easier data modeling.
          </p>
        </section>

        {/* MongoDB Atlas Setup */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">MongoDB Atlas Setup</h2>
          <ol className="space-y-4 text-gray-300">
            <li>1. Create a cluster in MongoDB Atlas</li>
            <li>2. Set up database access (username and password)</li>
            <li>3. Configure network access (IP whitelist)</li>
            <li>4. Get your connection string</li>
          </ol>
        </section>

        {/* Configuration */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
          <div className="space-y-4">
            <p className="text-gray-300">Add your MongoDB connection string to .env.local:</p>
            <div className="bg-black/30 p-4 rounded-lg">
              <code className="text-purple-400">
                MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
              </code>
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
          <div className="space-y-4">
            <p className="text-gray-300">Create a database connection utility:</p>
            <div className="bg-black/30 p-4 rounded-lg">
              <code className="text-purple-400 text-sm">
                {`// lib/mongodb.ts\n
import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local')
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(process.env.MONGODB_URI!, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}`}
              </code>
            </div>
          </div>
        </section>

        {/* Schema Example */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Schema Example</h2>
          <div className="space-y-4">
            <p className="text-gray-300">Create a Mongoose schema:</p>
            <div className="bg-black/30 p-4 rounded-lg">
              <code className="text-purple-400 text-sm">
                {`// models/User.ts\n
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);`}
              </code>
            </div>
          </div>
        </section>

        {/* Usage Example */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Usage Example</h2>
          <div className="space-y-4">
            <p className="text-gray-300">Using the connection in an API route:</p>
            <div className="bg-black/30 p-4 rounded-lg">
              <code className="text-purple-400 text-sm">
                {`// app/api/users/route.ts\n
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
  await dbConnect();
  
  try {
    const users = await User.find({});
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}`}
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MongoDBSetup;
