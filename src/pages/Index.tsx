import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import TeamProjects from '@/components/TeamProjects';
import Contact from '@/components/Contact';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scrolling configuration
    gsap.config({
      autoSleep: 60,
      force3D: false,
      nullTargetWarn: false,
      units: { left: "%", top: "%", rotation: "rad" }
    });

    // Initialize ScrollTrigger refresh
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TeamProjects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Aditya Makwana. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">
                Built with React, TypeScript, GSAP & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
