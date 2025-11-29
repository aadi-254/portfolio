import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Github, Linkedin, Code2, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/aadi-254',
    username: 'aadi-254',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/aditya-makwana-527850280/',
    username: 'aditya-makwana',
  },
  {
    icon: Code2,
    name: 'LeetCode',
    href: 'https://leetcode.com/u/Aditya_Makwana/',
    username: 'Aditya_Makwana',
  },
  {
    icon: Award,
    name: 'HackerRank',
    href: 'https://hackerrank.com/profile/adityamakwana254',
    username: 'adityamakwana254',
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        linksRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: linksRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div ref={contentRef} className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something{' '}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Currently open to internship opportunities, freelance projects, and
            collaborative development. Let's connect and create something great together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="mailto:adityamakwana254@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_40px_hsl(185_100%_50%/0.5)] transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              adityamakwana254@gmail.com
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>Gandhinagar, Gujarat, India</span>
            </div>
          </div>
        </div>

        <div
          ref={linksRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-6 text-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
            >
              <link.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-foreground mb-1">{link.name}</p>
              <p className="text-muted-foreground text-xs truncate">
                {link.username}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
