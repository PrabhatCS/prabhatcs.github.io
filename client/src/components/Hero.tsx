import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Hero() {
  const { toast } = useToast();

  const handleDownloadCV = () => {
    try {
      // Updated CV path pointing to the latest resume
      const cvUrl = "/attached_assets/PrabhatDS_2026_.pdf";

      // First check if the CV exists
      fetch(cvUrl)
        .then(response => {
          if (response.ok) {
            window.open(cvUrl, '_blank');
          } else {
            throw new Error('CV file not found');
          }
        })
        .catch(() => {
          toast({
            title: "CV Download Unavailable",
            description: "The CV file is currently being updated. Please try again later or contact me directly.",
            variant: "destructive",
          });
        });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error downloading the CV. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative py-20 md:py-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Greeting */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-primary font-semibold text-lg mb-4"
              >
                Welcome to my portfolio
              </motion.p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-primary/70 text-transparent bg-clip-text">
                  Prabhat Shukla
                </span>
              </h1>
              <p className="text-xl font-semibold text-foreground/90">
                Lead Data Scientist & AI Architect
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-xl">
              <p className="text-lg text-foreground/80 leading-relaxed">
                With 12+ years of experience in Machine Learning, Generative AI, and enterprise-scale data solutions. I specialize in orchestrating Multi-Agent Systems (MCP & MoE) and architecting production-grade MLOps.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I've delivered high-impact AI solutions including a <span className="font-semibold text-primary">$55M+ warranty recovery system</span> for Fortune 500 clients, and I'm passionate about bridging the gap between experimental R&D and production-ready systems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="default" size="lg" asChild className="group">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/prabhatcs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/prabhatcs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="secondary" size="lg" onClick={handleDownloadCV} className="group">
                <FileDown className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-tr from-primary/30 to-transparent rounded-3xl animate-pulse animation-delay-75" />

              {/* Profile Image Container */}
              <div className="relative w-full h-full p-6">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl bg-primary/5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay" />
                  <img
                    src="/img/_MG_8333-removebg-preview.png"
                    alt="Prabhat Shukla"
                    className="w-full h-full object-cover rounded-2xl transform transition-transform hover:scale-110 duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/img/_MG_8333-removebg-preview.png';
                    }}
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-background rounded-full px-6 py-3 shadow-lg border-2 border-primary/30 backdrop-blur-sm"
                >
                  <span className="text-sm font-bold text-primary">12+ Years Experience</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}