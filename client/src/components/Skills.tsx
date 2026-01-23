import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Simple Icon components
const IconsComponent = {
  Brain: () => <span className="text-2xl">🧠</span>,
  Zap: () => <span className="text-2xl">⚡</span>,
  Database: () => <span className="text-2xl">🗄️</span>,
  MessageSquare: () => <span className="text-2xl">💬</span>,
  TrendingUp: () => <span className="text-2xl">📈</span>,
  Shield: () => <span className="text-2xl">🛡️</span>,
  Palette: () => <span className="text-2xl">🎨</span>,
  Python: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5.75C6.146.75 1.25 5.146 1.25 11.5c0 5.528 3.752 10.237 8.906 11.291v-2.25A6.252 6.252 0 1 1 18.75 11.5h2.25C21 5.146 16.354.75 12.5.75zm-4.25 4.25h3v2.25h-3zm5 0h3v2.25h-3z"/>
    </svg>
  ),
  Spark: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2h-2v7h2V2zm4.82 3.18l-1.41 1.41c.73.73 1.35 1.59 1.76 2.41h2.41c-.66-1.67-1.79-3.12-3.26-4.12l1.41-1.41-1.91-1.91zm-9.64 0L2.77 7.27c-1.47.99-2.6 2.45-3.26 4.12h2.41c.41-.82 1.03-1.68 1.76-2.41L4.27 7.57 2.36 5.66l1.41-1.41 1.91 1.91zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
    </svg>
  ),
  AWS: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.763 8c0 .69.56 1.25 1.25 1.25.69 0 1.25-.56 1.25-1.25 0-.69-.56-1.25-1.25-1.25-.69 0-1.25.56-1.25 1.25zm6 0c0 .69.56 1.25 1.25 1.25.69 0 1.25-.56 1.25-1.25 0-.69-.56-1.25-1.25-1.25-.69 0-1.25.56-1.25 1.25zm6 0c0 .69.56 1.25 1.25 1.25.69 0 1.25-.56 1.25-1.25 0-.69-.56-1.25-1.25-1.25-.69 0-1.25.56-1.25 1.25z"/>
    </svg>
  ),
  GCP: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.29 7.86h-2.07v2.11h2.07V7.86zM16.22 5.71h-2.07v2.15h2.07V5.71zm-4.14 2.15h-2.08v2.11h2.08V7.86zm-2.08-2.15v2.15h2.08V5.71h-2.08zM8 5.71H5.93v2.15H8V5.71zm10.29 4.26h2.07v2.11h-2.07v-2.11zm0 4.25h2.07v-2.1h-2.07v2.1z"/>
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Databricks: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="4" height="4" rx="0.5"/>
      <rect x="9" y="3" width="4" height="4" rx="0.5"/>
      <rect x="15" y="3" width="4" height="4" rx="0.5"/>
      <rect x="3" y="9" width="4" height="4" rx="0.5"/>
      <rect x="9" y="9" width="4" height="4" rx="0.5"/>
      <rect x="15" y="9" width="4" height="4" rx="0.5"/>
      <rect x="6" y="15" width="4" height="4" rx="0.5"/>
      <rect x="12" y="15" width="4" height="4" rx="0.5"/>
    </svg>
  ),
  Neo4j: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="2.5"/>
      <circle cx="18" cy="6" r="2.5"/>
      <circle cx="12" cy="16" r="2.5"/>
      <line x1="7.5" y1="7.5" x2="10.5" y2="14.5" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="16.5" y1="7.5" x2="13.5" y2="14.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  R: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3h12c1.66 0 3 1.34 3 3v12c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3V6c0-1.66 1.34-3 3-3zm6 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-2-8c.83 0 1.5-.67 1.5-1.5S10.83 6 10 6 8.5 6.67 8.5 7.5 9.17 9 10 9z"/>
    </svg>
  ),
  PowerBI: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="8" height="8" rx="1"/>
      <rect x="14" y="2" width="8" height="8" rx="1"/>
      <rect x="2" y="14" width="8" height="8" rx="1"/>
      <rect x="14" y="14" width="8" height="8" rx="1"/>
    </svg>
  ),
  Tableau: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="5" height="5" rx="0.5"/>
      <rect x="9" y="2" width="5" height="5" rx="0.5"/>
      <rect x="16" y="2" width="5" height="5" rx="0.5"/>
      <rect x="2" y="9" width="5" height="5" rx="0.5"/>
      <rect x="9" y="9" width="5" height="5" rx="0.5"/>
      <rect x="16" y="9" width="5" height="5" rx="0.5"/>
      <rect x="2" y="16" width="5" height="5" rx="0.5"/>
      <rect x="9" y="16" width="5" height="5" rx="0.5"/>
      <rect x="16" y="16" width="5" height="5" rx="0.5"/>
    </svg>
  ),
  Streamlit: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm-1 5h2v6h-2V9zm-3 0h2v6H8V9zm6 0h2v6h-2V9z"/>
    </svg>
  ),
  C3AI: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="2"/>
      <circle cx="16" cy="8" r="2"/>
      <path d="M12 16c2.21 0 4-1.79 4-4"/>
    </svg>
  ),
};

const skillIconMap: Record<string, keyof typeof IconsComponent> = {
  "Generative AI & LLMs": "Brain",
  "Agentic Workflows (MCP, A2A)": "Zap",
  "Multi-Agent Systems (MoE)": "Zap",
  "RAG & Vector DBs": "Database",
  "Machine Learning & Deep Learning": "Brain",
  "NLP & Named Entity Recognition": "MessageSquare",
  "Time Series Analysis (Prophet, ARIMA)": "TrendingUp",
  "Python": "Python",
  "PySpark & Spark SQL": "Spark",
  "SQL": "Database",
  "R": "R",
  "Neo4j & Graph DBs": "Neo4j",
  "Git & GitHub": "GitHub",
  "AWS (EC2, S3, Lambda, CaaS)": "AWS",
  "Databricks & Delta Lake": "Databricks",
  "Palantir Foundry & AIP": "Shield",
  "C3.ai": "C3AI",
  "Google Cloud Platform": "GCP",
  "Docker & Kubernetes": "Docker",
  "CI/CD & GitHub Actions": "GitHub",
  "Power BI": "PowerBI",
  "Tableau": "Tableau",
  "Streamlit & Plotly/Dash": "Streamlit",
  "Matplotlib & Seaborn": "Palette",
};

const skills = {
  "AI & ML Frameworks": [
    { name: "Generative AI & LLMs", level: 95 },
    { name: "Agentic Workflows (MCP, A2A)", level: 92 },
    { name: "Multi-Agent Systems (MoE)", level: 90 },
    { name: "RAG & Vector DBs", level: 88 },
    { name: "Machine Learning & Deep Learning", level: 95 },
    { name: "NLP & Named Entity Recognition", level: 90 },
    { name: "Time Series Analysis (Prophet, ARIMA)", level: 85 },
  ],
  "Programming & Data": [
    { name: "Python", level: 95 },
    { name: "PySpark & Spark SQL", level: 90 },
    { name: "SQL", level: 90 },
    { name: "R", level: 80 },
    { name: "Neo4j & Graph DBs", level: 85 },
    { name: "Git & GitHub", level: 88 },
  ],
  "Cloud, MLOps & Platforms": [
    { name: "AWS (EC2, S3, Lambda, CaaS)", level: 88 },
    { name: "Databricks & Delta Lake", level: 90 },
    { name: "Palantir Foundry & AIP", level: 88 },
    { name: "C3.ai", level: 82 },
    { name: "Google Cloud Platform", level: 85 },
    { name: "Docker & Kubernetes", level: 85 },
    { name: "CI/CD & GitHub Actions", level: 85 },
  ],
  "Data Visualization & BI": [
    { name: "Power BI", level: 90 },
    { name: "Tableau", level: 85 },
    { name: "Streamlit & Plotly/Dash", level: 88 },
    { name: "Matplotlib & Seaborn", level: 85 },
  ],
};

const getIconEmoji = (iconName: string): string => {
  const emojiMap: Record<string, string> = {
    Brain: "🧠",
    Zap: "⚡",
    Database: "🗄️",
    MessageSquare: "💬",
    TrendingUp: "📈",
    Shield: "🛡️",
    Palette: "🎨",
  };
  return emojiMap[iconName] || "⭐";
};

const CircularProgress = ({ level }: { level: number }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg width="96" height="96" className="transform -rotate-90">
        <circle
          cx="48"
          cy="48"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          className="text-primary/20"
        />
        <motion.circle
          cx="48"
          cy="48"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-primary"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-foreground">{level}%</span>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-transparent via-primary/2 to-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across AI/ML, Data Engineering, Cloud Platforms, and Data Visualization
          </p>
        </div>

        <Tabs defaultValue="AI & ML Frameworks" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {Object.keys(skills).map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.split(" & ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skills).map(([category, skillList]) => (
            <TabsContent key={category} value={category}>
              <Card className="border-primary/20 bg-gradient-to-br from-background via-primary/5 to-background">
                <CardHeader>
                  <CardTitle className="text-2xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skillList.map((skill, index) => {
                      const iconName = skillIconMap[skill.name];
                      const IconComponent = iconName ? IconsComponent[iconName] : null;
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="flex flex-col items-center gap-3 p-4 rounded-lg border border-primary/10 bg-primary/2 hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                        >
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center text-primary">
                            {IconComponent ? (
                              <IconComponent />
                            ) : (
                              <span className="text-2xl">⭐</span>
                            )}
                          </div>
                          <CircularProgress level={skill.level} />
                          <p className="text-center text-sm font-medium leading-tight line-clamp-2">
                            {skill.name}
                          </p>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              skill.level >= 90 ? "border-primary bg-primary/10" :
                              skill.level >= 85 ? "border-primary/70 bg-primary/5" :
                              "border-primary/50"
                            }`}
                          >
                            {skill.level >= 90 ? "Expert" : skill.level >= 85 ? "Advanced" : "Proficient"}
                          </Badge>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-lg border border-primary/20"
        >
          <h3 className="font-bold text-lg mb-3">Proficiency Levels</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span>Expert: 90%+ Mastery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary/70"></div>
              <span>Advanced: 85-89% Proficiency</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary/50"></div>
              <span>Proficient: 80%+ Knowledge</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}