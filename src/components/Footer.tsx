
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-playfair font-bold text-white mb-4 inline-block">
              nikatuk
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              We build beautifully designed web applications and digital experiences 
              that help businesses succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                T
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                L
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                I
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:w-12 after:h-0.5 after:bg-primary after:left-0 after:bottom-[-8px]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/#projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:w-12 after:h-0.5 after:bg-primary after:left-0 after:bottom-[-8px]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <strong className="text-white">Email:</strong> hello@nikatuk.com
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Phone:</strong> +1 (234) 567-890
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Address:</strong> 123 Digital Avenue, San Francisco, CA 94107
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} nikatuk. All rights reserved.
          </p>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop} 
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
