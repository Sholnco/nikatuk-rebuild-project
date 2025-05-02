
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const fullText = "We build digital experiences that inspire.";

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [index]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('services');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent -z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block mb-2">Digital Studio</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-8 h-16">
            {text}<span className="animate-pulse">|</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up">
            <a href="#contact" className="btn-primary">
              Start a project
            </a>
            <a href="#services" className="btn-outline">
              Our services
            </a>
          </div>
          
          <div className="flex flex-col items-start gap-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-gray-600 font-medium">Trusted by innovative companies</p>
            <div className="flex flex-wrap gap-8 items-center">
              <div className="text-xl font-bold text-gray-800">Company A</div>
              <div className="text-xl font-bold text-gray-800">Company B</div>
              <div className="text-xl font-bold text-gray-800">Company C</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollToProjects}>
        <ArrowDown className="text-primary" size={28} />
      </div>
    </section>
  );
};

export default Hero;
