import React from 'react';
import { Navbar } from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import { Footer } from './components/Footer';
import  ContactSection  from './components/ContactSection';

export default function Home() {
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
