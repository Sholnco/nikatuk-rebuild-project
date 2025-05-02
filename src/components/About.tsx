
import React from 'react';
import { Award, Users, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container bg-muted/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image column */}
        <div className="animate-slide-up">
          <div className="relative">
            <div className="bg-primary/10 rounded-lg absolute -top-4 -left-4 w-full h-full"></div>
            <img 
              src="https://source.unsplash.com/random/800x600/?team" 
              alt="Our team" 
              className="rounded-lg relative z-10 w-full"
            />
          </div>
        </div>
        
        {/* Content column */}
        <div className="animate-slide-in-right">
          <h2 className="section-title">About Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            We are a team of passionate developers and designers dedicated to creating 
            exceptional digital experiences. With years of industry experience, we've 
            helped businesses of all sizes achieve their goals through technology.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center mb-2">
                <Calendar size={24} className="text-primary mr-2" />
                <span className="text-2xl font-bold">5+</span>
              </div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center mb-2">
                <Award size={24} className="text-primary mr-2" />
                <span className="text-2xl font-bold">100+</span>
              </div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center mb-2">
                <Users size={24} className="text-primary mr-2" />
                <span className="text-2xl font-bold">50+</span>
              </div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
          
          {/* Team values */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-primary/20 p-1 rounded mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p>Quality-first approach in everything we build</p>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 p-1 rounded mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p>User-centered design and development</p>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 p-1 rounded mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p>Transparent communication and collaboration</p>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 p-1 rounded mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p>Continuous learning and innovation</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
