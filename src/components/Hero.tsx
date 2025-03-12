
import React from 'react';
import { ArrowDown, Mail, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center pt-20 pb-16 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Enhanced dynamic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/10 to-pink-500/15 -z-10" />
      
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        <div className="chip mb-6 animate-fade-in animation-delay-300 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium">
          Software Test Engineer
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in animation-delay-600">
          Bharath Shet
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 animate-fade-in animation-delay-900">
          Software Test Engineer with over 3 years of experience in quality assurance and software testing, specializing in test automation and enhancing software quality.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in animation-delay-1200">
          <a 
            href="#about" 
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/70 transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <ArrowDown className="h-4 w-4" />
            Learn More
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
