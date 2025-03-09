
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#123C69] text-white pt-10 pb-6 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-6 w-6" />
              <span className="text-xl font-semibold">Eklavy</span>
            </div>
            <p className="text-sm text-[#EEE2DC]/80 mb-6">
              Master languages through fun, bite-sized lessons designed to keep you engaged and motivated.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#EEE2DC] hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#EEE2DC] hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#EEE2DC] hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#EEE2DC]">Learn</h3>
            <ul className="space-y-2">
              <li><Link to="/languages" className="text-[#EEE2DC]/80 hover:text-white transition-colors">Languages</Link></li>
              <li><Link to="/lessons" className="text-[#EEE2DC]/80 hover:text-white transition-colors">Lessons</Link></li>
              <li><Link to="/progress" className="text-[#EEE2DC]/80 hover:text-white transition-colors">Track Progress</Link></li>
              <li><Link to="/resources" className="text-[#EEE2DC]/80 hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#EEE2DC]">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[#EEE2DC]/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-[#EEE2DC]/80 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-[#EEE2DC]/80 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#EEE2DC]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-[#EEE2DC]/80">info@eklavy.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-[#EEE2DC]/80">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#EEE2DC]/20 mt-8 pt-6 text-center text-[#EEE2DC]/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Eklavy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
