
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>nikatuk | Premium Lifestyle Products</title>
        <meta name="description" content="Shop premium lifestyle products at nikatuk. Quality products designed for your everyday needs." />
      </Helmet>
      <Navbar />
      <Hero />
      <Services /> {/* This is now the Products section */}
      <Projects /> {/* This is now the Collections section */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
