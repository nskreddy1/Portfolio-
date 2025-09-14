import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar } from "lucide-react";
import ecommerceImage from "@assets/generated_images/E-commerce_platform_mockup_b9cd690a.png";
import cineverseImage from "@assets/generated_images/Cineverse_streaming_platform_mockup_a423882b.png";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  period: string;
  status: "In Progress" | "Completed";
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "E-Commerce Microservices Platform",
      description: "A modular e-commerce platform built with microservices architecture, enabling flexible development and seamless scalability.",
      image: ecommerceImage,
      technologies: ["Java", "Spring Boot", "Spring Cloud", "MySQL", "Eureka Discovery", "RESTful APIs"],
      features: [
        "Product catalog management",
        "User authentication & management", 
        "Shopping cart functionality",
        "Order processing system",
        "Service discovery with Eureka",
        "Unit & integration testing"
      ],
      githubUrl: "#",
      period: "Aug 2025 – Present",
      status: "In Progress"
    },
    {
      title: "Cineverse - Entertainment Platform",
      description: "A user-centric movie & TV show search application with modern React architecture and seamless API integration.",
      image: cineverseImage,
      technologies: ["React", "TypeScript", "Chakra UI", "TMDB API", "React Query"],
      features: [
        "Movie & TV show search",
        "Detailed content information",
        "Responsive design",
        "Real-time data fetching",
        "Optimized performance",
        "User-friendly interface"
      ],
      githubUrl: "#",
      liveUrl: "https://cine-verse-eight.vercel.app",
      period: "Jan 2024 – Feb 2024",
      status: "Completed"
    }
  ];

  const handleProjectClick = (url: string) => {
    console.log(`Navigate to: ${url}`);
    //todo: remove mock functionality - implement actual navigation
    if (url !== "#") {
      window.open(url, "_blank");
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my recent work in full-stack development, microservices architecture, 
            and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate group cursor-pointer transition-all duration-300"
              onClick={() => project.liveUrl && handleProjectClick(project.liveUrl)}
              data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className="bg-background/80 backdrop-blur-sm"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.period}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.githubUrl!);
                      }}
                      className="flex-1"
                      data-testid={`button-github-${index}`}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.liveUrl!);
                      }}
                      className="flex-1"
                      data-testid={`button-live-${index}`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}