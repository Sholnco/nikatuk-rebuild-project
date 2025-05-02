
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample collections data
const collections = [
  {
    id: '1',
    title: 'Summer Collection',
    description: 'Light and breathable items for the summer season',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    itemCount: 12
  },
  {
    id: '2',
    title: 'Winter Essentials',
    description: 'Stay warm and stylish during the cold months',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    itemCount: 15
  },
  {
    id: '3',
    title: 'Accessories',
    description: 'Complete your look with our premium accessories',
    image: 'https://images.unsplash.com/photo-1516431883659-655d78edb5ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    itemCount: 8
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collections</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our carefully curated collections designed to suit your style and needs.
            </p>
          </div>
          <Link to="/collections" className="mt-4 md:mt-0 text-primary font-semibold flex items-center group">
            View all collections 
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection) => (
            <Link to={`/collection/${collection.id}`} key={collection.id} className="project-card group">
              <div className="h-96 relative overflow-hidden rounded-lg">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                    <p className="text-sm mb-3">{collection.description}</p>
                    <span className="text-xs inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {collection.itemCount} items
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
