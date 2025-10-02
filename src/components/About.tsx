import { GraduationCap, Code, Database, Globe } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  const expertise = [
    {
      icon: Code,
      title: 'Programming',
      description: 'Python, C++, Java, SQL',
    },
    {
      icon: Database,
      title: 'AI/ML Expertise',
      description: 'Machine Learning, Deep Learning, Data Analysis & Visualization',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'HTML, CSS, JavaScript',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in">
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 gradient-primary rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">B.E. in AIML</span>
                    <br />
                    KLSVDIT, Hallyal
                    <br />
                    Expected Graduation: 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a final-year AIML student, I am deeply passionate about the transformative 
                potential of Artificial Intelligence and Machine Learning. My academic journey 
                has equipped me with a strong foundation in both theoretical concepts and 
                practical applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in developing AI-driven solutions that address real-world challenges, 
                with a particular focus on security, automation, and data-driven decision making.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h4 className="font-semibold mb-3 text-lg">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['Jupyter Notebook', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn'].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="space-y-6 animate-fade-in">
            {expertise.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover-lift glass-card border-none"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 gradient-accent rounded-xl flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 glass-card border-none gradient-primary">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                <p className="opacity-90">
                  Expanding expertise in C++, Data Structures & Algorithms, 
                  and advanced web development services.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
