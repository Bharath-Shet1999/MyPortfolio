
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <ScrollToTop />
      
      <footer className="py-8 px-6 text-center border-t border-border">
        <p className="text-muted-foreground">© {new Date().getFullYear()} Bharath Shet. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Index;
