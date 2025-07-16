import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Users, ShoppingCart, MapPin, Video, Star, Globe } from 'lucide-react';
import { Description } from '@radix-ui/react-toast';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const projects = [
    {
      icon: <Video className="h-8 w-8 text-tech-blue" />,
      title: "SKILLSWAP : Video Streaming SKILL swapping platform",
      description: `A plateform where you can create a profile and learn new skills and share your skills with others via video call and chat with any person you like.`,
      type: "Full Stack",
      tech: ["Node.js", "Express.js", "Full-Stack Development", "JavaScript",  "MySQL", "React.js", "Socket.io", "Web Development"],
      status: "Completed",
      color: "tech-blue",
      links: {
        github: "https://github.com/aadi-254/skillSwapper",
        live: "#"
      }
    },
    {
      icon: <Users className="h-8 w-8 text-tech-green" />,
      title: "WhisperLoud",
      description : `I created an entire Social media website named "Whisperloud" . Where people can share their thoughts and interact with the world via post and comment.`,
      type: "Full Stack",
      tech: ["Node.js", "MySQL","Embedded JavaScript (EJS)", "GreenSock Animation Platform (GSAP)",  "Express.js", "Full-Stack Development"],
      status: "Completed",
      color: "tech-green",
      links: {
        github: "https://github.com/aadi-254/whisperLoud.git",
        live: "#"
      }
    },
    {
      icon: <MapPin className="h-8 w-8 text-tech-purple" />,
      title: "Browser Based OS",
      description: `It's a small Browser based operating system with basic features of real world OS which helps a users to work on same OS at same time.`,
      type: "Full Stack",
      tech: [ "React.js","express js" ,"Node.js", "Socket.io",  "Critical Thinking",  "File Management"],
      status: "Completed",
      color: "tech-purple",
      links: {
        github: "https://github.com/aadi-254/BrowserOS-AOS",
        live: "#"
      }
    },
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: "Game zone",
      description: `In this website, you will find multiple different basic games , like TIC-TAC-TOE, snake-ladder, sudoku, snake, balloon blaster etc.. This website is also helpful to beginner frontend developer student.`,
      type: "Frontend",
      tech: ["Front-End Development", "Critical Thinking", "JavaScript Libraries", "HTML", "Cascading Style Sheets (CSS)"],
      status: "Completed",
      color: "accent",
      links: {
        github: "https://github.com/aadi-254/gameZone",
        live: "#"
      }
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Rate The Players",
      description: `it is a web site , specifically made for cricket lovers. In this you can rate your favourite different players as much as you want . You are not the only one, there are many users who are rating other players and, there is a box which show top 10 highest rated player`,
      type: "Backend",
      tech: ["Front-End Development", "Node.js", "Socket.io", "Express.js"],
      status: "Completed",
      color: "primary",
      links: {
        github: "#",
        live: "#"
      }
    }
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
      id="projects"
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work, from full-stack applications to creative frontend projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                      className="flex-1 border-primary/30 hover:bg-primary/10"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  <Button 
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:shadow-glow"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Templates (E-commerce, Portfolio)",
              "TODO List & Weather App",
              "URL Shortener & Chat App"
            ].map((project, index) => (
              <Card key={index} className="bg-secondary/50 border-border hover:border-primary/30 transition-all duration-300 p-4">
                <CardTitle className="text-sm font-medium text-center">{project}</CardTitle>
              </Card>
            ))}
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-32 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Projects;