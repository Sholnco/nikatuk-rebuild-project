
import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  const features = [
    "Premium quality materials",
    "Ethically sourced products",
    "Sustainable manufacturing",
    "Lifetime warranty on selected items",
    "Designed for everyday use"
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Store</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2020, nikatuk is a premium lifestyle brand creating high-quality products 
              that combine functionality, style, and sustainability. Our mission is to provide 
              customers with products that enhance their daily lives while respecting our planet.
            </p>
            <p className="text-gray-700 mb-8">
              Every item in our collection is carefully designed and crafted to meet our 
              exacting standards. We work with ethical manufacturers and use sustainable materials 
              whenever possible.
            </p>
            
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check size={20} className="text-primary mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our store" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl w-48 md:w-64">
              <p className="font-bold text-lg mb-1">100+</p>
              <p className="text-gray-600">Products in our collection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
