import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card shadow-soft border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">U</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Unity SACCO</h1>
              <p className="text-xs text-muted-foreground">Your Financial Future, Together</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
              About Us
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-smooth font-medium">
              Products
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Join Us
            </Button>
            <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
              Member Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
                About Us
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-smooth font-medium">
                Services
              </a>
              <a href="#products" className="text-foreground hover:text-primary transition-smooth font-medium">
                Products
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Join Us
                </Button>
                <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
                  Member Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};