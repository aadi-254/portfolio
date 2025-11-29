import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Browser Based OS (AOS)',
    description:
      'A browser-based operating system with file management, multi-user collaboration, and real-time synchronization.',
    tech: ['React.js', 'Express.js', 'Node.js', 'Socket.io'],
    github: 'https://github.com/aadi-254/BrowserOS-AOS',
    type: 'Solo Project',
  },
  {
    title: 'SKILLSWAP',
    description:
      'A full-featured platform where users can learn new skills and share expertise through video calls and real-time chat.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'React.js', 'Socket.io'],
    github: 'https://github.com/aadi-254/skillSwapper',
    type: 'Solo Project',
  },
  {
    title: 'WhisperLoud',
    description:
      'A complete social media website where people can share thoughts and interact through posts and comments.',
    tech: ['Node.js', 'MySQL', 'EJS', 'GSAP', 'Express.js'],
    github: 'https://github.com/aadi-254/whisperLoud.git',
    type: 'Solo Project',
  },
  {
    title: 'Coastal Threat Detection',
    description:
      'AI-powered coastal monitoring and threat detection system combining satellite imagery analysis and flood risk assessment.',
    tech: ['React.js', 'FastAPI', 'ML', 'Google Earth Engine'],
    github: 'https://github.com/P47Parzival/Coastal-Threat-Alert-System',
    type: 'HackOut 2025 - DAIICT',
  },
  {
    title: 'Susap - AI Interview Assistant',
    description:
      'AI-powered interview assistant with personalized questions, feedback, and voice conferencing capabilities.',
    tech: ['AI/ML', 'React.js', 'Node.js', 'WebRTC'],
    github: 'https://github.com/P47Parzival/Susap',
    type: 'Team Project',
  },
  {
    title: 'Threshold - Urban Planner',
    description:
      'Platform for urban development and service gap analysis using data-driven insights.',
    tech: ['FastAPI', 'scikit-learn', 'Google Maps API', 'React.js'],
    github: 'https://github.com/P47Parzival/Threshold-Urban-Planner',
    type: 'NASA Space Hackathon',
  },
];

export default function ProjectsSection() {
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
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div ref={titleRef} className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest mb-4 block">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              {/* Gradient header */}
              <div className="h-2 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-primary text-xs tracking-wide">
                    {project.type}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
