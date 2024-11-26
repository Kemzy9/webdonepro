'use client'
'use client'
import React from 'react';
import Image from 'next/image';
import Baner from '@/app/UI/baner/page'

const GeneratedComponent: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0A0A0A]">
      {/* Hero Section - Adding new hero section */}
      <div className="container mx-auto px-6 pt-32 pb-16 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Build Stunning React landing page 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400"> AI Power</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Create professional, responsive React Landing page 
            No coding required.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl text-white font-bold hover:opacity-90 transition-opacity">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-white/10 rounded-xl text-white font-bold hover:bg-white/20 transition-colors">
              Watch Demo
            </button>
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
            Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Design Workflow</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Experience the next generation of web design with AI-powered tools that adapt to your needs
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
              description: "Designs automatically adapt to any screen size with intelligent breakpoint handling"
            },
            {
              title: "Component Library",
              description: "Access thousands of pre-built components that seamlessly integrate with your design"
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
                Advanced Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Intelligence</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Predictive Design Suggestions",
                    description: "AI analyzes your design patterns and suggests improvements in real-time"
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
            <div className="relative h-[600px] bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-sm"></div>
              {/* Add interactive demo or image here */}
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
            Design faster and smarter with our integrated workflow solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Version Control",
              description: "Track changes and manage design versions with intelligent history management",
              features: ["Automatic backups", "Design comparison", "Branching workflows"]
            },
            {
              title: "Collaboration Tools",
              description: "Work together seamlessly with real-time collaboration features",
              features: ["Live editing", "Comment threads", "Role management"]
            },
            {
              title: "Asset Management",
              description: "Organize and optimize your design assets automatically",
              features: ["Smart categorization", "Auto-optimization", "Cloud storage"]
            },
            {
              title: "Export & Deploy",
              description: "Deploy your designs with one click to any platform",
              features: ["Multiple formats", "Code generation", "Hosting integration"]
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
              label: "Faster Development",
              description: "Accelerate your design process with AI assistance"
            },
            {
              metric: "95%",
              label: "Time Saved",
              description: "Reduce repetitive tasks with automation"
            },
            {
              metric: "24/7",
              label: "Design Generation",
              description: "Continuous design suggestions and improvements"
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
              quote: "webdonePro helped us launch our startup website in record time. The AI suggestions were spot-on!"
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
              Ready to Build Your Next Website?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already building the future with AI-powered web development.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl text-white font-bold hover:opacity-90 transition-opacity">
              Start Building Free
            </button>
          </div>
        </div>
      </div>

      {/* New Statistics Section with 3D Cards */}
      <div className="container mx-auto px-6 py-32">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: "98%", label: "Customer Satisfaction", icon: "❤️" },
            { number: "24/7", label: "Support Available", icon: "🎯" },
            { number: "100+", label: "AI Templates", icon: "🎨" },
            { number: "50k+", label: "Websites Created", icon: "🚀" }
          ].map((stat, index) => (
            <div key={index} className="perspective-card group">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 hover:transform hover:-rotate-y-12 transition-all duration-300">
                <span className="text-4xl mb-4 block">{stat.icon}</span>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
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
                title: "Choose Template",
                description: "Select from our AI-curated collection of premium templates",
                icon: "🎨"
              },
              {
                step: "02",
                title: "Customize Design",
                description: "Use AI to personalize colors, layouts, and content",
                icon: "⚡"
              },
              {
                step: "03",
                title: "Add Content",
                description: "Let AI help generate and optimize your content",
                icon: "✍️"
              },
              {
                step: "04",
                title: "Launch Site",
                description: "Publish your site with one click deployment",
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
      <div className="container mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Advanced Features for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400"> Modern Websites</span>
            </h2>
            
            {[
              {
                title: "AI Content Generation",
                description: "Generate SEO-optimized content with our advanced AI",
                icon: "🤖"
              },
              {
                title: "Smart Analytics",
                description: "Track performance with AI-powered insights",
                icon: "📊"
              },
              {
                title: "Auto-Optimization",
                description: "Automatically optimize for different devices",
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
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              {/* Add your feature showcase image or interactive demo here */}
              <div className="aspect-video bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* New Pricing Section with Hover Effects */}
      <div className="container mx-auto px-6 py-32">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Simple, Transparent
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400"> Pricing</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "$19",
              features: ["1 Website", "Basic AI Features", "Community Support", "Basic Analytics"],
              popular: false
            },
            {
              name: "Professional",
              price: "$49",
              features: ["5 Websites", "Advanced AI Features", "Priority Support", "Advanced Analytics", "Custom Domain"],
              popular: true
            },
            {
              name: "Enterprise",
              price: "$99",
              features: ["Unlimited Websites", "Custom AI Training", "24/7 Support", "White Label Solution", "API Access"],
              popular: false
            }
          ].map((plan, index) => (
            <div key={index} className={`relative group ${plan.popular ? 'scale-105' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl blur opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full px-4 py-1">
                    <span className="text-white text-sm font-bold">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Newsletter Section with Floating Elements */}
      <div className="container mx-auto px-6 py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl"></div>
        <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Get the latest updates on AI website building and special offers.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 rounded-xl border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl text-white font-bold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
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
                <span className="text-white text-xl font-bold">webdonePro</span>
              </div>
              <p className="text-gray-400">Building the future of web development with AI.</p>
            </div>

            {/* Footer Links */}
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Templates", "Showcase"]
              },
              {
                title: "Company",
                links: ["About", "Careers", "Blog", "Press"]
              },
              {
                title: "Resources",
                links: ["Documentation", "Help Center", "Community", "Contact"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 webdonePro. All rights reserved.</p>
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

<Baner/>



      
    </div>
  );
};

export default GeneratedComponent;
