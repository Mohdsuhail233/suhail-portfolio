
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          <a href="#" className="text-xl font-bold tracking-tighter uppercase">
Mohd suhail          </a>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Mohd suhail. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          {SOCIAL_LINKS.map((social) => (
            <a 
              key={social.name} 
              href={social.href}
              className="text-gray-500 hover:text-white transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
