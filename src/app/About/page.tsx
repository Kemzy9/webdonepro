import React from 'react';
import Footer from '@/app/UI/footer/page';
import Nav from "@/app/UI/Nav/page";

const About: React.FC = () => {
  return (
   
    <div className="bg-neutral-9000 text-gray-100 min-h-screen">

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-blue-400 font-space tracking-tight">Hey there! 👋</h1>
        <p className="mb-4 text-sm leading-relaxed font-inter">
          We're Webdone, and we're super excited to help you build Landing page with Ai with customization support ! AI  make website building fun and easy - whether you want a simple and modern landing page or a full-blown Next.js app.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-blue-400 font-space tracking-wide">What We're All About</h2>
        <p className="mb-4 text-sm font-inter">
          You know how building websites/Landing page can sometimes feel overwhelming? That's exactly why we made this tools ! We've created tools that make the whole process feel like a breeze, not a chore.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-blue-400 font-space tracking-wide">Why People Love Us</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-neutral-9000 p-4 rounded-lg hover:bg-gray-700 transition-all">
            <h3 className="text-base font-semibold mb-2 text-blue-300 font-poppins tracking-wide">✨ AI Landing Page Magic</h3>
            <p className="text-xs font-inter">Got 5 to 30 minutes ? That's all you need to create an awesome landing page with  AI,Which Help Build perfect landing page  for your brand ,Saas ,Startup, The Best part is it can be easily customize !</p>
          </div>
          <div className="bg-neutral-900 p-4 rounded-lg hover:bg-gray-700 transition-all">
            <h3 className="text-base font-semibold mb-2 text-blue-300 font-poppins tracking-wide">🎨 Website Wizard</h3>
            <p className="text-xs font-inter">Drag and drop Builder Easily Customize and make changes,color,AI Theme .</p>
          </div>
          <div className="bg-neutral-900 p-4 rounded-lg hover:bg-gray-700 transition-all">
            <h3 className="text-base font-semibold mb-2 text-blue-300 font-poppins tracking-wide">🚀 Next.js Quickstart</h3>
            <p className="text-xs font-inter">Skip the setup headaches! Nextjs Complete setup Use AI Builder And Launch Your Project Fast .</p>
          </div>
          <div className="bg-neutral-900 p-4 rounded-lg hover:bg-gray-700 transition-all">
            <h3 className="text-base font-semibold mb-2 text-blue-300 font-poppins tracking-wide">🤝 Friend in Tech</h3>
            <p className="text-xs font-inter">Stuck somewhere?like you getting error ,while signing or any thing else  We've got your back 24/7 with friendly email support!</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-3 text-blue-400 font-space tracking-wide">What's in it for You</h2>
        <ul className="mb-6 space-y-3">
          <li className="flex items-start bg-neutral-900 p-3 rounded-lg">
            <span className="text-blue-300 mr-2 text-xs">🎯</span>
            <span className="text-xs font-inter">An AI Builder that helps you build Modern landing pages that actually Need your Brand ,Saas,Startup</span>
          </li>
          <li className="flex items-start bg-neutral-900 p-3 rounded-lg">
            <span className="text-blue-300 mr-2 text-xs">🎨</span>
            <span className="text-xs font-inter">A website builder so intuitive, it feels like playing with Legos</span>
          </li>
          <li className="flex items-start bg-neutral-900 p-3 rounded-lg">
            <span className="text-blue-300 mr-2 text-xs">⚡</span>
            <span className="text-xs font-inter">Next.js setup For Launching your startup very fast  that save you hours of setup time</span>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-3 text-blue-400 font-space tracking-wide">Ready to Create?</h2>
        <div className="bg-neutral-900 p-4 rounded-lg mb-6 border border-blue-400">
          <p className="mb-3 text-xs font-inter">
            Join thousands of happy creators who are already building their Landing page with Webdone. Whether you're just starting out or you're a seasoned pro, Webdone Help You to Build  Perfect landing page .
          </p>
          <p className="font-semibold text-blue-300 text-sm font-inter">
            Start Building 🚀
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
