import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Video, Users, MapPin, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TeamProjects = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const teamProjects = [
    {
      icon: <Video className="h-8 w-8 text-tech-blue" />,
      title: "Coastal Threat Detection System",
      description: `A comprehensive AI-powered coastal monitoring and threat detection system that combines satellite imagery analysis, real-time weather monitoring, and flood risk assessment to protect coastal communities.`,
      type: "Full Stack",
      tech: ["Node.js", "Express.js", "Full-Stack Development", "JavaScript", "MySQL", "React.js", "Socket.io", "fastAPI", "Machine Learning", "AI", "Google Earth Engine", "python"],
      status: "Completed",
      color: "tech-blue",
      hackathon: "HackOut 2025 - DAIICT",
      links: {
        github: "https://github.com/P47Parzival/Coastal-Threat-Alert-System",
        demo: "https://www.linkedin.com/posts/pranjal-yadav-4507bb310_hackout2025-daiict-hackathon-ugcPost-7368220399819513856-PV0G?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER39-8BCld8FOQYv_lGvkqw2AUz4vpCMNQ"
      }
    },
    {
      icon: <Users className="h-8 w-8 text-tech-green" />,
      title: "Susap - AI Interview Assistant",
      description: `An AI interview assistant that helps users prepare for interviews by providing personalized questions, feedback, and voice conferencing capabilities.`,
      type: "Full Stack",
      tech: ["AI", "Machine Learning", "Voice Recognition", "React.js", "Node.js", "WebRTC"],
      status: "Completed",
      color: "tech-green",
      hackathon: "Hackathon Project",
      links: {
        github: "https://github.com/P47Parzival/Susap",
        demo: "https://www.linkedin.com/posts/aditya-makwana-527850280_hackathon-webdevelopment-ai-activity-7317448443403124736-I6KU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER39-8BCld8FOQYv_lGvkqw2AUz4vpCMNQ"
      }
    },
    {
      icon: <MapPin className="h-8 w-8 text-tech-purple" />,
      title: "Threshold - Urban Development Platform",
      description: `A platform for urban development and service gap analysis, leveraging data-driven insights to improve city planning and resource allocation.`,
      type: "Full Stack",
      tech: ["FastAPI", "motor", "pydantic", "scikit-learn", "pandas", "numpy", "Google Maps API", "React.js", "TailwindCSS"],
      status: "Completed",
      color: "tech-purple",
      hackathon: "Nasa-Space Hackathon",
      links: {
        github: "https://github.com/P47Parzival/Threshold-Urban-Planner",
      }
    },
  ];

  useEffect(() => {
    if (!projectsRef.current) return;

    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 60,
            rotateX: 15
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.15
          }
        );

        // Hover animations
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
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
      ref={projectsRef}
      id="team-projects"
      className="py-20 bg-secondary/30 relative overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-10 w-10 text-tech-orange" />
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Team Projects & Hackathons
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaborative projects and hackathon achievements showcasing teamwork and rapid innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamProjects.map((project, index) => (
            <Card
              key={index}
              ref={el => cardsRef.current[index] = el!}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer shadow-card hover:shadow-primary overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-secondary/50 w-fit group-hover:bg-primary/10 transition-all duration-300">
                    {project.icon}
                  </div>
                  <Badge
                    variant="secondary"
                    className={`${project.status === 'Completed' ? 'bg-tech-green/20 text-tech-green' : 'bg-tech-orange/20 text-tech-orange'}`}
                  >
                    {project.status}
                  </Badge>
                </div>
                {project.hackathon && (
                  <Badge variant="outline" className="mb-3 bg-tech-orange/10 text-tech-orange border-tech-orange/30">
                    <Trophy className="h-3 w-3 mr-1" />
                    {project.hackathon}
                  </Badge>
                )}
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Badge variant="outline" className="mb-3">
                    {project.type}
                  </Badge>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary/20 transition-all duration-300 cursor-pointer text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/30 hover:bg-primary/10"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-gradient-primary hover:shadow-glow"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Background decorations */}
        <div className="absolute top-32 right-20 w-40 h-40 bg-tech-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-56 h-56 bg-tech-purple/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default TeamProjects;
