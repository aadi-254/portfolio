import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Zap, Trophy, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const skills = [
    {
      icon: <Code className="h-8 w-8 text-tech-blue" />,
      title: "Full-Stack Development",
      description: "Building complete web applications from frontend to backend",
      skills: ["React.js", "Node.js", "Express.js", "Three.js", "JavaScript", "HTML/CSS"],
      color: "tech-blue"
    },
    {
      icon: <Database className="h-8 w-8 text-tech-green" />,
      title: "Database & Backend",
      description: "Designing and managing robust database systems",
      skills: ["MySQL", "MongoDB", "PHP", "AJAX", "REST APIs"],
      color: "tech-green"
    },
    {
      icon: <Globe className="h-8 w-8 text-tech-purple" />,
      title: "Web Technologies",
      description: "Modern web development with latest frameworks",
      skills: ["Tailwind CSS", "Bootstrap", "Next.js", "Responsive Design"],
      color: "tech-purple"
    },
    {
      icon: <Zap className="h-8 w-8 text-tech-orange" />,
      title: "Programming Languages",
      description: "Versatile programming skills across multiple languages",
      skills: ["JavaScript", "Java", "Python", "C++", "C"],
      color: "tech-orange"
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Problem Solving & DSA",
      description: "Strong algorithmic thinking and problem-solving skills",
      skills: ["600+ LeetCode Problems", "Data Structures", "Algorithms", "Rank 85,000"],
      color: "primary"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      title: "Additional Skills",
      description: "Computer science fundamentals and emerging technologies",
      skills: ["Operating Systems", "Computer Networking", "3D Web Development"],
      color: "accent"
    }
  ];

  useEffect(() => {
    if (!skillsRef.current) return;

    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          {
            opacity: 0,
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.1
          }
        );

        // Hover animations
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={skillsRef}
      id="skills"
      className="py-20 bg-gradient-secondary relative overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            What I Can Do?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              ref={el => cardsRef.current[index] = el!}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer shadow-card hover:shadow-primary"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 p-3 rounded-lg bg-secondary/50 w-fit group-hover:bg-primary/10 transition-all duration-300">
                  {skill.icon}
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary/20 transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default Skills;