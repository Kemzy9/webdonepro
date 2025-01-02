import React from 'react';
import { Facebook, X, Linkedin, Youtube, Instagram, Globe, Mail, Phone, ChevronRight, Heart } from 'lucide-react';
import Logo from '@/app/UI/logo/page';
import Link from 'next/link';

import Baner from '@/app/UI/banner/page'
const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 mt-32 bg-gradient-to-b from-transparent to-black/40">
      <div className="container mx-auto px-6 py-16">
        {/* Newsletter Section */}
       

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
          <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 transform hover:scale-105 transition-transform">
                                    <Logo />
                                </div>
                                <div className="text-2xl font-semibold tracking-tight text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-white to-gray-300 transition-all duration-300 font-['Inter']">
                                    Web<span className="text-indigo-400">done</span>
                                </div>
                            </div>
            <p className="text-gray-400 mb-6 max-w-md">
Build it,launch it 
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, href: "#" },
                { icon: <X size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" },
                { icon: <Youtube size={20} />, href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center 
                           hover:bg-white/10 transition-colors duration-200 text-gray-400 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
    
          </div>


          {[
            {
              title: "Product",
              links: [
                { name: "Features", href: "/features" },
                { name: "Next js  Complete setup", href: "/signup" },
                { name: "Pricing", href: "/pricing" },
                { name: "Ai Landing page builder", href: "/signup" },
                { name: "Drag and Drop Builder", href: "/signup" },
                { name: "AI Background Theme", href: "/signup" },
         
                { name: "Documentation", href: "/documents" },
                { name: "AI Components", href: "/signup" },

              ]
            },
            {
              title: "Company",
              links: [
                { name: "About Us", href: "/about" },


                { name: "Terms of Service", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" }
              ]
            },
            {
              title: "Resources",
              links: [
                { name: "Blog", href: "/blog" },
                { name: "Community", href: "/community" },
                { name: "Help Center", href: "/help" },
       
              ]
            },
            
            {
              title: "Developers",
              links: [
                { name: "Getting Started", href: "/documents" },
             
             
              ]
            }
          ].map((section, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-white font-semibold tracking-wide uppercase text-sm">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
          
            </div>
            
          ))}
        </div>
        <Baner/>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© 2024 Webdone. All rights reserved.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
              <span className="flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" />         webdone
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
