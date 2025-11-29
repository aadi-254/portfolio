import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FloatingShape {
  id: number;
  size: number;
  x: number;
  y: number;
  type: 'circle' | 'square' | 'triangle' | 'ring' | 'cross';
  delay: number;
  duration: number;
}

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement[]>([]);

  const shapes: FloatingShape[] = [
    { id: 1, size: 60, x: 5, y: 15, type: 'ring', delay: 0, duration: 20 },
    { id: 2, size: 40, x: 90, y: 25, type: 'circle', delay: 2, duration: 25 },
    { id: 3, size: 30, x: 15, y: 45, type: 'square', delay: 1, duration: 22 },
    { id: 4, size: 50, x: 85, y: 55, type: 'triangle', delay: 3, duration: 28 },
    { id: 5, size: 35, x: 8, y: 75, type: 'cross', delay: 1.5, duration: 24 },
    { id: 6, size: 45, x: 92, y: 80, type: 'ring', delay: 2.5, duration: 26 },
    { id: 7, size: 25, x: 20, y: 90, type: 'circle', delay: 0.5, duration: 21 },
    { id: 8, size: 55, x: 75, y: 10, type: 'square', delay: 4, duration: 30 },
    { id: 9, size: 30, x: 50, y: 30, type: 'triangle', delay: 1, duration: 23 },
    { id: 10, size: 40, x: 30, y: 60, type: 'cross', delay: 2, duration: 27 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      shapesRef.current.forEach((shape, index) => {
        if (!shape) return;

        // Floating animation
        gsap.to(shape, {
          y: '+=30',
          x: '+=20',
          rotation: 360,
          duration: shapes[index].duration,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: shapes[index].delay,
        });

        // Parallax on scroll
        gsap.to(shape, {
          y: () => window.innerHeight * 0.3 * (index % 2 === 0 ? 1 : -1),
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderShape = (shape: FloatingShape) => {
    const baseClasses = 'absolute transition-opacity duration-500';
    
    switch (shape.type) {
      case 'circle':
        return (
          <div
            className={`${baseClasses} rounded-full bg-primary/10`}
            style={{ width: shape.size, height: shape.size }}
          />
        );
      case 'square':
        return (
          <div
            className={`${baseClasses} bg-primary/5 rotate-45`}
            style={{ width: shape.size, height: shape.size }}
          />
        );
      case 'triangle':
        return (
          <div
            className={baseClasses}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid hsl(185 100% 50% / 0.08)`,
            }}
          />
        );
      case 'ring':
        return (
          <div
            className={`${baseClasses} rounded-full border-2 border-primary/20`}
            style={{ width: shape.size, height: shape.size }}
          />
        );
      case 'cross':
        return (
          <div className={`${baseClasses}`} style={{ width: shape.size, height: shape.size }}>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 h-full w-0.5 bg-primary/10 -translate-x-1/2" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <div
          key={shape.id}
          ref={(el) => {
            if (el) shapesRef.current[index] = el;
          }}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {renderShape(shape)}
        </div>
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="absolute top-3/4 left-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '4s' }}
      />
    </div>
  );
}
