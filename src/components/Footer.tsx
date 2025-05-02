
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, CreditCard, Package, Truck, ShieldCheck } from 'lucide-react';

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
      {/* Trust badges */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Truck size={32} className="mb-3 text-primary" />
              <h4 className="text-white font-medium mb-1">Free Shipping</h4>
              <p className="text-gray-400 text-sm">On orders over $50</p>
            </div>
            <div className="flex flex-col items-center">
              <Package size={32} className="mb-3 text-primary" />
              <h4 className="text-white font-medium mb-1">Easy Returns</h4>
              <p className="text-gray-400 text-sm">30-day return policy</p>
            </div>
            <div className="flex flex-col items-center">
              <CreditCard size={32} className="mb-3 text-primary" />
              <h4 className="text-white font-medium mb-1">Secure Payment</h4>
              <p className="text-gray-400 text-sm">SSL encrypted checkout</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck size={32} className="mb-3 text-primary" />
              <h4 className="text-white font-medium mb-1">Quality Guarantee</h4>
              <p className="text-gray-400 text-sm">Satisfaction guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-playfair font-bold text-white mb-4 inline-block">
              MoTech Shop
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium quality tech products for your lifestyle. We focus on design, quality, 
              and providing an exceptional customer experience.
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
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:w-12 after:h-0.5 after:bg-primary after:left-0 after:bottom-[-8px]">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/collections/new" className="text-gray-400 hover:text-white transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link to="/collections/bestsellers" className="text-gray-400 hover:text-white transition-colors">Best Sellers</Link>
              </li>
              <li>
                <Link to="/collections/sale" className="text-gray-400 hover:text-white transition-colors">Sale</Link>
              </li>
              <li>
                <Link to="/collections/clothing" className="text-gray-400 hover:text-white transition-colors">Gadgets</Link>
              </li>
              <li>
                <Link to="/collections/accessories" className="text-gray-400 hover:text-white transition-colors">Accessories</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:w-12 after:h-0.5 after:bg-primary after:left-0 after:bottom-[-8px]">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-gray-400 hover:text-white transition-colors">Product Guide</Link>
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Email:</strong> info@motechshop.com
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} MoTech Shop. All rights reserved.
          </p>
          <div className="flex items-center space-x-8">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
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
