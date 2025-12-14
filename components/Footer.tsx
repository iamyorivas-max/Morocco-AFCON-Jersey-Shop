import React from 'react';
import { Instagram, Facebook, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 mb-[72px] md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-morocco-red rounded-full flex items-center justify-center text-white font-bold font-display">
            M
          </div>
          <span className="font-display font-bold text-xl text-white">
            MOUNTAKHAB<span className="text-morocco-green">SHOP</span>
          </span>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
          <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
          <a href="#" className="hover:text-white transition"><Phone size={20} /></a>
        </div>

        <div className="text-sm">
          &copy; {new Date().getFullYear()} Mountakhab Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
