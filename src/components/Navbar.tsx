
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section for highlighting
      const sections = links.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);
  
  // Handle navigation with smooth scrolling and menu closing
  const handleNavigation = (e, href) => {
    e.preventDefault();
    
    // Close the mobile menu
    closeMenu();
    
    // Smooth scroll to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`${isMenuOpen ? 'h-[100vh]' : ''} fixed w-full top-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10 bg-white dark:bg-black backdrop-blur-md shadow-sm`
      }
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="text-lg font-bold font-display relative group"
          onClick={(e) => handleNavigation(e, '#home')}
        >
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Bharath Shet
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative group",
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-foreground/80 hover:text-foreground"
              )}
            >
              {link.name}
              <span 
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                  activeSection === link.href.substring(1) 
                    ? "w-full" 
                    : "w-0 group-hover:w-full"
                )}
              ></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground hover:text-primary transition-colors duration-200" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 animate-fade-in" />
          ) : (
            <Menu className="h-6 w-6 animate-fade-in" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-white/95 dark:bg-black/95 z-40 flex flex-col p-10 pt-24 transform transition-all duration-300 ease-in-out md:hidden backdrop-blur-md',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        )}
      >
        <nav className="flex flex-col space-y-6">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              className={cn(
                "text-xl font-medium border-b border-border pb-2 transform transition-all",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                activeSection === link.href.substring(1) ? "text-primary border-primary" : ""
              )}
              style={{ 
                transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms'
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
