import { Code2, Brain, Database, Globe, Terminal, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C++', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      category: 'AI/ML Technologies',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Deep Learning', level: 80 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Data Analysis', level: 85 },
      ],
    },
    {
      category: 'Web Technologies',
      icon: Globe,
      skills: [
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 75 },
      ],
    },
  ];

  const tools = [
    { name: 'Jupyter Notebook', icon: Terminal },
    { name: 'Pandas', icon: Database },
    { name: 'NumPy', icon: Sparkles },
    { name: 'Scikit-learn', icon: Brain },
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive skillset spanning AI/ML, programming, and web development
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-card border-none p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 gradient-accent rounded-lg">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-primary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">Tools & Frameworks</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="glass-card border-none p-6 text-center hover-lift group"
              >
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-medium text-sm">{tool.name}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Focus */}
        <Card className="mt-12 glass-card border-none p-8 text-center gradient-primary neon-glow">
          <div className="max-w-2xl mx-auto text-background">
            <h3 className="text-2xl font-bold mb-3">Continuous Learning</h3>
            <p className="opacity-90">
              Currently expanding expertise in Data Structures & Algorithms 
              and advanced AI/ML techniques to build innovative solutions.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
