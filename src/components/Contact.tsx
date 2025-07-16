import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactCardsRef = useRef<HTMLDivElement[]>([]);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-tech-blue" />,
      title: "Email",
      value: "aditya.makwana@example.com",
      description: "Feel free to reach out anytime",
      link: "mailto:aditya.makwana@example.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-tech-green" />,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      description: "Available for calls",
      link: "tel:+91XXXXXXXXX"
    },
    {
      icon: <MapPin className="h-6 w-6 text-tech-purple" />,
      title: "Location",
      value: "Gandhinagar, Gujarat",
      description: "Available for local meetings",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      url: "https://github.com/adityamakwana",
      color: "hover:bg-tech-blue/20"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/adityamakwana",
      color: "hover:bg-tech-green/20"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      url: "https://twitter.com/adityamakwana",
      color: "hover:bg-tech-purple/20"
    }
  ];

  useEffect(() => {
    if (!contactRef.current) return;

    // Animate contact cards
    contactCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          {
            opacity: 0,
            y: 50,
            scale: 0.9
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
            delay: index * 0.15
          }
        );
      }
    });

    // Animate form
    if (formRef.current) {
      gsap.fromTo(formRef.current, 
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          delay: 0.3
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section 
      ref={contactRef}
      id="contact"
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  ref={el => contactCardsRef.current[index] = el!}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer shadow-card"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-secondary/50 group-hover:bg-primary/10 transition-all duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {info.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={info.link}
                      className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                    >
                      {info.value}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-secondary ${social.color} transition-all duration-300 hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Send Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-secondary border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-secondary border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-secondary border-border focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-secondary border-border focus:border-primary resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Contact;