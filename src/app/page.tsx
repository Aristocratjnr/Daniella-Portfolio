"use client";
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import { Footer } from './components/Footer';
import ContactSection from './components/ContactSection';

export default function Home() {
  useEffect(() => {
    // Handle hash-based scrolling when the component mounts
    if (typeof window !== 'undefined' && window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
