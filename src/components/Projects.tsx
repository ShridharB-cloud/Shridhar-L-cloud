import { Shield, ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import projectImage from '@/assets/project-security.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Based Vulnerability Scanner',
      description:
        'Developed an intelligent tool that detects common website security flaws using advanced AI and machine learning algorithms. The system helps developers identify vulnerabilities early in the development cycle, improving overall application security and reducing potential attack vectors.',
      image: projectImage,
      technologies: ['Python', 'Machine Learning', 'Security Analysis', 'TensorFlow'],
      icon: Shield,
      features: [
        'Automated vulnerability detection',
        'Real-time security analysis',
        'Comprehensive reporting system',
        'ML-powered threat identification',
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold mb-2 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary" />
            MY WORK
            <span className="w-8 h-px bg-primary" />
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing innovative AI/ML solutions that address real-world challenges
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card border-none overflow-hidden hover-lift animate-fade-in perspective-card group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-10 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
                  
                  <div className="flex items-center space-x-3 mb-4 relative z-10">
                    <div className="p-2 gradient-primary rounded-lg neon-glow group-hover:scale-110 transition-transform">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">▸</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button className="gradient-primary text-background font-semibold neon-glow">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* More Projects Coming Soon */}
          <Card className="glass-card border-2 border-dashed border-primary/30 p-12 text-center hover-lift">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                <span className="text-2xl text-background font-bold">+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">More Projects Coming Soon</h3>
              <p className="text-muted-foreground">
                Currently working on exciting new AI/ML projects. Stay tuned for updates!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
