'use client'
import React, { useState } from "react";
import Logo from '@/app/UI/logo/page'
// Import all documentation content components
import StripeSetup from "./stripe-setup/page";
import MongoDBSetup from "./mongodb-setup/page";
import QuickStart from "./quickstart/page";
import AuthGoogle from "./Auth-google/page";
import EmailSetup from "./email-setup/page";



const Introducingwebdone = () => {
  const [activeSection, setActiveSection] = useState("intro");

  // Function to render the active content section
  const renderContent = () => {
    switch (activeSection) {
      case "stripe":
        return <StripeSetup />;
      case "mongodb":
        return <MongoDBSetup />;
      case "quickstart":
        return <QuickStart />;
      case "google-auth":
        return <  AuthGoogle />;
      case "email-setup":
        return <  EmailSetup />;
    


      default:
        return (
          <div className="max-w-4xl ">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-4">
              Getting Started
            </div>
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Welcome to webdone
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Meet your new AI-powered development companion. webdone is designed to revolutionize
              how engineering teams collaborate and build software.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Smart Code Analysis</h3>
                    <p className="text-gray-400">
                      Automatically analyze and improve code coverage with intelligent suggestions and fixes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-purple-500/10">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Autonomous Workflow</h3>
                    <p className="text-gray-400">
                      Let webdone handle routine tasks while you focus on complex problem-solving.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50">
              <h2 className="text-2xl font-semibold mb-4">Getting Started is Easy</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">1</span>
                  <span>Clone the repository and install dependencies</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                  <span>Configure your environment variables</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">3</span>
                  <span>Run the development server and start coding</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-100 relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>

      {/* Header */}
      <header className="px-6 py-4 backdrop-blur-sm bg-black/20 border-b border-gray-700/50 flex justify-between items-center sticky top-0 z-50">
        <Logo /> <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          webdone Docs
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <input
              type="search"
              placeholder="Search or ask..."
              className="px-4 py-2 bg-gray-800/50 text-gray-200 rounded-lg border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 w-64 backdrop-blur-sm"
            />
            <div className="absolute right-3 top-2.5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
              ⌘K
            </div>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
            Get Support
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
            webdone ▼
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-72 backdrop-blur-sm bg-black/20 border-r border-gray-700/50 h-[calc(100vh-73px)] sticky top-[73px] overflow-y-auto">
          <div className="px-4 py-6 space-y-6">
            <div>
              <h3 className="text-blue-400 font-medium mb-3 flex items-center">
                <span className="mr-2">🚀</span> Get Started
              </h3>
              <ul className="space-y-2 pl-6">
                <li
                  className={`text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer ${activeSection === 'intro' ? 'text-white font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection('intro')}
                >
                  Introducing webdone
                </li>
                <li
                  className={`text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer ${activeSection === 'quickstart' ? 'text-white font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection('quickstart')}
                >
                  Quickstart Guide
                </li>
                <li
                  className={`text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer ${activeSection === 'mongodb' ? 'text-white font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection('mongodb')}
                >
                  MongoDB Integration
                </li>
                <li
                  className={`text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer ${activeSection === 'stripe' ? 'text-white font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection('stripe')}
                >
                  Stripe Implementation
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-purple-400 font-medium mb-3 flex items-center">
                <span className="mr-2">🔧</span> Core Setup
              </h3>
              <ul className="space-y-2 pl-6">
                <li
                  className={`text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer ${activeSection === 'google-auth' ? 'text-white font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection('google-auth')}
                >
                  Google Authentication
                </li>
                <li
                  className={`text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer ${activeSection === 'email-setup' ? 'text-white font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection('email-setup')}
                >
                  Email Notifications
                </li>

               
              </ul>
            </div>
            <h3 className="text-purple-400 font-medium mb-3 flex items-center">
                <span className="mr-2">🔧</span> AI seetup
              </h3>
              <li
                  className={`text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer ${activeSection === 'docker-setup' ? 'text-white font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection('assistant')}
                >
                  AI-Asisstant
                </li>
                <li
                  className={`text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer ${activeSection === 'ui-components' ? 'text-white font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection(' walpaper')}
                >
                  AI Theme
                </li>
                <li
                  className={`text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer ${activeSection === 'ui-components' ? 'text-white font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection('assistant')}
                >
                  Drag and Drop
                </li>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 px-8 py-6">
          {renderContent()}
        </main>

        {/* Table of Contents */}
        <aside className="w-72 px-6 py-6 border-l border-gray-700/50 backdrop-blur-sm bg-black/20 h-[calc(100vh-73px)] sticky top-[73px]">
          <h3 className="text-lg font-medium text-gray-200 mb-4">On this page</h3>
          <ul className="space-y-3">
            <li className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors duration-200">
              → Quick Start Guide
            </li>
            <li className="text-gray-400 cursor-pointer hover:text-gray-200 transition-colors duration-200">
              → Key Features
            </li>
            <li className="text-gray-400 cursor-pointer hover:text-gray-200 transition-colors duration-200">
              → Installation Steps
            </li>
            <li className="text-gray-400 cursor-pointer hover:text-gray-200 transition-colors duration-200">
              → Configuration
            </li>
            <li className="text-gray-400 cursor-pointer hover:text-gray-200 transition-colors duration-200">
              → Best Practices
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Introducingwebdone;
