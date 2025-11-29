import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    icon: Briefcase,
    title: 'Full-Stack Development Intern',
    organization: 'iStar Institute',
    location: 'Chandkheda, Ahmedabad',
    period: 'April 2024 - March 2025',
    description: 'Gained hands-on industry experience in web development',
  },
  {
    icon: GraduationCap,
    title: 'B.E. Information Technology',
    organization: 'Government Engineering College, Gandhinagar',
    location: 'Gujarat Technological University',
    period: '2023 - Present',
    description: 'Current CPI: 8.76',
  },
  {
    icon: Award,
    title: 'Hackathon Achievements',
    organization: 'Multiple Events',
    location: 'India',
    period: '2024 - Present',
    description: '1x Winner, 4x Finalist, 7x Participant',
  },
  {
    icon: GraduationCap,
    title: 'Higher Secondary (Science)',
    organization: 'S.N. Vidhyalaya, Surendranagar',
    location: 'Gujarat',
    period: '2022 - 2023',
    description: 'Grade: 80.98 PR',
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
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
        timelineRef.current?.children || [],
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
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
      id="experience"
      className="section-padding relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div ref={titleRef} className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest mb-4 block">
            JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div ref={timelineRef} className="max-w-3xl mx-auto space-y-8">
          {timeline.map((item, index) => (
            <div
              key={item.title}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />
              
              {/* Icon */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>

              <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-mono text-primary text-sm">
                    {item.period}
                  </span>
                </div>
                <p className="text-muted-foreground font-medium mb-1">
                  {item.organization}
                </p>
                <p className="text-muted-foreground text-sm mb-2">
                  {item.location}
                </p>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
