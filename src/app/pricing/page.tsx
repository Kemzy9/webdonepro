'use client';
import { FaReact } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Footer from '../UI/footer/page';
import { CheckCircle, DollarSign, XCircle, HelpCircle, X } from 'lucide-react';
import { Inter, Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

const PricingUI = () => {
  const [isYearly, setIsYearly] = useState(true);
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [offerEnded, setOfferEnded] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  // Add this to handle client-side hydration
  useEffect(() => {
    setIsClient(true);
    
    // Handle localStorage here
    try {
      const stored = window.localStorage.getItem('offerEndDate');
      if (stored) {
        setEndDate(new Date(stored));
      } else {
        const date = new Date();
        date.setDate(date.getDate() + 10);
        window.localStorage.setItem('offerEndDate', date.toISOString());
        setEndDate(date);
      }
    } catch (error) {
      console.error('localStorage is not available:', error);
    }
  }, []);

  const togglePricing = () => {
    setIsYearly((prevState) => !prevState);
  };

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await fetch('/api/users/me');
        const data = await res.json();
        setUserId(data.data._id);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    getUserDetails();
  }, []);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (Object.values(newTimeLeft).every(value => value === 0)) {
        setOfferEnded(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const handleBuy = async (priceId: string) => {
    if (!userId) {
      router.push('/login');
      return;
    }

    if (!priceId) {
      toast.error('Invalid product selection');
      return;
    }

    setLoadingPlanId(priceId);

    try {
      const response = await fetch('/api/users/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId, userId }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      toast.error('Failed to initiate purchase. Please try again.');
      setLoadingPlanId(null);
    }
  };

  const plans = [
    {
      title: 'Starter',
      price: isYearly ? '16/mo' : '20/mo',
      originalPrice: isYearly ? '25/mo' : '29/mo',
      
      description: 'Ideal for beginners or individuals building their first project.',
      features: [
        { feature: '3 Page', tooltip: 'Build  3 page /month 1 extra ' },
        { feature: 'AI  Themes /Walpaper', tooltip: 'Need Theme for Background ' },
        { feature: '24/7 customer support', included: false },
        { feature: 'Access 200 Premium Request/month ', tooltip: 'Receive  200 AI model (Claude Sonnet) requests, add more additional feature Build landing page based your choice and  your needs.  ' },
        'Export Code',
      ],
      priceId: isYearly
        ? process.env.NEXT_PUBLIC_LEMON_SQUEEZY_STANDARD_YEARLY_PRICE_ID
        : process.env.NEXT_PUBLIC_LEMON_SQUEEZY_STANDARD_MONTHLY_PRICE_ID,
    },
    {
      title: 'Pro',
      price: isYearly ? '39/mo' : '49/mo',
      originalPrice: isYearly ? '49/mo' : '55/mo',
      description: 'Perfect for creators looking to experiment and expand their toolkit.',
      isPopular: true,
      features: [
        { feature: '10 Page', tooltip: 'Build  3 page /month 1 extra ' },

      

        { feature: 'AI  Themes /Walpaper', tooltip: 'Need Theme for Background  Use AI ' },
        { feature: '24/7 customer support', included: false },
        { feature: 'Access 1000 Premium Request/month ', tooltip: 'Receive  1000 AI model (Claude Sonnet) requests, add more additional feature Build landing page based your choice and  your needs.  ' },
        'Export Code',
      ],
      priceId: isYearly
        ? process.env.NEXT_PUBLIC_LEMON_CREATOR_PRO_YEARLY_PRICE_ID
        : process.env.NEXT_PUBLIC_LEMON_CREATOR_PRO_MONTHLY_PRICE_ID,
    },
    {
      title: 'Nextjs Framework + Starter',
      price: isYearly ? '189' : '189',
      originalPrice: isYearly ? '285' : '285',
      description: 'Empowering Unique Minds with Cutting-Edge Tools .',
      features: [
        { 
          feature: 'Complete Next.js Setup', 
          tooltip: 'Ready-to-use Next.js project with all the best practices and optimizations already set up for you' 
        },
        { 
          feature: 'Payment Processing', 
          tooltip: 'Accept payments easily with pre-configured Stripe and Lemon Squeezy - no complex setup needed!' 
        },
        { 
          feature: 'Email System', 
          tooltip: 'Built-in email functionality using Mailtrip and Resend - perfect for user notifications and marketing' 
        },
        { 
          feature: 'Easy Authentication', 
          tooltip: 'Let your users sign in with their Google or GitHub accounts - secure and hassle-free' 
        },
        { 
          feature: 'Lifetime Updates', 
          tooltip: 'Get all future improvements and new features at no extra cost - your framework keeps getting better' 
        },
        { 
          feature: 'Database Choice', 
          tooltip: 'Choose between Supabase or MongoDB - both configured and ready for your data needs' 
        },
        { 
          feature: 'Modern Development', 
          tooltip: 'Full TypeScript and React support with modern practices - write better code, faster' 
        },
        'Export Code'
      ],
      priceId: isYearly
        ? process.env.NEXT_PUBLIC_LEMON_SQUEEZY_PREMIUM_YEARLY_PRICE_ID
        : process.env.NEXT_PUBLIC_LEMON_SQUEEZY_PREMIUM_MONTHLY_PRICE_ID,
    },

  ];

  const OfferBanner = () => {
    if (!isClient || offerEnded) return null;  // Add isClient check here

    return (
      <div className="max-w-3xl mx-auto mt-8 mb-16">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-green-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
          <div className="relative bg-gray-900 ring-1 ring-gray-800 rounded-lg p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="text-center sm:text-left">
                <div className="inline-block animate-bounce bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  🎄 Limited Time Offer
                </div>
                <h3 className="text-xl font-bold text-white">
                  Special Holiday Discount: Save 20% Extra
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Use code{' '}
                  <span 
                    className="font-mono bg-gray-800 px-2 py-1 rounded text-green-400 cursor-pointer hover:bg-gray-700 transition-colors"
                    onClick={() => {
                      navigator.clipboard.writeText('HOLIDAY2023');
                      toast.success('Promo code copied!');
                    }}
                  >
                    HOLIDAY2023
                  </span>
                </p>
              </div>
              <div className="flex gap-3">
                {Object.entries(timeLeft).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="bg-gray-800/50 rounded px-3 py-2 min-w-[60px] transform hover:scale-105 transition-transform">
                      <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                        {value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-xs text-gray-400 capitalize">
                        {key}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 text-center text-xs text-gray-500">
              Offer ends on {endDate.toLocaleDateString()} at {endDate.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Modify the return statement to include isClient check for date-dependent content
  return (
    <div className="min-h-screen bg-[#0A0F1C] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-b from-violet-600/20 via-transparent to-transparent blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-t from-blue-600/20 via-transparent to-transparent blur-3xl animate-pulse" />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Glowing Dots */}
        <div className="absolute left-20 top-20 w-2 h-2 bg-violet-400 rounded-full animate-glow" />
        <div className="absolute right-40 top-1/2 w-2 h-2 bg-blue-400 rounded-full animate-glow-delayed" />
        <div className="absolute left-1/2 bottom-40 w-2 h-2 bg-purple-400 rounded-full animate-glow" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        {/* Premium Header */}
        <div className="text-center space-y-6 mb-24">
          <span className="px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full text-violet-300 text-sm font-medium inline-block mb-4">
            Flexible Pricing for Everyone
          </span>
          <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get started with AI-Agents web development tools and take your projects to the next level
          </p>

          {/* Premium Toggle */}
          <div className="flex justify-center mt-12">
            <div className="relative">
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 blur-sm opacity-75" />
              <div className="relative bg-gray-900 rounded-xl p-1 flex">
                <button
                  onClick={togglePricing}
                  className={`px-8 py-3 rounded-lg transition-all duration-300 ${
                    isYearly ? 'bg-gradient-to-r from-violet-500 to-purple-500 shadow-lg shadow-violet-500/25' : ''
                  }`}
                >
                  <span className={isYearly ? 'text-white' : 'text-gray-400'}>
                    Annual
                    {isYearly && <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">Save 20%</span>}
                  </span>
                </button>
                <button
                  onClick={togglePricing}
                  className={`px-8 py-3 rounded-lg transition-all duration-300 ${
                    !isYearly ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl' : 'hover:bg-gray-800'
                  }`}
                >
                  <span className={!isYearly ? 'text-white' : 'text-gray-400'}>Monthly</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {isClient && <OfferBanner />}  {/* Only render when client-side */}

        {/* Premium Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative group ${plan.isPopular ? 'md:-mt-8' : ''}`}>
              {/* Premium card effect */}
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-b from-violet-500 to-purple-500 opacity-60 blur group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative h-full bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
                {plan.isPopular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <div className="relative">
                      <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-violet-500 to-purple-500 blur-sm" />
                      <span className="relative px-6 py-2 bg-gray-900 rounded-full text-violet-300 text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  </div>
                )}

                {/* Premium pricing header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
                  <div className="flex items-baseline space-x-2 mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-br from-violet-400 to-purple-400 bg-clip-text text-transparent">
                      ${plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-gray-500 line-through text-lg">${plan.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                {/* Premium feature list */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start space-x-3 text-gray-300 group/item">
                      {typeof feature === 'string' ? (
                        <>
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 group-hover/item:text-green-300" />
                          <span className="text-sm">{feature}</span>
                        </>
                      ) : (
                        <div className="relative group/tooltip flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 group-hover/item:text-green-300" />
                          <span className="text-sm ml-3">{feature.feature}</span>
                          {feature.tooltip && (
                            <div className="relative">
                              <HelpCircle className="w-4 h-4 text-gray-500 ml-2 cursor-help" />
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-lg py-2 px-3 hidden group-hover/tooltip:block w-48 z-10 mb-2 shadow-xl border border-gray-700">
                                {feature.tooltip}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Premium CTA button */}
                <div className="mt-auto">
                  <button
                    onClick={() => handleBuy(plan.priceId!)}
                    disabled={loadingPlanId === plan.priceId}
                    className={`
                      relative w-full py-4 rounded-xl font-medium text-white 
                      transition-all duration-300 transform hover:-translate-y-1
                      ${plan.isPopular 
                        ? 'bg-gradient-to-r from-violet-500 to-purple-500 hover:shadow-lg hover:shadow-violet-500/25' 
                        : 'bg-gray-800 hover:bg-gray-700'
                      }
                    `}
                  >
                    {loadingPlanId === plan.priceId ? (
                      <span className="flex items-center justify-center space-x-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Processing...</span>
                      </span>
                    ) : (
                      `Get started with ${plan.title}`
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium trust badges */}
        <div className="mt-24 text-center">
          <div className="flex justify-center items-center space-x-8 text-gray-400">
          
            <span>✓ Cancel anytime</span>
            <span>✓ Secure payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add these animations to your global CSS or tailwind.config.js
const tailwindConfig = {
  theme: {
    extend: {
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 4s infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'glow-delayed': 'glow 4s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.5)' },
        },
      },
    },
  },
};

export default PricingUI;
