import React from 'react';
import { Hammer, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Hammer className="w-6 h-6 text-gray-200" />
              <span className="text-xl font-industrial font-black tracking-tighter text-white">
                APEX
              </span>
            </div>
            <p className="text-gray-500 max-w-xs text-sm">
              Providing top-tier scaffolding solutions for industrial and commercial projects. Safety first, elevation always.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Rental Fleet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Engineering & Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Erection & Dismantle</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>1-800-APEX-SCAF</li>
              <li>info@apexscaffold.com</li>
              <li className="flex gap-4 mt-4">
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Apex Scaffolding Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;