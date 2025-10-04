import { ArrowDown, Sparkles, Code2, Zap } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from '@/assets/profile.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AI Neural Network Background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 tech-bg" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
        
        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 floating">
          <div className="w-20 h-20 border-2 border-primary/30 rotate-45" />
        </div>
        <div className="absolute bottom-40 left-20 floating-delayed">
          <div className="w-16 h-16 border-2 border-accent/30 rounded-full" />
        </div>
        <div className="absolute top-1/2 right-1/4 floating">
          <Sparkles className="w-8 h-8 text-primary/40" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-px w-12 bg-gradient-primary" />
                <p className="text-primary font-semibold text-lg flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Hello, I'm
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Shridhar P Bhovi
              </h1>
              <h2 className="text-2xl md:text-3xl gradient-text font-semibold">
                Final Year AIML Student
              </h2>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Code2 className="w-5 h-5 text-primary" />
                <span>Building AI Solutions</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Passionate about AI and Machine Learning, aiming to contribute to innovative projects 
              that solve real-world problems using AI technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="gradient-primary text-background font-semibold neon-glow group relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                View Projects
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">1+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2026</div>
                <div className="text-sm text-muted-foreground">Graduation</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative group">
              <div className="absolute inset-0 gradient-primary opacity-30 blur-3xl group-hover:opacity-50 transition-opacity duration-500 neon-glow" />
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-primary/50 shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500">
                  <img
                    src={profileImage}
                    alt="Shridhar P Bhovi"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 gradient-accent rounded-2xl opacity-80 animate-pulse neon-glow floating" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-2xl backdrop-blur-sm border border-primary/50 floating-delayed" />
                
                {/* Orbiting elements */}
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-xs text-muted-foreground mb-2">Scroll to explore</span>
          <ArrowDown className="w-6 h-6 text-primary" />
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
