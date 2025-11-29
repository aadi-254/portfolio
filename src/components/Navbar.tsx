import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 80 },
        ease: 'power3.inOut',
      });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-gradient">
          AM
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:shadow-[0_0_30px_hsl(185_100%_50%/0.4)] transition-all duration-300"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
