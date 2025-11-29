import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const soloProjects = [
  {
    title: 'SKILLSWAP',
    description:
      'A platform where you can create a profile and learn new skills and share your skills with others via video call and chat with any person you like.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'React.js', 'Socket.io', 'JavaScript'],
    github: 'https://github.com/aadi-254/skillSwapper',
    demo: 'https://www.linkedin.com/posts/aditya-makwana-527850280_webdevelopment-fullstack-nodejs-activity-7337338377978929152-YBXC',
    type: 'Full Stack',
  },
  {
    title: 'WhisperLoud',
    description:
      'A complete social media website where people can share their thoughts and interact with the world via post and comment.',
    tech: ['Node.js', 'MySQL', 'EJS', 'GSAP', 'Express.js'],
    github: 'https://github.com/aadi-254/whisperLoud.git',
    demo: 'https://www.linkedin.com/posts/aditya-makwana-527850280_webdevelopment-mentalhealth-whisperloud-ugcPost-7314131660034260992-YlBe',
    type: 'Full Stack',
  },
  {
    title: 'Browser Based OS (AOS)',
    description:
      'A browser-based operating system with basic features of real world OS which helps users to work on same OS at same time.',
    tech: ['React.js', 'Express.js', 'Node.js', 'Socket.io', 'File Management'],
    github: 'https://github.com/aadi-254/BrowserOS-AOS',
    demo: 'https://www.linkedin.com/posts/aditya-makwana-527850280_reactjs-webdevelopment-opensource-activity-7339901589295353857-H_02',
    type: 'Full Stack',
  },
];

const hackathonProjects = [
  {
    title: 'Coastal Threat Detection System',
    description:
      'A comprehensive AI-powered coastal monitoring and threat detection system combining satellite imagery analysis, real-time weather monitoring, and flood risk assessment to protect coastal communities.',
    tech: ['React.js', 'FastAPI', 'Machine Learning', 'AI', 'Google Earth Engine', 'Node.js', 'MySQL'],
    github: 'https://github.com/P47Parzival/Coastal-Threat-Alert-System',
    demo: 'https://www.linkedin.com/posts/pranjal-yadav-4507bb310_hackout2025-daiict-hackathon-ugcPost-7368220399819513856-PV0G',
    type: 'HackOut 2025 - DAIICT',
  },
  {
    title: 'Susap - AI Interview Assistant',
    description:
      'An AI interview assistant that helps users prepare for interviews by providing personalized questions, feedback, and voice conferencing capabilities.',
    tech: ['AI', 'Machine Learning', 'React.js', 'Node.js', 'WebRTC', 'Voice Recognition'],
    github: 'https://github.com/P47Parzival/Susap',
    demo: 'https://www.linkedin.com/posts/aditya-makwana-527850280_hackathon-webdevelopment-ai-activity-7317448443403124736-I6KU',
    type: 'Hackathon Project',
  },
  {
    title: 'Threshold - Urban Planner',
    description:
      'A platform for urban development and service gap analysis, leveraging data-driven insights to improve city planning and resource allocation.',
    tech: ['FastAPI', 'scikit-learn', 'Google Maps API', 'React.js', 'TailwindCSS', 'pandas', 'numpy'],
    github: 'https://github.com/P47Parzival/Threshold-Urban-Planner',
    type: 'NASA Space Hackathon',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const soloTitleRef = useRef<HTMLDivElement>(null);
  const soloCardsRef = useRef<HTMLDivElement>(null);
  const hackathonTitleRef = useRef<HTMLDivElement>(null);
  const hackathonCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Solo projects animations
      gsap.fromTo(
        soloTitleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: soloTitleRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const soloCards = soloCardsRef.current?.children || [];
      gsap.fromTo(
        soloCards,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: soloCardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Hackathon projects animations
      gsap.fromTo(
        hackathonTitleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hackathonTitleRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const hackathonCards = hackathonCardsRef.current?.children || [];
      gsap.fromTo(
        hackathonCards,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hackathonCardsRef.current,
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
        {/* Solo Projects Section */}
        <div ref={soloTitleRef} className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest mb-4 block">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Solo <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my development work, from full-stack applications to creative frontend projects
          </p>
        </div>

        <div ref={soloCardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {soloProjects.map((project) => (
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
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      title="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="View Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
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

        {/* Hackathon Projects Section */}
        <div ref={hackathonTitleRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Team Projects & <span className="text-gradient">Hackathons</span>
            </h2>
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Collaborative projects and hackathon achievements showcasing teamwork and rapid innovation
          </p>
        </div>

        <div ref={hackathonCardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathonProjects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              {/* Gradient header */}
              <div className="h-2 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="font-mono text-primary text-xs tracking-wide">
                      {project.type}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      title="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="View Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
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
