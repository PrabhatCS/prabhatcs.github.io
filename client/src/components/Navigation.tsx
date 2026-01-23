import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md border-b border-primary/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold hidden sm:inline">Prabhat Shukla</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => {
              const link = document.createElement('a');
              link.href = '/PrabhatDS_2026_.pdf';
              link.download = 'Prabhat_Shukla_Resume.pdf';
              link.click();
            }}>Download CV</Button>
            <Button variant="outline" asChild>
              <a href="https://calendly.com/prabhu3437/30min" target="_blank" rel="noopener noreferrer">
                Book Meeting
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-lg text-foreground/70 hover:text-foreground transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <Button className="mt-4" onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/PrabhatDS_2026_.pdf';
                  link.download = 'Prabhat_Shukla_Resume.pdf';
                  link.click();
                }}>Download CV</Button>
                <Button className="mt-2" variant="outline" asChild>
                  <a href="https://calendly.com/prabhu3437/30min" target="_blank" rel="noopener noreferrer">
                    Book Meeting
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
