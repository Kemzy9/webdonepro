'use client'
import Link from 'next/link';
import Faq from '@/app/UI/faq/page'
import Image from 'next/image';
import Pricing from "@/app/pricing/page"
import Logo from '@/app/UI/logo/page';
import Footer from '@/app/UI/footer/page';
import React, { useState, useEffect } from 'react';

const Section: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const technologies = [
        { name: "Next.js", logo: "/Nextjs.png" },
        { name: "Stripe", logo: "/stripelogo.png" },
        { name: "LemonSqueezy", logo: "/lemon-squezy-logo.jpeg" },
        { name: "MongoDB", logo: "/Mongodb.png" },
        { name: "Resend", logo: "/resend-logo.png" },
        { name: "Mailtrip", logo: "/mailtrip-logo.png" },
        { name: "Google Auth", logo: "/google-logo.jpeg" },
    ];



    return (


        <div>




            <div className="min-h-screen relative overflow-hidden bg-[#0A0A0A]">

                {/* Core Features Section */}

                {/* Advanced Capabilities Section */}
                <div className="container mx-auto px-6 py-32 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 blur-3xl"></div>
                    <div className="relative">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-8">
                                    Drag and  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Drop With Nextjs Setup</span>
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "Chat with AI and make changes in minutes",
                                            description: "AI analyzes patterns and suggests improvements in real-time"
                                        },
{
                                            title: "Smart Color Matching",
                                            description: "Easily create and adjust colors "
                                        },
                                        
                                        {
                                            title: "Typography Intelligence",
                                            description: "Get smart font pairing suggestions and hierarchy recommendations"
                                        }
                                    ].map((feature, index) => (
                                        <div key={index} className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                            <p className="text-gray-400">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative max-w-5xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl overflow-hidden">

                                <div className="w-full max-w-5xl mx-auto perspective" style={{ perspective: '1000px' }}>

                                    <video
                                        className=" max-w-4xl mx-auto w-full h-auto object-cover rounded-2xl shadow-2xl relative z-20 
            transition-all duration-300 hover:shadow-violet-500/50" controls autoPlay muted>
                                        <source src="/React-landing-AI-pagemaker .mp4" type="video/mp4" />
                                        Your browser does not support the video tag.


                                    </video>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Workflow Optimization Section */}




                {/* New Testimonials Section */}


                <div className="grid md:grid-cols-2 gap-16 items-center px-8 md:px-16 lg:px-24 py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-full">
                    {/* Left Side - Text */}

                    <div className="space-y-8">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                            Build with Next.js
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="relative group p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md shadow-lg hover:scale-105 transition transform duration-300"
                                >
                                    <div className="flex justify-center items-center h-16 w-16 mx-auto">
                                        <Image
                                            src={tech.logo}
                                            alt={tech.name}
                                            width={64}
                                            height={64}
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="absolute inset-x-0 bottom-2 text-sm text-gray-300 text-center group-hover:text-white">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Images */}
                    <div className="relative">
                        <div className="floating-card rounded-2xl p-8">
                            <div className="code-block p-6 text-sm text-gray-300">
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight font-['Satoshi']">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-300 via-green-300 to-fuchsia-400">Next.js from Scratch </span>
                                    <span className="tracking-tight">Building a Full-Stack Application</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-300 mb-10 font-['Inter'] leading-relaxed">
                                    Build, Scale, Launch: A Complete Next.js Setup
                                </p>
                                <a href="/login">
                                    <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full hover:from-indigo-600 hover:to-violet-600 transition-all duration-300 font-medium font-['Inter'] shadow-lg shadow-indigo-500/25 group">
                                        Start Creating
                                        <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform duration-300">
                                            ✨
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 right-10 w-72 h-72 modern-gradient rounded-full blur-[120px] opacity-20"></div>
                        <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
                    </div>
                </div>





                <Pricing />
                <Faq />
                < Footer />




            </div>

            <style jsx global>{`
        .clip-path-slope {
            clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .diagonal-box {
            transform: skewY(-5deg);
        }
        .diagonal-content {
            transform: skewY(5deg);
        }
       `}</style>

        </div>

    );
};

export default Section;
