'use client'
import Link from 'next/link';
import Faq from '@/app/UI/faq/page'
import Image from 'next/image';
import Pricing from "@/app/pricing/page"
import Logo from '@/app/UI/logo/page';
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
                                            title: "Chat with AI make changes in minutes",
                                            description: "AI analyzes your patter  and suggests improvements in real-time"
                                        },
                                        {
                                            title: "Smart Color Harmonies",
                                            description: "Automatically generate and adjust color schemes that perfectly match your brand"
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
                                        src="/Nextj-boiler-plate.mp4"
                                        width={300} // New width
                                        height={450} // New height
                                        autoPlay
                                        loop
                                        muted
                                        className="w-full h-auto object-cover rounded-lg shadow-2xl"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Workflow Optimization Section */}
               
    
      

                {/* New Testimonials Section */}
                <div className="container mx-auto px-6 py-32">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Loved by
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400"> Creators Worldwide</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "Digital Creator",
                                image: "/testimonial1.jpg",
                                quote: "The AI-powered features have revolutionized how I create websites. What used to take weeks now takes hours!"
                            },
                            {
                                name: "Mark Chen",
                                role: "Startup Founder",
                                image: "/testimonial2.jpg",
                                quote: "webdone helped us launch our startup website in record time. The AI suggestions were spot-on!"
                            },
                            {
                                name: "Emma Davis",
                                role: "Freelance Designer",

                                image: "/testimonial3.jpg",
                                quote: "As a designer, Im impressed by the quality of AI-generated layouts. They're modern and highly customizable."
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="glass-effect p-8 rounded-2xl">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 mr-4"></div>
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        <p className="text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
                            </div>
                        ))}
                    </div>
                </div>


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
                                <pre>
                                    <code>
                                        {`// Your vision, our code
const Future = {
  design: "Stunning",
  performance: "Lightning",
  features: ["AI", "Web3", "Mobile"],
  deploy: () => "Success! 🚀"
};`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 right-10 w-72 h-72 modern-gradient rounded-full blur-[120px] opacity-20"></div>
                        <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
                    </div>
                </div>

                {/* New How It Works Section */}
                <div className="container mx-auto px-6 py-32">

                    <h2 className="text-4xl font-bold text-center text-white mb-24">
                        How
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400"> It Works</span>
                    </h2>


                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 transform -translate-y-1/2 hidden md:block"></div>

                        <div className="grid md:grid-cols-4 gap-12">
                            {[
                                {
                                    step: "01",
                                    title: " Command  ",
                                    description: "Create a  landing page for Saas For AI Photo generation tool ",
                                    icon: "🎨"
                                },
                                {
                                    step: "02",
                                    title: "Edit/Chat",
                                    description: "Use AI to personalize colors, layouts, and content ,Need Change use  AI assistant to make changes",
                                    icon: "⚡"
                                },
                                {
                                    step: "03",
                                    title: "If need Nextjs Boilerplate ",
                                    description: "Add your landing page in Next js and boom your startup is ready for launch    ,",
                                    icon: "✍️"
                                },
                                {
                                    step: "04",
                                    title: "Launch it ",
                                    description: ",You have made landing page /website ,Nextjs Boilerplate ",
                                    icon: "🚀"
                                }
                            ].map((item, index) => (
                                <div key={index} className="relative z-10">
                                    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:transform hover:-translate-y-2 transition-all duration-300">
                                        <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                                            <span className="text-3xl">{item.icon}</span>
                                        </div>
                                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full w-12 h-12 flex items-center justify-center">
                                            <span className="text-white font-bold">{item.step}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white text-center mb-4">{item.title}</h3>
                                        <p className="text-gray-400 text-center">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>




                <Faq />
                <Pricing />
              
                {/* Footer */}

                <footer className="border-t border-white/10 mt-32">
                    <div className="container mx-auto px-6 py-12">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="h-10 w-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center">
                                        <span className="text-white text-xl font-bold">W</span>
                                    </div>
                                    <span className="text-white text-xl font-bold">webdone</span>
                                </div>
                                <p className="text-gray-400"> Build It, Launch It, Love It</p>
                            </div>

                            {/* Footer Links */}
                            {[
                                {
                                    title: "Product",
                                    links: [
                                        { name: "Pricing", href: "/pricing" },
                                        { name: "AI Landing Page Maker", href: "/ai-landing-page-maker" }


                                    ]
                                },
                                {
                                    title: "Company",
                                    links: [
                                        { name: "About", href: "/About" },

                                    ]
                                },
                                {
                                    title: "Resources",
                                    links: [
                                        { name: "Documentation", href: "/documents" },

                                    ]
                                }
                            ].map((section, index) => (
                                <div key={index}>
                                    <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                                    <ul className="space-y-2">
                                        {section.links.map((link, i) => (
                                            <li key={i}>
                                                <a
                                                    href={link.href}
                                                    className="text-gray-400 hover:text-white transition-colors"
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                        </div>

                        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                            <div className="flex items-center gap-4">
                                <p className="text-gray-400">© 2024 webdone. All rights reserved.</p>
                                <span className="text-gray-500">|</span>
                                <span className="text-gray-400">Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">webdone</span></span>
                            </div>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
                            </div>
                        </div>
                    </div>
                </footer>

                {/* Enhanced Floating Elements */}
                <div className="absolute top-20 left-20 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>


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
