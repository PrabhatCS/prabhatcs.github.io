import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

export default function Hero() {
  const handleDownloadCV = () => {
    // Replace with your CV file URL
    const cvUrl = "path_to_your_cv.pdf";
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="about" className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              Prabhat Chandra Shukla
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A dedicated data science professional with 12+ years of experience in machine learning,
            NLP, and predictive modeling. Based in Bhopal, India.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" /> Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/prabhatcs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://github.com/prabhatcs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" /> GitHub
              </a>
            </Button>
            <Button variant="secondary" size="lg" onClick={handleDownloadCV}>
              <FileDown className="mr-2 h-5 w-5" /> Download CV
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-primary/20 to-primary/10 p-8">
            {/* Add your professional photo here */}
            <img
              src="/profile-photo.jpg"
              alt="Prabhat Chandra Shukla"
              className="w-full h-full object-cover rounded-full border-4 border-background"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}