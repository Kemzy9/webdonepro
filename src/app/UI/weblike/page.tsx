"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Send,Plus } from 'lucide-react';

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
  const [generationSteps, setGenerationSteps] = useState<{ step: string; completed: boolean }[]>([
    { step: 'Analyzing your request', completed: false },
    { step: 'Generating design concepts', completed: false },
    { step: 'Crafting HTML structure', completed: false },
    { step: 'Applying styling', completed: false },
    { step: 'Finalizing your webpage', completed: false }
  ]);
  const [currentStep, setCurrentStep] = useState<number>(0);

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
    setIncomingImages([]);
    setCurrentStep(0);

    // Simulate progress steps
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < generationSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 1000);

    try {
      const response = await fetch(`/api/users/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, prompt, company }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate images.");
      }

      const { images } = await response.json();
      setIncomingImages(images);
    } catch (error) {
      console.error("Error:", error instanceof Error ? error.message : "Unknown error");
      alert("It looks like you don't have a valid plan. Subscribe now to unlock full access!");
    } finally {
      clearInterval(stepInterval);
      setLoading(false);
      setCurrentStep(0);
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
      
      // Add the template HTML to the weblike-o request
      const templateHTML = `
<body class="bg-[#f8f0ee]">
    <nav class="fixed w-full bg-[#f8f0ee]/80 backdrop-blur-md z-50">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <div class="text-xl font-light tracking-wider">LEUR NEWS</div>
                <div class="hidden md:flex space-x-8">
                    <a href="#" class="text-gray-600 hover:text-black transition-colors">Find</a>
                    <a href="#" class="text-gray-600 hover:text-black transition-colors">Place</a>
                    <a href="#" class="text-gray-600 hover:text-black transition-colors">Stand</a>
                    <a href="#" class="text-gray-600 hover:text-black transition-colors">Setting</a>
                    <a href="#" class="text-gray-600 hover:text-black transition-colors">More</a>
                </div>
            </div>
        </div>
    </nav>

    <section class="pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="space-y-8">
                    <h1 class="text-6xl font-light leading-tight tracking-tight">
                        Proux dty<br/>avar ture
                    </h1>
                    <p class="text-gray-600 text-lg font-light leading-relaxed">
                        Your ave codlestiont pless offcalisturing any lur the make trp tlore of ingrettiognts.
                    </p>
                    <button class="group relative overflow-hidden px-8 py-4 bg-black text-white rounded-full hover:bg-black/90 transition-all duration-300">
                        <span class="relative z-10 text-sm tracking-wider">SHOP NOW</span>
                    </button>
                </div>
                <div class="relative">
                    <div class="aspect-square rounded-full overflow-hidden bg-[#e5d1cb]">
                        <img src="/light.png" alt="Beauty visual" class="w-full h-full object-cover"/>
                    </div>
                    <div class="absolute -z-10 top-8 right-8 w-full h-full rounded-full border-2 border-[#d4beb7]"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16 space-y-4">
                <h2 class="text-4xl font-light tracking-tight">Essenting gaout</h2>
                <p class="text-gray-600 font-light max-w-2xl mx-auto">
                    You's heag tive and fancicet ou in fra atuplsclargs, cesitu and yourt crase atye teating.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div class="group">
                    <div class="aspect-[4/5] mb-6 bg-[#f8f0ee] rounded-2xl overflow-hidden">
                        <img src="/api/placeholder/400/500" alt="Product 1" 
                             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                    </div>
                    <div class="space-y-2">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg">Fecal aied</h3>
                            <p class="text-sm font-light">Fr 5200</p>
                        </div>
                        <p class="text-sm text-gray-500 font-light">Semi votre ni evalcere gnd more lensres.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>`;
      
      const fullPrompt = `${codePrompt} use Html tailwincss generate landing page make longer and stylish`;
      formData.append('prompt', fullPrompt);
      formData.append('template', templateHTML);
    
      // Make both API calls concurrently
      const [openaiResponse, weblikeResponse] = await Promise.all([
        fetch('/api/users/openaigpt', {
          method: 'POST',
          body: formData,
        }),
        fetch('/api/users/weblike-o', {
          method: 'POST',
          body: formData,
        })
      ]);

      if (!openaiResponse.ok || !weblikeResponse.ok) {
        throw new Error('One or both API calls failed');
      }

      // Wait for both responses to complete
      const [openaiData, weblikeData] = await Promise.all([
        openaiResponse.json(),
        weblikeResponse.json()
      ]);

      const htmlCode = extractHtmlCode(openaiData.result);
      setGeneratedCode(htmlCode);
      
      // Now redirect with both responses
      router.push(`/weblike/builder?code=${encodeURIComponent(htmlCode)}&weblikeData=${encodeURIComponent(JSON.stringify(weblikeData))}`);
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
    <div className="overflow-hidden bg-neutral-900 ">
      {/* Flowing Blue Background Blurs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-[120px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-400 rounded-full blur-[120px] opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-40 right-1/3 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-10 animate-pulse-delayed"></div>
      </div>

      {/* Column Grid Background */}
      <div className="absolute inset-0">
        <div className="column-grid w-full h-full" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
    
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Input Section */}
          <div className="lg:col-span-2 bg-neutral-900 rounded-3xl shadow-lg overflow-hidden">
            <div className="p-8 space-y-6">
              <div>
                <label className="block text-xl font-semibold mb-3" htmlFor="prompt">
               
                </label>
                <textarea
                  id="prompt"
                  placeholder="Build a landing page for a startup looking for investors, with details on business models..."
                  value={prompt}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setPrompt(e.target.value)
                  }
                  className="w-full h-40 p-4 border text-white border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                  rows={4}
                />
              </div>
              
              <div className="flex justify-center mt-8">
                <button
                  className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
                  type="button"
                  onClick={handleGenerate}
                >
              <Send />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Updated Output Section */}
          <div className="bg-neutral-900 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden">
            <div className="p-8 h-full flex flex-col">
              <div className="flex-grow overflow-y-auto mb-6" style={{ maxHeight: '400px' }}>
                {loading ? (
                  <div className="flex flex-col justify-center items-center h-full space-y-6">
                    <div className="w-full max-w-md">
                      {generationSteps.map((step, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex items-center">
                            <div className={`
                              w-8 h-8 rounded-full flex items-center justify-center
                              ${index === currentStep ? 'bg-purple-600 animate-pulse' : 
                                index < currentStep ? 'bg-green-500' : 'bg-gray-200'}
                              transition-all duration-500
                            `}>
                              {index < currentStep ? (
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <span className="text-sm text-white">{index + 1}</span>
                              )}
                            </div>
                            <div className={`ml-4 flex-1 ${index === currentStep ? 'text-purple-600 font-medium' : 
                              index < currentStep ? 'text-green-500' : 'text-gray-400'}`}>
                              {step.step}
                              {index === currentStep && (
                                <span className="ml-2 inline-block animate-bounce">...</span>
                              )}
                            </div>
                          </div>
                          {index < generationSteps.length - 1 && (
                            <div className={`ml-4 w-0.5 h-6 ${
                              index < currentStep ? 'bg-green-500' : 'bg-gray-200'
                            } transition-all duration-500`} />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 mt-4">
                      Estimated time remaining: {5 - currentStep} seconds
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
    </div>
  );
};

export default Webllix;
//yes
