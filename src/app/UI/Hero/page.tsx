'use client'
import Link from 'next/link';
import Image from 'next/image';
import Pricing from "@/app/pricing/page"
import Logo from '@/app/UI/logo/page';
import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const videoRef = useRef<HTMLVideoElement>(null)

    // Add scroll effect to header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Glitch effect generator
    const renderGlitchOverlay = () => {
        return (
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-40">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 animate-glitch"
                        style={{
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`
                        }}
                    />
                ))}
            </div>
        );
    };
    const renderParticles = () => {
        const particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(
                <div
                    key={i}
                    className="absolute bg-white/10 rounded-full animate-float"
                    style={{
                        width: `${Math.random() * 10 + 2}px`,
                        height: `${Math.random() * 10 + 2}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 10 + 5}s`
                    }}
                />
            );
        }
        return particles;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 10;
        const y = -(e.clientY - rect.top - rect.height / 2) / 10;
        setRotation({ x: y, y: x });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#0A0A0A]">
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
                        {/* Logo with hover effect */}
                        <div className="flex items-center">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 transform hover:scale-105 transition-transform">
                                    <Logo />
                                </div>
                                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-violet-500 transition-colors">
                                    Webdone
                                </div>
                            </div>


                            {/* Enhanced navigation with indicators */}

                        </div>

                        {/* Enhanced CTA buttons */}
                        <div className="hidden md:flex md:items-center md:space-x-6">
                            <Link
                                href="/login"
                                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Sign in
                            </Link>
                            <Link
                                href="/signup"
                                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all transform hover:scale-105 hover:shadow-lg"
                            >
                                Start Building →
                            </Link>

                        </div>

                        {/* Enhanced mobile menu button */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
                            >
                                <span className="sr-only">Toggle menu</span>
                                {menuOpen ? (
                                    <svg className="h-6 w-6 transition-transform transform rotate-180" /* ... rest of the SVG ... */ />
                                ) : (
                                    <svg className="h-6 w-6 transition-transform" /* ... rest of the SVG ... */ />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Enhanced mobile menu with animations */}
                {/* Mobile menu */}
                {menuOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-slate-100 text-black z-20">
                        <nav className="flex flex-col items-center py-4">
                            <Link href="/signup" className="block py-2 px-4 text-lg">Sign In</Link>
                            <Link href="/about" className="block py-2 px-4 text-lg">About</Link>
                            <Link href="/blogs" className="block py-2 px-4 text-lg">Blogs</Link>
                        </nav>
                    </div>
                )}

            </header>
            {/* Hero Section - Adding new hero section */}
            <div className="container mx-auto px-6 pt-32 pb-16 relative flex flex-col md:flex-row">
                {/* Text Section */}
                <div className="text-center max-w-4xl mx-auto md:text-left md:w-1/2  p-8 rounded-lg shadow-lg">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">   AI</span>
                        Turns Your Concepts into Custom Landing Pages

                    </h1>
                    <p className="text-xl text-gray-300 mb-12">
                        No boring templates here. Just AI-powered magic crafting unique pages that feel human and look stunning ,launch Your product fast with nextjs full setup
                    </p>
                    <div className="flex flex-col items-center mt-4">
                        <svg className="w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-red-500 text-sm">No generic layout</span>
                    </div>

                    <div className="flex justify-center md:justify-start gap-4">
                        <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl text-white font-bold hover:opacity-90 transition-opacity">
                            Start Building
                        </button>
                    </div>

                </div>

                {/* Image Section */}
                <div className="lg:col-span-3 my-12 md:w-1/2">
                    <div className="max-w-6xl mx-auto px-4 relative flex justify-center">
                        <div className="flex space-x-4">
                            {[
                                {
                                    src: "/Beautyshop-landing-page.png",
                                    alt: "Banking Website Example",
                                    size: "w-80 h-96",
                                    category: "Finance",
                                    gradient: "from-blue-400 to-purple-500",
                                },
                                {
                                    src: "/TravelLandingpage.png",
                                    alt: "Modern Website Example",
                                    size: "w-48 h-64",
                                    category: "Modern",
                                    gradient: "from-violet-400 to-indigo-500",
                                },
                                {
                                    src: "/Beautyshop-landing-page.png",
                                    alt: "Creative Website Example",
                                    size: "w-32 h-48",
                                    category: "Creative",
                                    gradient: "from-emerald-400 to-teal-500",
                                }
                            ].map((image, index) => (
                                <div
                                    key={index}
                                    className={`
                                        relative ${image.size}
                                        transform-gpu
                                        transition-all duration-300 ease-out
                                        hover:z-10
                                        cursor-none
                                    `}
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onMouseLeave={handleMouseLeave}
                                    style={{
                                        transform: `perspective(1000px) 
                                                  rotateX(${rotation.x}deg) 
                                                  rotateY(${rotation.y}deg)`,
                                        transformStyle: 'preserve-3d'
                                    }}
                                >
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-300 ease-out shadow-xl"
                                        style={{
                                            transformStyle: 'preserve-3d',
                                            transform: 'translateZ(50px)',
                                        }}>
                                        <div className="absolute inset-0 backdrop-blur-sm bg-white/30 shadow-xl 
                                            group-hover:bg-white/40 transition-all duration-300"></div>

                                        <div className={`absolute inset-0 border-2 rounded-2xl bg-gradient-to-r ${image.gradient} 
                                            opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>

                                        <div className="w-full h-full cursor-none"
                                            onContextMenu={(e) => e.preventDefault()}
                                            style={{
                                                WebkitUserSelect: 'none',
                                                userSelect: 'none',
                                                perspective: '1000px'
                                            }}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={256}
                                                height={384}
                                                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                                                priority
                                                draggable="false"
                                                onDragStart={(e) => e.preventDefault()}
                                            />
                                        </div>

                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent 
                                            via-black/20 to-black/60 opacity-60 transition-opacity duration-300"></div>

                                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold
                                            bg-white/20 backdrop-blur-md text-white border border-white/30
                                            transform -translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                                            {image.category}
                                        </div>

                                        <div className="absolute bottom-4 right-4 flex space-x-1 opacity-0 
                                            group-hover:opacity-100 transition-opacity duration-300">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-5xl mx-auto relative perspective" style={{ perspective: '1000px' }}>
                {/* Advanced Background Elements */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    {/* Particle Background */}
                    <div className="absolute inset-0">
                        {renderParticles()}
                    </div>

                    {/* Geometric Shapes */}
                    <div className="absolute inset-0">
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-full animate-morph"
                                style={{
                                    width: `${Math.random() * 200 + 50}px`,
                                    height: `${Math.random() * 200 + 50}px`,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    filter: 'blur(60px)',
                                    animationDuration: `${Math.random() * 20 + 10}s`,
                                    zIndex: -1
                                }}
                            />
                        ))}
                    </div>

                    {/* Gradient Grid */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: 'linear-gradient(0deg, rgba(124,58,237,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.05) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}
                    />

                    {/* Radial Light Effect */}
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-full h-full bg-gradient-to-r from-violet-500/10 to-indigo-500/10 
            rounded-full blur-3xl opacity-50 animate-pulse"
                        style={{
                            filter: 'blur(120px)',
                            transform: 'translate(-50%, -50%) scale(1.5)',
                            animationDuration: '10s'
                        }}
                    />
                </div>

                {/* Video Container with Advanced Effects */}
                <div className="relative z-10">
                    {/* Glitch Overlay */}
                    {renderGlitchOverlay()}

                    {/* Video with Enhanced Styling */}
                    <video
                        ref={videoRef}
                        src="/Ddemo-video-Ai-Landing-page.mp4"
                        width="100%"
                        height="auto"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover rounded-2xl shadow-2xl relative z-20 
            transition-all duration-300 hover:shadow-violet-500/50"
                    />

                    {/* Layered Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b 
            from-transparent 
            via-black/20 
            to-black/40 
            rounded-2xl 
            z-30 
            pointer-events-none 
            transition-all 
            duration-500 
            group-hover:opacity-80"></div>
                </div>
            </div>

            {/* Social Proof */}
            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-2">
                    <span className="text-4xl">⭐</span>
                    <div className="text-left">
                        <div className="text-white font-bold">4.9/5 Rating</div>
                        <div className="text-gray-400">from 1000+ reviews</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-4xl">🏆</span>
                    <div className="text-left">
                        <div className="text-white font-bold">#1 AI Builder</div>
                        <div className="text-gray-400">Product of the Year</div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Hero;
