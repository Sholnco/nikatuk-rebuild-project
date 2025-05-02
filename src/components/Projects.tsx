
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projectCategories = ["All", "Frontend", "Backend", "Design", "Mobile"];

const projects = [
  {
    title: "E-commerce Platform",
    category: "Frontend",
    image: "https://source.unsplash.com/random/600x400/?ecommerce",
    description: "A modern e-commerce platform with seamless checkout experience",
    link: "#"
  },
  {
    title: "Banking Dashboard",
    category: "Design",
    image: "https://source.unsplash.com/random/600x400/?dashboard",
    description: "Financial dashboard with data visualization and user insights",
    link: "#"
  },
  {
    title: "Inventory Management API",
    category: "Backend",
    image: "https://source.unsplash.com/random/600x400/?inventory",
    description: "Robust API for inventory tracking and management",
    link: "#"
  },
  {
    title: "Social Media App",
    category: "Mobile",
    image: "https://source.unsplash.com/random/600x400/?social",
    description: "Mobile application for content sharing and discovery",
    link: "#"
  },
  {
    title: "Real Estate Platform",
    category: "Frontend",
    image: "https://source.unsplash.com/random/600x400/?realestate",
    description: "Property listing and search application with map integration",
    link: "#"
  },
  {
    title: "Payment Processing Service",
    category: "Backend",
    image: "https://source.unsplash.com/random/600x400/?payment",
    description: "Secure payment processing system with multiple provider integration",
    link: "#"
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Our Projects</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of work across different domains and technologies.
        </p>
      </div>
      
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full transition-all ${
              activeCategory === category 
                ? "bg-primary text-white" 
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={index}
            className="project-card animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover"
            />
            <div className="project-overlay">
              <span className="text-sm text-white/80 mb-1">{project.category}</span>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/90 mb-4">{project.description}</p>
              <a 
                href={project.link}
                className="inline-flex items-center text-white hover:text-primary transition-colors"
              >
                View project <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
