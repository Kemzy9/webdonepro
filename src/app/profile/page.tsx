"use client";
import PricingUI from "@/app/UI/subscription/page"; // Import the PricingUI component
import { Bell, Grid, Search, User } from "lucide-react"
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import { UserIcon, CodeIcon, ImageIcon, SparklesIcon, HelpCircleIcon, PhoneIcon } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Weblike from '@/app/UI/weblike/page'
import { motion, AnimatePresence } from "framer-motion";
import { RiCommandLine, RiSettingsLine, RiDashboardLine, RiUser3Line } from 'react-icons/ri';
import { SiOpenai } from 'react-icons/si';

const crypto = require('crypto');
const generateSignature = (payload: string, secret: string): string => {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload, 'utf8');
  return hmac.digest('hex');
};

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing");
    const [showProfileCard, setShowProfileCard] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isLoading, setIsLoading] = useState(false);

    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout Successfully");
            router.push("/login");
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    const getUserDetails = async () => {
        const res = await axios.get("/api/users/me");
        setData(res.data.data._id);
    };

    

    // Add this new animation effect
    const glowEffect = {
        hidden: { opacity: 0, scale: 0.95 },
        show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 }
        }
    };

    return (
        <div className="h-screen w-screen flex bg-gradient-to-br from-neutral-900 via-black to-neutral-800 relative overflow-hidden">
            {/* Interactive Particle Background */}
            <div className="absolute inset-0 z-0">
                <div className="relative h-full">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: Math.random() * 4 + 1 + 'px',
                                height: Math.random() * 4 + 1 + 'px',
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                                background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.6)`,
                                animation: `float ${Math.random() * 10 + 5}s linear infinite`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Modern Sidebar with Hover Effects */}
            <div className="fixed left-0 top-0 h-full w-16 bg-black/40 backdrop-blur-xl shadow-lg flex flex-col items-center py-4 space-y-8 border-r border-white/5 z-20">
                {[
                    { icon: RiDashboardLine, label: 'Dashboard', tab: 'dashboard' },
                    { icon: RiCommandLine, label: 'Commands', tab: 'commands' },
                    { icon: RiSettingsLine, label: 'Settings', tab: 'settings' },
                    { icon: SiOpenai, label: 'AI', tab: 'ai' },
                ].map((item) => (
                    <div
                        key={item.tab}
                        onClick={() => setActiveTab(item.tab)}
                        className={`relative group w-12 h-12 flex items-center justify-center cursor-pointer
                            ${activeTab === item.tab ? 'bg-blue-500/20' : 'hover:bg-white/10'}
                            rounded-xl transition-all duration-300`}
                    >
                        <item.icon className={`w-6 h-6 ${activeTab === item.tab ? 'text-blue-400' : 'text-gray-400'}`} />
                        <div className="absolute left-16 px-2 py-1 bg-black/80 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.label}
                        </div>
                        {activeTab === item.tab && (
                            <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 rounded-r-md" />
                        )}
                    </div>
                ))}
            </div>

            {/* Main content area */}
            <div className="flex-1 ml-16 relative z-10">
                {/* Enhanced Navigation Bar */}
                <nav className="fixed top-0 left-16 right-0 z-20 bg-black/40 backdrop-blur-xl border-b border-white/5 p-4">
                    <div className="flex items-center justify-between max-w-7xl mx-auto">
                        <div className="flex items-center space-x-4">
                           
                            <div className="hidden md:flex items-center space-x-2 bg-white/5 rounded-lg p-2">
                                <span className="text-xs text-gray-400">Press</span>
                                <kbd className="px-2 py-1 bg-black/40 rounded text-xs text-gray-300">⌘</kbd>
                                <span className="text-xs text-gray-400">+</span>
                                <kbd className="px-2 py-1 bg-black/40 rounded text-xs text-gray-300">K</kbd>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Activity Indicator */}
                            <div className="hidden md:flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm text-gray-400">Active</span>
                            </div>

                            {/* Enhanced Profile Button */}
                            <div
                                onClick={() => setShowProfileCard(!showProfileCard)}
                                className="group relative flex items-center justify-center w-12 h-12 cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0.5 bg-black rounded-full" />
                                <UserIcon className="relative w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                                {isLoading && (
                                    <div className="absolute inset-0 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Enhanced Profile Card */}
                <div>
                    {showProfileCard && (
                        <div className="fixed top-20 right-4 z-20 animate-in fade-in duration-300">
                            <Card className="w-[300px] sm:w-[350px] bg-zinc-900 border border-zinc-800 shadow-lg">
                                <CardHeader className="space-y-1 pb-2">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 rounded-full bg-zinc-800">
                                            <RiUser3Line className="w-5 h-5 text-zinc-400" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-xl font-medium text-zinc-100">
                                                Account
                                            </CardTitle>
                                            <CardDescription className="text-sm text-zinc-400">
                                                {data === "nothing" ? "No user data available" : (
                                                    <Link href={`/profile/${data}`} className="hover:text-zinc-300 transition-colors">
                                                        ID: {data}
                                                    </Link>
                                                )}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="grid gap-2 pt-2">
                                    <Button 
                                        onClick={getUserDetails}
                                        className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 transition-colors h-9 flex items-center justify-center space-x-2"
                                    >
                                        <RiDashboardLine className="w-4 h-4" />
                                        <span>View Details</span>
                                    </Button>
                                    
                                    <Button 
                                        onClick={() => router.push('/pricing')}
                                        className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 transition-colors h-9"
                                    >
                                        Upgrade Plan
                                    </Button>

                                   

                                    <Button 
                                        variant="outline" 
                                        onClick={logout}
                                        className="border border-zinc-700 text-zinc-400 hover:bg-zinc-800 h-9"
                                    >
                                        <RiSettingsLine className="w-4 h-4 mr-2" />
                                        Sign Out
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </div>

                {/* Main Content Area */}
                <div className="relative z-0 pt-20">
                    <Weblike />
                </div>
            </div>

            {/* Enhanced Decorative Elements */}
            <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* Add global styles */}
            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0px) }
                    50% { transform: translateY(-20px) }
                    100% { transform: translateY(0px) }
                }
                
                .glass-morph {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
            `}</style>
        </div>
    );
}
