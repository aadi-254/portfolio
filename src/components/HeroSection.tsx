import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Scene3D from './Scene3D';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 });

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          socialRef.current,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.3'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Scene3D />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />
      
      <div className="container-custom relative z-10 text-center">
        <div className="mb-6">
          <span className="font-mono text-primary text-sm tracking-widest">
            FULL-STACK DEVELOPER
          </span>
        </div>
        
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient glow-text">Aditya</span>
          <br />
          <span className="text-foreground">Makwana</span>
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Turning ideas into reality with code. Building innovative web solutions
          with React, Node.js, Three.js, and cutting-edge technologies.
        </p>
        
        <div ref={ctaRef} className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_40px_hsl(185_100%_50%/0.5)] transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-primary/30 text-foreground rounded-full font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Social links - vertical on left */}
      <div
        ref={socialRef}
        className="absolute left-6 md:left-12 bottom-1/4 flex flex-col gap-6"
      >
        <a
          href="https://github.com/aadi-254"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/aditya-makwana-527850280/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:adityamakwana254@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <Mail className="w-5 h-5" />
        </a>
        <div className="w-px h-20 bg-gradient-to-b from-primary/50 to-transparent mx-auto" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
