import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Trophy, Briefcase, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: Code,
    title: 'LeetCode Champion',
    description: 'Solved 1000+ problems with rank 25,000',
    details: 'JavaScript, Python, Data Structures & Algorithms',
    link: 'https://leetcode.com/u/Aditya_Makwana/',
  },
  {
    icon: Trophy,
    title: 'Hackathon Winner',
    description: 'Hackathons: 4x Finalist, 1x Winner, 7x Participant',
    details: 'Recognized for innovation and problem-solving skills',
  },
  {
    icon: Briefcase,
    title: 'Industry Experience',
    description: '1 Year Internship at iStar Institute',
    details: 'April 2024 - March 2025 • Chandkheda, Ahmedabad',
  },
  {
    icon: Award,
    title: 'Academic Excellence',
    description: '8.76 CPI in Engineering',
    details: 'Consistent high performance across semesters',
  },
];

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      const cards = cardsRef.current?.children || [];
      gsap.fromTo(
        cards,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
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
      id="achievements"
      className="section-padding relative overflow-hidden bg-secondary/30"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-custom relative">
        <div ref={titleRef} className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest mb-4 block">
            MILESTONES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Achievements & <span className="text-gradient">Recognition</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              {/* Gradient header */}
              <div className="h-2 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              
              <div className="p-8">
                <div className="mb-6 p-4 rounded-xl bg-secondary/50 w-fit group-hover:bg-primary/10 transition-all duration-300">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground font-medium mb-3">
                  {achievement.description}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.details}
                </p>
                
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-primary text-sm font-medium hover:underline"
                  >
                    View Profile →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
