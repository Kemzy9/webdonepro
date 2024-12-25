'use client'
import Image from 'next/image';
import { Sparkles, FileText, Image as ImageIcon, Edit } from "lucide-react"; // Importing additional icons
import React from "react";
import { FaCogs, FaPalette, FaLaptop, FaMobileAlt, FaRocket } from "react-icons/fa"; // Using Font Awesome icons

const ServicesSection = () => {
    return (
        <div className="">
            <section className="py-32 relative overflow-hidden ">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-5xl font-bold">Featured<br />Destinations</h2>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">View all destinations →</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                        <div className="md:col-span-8 group cursor-pointer">
                            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-lg transition-transform duration-700 hover:scale-105">
                                <Image src="/Hero-section-beautypage.png" alt="Luxury Resort"
                                    width={1080}
                                    height={200}
                                    className="w-auto h-auto " />

                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-0 p-10">
                                    <span className="text-sm text-gray-300 mb-2 block">FEATURED</span>
                                    <h3 className="text-3xl font-bold mb-4">Maldives Private Resort</h3>
                                    <p className="text-gray-300 mb-6">Experience luxury in overwater villas</p>
                               
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-4 grid grid-cols-1 gap-6">
                            <div className="relative h-[290px] rounded-3xl overflow-hidden group cursor-pointer shadow-md transition-transform duration-700 hover:scale-105">
                                <Image src="/Beuty-ecommercelanding-page.png" alt="Luxury Resort"
                                    width={800}
                                    height={600}
                                    className="w-auto h-auto object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-0 p-6">
                                    <h3 className="text-xl font-bold mb-2">Beauty Ecommerce</h3>
                                    <p className="text-gray-300"> latest beauty products</p>
                                </div>
                            </div>

                            <div className="relative h-[290px] rounded-3xl overflow-hidden group cursor-pointer shadow-md transition-transform duration-700 hover:scale-105">

                                <Image src="/web-maker.png" alt="Luxury Resort"
                                    width={800}
                                    height={600}
                                    className="w-auto h-auot object-cover" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-0 p-6">
                                    <h3 className="text-xl font-bold mb-2">Saas </h3>
                                    <p className="text-gray-300">launch your saas Fast</p>
                                </div>
                            </div>

                            <div className="relative h-[290px] rounded-3xl overflow-hidden group cursor-pointer shadow-md transition-transform duration-700 hover:scale-105">

                                <Image src="/Realstatelanding-page.html.png" alt="Luxury Resort"
                                    width={800}
                                    height={600}
                                    className="w-auto h-auto  object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-0 p-6">
                                    <h3 className="text-xl font-bold mb-2">Realstate</h3>
                                    <p className="text-gray-300">A Real State landing page </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-5xl font-bold">Featured<br />Destinations</h2>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">View all destinations →</a>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-3xl font-bold">Quick Landing Pages for React, Vue, and More—Made by AI</h2>
                        <p className="text-lg text-gray-500 mt-4">No need to design from scratch—AI helps you create landing pages that look great, fast.</p>
                    </div>

                </div>

            </section>

            <section className="py-32 relative diagonal-box bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
                <div className="max-w-7xl mx-auto px-6 diagonal-content">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl font-bold mb-8">     Experience AI Like Never Before<br /></h2>
                            <p className="text-xl text-gray-300 mb-8">Build stunning pages effortlessly with the power of AI. Start creating today.</p>
                                     <a href="/login">
                            <button className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors">
                             Get Started Today
                            </button>
                                                                     </a>
                        </div>


                        <div className="space-y-6">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all cursor-pointer shadow-lg">
                                <h3 className="text-xl font-bold mb-2">AI Assistant</h3>
                                <p className="text-gray-300">It’s like having your own personal assistant who’s always there to help you out. Whether you need advice or just a little extra support, it’s got you covered.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all cursor-pointer shadow-lg">
                                <h3 className="text-xl font-bold mb-2">Dynamic Themes & Wallpapers</h3>
                                <p className="text-gray-300">Change up the look whenever you feel like it. Whether you’re in the mood for something calming or bold, we’ve got themes and wallpapers that fit any vibe.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all cursor-pointer shadow-lg">
                                <h3 className="text-xl font-bold mb-2">Drag-and-Drop Builder</h3>
                                <p className="text-gray-300">Building a website? No problem. Just drag, drop, and customize—no coding skills needed. It’s super easy, and you’ll be done before you know it.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all cursor-pointer shadow-lg">
                                <h3 className="text-xl font-bold mb-2">Next.js & Database Setup</h3>
                                <p className="text-gray-300">Setting up Next.js and a database doesn’t have to be a headache. Let us handle it so you can focus on building something amazing.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesSection;
