'use client'
import Link from 'next/link';

import Image from 'next/image';
import Pricing from "@/app/pricing/page"
import Logo from '@/app/UI/logo/page';
import React, { useState, useEffect } from 'react';

const GeneratedComponent: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);




  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0A0A0A]">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
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
          <div className="absolute top-16 left-0 right-0 bg-slate-400 text-white z-20">
            <nav className="flex flex-col items-center py-4">
              <Link href="/signup" className="block py-2 px-4 text-lg">Sign In</Link>
              <Link href="/about" className="block py-2 px-4 text-lg">About</Link>
              <Link href="/blogs" className="block py-2 px-4 text-lg">Blogs</Link>
            </nav>
          </div>
        )}

      </header>
      {/* Hero Section - Adding new hero section */}
      <div className="container mx-auto px-6 pt-32 pb-16 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
    Build Stunning React landing page
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">   AI Power</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
    Build React landing page With AI  No generic layout All is AI Build ,launch Your product fast with nextjs full setup
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl text-white font-bold hover:opacity-90 transition-opacity">
              Start Building
            </button>
         

          </div>
          <div className="w-full max-w-5xl mx-auto perspective" style={{ perspective: '1000px' }}>
            <video
              src="/A-builde.mp4"
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
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
      </div>

      {/* Core Features Section */}
      <div className="container mx-auto px-6 py-32">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-white mb-6">
          Build Your SaaS Effortlessly – <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400"> AI Landing Pages + Full Next.js Setup</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Talk to AI like your friend Create stunning pattern , AI themes, to make your saas more atractive,
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Layout Generation",
              description: "AI analyzes your content and generates optimal layouts that match your brand identity and goals"
            },
            {
              title: "Responsive Adaptation",
              description: "Create automatically adapt to any screen size with intelligent breakpoint handling"
            },
            {
              title: "AI Assistant",
              description: "Build what You want to make your website good "
            }
          ].map((feature, index) => (
            <div key={index} className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Capabilities Section */}
      <div className="container mx-auto px-6 py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 blur-3xl"></div>
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Drag and  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">drop</span>
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
                  src="/AI-Walpaper.mp4"
                  width="100%"
                  height="auto"
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
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl font-bold text-white mb-6">
            Streamlined <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Workflow</span>
          </h2>
          <p className="text-gray-300 text-xl">
            Build faster and smarter with our integrated workflow solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "AI in your Control",
              description: "Make changes and manage pattern with AI Assistant",
              features: ["Automatic stunning patter", "Unique layout ", "Creative Theme"]
            },
            {
              title: "Color ,Style ",
              description: "want to change color Select the color Click any where ANd color will be changed",
              features: ["Live editing", "Stylish Color"]
            },
            {
              title: "Theme,Image",
              description: "Need Theme ,Wallpaper Generate in With AI  ",
              features: ["Creative Style", "High Quality "]
            },
            {
              title: "Export",
              description: "Export in minutes React javascript/Typescript ",
              features: ["Multiple formats", "Code generation",]
            }
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative p-8 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.description}</p>
                <ul className="space-y-3">
                  {item.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics Section */}
      <div className="container mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              metric: "10x",
              label: "Faster Building",
              description: "Build Faster and Creative  with AI assistance"
            },
            {
              metric: "95%",
              label: "Time Saved",
              description: "Reduce repetitive tasks with automation"
            },
            {
              metric: "24/7",
              label: "24/7 AI is in you hand",
              description: "Give your Fraustration to  AI  "
            }
          ].map((stat, index) => (
            <div key={index} className="relative p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 mb-4">
                {stat.metric}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

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

      {/* New CTA Section before Footer */}
      <div className="container mx-auto px-6 py-32">
        <div className="glass-effect p-12 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-xl"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Nextjs project ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already building Their First Saas,Startup.
            </p>
            <Link href="/login">
              <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl text-white font-bold hover:opacity-90 transition-opacity">
                Start Building
              </button>
            </Link>
          </div>
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
                title: "Give Command  ",
                description: "Create a website landing page for Saas For AI Photo generation tool ",
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

      {/* New Features Showcase with Animation */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white">
          Next.js Boilerplate: Build and Launch Faster
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">  </span>
          </h2>

   {[
            {
              title: "Build with Next.js",
              description: "Launch your startup quickly with a fully functional Next.js boilerplate.I",
              icon: "🤖"
            },
            {
              title: "Next.js Advantages",
              description: "Build your startup in minutes with all the tools you need for success preject ",
              icon: ""
            },
            {
              title: "React landing page maker",
              description: "Use AI landig page make to build landing page for your project ",
              icon: "⚡"
            }
          ].map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white">With </h3>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Next.js", logo: "/Nextjs.png" },
              { name: "Stripe", logo: "/stripelogo.png" },
              { name: "LemonSqueezy", logo: "/lemon-squezy-logo.jpeg" },
              { name: "MongoDB", logo: "/Mongodb.png" },
              { name: "Resend", logo: "/resend-logo.png" },
              { name: "Mailtrip", logo: "/mailtrip-logo.png" },


              { name: "Google Auth", logo: "/google-logo.jpeg" },
    
            ].map((tech, index) => (
              <div key={index} className="flex items-center space-x-2">
                <img src={tech.logo} alt={tech.name} className="h-10 w-10 object-contain" />
                <span className="text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl"></div>
        <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">If Need Nextjs  Launch in Minutes</h2>
            <p className="text-gray-300 mb-8">
              Setup with All required you need Whether you working on project or Startup
            </p>
            <div className="w-full max-w-5xl mx-auto perspective" style={{ perspective: '1000px' }}>
              <video
                src="/Nextjsbloilerplate.mp4"
                width="100%"
                height="auto"
                autoPlay
                loop
                muted
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>

          </div>
        </div>
      </div>
      <Pricing />



      {/* New Newsletter Section with Floating Elements */}
      <div className="container mx-auto px-6 py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl"></div>

      </div>

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">Does it Support React tsx/jsx?</h3>
            <p className="text-gray-300">
              Yes its support React tsx/jsx.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">What is  AI Theme /Walpaper?</h3>
            <p className="text-gray-300">
              AI Theme and Walpaper is  Background setup for Website/Landing page which make more beautifull.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">What Programming Language used in  Next js ?</h3>
            <p className="text-gray-300">
              Next.js Has built in typscript.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">What kind of Customer Support do you provide ?</h3>
            <p className="text-gray-300">
              We Provide 24/7 Customer Support via email in case if you get error
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">What we get  in Next.js Boiler plate ?</h3>
            <p className="text-gray-300">
              Every Things You need Launch Your Startup or Poject ,
            </p>
          </div>
        </div>
      </div>


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
              <p className="text-gray-400">Build Your project Launch it Fast.</p>
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
                  { name: "Documentation", href: "/documentation" },

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
            <p className="text-gray-400">© 2024 webdone. All rights reserved.</p>
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
  );
};

export default GeneratedComponent;
