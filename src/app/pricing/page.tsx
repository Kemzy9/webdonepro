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
      price: isYearly ? '20/mo' : '16/mo',
      originalPrice: isYearly ? '25/mo' : '29/mo',
      
      description: 'Ideal for beginners or individuals building their first project.',
      features: [
        { feature: '3 Page', tooltip: 'Build  3 page /month 1 extra ' },

      

        { feature: 'AI  Themes /Walpaper', tooltip: 'Need Theme for Background ' },
        { feature: '24/7 customer support', included: false },
       


        { feature: 'Access 100 Premium Request/month ', tooltip: 'Receive  100 AI model requests, add more additional feature Build landing page based your choice and  your needs.  ' },
        'Export Code',
      ],
      priceId: isYearly
        ? process.env.NEXT_PUBLIC_LEMON_SQUEEZY_STANDARD_YEARLY_PRICE_ID
        : process.env.NEXT_PUBLIC_LEMON_SQUEEZY_STANDARD_MONTHLY_PRICE_ID,
    },
    {
      title: 'Creator',
      price: isYearly ? '55/mo' : '95/mo',
      originalPrice: isYearly ? '55/mo' : '59/mo',
      description: 'Perfect for creators looking to experiment and expand their toolkit.',
      isPopular: true,
      features: [
        { feature: '10 Page', tooltip: 'Build  3 page /month 1 extra ' },

      

        { feature: 'AI  Themes /Walpaper', tooltip: 'Need Theme for Background  Use AI ' },
        { feature: '24/7 customer support', included: false },
        { feature: 'Access 1000 Premium Request/month ', tooltip: 'Receive  100 AI model requests, add more additional feature Build landing page based your choice and  your needs.  ' },
        'Export Code',
      ],
      priceId: isYearly
        ? process.env.NEXT_PUBLIC_LEMON_CREATOR_PRO_YEARLY_PRICE_ID
        : process.env.NEXT_PUBLIC_LEMON_CREATOR_PRO_MONTHLY_PRICE_ID,
    },
    {
      title: 'Nextjs Boilerplate (Liftime) ',
      price: isYearly ? '164' : '164',
      originalPrice: isYearly ? '265' : '144',
      description: 'Empowering Unique Minds with Cutting-Edge Tools .',
      features: [
        { feature: 'Nextjs', tooltip: 'A full setup Of Nextjs ' },
    
        { feature: 'Stripe/Lemon Squeezy', tooltip: 'A payment Gateway ' },
   
        { feature: 'Mailtrip/Resend', tooltip: 'Email login ' },
 




        { feature: 'Google Auth/Github Auth', tooltip: 'A payment Gateway ' },

        { feature: 'Future Update ', tooltip: 'Leverage AI to generate compelling copy for your landing pages, saving you time and effort.' },
        { feature: 'Supabase/Mongodb', tooltip: 'A payment Gateway ' },
       
        { 
          feature: 'React JavaScript/TypeScript', 
          
          tooltip: 'Build faster and smarter with the power of React at your fingertips!' 
      },

        'Export Code',
      ],
      priceId: isYearly
        ? process.env.NEXT_PUBLIC_LEMON_SQUEEZY_PREMIUM_YEARLY_PRICE_ID
        : process.env.NEXT_PUBLIC_LEMON_SQUEEZY_PREMIUM_MONTHLY_PRICE_ID,
    },

  ];

  return (
    <div className="container mx-auto px-6 py-32 relative bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Enhanced Background Effects */}
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[120px] animate-pulse"></div>
      
      {/* Pricing Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-center text-white mb-4 tracking-tight">
          Choose Your <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Perfect Plan</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Step Into the Future of Web Creation with AI
        </p>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mb-12">
        <div className="flex space-x-4 bg-gray-800/50 backdrop-blur-xl rounded-full p-1.5 shadow-xl border border-gray-700/50">
          <button
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
              isYearly 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={togglePricing}
          >
            Yearly (Save 20%)
          </button>
          <button
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
              !isYearly 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={togglePricing}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, idx) => (
          <div className="relative group" key={idx}>
            {/* Gradient Border Effect */}
            <div className={`absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 
              ${plan.isPopular 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500'}`}
            ></div>

            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl">
              {plan.isPopular && (
                <div className="absolute -top-4 right-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  ${plan.price}
                </span>
                <span className="text-gray-400 ml-2 line-through text-sm">${plan.originalPrice}</span>
              </div>

              <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

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

              <button
                onClick={() => handleBuy(plan.priceId!)}
                disabled={loadingPlanId === plan.priceId}
                className={`w-full py-3 rounded-xl font-medium transition-all duration-300 
                  ${plan.isPopular 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'}`}
              >
                {loadingPlanId === plan.priceId ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  `Choose ${plan.title}`
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingUI;
