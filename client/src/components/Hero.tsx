import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Hero() {
  const { toast } = useToast();

  const handleDownloadCV = () => {
    try {
      // Replace this with the actual path to your CV file once it's added to the public directory
      const cvUrl = "/Prabhat_Chandra_Shukla_CV.pdf";

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
    <section id="about" className="min-h-[calc(100vh-4rem)] flex items-center relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              Prabhat Chandra Shukla
            </span>
          </h1>
          <div className="prose prose-lg dark:prose-invert mb-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              A seasoned Data Science professional with over 12 years of expertise in transforming complex data into actionable insights. 
              Specializing in Machine Learning, NLP, and predictive modeling, I've successfully led numerous projects that bridge the gap 
              between data and business value.
            </p>
            <p className="text-lg text-muted-foreground/80">
              Currently focused on implementing cutting-edge AI solutions and 
              developing scalable machine learning models that drive business growth.
            </p>
          </div>
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
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden md:block"
        >
          <div className="relative w-full aspect-square">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full animate-pulse" />
            <div className="absolute inset-4 bg-gradient-to-tr from-primary/30 to-transparent rounded-full animate-pulse delay-75" />

            {/* Profile Image Container */}
            <div className="relative w-full h-full p-8">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
                <img
                  src="/_MG_8333-removebg-preview.png"
                  alt="Prabhat Chandra Shukla"
                  className="w-full h-full object-cover rounded-full transform transition-transform hover:scale-105 duration-500"
                />
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-background rounded-full px-4 py-2 shadow-lg border border-primary/20"
              >
                <span className="text-sm font-medium text-primary">Data Science Expert</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}