import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    // Animate navigation on load
    gsap.fromTo('.nav-container', 
      {
        y: -60,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
      }
    );

    // Handle scroll to update active section
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => {
      if (prev) {
        gsap.to('.mobile-menu', {
          opacity: 0,
          y: -20,
          duration: 0.35,
          ease: 'power2.in',
          onComplete: () => setIsOpen(false)
        });
        return true; // keep open until animation finishes
      } else {
        setTimeout(() => {
          gsap.fromTo('.mobile-menu', 
            {
              opacity: 0,
              y: -20
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out"
            }
          );
        }, 0);
        return false;
      }
    });
    if (!isOpen) {
      // open menu (handled above)
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border nav-container">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Aditya.dev
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary relative ${
                  activeSection === item.href.substring(1) 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-500 ${activeSection === item.href.substring(1) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50'}`}
                  style={{transformOrigin: 'left'}}
                ></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;