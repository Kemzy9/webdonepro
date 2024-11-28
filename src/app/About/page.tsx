import React from 'react';
import Footer from '@/app/UI/footer/page';
import Nav from "@/app/UI/Nav/page";

const About: React.FC = () => {
  return (
    <div>
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="mb-6 text-lg">
          Welcome to Webdone! We are here to make your web journey seamless, whether you are building landing pages, creating a full website, or launching a Next.js app in minutes. Our solutions are designed with innovation and simplicity at their core.
        </p>

        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <p className="mb-6">
          At Webdone, we specialize in creating tools that help businesses thrive online. From AI-powered landing page builders to ready-to-use Next.js boilerplates, we empower you to launch your digital presence effortlessly.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Webdone?</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">AI Landing Page Builder</h3>
            <p>Create stunning, high-converting landing pages in minutes with our AI tools. No coding required.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Website Maker</h3>
            <p>Create professional websites with ease using our simple drag-and-drop interface .</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Next.js Boilerplate</h3>
            <p>Launch your site quickly with our pre-built, fully functional Next.js templates. Perfect for developers on tight timelines.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p>We are here for you 24/7, via email if you counter a error </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-6">
          Whether you are a small business, a startup, or a seasoned developer, we provide tools that make building your online presence a breeze.
        </p>

        <h2 className="text-2xl font-semibold mb-4">What You wll Get</h2>
        <ul className="mb-8 space-y-4">
          <li className="flex items-start">
            <span className="font-semibold mr-2">• AI Landing Page Builder:</span> AI landing  pages builder  optimized for performance and conversions, tailored to your needs.
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">• Website Maker:</span> Create  your website, no matter your skill level.
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">• Next.js Boilerplate:</span> Get a fully functional template with everything you need to launch in minutes.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Lets Build Something Great</h2>
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="mb-4">
            Thousands of businesses trust Webdone to bring their ideas to life. Ready to join them? Whether its a landing page, a full website, or a Next.js project, we have got you covered.
          </p>
          <p className="font-semibold">
            Lets get started today and make your vision a reality.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
