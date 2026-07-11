import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        {/* Left: Logo */}
        <div className="pointer-events-auto">
          <a href="#" className="text-2xl tracking-tight font-['outfit'] hidden md:block">
            Mohd suhail
          </a>
        </div>
        
        {/* Center: Floating Pill Menu Wrapper */}
        <div className="hidden md:flex absolute inset-x-0 top-0 justify-center pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-8 hover:gap-10 px-8 hover:px-12 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[14px] font-medium text-gray-200 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/resume/Mohd%20Suhail%20Java%20Dev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-gray-200 hover:text-white transition-colors whitespace-nowrap"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center space-x-3 pointer-events-auto">
          <a 
            href="#contact"
            className="px-6 py-2.5 bg-white text-black text-[14px] font-semibold rounded-full transition-all hover:bg-gray-200 font-['outfit']"
          >
            Let's talk
          </a>
        </div>

        {/* Mobile Toggle & Logo */}
        <div className="md:hidden flex items-center justify-between w-full bg-black/40 backdrop-blur-md px-6 py-4 rounded-full border border-white/10 pointer-events-auto">
          <a href="#" className="text-xl tracking-tight font-['outfit']">
            Mohd suhail
          </a>
          <button 
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[80px] left-4 right-4 bg-[#111] border border-white/10 rounded-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto shadow-2xl z-40 overflow-hidden">
          <div className="px-6 py-8 flex flex-col space-y-6">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xl font-medium text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/resume/Mohd%20Suhail%20Java%20Dev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-transparent border border-white/20 text-white text-center font-bold rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </a>
            <a 
              href="#contact"
              className="w-full py-4 bg-white text-black text-center font-bold rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
