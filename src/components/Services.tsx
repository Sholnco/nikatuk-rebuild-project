
import React from 'react';
import { Code, PenTool, RadioTower, Database, Globe } from 'lucide-react';

const services = [
  {
    icon: <Code size={32} className="text-primary mb-4" />,
    title: "Frontend Development",
    description: "We create responsive, performant user interfaces using modern technologies like React, Vue, and Angular.",
    tags: ["React", "Vue", "Next.js", "Tailwind CSS"]
  },
  {
    icon: <Database size={32} className="text-primary mb-4" />,
    title: "Backend Development",
    description: "Robust server-side solutions with Node.js, Python, and database architecture that scales with your business.",
    tags: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
  },
  {
    icon: <PenTool size={32} className="text-primary mb-4" />,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality to create memorable digital experiences.",
    tags: ["Figma", "User Research", "Wireframing", "Prototyping"]
  },
  {
    icon: <RadioTower size={32} className="text-primary mb-4" />,
    title: "API Development",
    description: "Custom API solutions that connect your systems and enable seamless data flow between applications.",
    tags: ["REST", "GraphQL", "OAuth", "Microservices"]
  },
  {
    icon: <Globe size={32} className="text-primary mb-4" />,
    title: "Web Applications",
    description: "Full-stack web applications that solve real business problems and deliver exceptional user experiences.",
    tags: ["SPA", "PWA", "Jamstack", "Serverless"]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-container bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="section-title">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer comprehensive solutions for your digital needs, from design to development and beyond.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {service.icon}
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, i) => (
                <span key={i} className="expertise-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
