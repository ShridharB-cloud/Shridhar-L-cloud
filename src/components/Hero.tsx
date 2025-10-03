import { ArrowDown } from 'lucide-react';
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
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                Shridhar P Bhovi
              </h1>
              <h2 className="text-2xl md:text-3xl gradient-text font-semibold">
                Final Year AIML Student
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Passionate about AI and Machine Learning, aiming to contribute to innovative projects 
              that solve real-world problems using AI technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="gradient-primary text-background font-semibold neon-glow"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative group">
              <div className="absolute inset-0 gradient-primary opacity-30 blur-3xl group-hover:opacity-50 transition-opacity duration-500 neon-glow" />
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-primary/50 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={profileImage}
                    alt="Shridhar P Bhovi"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 gradient-accent rounded-2xl opacity-80 animate-pulse neon-glow" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-2xl backdrop-blur-sm border border-primary/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
