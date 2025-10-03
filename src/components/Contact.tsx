import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I will get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:shridharb998090@gmail.com',
      label: 'shridharb998090@gmail.com',
      color: 'from-red-500 to-orange-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/shridhar-bhovi-14b6b3270',
      label: 'Connect on LinkedIn',
      color: 'from-blue-600 to-blue-400',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Shri-05',
      label: 'View GitHub Profile',
      color: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Let's collaborate on innovative AI/ML projects. Feel free to reach out for 
            opportunities, questions, or just to connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card border-none p-8 hover-lift animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="border-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="border-2"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  required
                  className="border-2 min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full gradient-primary text-background font-semibold neon-glow"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Social Links */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="glass-card border-none p-6 hover-lift group cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 bg-gradient-to-br ${link.color} rounded-xl group-hover:scale-110 transition-transform`}>
                          <link.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{link.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {link.label}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            <Card className="glass-card border-none p-8 gradient-primary neon-glow">
              <div className="text-background">
                <h4 className="text-xl font-bold mb-3">Open to Opportunities</h4>
                <p className="opacity-90 leading-relaxed">
                  Actively seeking internships and full-time positions in AI/ML 
                  engineering, data science, and software development. Let's discuss 
                  how I can contribute to your team!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
