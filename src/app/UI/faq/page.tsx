'use client'

import React, { useState, useEffect } from 'react';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      setTrail(prevTrail => {
        const newTrail = [...prevTrail, { x: e.clientX, y: e.clientY, id: Date.now() }];
        if (newTrail.length > 20) {
          return newTrail.slice(1);
        }
        return newTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const faqs = [
    {
      question: "What kind of landing pages can be created with Webdone?",
      answer: "Webdone can create any type of landing page you need, whether it's for e-commerce, SaaS, or something else entirely."
    },
    {
      "question": "How long does it typically take to complete a Landing page ?",
      "answer": "Project timelines vary based on complexity. A simple landing page can be built in 5 to 10 minutes. More complex designs, requiring AI assistant , typically take 20 to 30 minutes. "
    },

    {
      question: "What programming languages does webdone use to build landing pages ?",
      answer: "its use  React,Tailwindcss , and Built in  TypeScript,javascript, supported . "
    },
    {
      "question": "What can I get with the Next.js boilerplate?",
      "answer": "The Next.js boilerplate includes everything you need to launch your startup, Stripe integration, Lemon Squeezy, MongoDB, Resend, Google Auth, and more."
    },

    {
      "question": "What are AI Themes/Wallpapers?",
      "answer": "AI wallpapers are a magical way to enhance landing page background . AI to create stunning themes, making your landing page even more beautiful and engaging."
    },
    {
      "question": "What does the drag-and-drop feature provide?",
      "answer": "It lets you easily change colors, text, background images, and more."
    },

  
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-16 px-2 rounded-full">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/25 rounded-full blur-3xl animate-float-fast"></div>

        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 right-32 w-20 h-20 border-2 border-purple-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-blue-400/30 rotate-12 animate-bounce-slow"></div>

        {/* Glowing Lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse-slow delay-1000"></div>

        {/* Particle Effects */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-white/20 rounded-full animate-particle1"></div>
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-particle2"></div>
        <div className="absolute top-0 left-2/4 w-2 h-2 bg-white/20 rounded-full animate-particle3"></div>
      </div>

      {/* Cursor Effects */}
      <div
        className="fixed w-8 h-8 rounded-full pointer-events-none mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,255,0.8) 0%, rgba(255,0,255,0) 70%)',
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: 'translate(0, 0)',
          zIndex: 50
        }}
      />

      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed w-4 h-4 rounded-full pointer-events-none mix-blend-screen"
          style={{
            background: `radial-gradient(circle, ${index % 2 ? 'rgba(0,255,255,0.5)' : 'rgba(255,255,0,0.5)'} 0%, ${index % 2 ? 'rgba(0,255,255,0)' : 'rgba(255,255,0,0)'} 70%)`,
            left: point.x - 8,
            top: point.y - 8,
            opacity: 1 - (index / trail.length),
            transform: 'translate(0, 0)',
            transition: 'all 0.1s linear',
            zIndex: 40 - index
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, 20px) rotate(5deg); }
          50% { transform: translate(-20px, 40px) rotate(-5deg); }
          75% { transform: translate(-40px, -20px) rotate(3deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-3deg); }
          66% { transform: translate(30px, -30px) rotate(3deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, 25px) scale(1.1); }
        }
        @keyframes particle1 {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20vw); opacity: 0; }
        }
        @keyframes particle2 {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.7; }
          100% { transform: translateY(-100vh) translateX(-10vw); opacity: 0; }
        }
        @keyframes particle3 {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(15vw); opacity: 0; }
        }
        .animate-float-slow {
          animation: float-slow 20s infinite ease-in-out;
        }
        .animate-float-medium {
          animation: float-medium 15s infinite ease-in-out;
        }
        .animate-float-fast {
          animation: float-fast 10s infinite ease-in-out;
        }
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 6s infinite ease-in-out;
        }
        .animate-pulse-slow {
          animation: pulse 4s infinite ease-in-out;
        }
        .animate-particle1 {
          animation: particle1 15s infinite linear;
        }
        .animate-particle2 {
          animation: particle2 20s infinite linear;
        }
        .animate-particle3 {
          animation: particle3 17s infinite linear;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 mb-6">
            Frequently Asked Questions
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/10 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <h3 className="text-xl font-semibold group-hover:text-purple-300 transition-colors">{faq.question}</h3>
                <span
                  className={`text-purple-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
