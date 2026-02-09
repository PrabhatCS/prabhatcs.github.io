import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Hero() {
  const { toast } = useToast();

  const handleDownloadCV = () => {
    try {
      // Updated CV path pointing to the latest resume
      const cvUrl = "/PrabhatDS_2026_.pdf";

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
    <section id="about" className="min-h-screen flex items-center justify-center relative py-20 md:py-0 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(0deg,transparent_24%,rgba(255,0,0,.05)_25%,rgba(255,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(255,0,0,.05)_75%,rgba(255,0,0,.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,0,0,.05)_25%,rgba(255,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(255,0,0,.05)_75%,rgba(255,0,0,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12 items-start lg:items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content - 60% width */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-2 lg:col-span-2 space-y-8 py-8 lg:py-0"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors">
                <span className="relative inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
                Available for new opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold leading-tight mb-6">
                Hi, I'm{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary text-transparent bg-clip-text">
                    Prabhat Shukla
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-foreground/90 leading-snug">
                Lead Data Scientist & AI Architect
              </p>
            </div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {["Generative AI", "LLMs", "MLOps", "AWS", "Python", "Databricks"].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs md:text-sm font-medium text-primary/80 hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Description - Concise */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
                12+ years building AI/ML solutions for Fortune 500 companies
              </p>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                Specialized in orchestrating Multi-Agent Systems, architecting production-grade MLOps, and delivering <span className="font-semibold text-primary">$55M+ impact</span> through intelligent data solutions.
              </p>
            </div>

            {/* CTA Buttons - Improved Layout */}
            <div className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" asChild className="group shadow-lg hover:shadow-xl transition-all">
                  <a href="#contact" className="flex items-center justify-center">
                    <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Get In Touch
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="group border-2 border-primary hover:bg-primary/5 hover:border-primary transition-all shadow-md">
                  <a href="https://calendly.com/prabhu3437/30min" target="_blank" rel="noopener noreferrer">
                    <svg className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book a Meeting
                  </a>
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button variant="ghost" size="sm" asChild className="group">
                  <a href="https://www.linkedin.com/in/prabhatcs" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="group">
                  <a href="https://github.com/prabhatcs" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Image - 40% width */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden md:flex md:col-span-1 justify-center items-start md:pt-8"
          >
            <div className="relative w-full max-w-sm aspect-square group">
              {/* Glassmorphism Background */}
              <motion.div
                className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Image Container with Glass Effect */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl p-3 hover:shadow-primary/30 transition-all duration-500">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10" />
                
                {/* Image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/img/profile.png"
                    alt="Prabhat Shukla"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/img/profile.png';
                    }}
                  />
                </div>
              </div>

              {/* Floating Badge - Repositioned */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-primary/70 rounded-full px-5 py-2 shadow-xl border border-white/20 backdrop-blur-md text-white font-bold text-center text-xs sm:text-sm"
              >
                <div>12+ Years</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-foreground/50 font-medium uppercase tracking-wider">Scroll to explore</p>
            <svg
              className="w-5 h-5 text-foreground/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}