import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import BudgetSimulator from '../components/BudgetSimulator';
import Scheduling from '../components/Scheduling';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Services />
      <BudgetSimulator />
      <Scheduling />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default HomePage;