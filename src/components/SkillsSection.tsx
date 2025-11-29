import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Three.js'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'PHP', 'Flask', 'FastAPI'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'MongoDB', 'REST APIs', 'Socket.io'],
  },
  {
    title: 'Languages',
    skills: ['JavaScript', 'Python', 'Java', 'C++', 'C'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'GitHub', 'WebRTC', 'Machine Learning', 'EJS'],
  },
  {
    title: 'Problem Solving',
    skills: ['DSA','Leetcode','HackerRank'],
  },
];

export default function SkillsSection() {
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

      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
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
      id="skills"
      className="section-padding relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div ref={titleRef} className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest mb-4 block">
            TECHNICAL SKILLS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I{' '}
            <span className="text-gradient">Work With</span>
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-8 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(185_100%_50%/0.1)] transition-all duration-500 group"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
