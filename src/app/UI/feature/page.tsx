'use client';

import React, { useState } from "react";
import { Code, Layers, Tablet } from "lucide-react";

const Feature = () => {
  // Allow activeService to be either a number or null
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: "AI Builder",
      subtitle: "Advanced Web Development",
      description: "Crafting scalable digital solutions with cutting-edge technologies and performance-first approach.",
      color: "text-blue-500",
    },
    {
      icon: Layers,
      title: "Design Ecosystem",
      subtitle: "Holistic User Experience",
      description: "Creating seamless, intuitive interfaces that transform complex interactions into elegant simplicity.",
      color: "text-purple-500",
    },
    {
      icon: Tablet,
      title: "Responsive Frameworks",
      subtitle: "Adaptive Digital Experiences",
      description: "Designing fluid, intelligent interfaces that adapt perfectly across all devices and screen sizes.",
      color: "text-green-500",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex items-center justify-center overflow-hidden p-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
      <div className="mb-16 text-center">
  <h1 className="text-6xl font-extralight tracking-tight text-gray-900 mb-4">
    Landing Page <span className="font-bold text-black">Maker</span>
  </h1>
  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
    Create stunning, high-converting landing pages effortlessly, with design
    and functionality that captivate your audience and drive results.
  </p>
</div>


<div className="grid md:grid-cols-3 gap-8">
  {services.map((service, index) => {
    const Icon = service.icon;
    return (
      <div
        key={service.title}
        className={`
          relative group
          border border-gray-200 rounded-2xl 
          p-8 transition-all duration-300
          hover:shadow-xl hover:border-transparent
          ${activeService === index ? "ring-2 ring-black" : ""}
        `}
        onClick={() =>
          setActiveService(activeService === index ? null : index)
        }
      >
        {/* Floating Icon */}
        <div
          className={`
            absolute top-4 right-4 
            ${service.color} 
            opacity-30 group-hover:opacity-50 
            transition-opacity
          `}
        >
          <Icon size={48} strokeWidth={1} />
        </div>

        {/* Service Content */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Icon
              className={`${service.color} mb-4`}
              size={36}
              strokeWidth={1.5}
            />
            <div className="text-sm text-gray-400">0{index + 1}</div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-900">
            {service.title}
          </h2>
          <p className="text-gray-600 mb-4">{service.subtitle}</p>

          {/* Expandable Description */}
          <div
            className={`
              overflow-hidden transition-all duration-500
              ${
                activeService === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <p className="text-gray-500 mt-4">{service.description}</p>
            <button className="mt-4 w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Create Your AI-Powered Landing Page
            </button>
          </div>
        </div>
      </div>
    );
  })}
</div>


        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-100 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-4xl font-light text-gray-900 mb-6">
            From Thought to Custom Landing page Let AI Build It for You
              <span className="font-bold ml-2">AI Powered</span>
            </h3>
            <a href="/login">
  <button
    className="
      px-10 py-4 
      bg-black 
      text-white 
      rounded-full 
      hover:bg-gray-800 
      transition-colors
      group
    "
  >
    Start Your Project
    <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">
      →
    </span>
  </button>
</a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
