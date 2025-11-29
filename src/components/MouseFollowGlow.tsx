import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MouseFollowGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] opacity-50" />
    </div>
  );
}
