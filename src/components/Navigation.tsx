import { Button } from "@/components/ui/button";
import { Moon, Sun, Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    console.log("Download resume triggered");
    //todo: remove mock functionality - implement actual PDF download
    const link = document.createElement("a");
    link.href = "/assets/sunil.pdf";
    link.download = "Sunil_Kumar_Resume.pdf";
    link.click();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div 
            className="text-xl font-bold cursor-pointer hover-elevate rounded-md px-2 py-1"
            onClick={() => scrollToSection("hero")}
            data-testid="logo-home"
          >
            Sunil Kumar
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`transition-colors hover:text-primary ${
                  activeSection === section.id ? "text-primary" : "text-muted-foreground"
                }`}
                data-testid={`nav-${section.id}`}
              >
                {section.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={downloadResume}
              className="hidden sm:flex"
              data-testid="button-download-resume"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}