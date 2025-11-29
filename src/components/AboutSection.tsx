import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Trophy, Zap, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Code2, value: '15+', label: 'Projects Completed' },
  { icon: Trophy, value: '1000+', label: 'DSA Problems Solved' },
  { icon: Zap, value: '5★', label: 'HackerRank Rating' },
  { icon: GraduationCap, value: '8.76', label: 'Engineering CPI' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        statsRef.current?.children || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
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
      id="about"
      className="section-padding relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef}>
            <span className="font-mono text-primary text-sm tracking-widest mb-4 block">
              ABOUT ME
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate about creating{' '}
              <span className="text-gradient">innovative solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a Full-Stack Developer currently pursuing Information Technology at
              Government Engineering College, Gandhinagar. With a strong foundation in
              Data Structures & Algorithms and hands-on experience in web development,
              I bring both theoretical knowledge and practical skills to every project.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              My approach focuses on building scalable, maintainable code while creating
              user-friendly and responsive interfaces. I'm passionate about real-time
              applications, 3D web development, and AI/ML integration.
            </p>
            
            <div className="flex items-center gap-6">
              <div>
                <p className="text-muted-foreground text-sm">Location</p>
                <p className="text-foreground font-medium">Gandhinagar, Gujarat</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-muted-foreground text-sm">Experience</p>
                <p className="text-foreground font-medium">1 Year Internship</p>
              </div>
            </div>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
