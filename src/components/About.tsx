import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Briefcase, Trophy, Code, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement[]>([]);

  const achievements = [
    {
      icon: <Code className="h-8 w-8 text-tech-blue" />,
      title: "LeetCode / HackerRank ",
      description: "Solved 1000+ problems and 5⭐ hackerRank(DSA)",
      details: (
        <>
          JavaScript, Python, Data Structures & Algorithms<br />
          <a href="https://leetcode.com/u/Aditya_Makwana/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">View my LeetCode</a>
        </>
      )
    },
    {
      icon: <Trophy className="h-8 w-8 text-tech-green" />,
      title: "Hackathon Winner",
      description: "Hackathones : 4x Finalist ,1x Winner,7x Participant",
      details: "Recognized for innovation and problem-solving skills"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-tech-purple" />,
      title: "Industry Experience",
      description: "1 Year Internship at iStar Institute",
      details: "April 2024 - March 2025 • Chandkheda, Ahmedabad"
    },
    {
      icon: <Award className="h-8 w-8 text-tech-orange" />,
      title: "Academic Excellence",
      description: "8.76 CPI in Engineering",
      details: "Consistent high performance across semesters"
    }
  ];

  const education = [
    {
      level: "Engineering",
      institution: "Government Engineering College, Gandhinagar",
      branch: "Information Technology",
      duration: "2023 - Present",
      grade: "8.76 CPI",
      status: "Current"
    },
    {
      level: "Higher Secondary",
      institution: "S.N. Vidhyalaya, Surendranagar",
      branch: "Science",
      duration: "2022 - 2023",
      grade: "80.98 PR",
      status: "Completed"
    },
    {
      level: "Secondary",
      institution: "New Shradhdha Vidhyalaya, Limbdi",
      branch: "General",
      duration: "2020 - 2021",
      grade: "98.97 PR",
      status: "Completed"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "15+", color: "tech-blue" },
    { label: (<a href="https://leetcode.com/u/Aditya_Makwana/" target="_blank" rel="noopener noreferrer" className="underline text-tech-green hover:text-tech-green/80">LeetCode Problems</a>), value: "1000+", color: "tech-green" },
    { label: (<a href="https://www.hackerrank.com/profile/adityamakwana254" target="_blank" rel="noopener noreferrer" className="underline text-tech-green hover:text-tech-green/80">Hackerrank</a>), value: "5⭐", color: "tech-green" },
    { label: "Technologies", value: "20+", color: "tech-purple" },
    { label: "Years Learning", value: "2+", color: "tech-orange" }
  ];

  useEffect(() => {
    if (!aboutRef.current) return;

    // Animate achievement cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            rotation: index % 2 === 0 ? -5 : 5
          },
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.2
          }
        );
      }
    });

    // Animate stats
    statsRef.current.forEach((stat, index) => {
      if (stat) {
        gsap.fromTo(stat, 
          {
            opacity: 0,
            scale: 0.8
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.1
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={aboutRef}
      id="about"
      className="py-20 bg-gradient-secondary relative overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I've solved over 1000 problems on DSA (leetcode + hackerrank), maintained an 8.76 CPI, and gained real-world experience 
            through internships and hackathons. I'm passionate about creating innovative web solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              ref={el => statsRef.current[index] = el!}
              className="bg-card border-border text-center p-6 hover:border-primary/50 transition-all duration-300 shadow-card"
            >
              <div className={`text-3xl md:text-4xl font-bold mb-2 text-${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Achievements & Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                ref={el => cardsRef.current[index] = el!}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer shadow-card hover:shadow-primary"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-secondary/50 group-hover:bg-primary/10 transition-all duration-300">
                      {achievement.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {achievement.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{achievement.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 shadow-card"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-secondary/50">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">
                          {edu.level} - {edu.branch}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {edu.institution}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <Badge 
                        variant="secondary"
                        className={`${edu.status === 'Current' ? 'bg-tech-green/20 text-tech-green' : 'bg-tech-blue/20 text-tech-blue'} mb-2`}
                      >
                        {edu.status}
                      </Badge>
                      <div className="text-sm text-muted-foreground">{edu.duration}</div>
                      <div className="text-sm font-semibold text-primary">{edu.grade}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-40 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default About;
