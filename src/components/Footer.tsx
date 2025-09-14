import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-1 text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by Sunil Kumar</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sunil Kumar. All rights reserved.
          </p>
          
          <p className="text-xs text-muted-foreground">
            Developed with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}