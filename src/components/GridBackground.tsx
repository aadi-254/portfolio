import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function GridBackground() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Animate grid lines on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(grid, {
        backgroundPosition: `0px ${scrollY * 0.1}px`,
        duration: 0,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Grid pattern */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(185 100% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(185 100% 50%) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent" />
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan"
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-8 left-0 w-16 h-px bg-gradient-to-r from-primary/30 to-transparent" />
        <div className="absolute top-0 left-8 h-16 w-px bg-gradient-to-b from-primary/30 to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute top-8 right-0 w-16 h-px bg-gradient-to-l from-primary/30 to-transparent" />
        <div className="absolute top-0 right-8 h-16 w-px bg-gradient-to-b from-primary/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute bottom-8 left-0 w-16 h-px bg-gradient-to-r from-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-8 h-16 w-px bg-gradient-to-t from-primary/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-8 right-0 w-16 h-px bg-gradient-to-l from-primary/30 to-transparent" />
        <div className="absolute bottom-0 right-8 h-16 w-px bg-gradient-to-t from-primary/30 to-transparent" />
      </div>
    </div>
  );
}
