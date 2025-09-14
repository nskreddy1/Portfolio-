import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, Coffee } from "lucide-react";
import { useState, useEffect } from "react";
import heroBackground from "@assets/generated_images/Abstract_tech_hero_background_454af2aa.png";

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Junior Software Engineer",
    "Full Stack Developer", 
    "Microservices Architect",
    "React Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Abstract tech background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/50 to-background" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code className="absolute top-20 left-20 h-8 w-8 text-primary/30 animate-pulse" />
        <Coffee className="absolute top-40 right-32 h-6 w-6 text-chart-2/40 animate-bounce" />
        <Github className="absolute bottom-32 left-16 h-10 w-10 text-primary/20 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
                Sunil Kumar
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground min-h-[2em]">
              <span className="border-r-2 border-primary animate-typewriter">
                {roles[currentRole]}
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable microservices with{" "}
            <span className="text-primary font-semibold">Java Spring Boot</span> and{" "}
            <span className="text-primary font-semibold">React</span>.
            Currently crafting innovative solutions at{" "}
            <span className="text-primary font-semibold">Zensar Technologies</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="hover-elevate animate-pulse-glow"
              data-testid="button-view-projects"
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="hover-elevate"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com/SunilKumar2112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-elevate p-3 rounded-full border border-border"
              data-testid="link-github"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/sunilkumarnaraganti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-elevate p-3 rounded-full border border-border"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:Naragantisunilkumar@gmail.com"
              className="hover-elevate p-3 rounded-full border border-border"
              data-testid="link-email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}