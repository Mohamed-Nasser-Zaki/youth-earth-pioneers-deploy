import React from 'react';
import { Sprout } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Sprout className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold text-white">Youth Earth Pioneers</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Empowering the next generation of innovators to create sustainable solutions for a better world.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Guides</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Youth Earth Pioneers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;