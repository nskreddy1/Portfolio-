import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { SiReact, SiJavascript, SiSpring, SiMysql, SiGit } from "react-icons/si";
import { Coffee } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

export default function AboutSection() {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  const skills: Skill[] = [
    { name: "Java", level: 90, icon: <Coffee />, color: "text-orange-500" },
    { name: "React", level: 85, icon: <SiReact />, color: "text-blue-500" },
    { name: "Spring Boot", level: 88, icon: <SiSpring />, color: "text-green-500" },
    { name: "JavaScript", level: 80, icon: <SiJavascript />, color: "text-yellow-500" },
    { name: "MySQL", level: 75, icon: <SiMysql />, color: "text-blue-600" },
    { name: "Git", level: 85, icon: <SiGit />, color: "text-red-500" }
  ];

  const certifications = [
    "Azure Fundamentals - Microsoft",
    "Frontend Developer React - HackerRank",
    "Database and SQL - Infosys Springboard",
    "Google Cloud Digital Leader - Google"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skill bars
            skills.forEach((skill) => {
              setTimeout(() => {
                setAnimatedValues(prev => ({
                  ...prev,
                  [skill.name]: skill.level
                }));
              }, 500);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A passionate developer with a strong foundation in computer science and hands-on experience 
            in building scalable applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <div className="space-y-6">
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Background</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a Junior Software Engineer at <span className="text-primary font-semibold">Zensar Technologies</span> with a 
                  B.Tech in Computer Science from N.B.K.R Institute of Science and Technology. 
                  I graduated with First Class with Distinction (CGPA: 7.64/10).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise lies in developing RESTful APIs with Spring Boot, creating responsive 
                  user interfaces with React, and implementing microservices architecture. I'm passionate 
                  about writing clean, testable code and following Agile development practices.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" data-testid="interest-travelling">Travelling</Badge>
                  <Badge variant="secondary" data-testid="interest-food">Food</Badge>
                  <Badge variant="secondary" data-testid="interest-learning">Self-improvement</Badge>
                  <Badge variant="secondary" data-testid="interest-coding">Competitive Programming</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div>
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className={`text-lg ${skill.color}`}>{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {animatedValues[skill.name] || 0}%
                        </span>
                      </div>
                      <Progress 
                        value={animatedValues[skill.name] || 0} 
                        className="h-2"
                        data-testid={`skill-${skill.name.toLowerCase()}`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}