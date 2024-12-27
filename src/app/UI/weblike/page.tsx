"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import { Info } from "lucide-react";
import { useRouter } from 'next/navigation';
import { Send,Plus } from 'lucide-react';
import PricingUI from '../../pricing/page';

const Webllix: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [incomingImages, setIncomingImages] = useState<{ id: string; url: string; aspect_ratio: string }[]>([]);
  const [company, setCompany] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [codeLoading, setCodeLoading] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [codePrompt, setCodePrompt] = useState<string>();
  const [showPricing, setShowPricing] = useState<boolean>(false);
  const [minutes, setMinutes] = useState<number>(5);
  const [seconds, setSeconds] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me");
        setUserId(res.data.data._id);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    getUserDetails();
  }, []);

  useEffect(() => {
    // Automatically select the first image whenever incomingImages are updated
    if (incomingImages.length > 0) {
      setSelectedImageId(incomingImages[0].id);
    } else {
      setSelectedImageId(null);
    }
  }, [incomingImages]);

  useEffect(() => {
    // Show success message when an image is selected or generated
    if (incomingImages.length > 0 || selectedImageId) {
      setShowSuccessMessage(true);
    } else {
      setShowSuccessMessage(false);
    }
  }, [incomingImages, selectedImageId]);

  // Add timer effect
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isTimerActive) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setIsTimerActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isTimerActive, minutes, seconds]);

  const handleGenerate = async () => {
    if (!prompt) {
      alert("Please enter a prompt.");
      return;
    }

    if (!userId) {
      router.push('/signup');
      return;
    }

    setLoading(true);
    setIncomingImages([]); // Clear previous images
    setIsTimerActive(true);
    setMinutes(5);
    setSeconds(0);

    const fullPrompt = `${company} for ${prompt} modern landing page ,website `;

    try {
      const response = await fetch(`/api/users/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, prompt: fullPrompt, company }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate images.");
      }

      const { images } = await response.json();
      setIncomingImages(images);
    } catch (error) {
      console.error("Error:", error instanceof Error ? error.message : "Unknown error");
      setShowPricing(true);
    } finally {
      setLoading(false);
    }
  };

  const SendImage = useCallback(async () => {
    if (!selectedImageId) {
      alert("Please select an image first.");
      return;
    }

    setCodeLoading(true);
    try {
      const formData = new FormData();
      formData.append('imageId', selectedImageId);
      
      // Combine codePrompt with additional instructions
      const fullPrompt = `${codePrompt} use Html tailwindcss  and image link pexels ,unplash and make longer`;
      formData.append('prompt', fullPrompt);
    
      const response = await fetch('/api/users/openaigpt', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate code');
      }

      const data = await response.json();
      const htmlCode = extractHtmlCode(data.result);
      setGeneratedCode(htmlCode);
      
      // Redirect to the code editor page with the generated code
      router.push(`/weblike/builder?code=${encodeURIComponent(htmlCode)}`);
    } catch (error) {
      console.error('Error generating code:', error);
      alert(error instanceof Error ? error.message : 'Failed to generate code. Please try again.');
    } finally {
      setCodeLoading(false);
    }
  }, [selectedImageId, router, codePrompt]);

  // Function to extract only the HTML code
  const extractHtmlCode = (result: string): string => {
    const htmlRegex = /<html[\s\S]*?<\/html>/i;
    const match = result.match(htmlRegex);
    return match ? match[0] : result;
  };

  return (
    <div className="overflow-hidden bg-[#0B1120]"> {/* Updated background color */}
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Stars */}
          <div className="stars"></div>
          {/* Nebula Effects */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-blue-900/20 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-900/20 rounded-full blur-[100px] animate-pulse-delayed"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
    
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Input Section */}
          <div className="lg:col-span-2 bg-[#111827]/80 backdrop-blur-lg border border-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 space-y-6 relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 border border-blue-500/20 rounded-3xl glow-border"></div>
              
              <div>
                <label className="block text-xl font-semibold mb-3 text-gray-200" htmlFor="prompt">
               
                </label>
                <textarea
                  id="prompt"
                  placeholder="Build a landing page for a startup looking for investors, with details on business models..."
                  value={prompt}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setPrompt(e.target.value)
                  }
                  className="w-full h-40 p-4 bg-[#1F2937]/50 border border-gray-700 text-gray-200 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent resize-none backdrop-blur-sm"
                  rows={4}
                />
              </div>
              
              <div className="flex justify-center mt-8">
                <button
                  className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transform hover:scale-105 transition duration-300 ease-in-out"
                  type="button"
                  onClick={handleGenerate}
                >
              <Send />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Updated Output Section */}
          <div className="bg-[#111827]/80 backdrop-blur-lg border border-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 h-full flex flex-col">
              <div className="flex-grow overflow-y-auto mb-6" style={{ maxHeight: '400px' }}>
                {loading ? (
                  <div className="flex flex-col justify-center items-center h-full space-y-6">
                    <div className="relative w-48 h-48">
                      {/* Outer decorative ring */}
                      <div className="absolute inset-0 rounded-full border-4 border-purple-200/30 animate-pulse" />
                      
                      {/* Inner gradient ring */}
                      <div className="absolute inset-2 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow" 
                           style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%)', animation: 'spin 3s linear infinite' }} />
                      
                      {/* Timer display container */}
                      <div className="absolute inset-4 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center flex-col shadow-lg">
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                        </div>
                        <div className="text-sm text-gray-500">remaining</div>
                      </div>

                      {/* Decorative dots */}
                      <div className="absolute inset-0 animate-pulse">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-purple-500"
                            style={{
                              top: '50%',
                              left: '50%',
                              transform: `rotate(${i * 30}deg) translateY(-22px)`,
                              transformOrigin: '0 0'
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 text-center">
                      <div className="text-xl font-semibold text-purple-600">
                        Generating your webpage
                      </div>
                      <div className="text-sm text-gray-500">
                        This may take a few minutes
                      </div>
                    </div>
                  </div>
                ) : showSuccessMessage ? (
                  <div className="bg-white/90 p-6 rounded-xl shadow-md text-center">
                    <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      Success!
                    </h3>
                    <p className="text-xl">Your webpage is ready for customization</p>
                  </div>
                ) : (
                  <p className="text-xl text-center text-gray-500">
                    Start by describing your vision above
                  </p>
                )}
              </div>
              {showSuccessMessage && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="codePrompt" className="block text-lg font-semibold mb-2">
                    About
                    </label>
                    <textarea
                      id="codePrompt"
                      value={codePrompt}
                      onChange={(e) => setCodePrompt(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                      rows={3}
                      placeholder="About."
                    />
                  </div>
                  <button 
                    onClick={SendImage} 
                    disabled={codeLoading || !selectedImageId}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out"
                  >
                    {codeLoading ? 'Generating...' : 'Generate '}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {showPricing && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl transform transition-all">
            {/* Close button */}
            <button 
              onClick={() => setShowPricing(false)}
              className="absolute -top-2 -right-2 z-50 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
            >
              ✕
            </button>
            
            {/* Pricing content with custom wrapper */}
            <div className="max-h-[95vh] overflow-y-auto p-4">
              <div className="transform scale-90 origin-top">
                <PricingUI />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add this CSS at the end of your file */}
      <style jsx>{`
        .stars {
          background-image: radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0));
          background-size: 200px 200px;
          animation: twinkle 8s ease-in-out infinite;
        }
        
        @keyframes twinkle {
          0% { opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { opacity: 0.3; }
        }

        .glow-border {
          box-shadow: 0 0 20px rgba(59,130,246,0.2);
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
          0% { box-shadow: 0 0 20px rgba(59,130,246,0.2); }
          50% { box-shadow: 0 0 30px rgba(59,130,246,0.4); }
          100% { box-shadow: 0 0 20px rgba(59,130,246,0.2); }
        }
      `}</style>
    </div>
  );
};

export default Webllix;
