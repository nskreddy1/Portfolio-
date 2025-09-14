import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Award, Calendar } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  type: "academic" | "competition" | "event" | "certification";
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: "Zensar Technologies",
      role: "Junior Software Engineer", 
      period: "2025 – Present",
      description: "Developing and maintaining enterprise-level applications with focus on scalability and performance.",
      responsibilities: [
        "Developed and maintained RESTful APIs using Spring Boot, ensuring optimized performance and scalability",
        "Implemented JUnit and Mockito test cases, improving overall code coverage by 80%",
        "Assisted in debugging, troubleshooting, and resolving application defects to maintain production stability",
        "Worked with Git, Maven, and Jenkins for version control and build automation in Agile development cycles",
        "Collaborated with cross-functional teams (QA, Backend, and Business Analysts) to deliver features within sprint timelines"
      ],
      technologies: ["Java", "Spring Boot", "JUnit", "Mockito", "Git", "Maven", "Jenkins"],
      current: true
    }
  ];

  const achievements: Achievement[] = [
    {
      title: "First Class with Distinction",
      description: "Graduated with First Class with Distinction in B.Tech (CSE) with CGPA 7.64/10",
      type: "academic"
    },
    {
      title: "Coffee with Java - 1st Prize",
      description: "Secured 1st Prize in 'Coffee with Java' coding competition conducted by CSI",
      type: "competition"
    },
    {
      title: "Tech Spark - 2nd Prize",
      description: "Secured 2nd Prize in 'Tech Spark' technical event",
      type: "competition"
    },
    {
      title: "Techno Philia - 2nd Prize", 
      description: "Secured 2nd Prize in 'Techno Philia' technical event",
      type: "competition"
    },
    {
      title: "TECHVYUHA Event Leader",
      description: "Organized and led 'TECHVYUHA', a department-level technical event",
      type: "event"
    },
    {
      title: "SRUJANA 2K19 Presenter",
      description: "Presented on Graph Theory at the prestigious SRUJANA 2K19 symposium",
      type: "event"
    },
    {
      title: "Machine Learning SDP",
      description: "Successfully completed a 3-day Machine Learning SDP using Python",
      type: "certification"
    }
  ];

  const getAchievementIcon = (type: Achievement["type"]) => {
    switch (type) {
      case "academic":
        return "🎓";
      case "competition":
        return "🏆";
      case "event":
        return "🎯";
      case "certification":
        return "📜";
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My professional journey and notable accomplishments in software development and academics.
          </p>
        </div>

        <div className="space-y-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Building className="h-6 w-6 mr-2 text-primary" />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover-elevate" data-testid={`experience-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-primary">{exp.role}</h4>
                        <p className="text-lg font-medium">{exp.company}</p>
                        {exp.current && (
                          <Badge variant="default" className="mt-1">Current Role</Badge>
                        )}
                      </div>
                      <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Award className="h-6 w-6 mr-2 text-primary" />
              Achievements & Recognition
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover-elevate" data-testid={`achievement-${index}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{getAchievementIcon(achievement.type)}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}