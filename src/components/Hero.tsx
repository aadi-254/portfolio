import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const TYPING_NAME = "Aditya Makwana";
const TYPING_CYCLES = 5; // can improve cycle to make animation longer

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const [typedName, setTypedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [cycle, setCycle] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current, socialRef.current], {
      opacity: 0,
      y: 50
    });

    // Animate elements in sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")
    .to(socialRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");

    // Floating animation for the hero section
    gsap.to(heroRef.current, {
      y: -10,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  useEffect(() => {
    if (isDone) return;
    if (cycle >= TYPING_CYCLES && direction === 'forward' && index === TYPING_NAME.length) {
      setIsDone(true);
      return;
    }
    const delay = direction === 'forward' ? 100 : 60;
    let timeout = setTimeout(() => {
      if (direction === 'forward') {
        if (index < TYPING_NAME.length) {
          setIndex(index + 1);
        } else {
          setTimeout(() => setDirection('backward'), 700);
        }
      } else {
        if (index > 0) {
          setIndex(index - 1);
        } else {
          setCycle(cycle + 1);
          setTimeout(() => setDirection('forward'), 700);
        }
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [index, direction, cycle, isDone]);

  useEffect(() => {
    setTypedName(TYPING_NAME.slice(0, index));
  }, [index]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
      style={{marginTop: '50px'}}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-6 font-heading"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {typedName}
              <span style={{ display: 'inline-block', width: '1ch', color: '#0ea5e9' }}>
                {showCursor ? (
                  <svg width="18" height="36" viewBox="0 0 18 36" style={{verticalAlign: 'middle'}}><rect width="4" height="28" x="7" y="4" rx="2" fill="#0ea5e9" /></svg>
                ) : null}
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto"
          >
            Full-Stack Developer | Problem Solver | Innovator
            <br />
            <span className="text-primary font-semibold">
              Building web experiences that matter.
            </span>
          </p>

          {/* Quotes */}
          <div className="mb-8 space-y-2">
            <p className="text-lg italic text-primary">"Code. Create. Innovate."</p>
            <p className="text-lg italic text-accent">"Turning ideas into reality with WEB dev."</p>
          </div>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/Aditya_Makwana_Resume.pdf" download="Aditya_Makwana_Resume.pdf">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
            <a href="/certificates.pdf" download="Aditya_Makwana_Certificates.pdf">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                
                Certificates
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div ref={socialRef} className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/aadi-254" 
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-makwana-527850280/" 
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:adityamakwana254@gmail.com" 
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;