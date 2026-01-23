import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Brand Icons as SVG components
const BrandIcons = {
  PythonIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="6" cy="8" r="2"/>
      <circle cx="18" cy="8" r="2"/>
      <path d="M6 10c0 4 2 6 6 6s6-2 6-6"/>
    </svg>
  ),
  AWSIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12.5c0-.83.67-1.5 1.5-1.5.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.83 0-1.5-.67-1.5-1.5zm5-3c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 0c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2z"/>
    </svg>
  ),
  GCPIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="11" r="3.5"/>
      <circle cx="17" cy="13" r="4"/>
      <path d="M7 11c0-2 1.5-3.5 3.5-3.5"/>
      <path d="M17 13c0-2.5 2-4.5 4.5-4.5"/>
    </svg>
  ),
  DockerIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 8l2-1.5 2 1.5 2-1.5 2 1.5 2-1.5 2 1.5 2-1.5 1.5 1.5V10l-1.5 1.5h-14L3.5 10V8zm0 4l2-1.5 2 1.5 2-1.5 2 1.5 2-1.5 2 1.5 2-1.5 1.5 1.5v2l-1.5 1.5h-14L3.5 14v-2zm0 4l2-1.5 2 1.5 2-1.5 2 1.5 2-1.5 2 1.5 2-1.5 1.5 1.5v2l-1.5 1.5h-14L3.5 18v-2z"/>
    </svg>
  ),
  GitHubIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.547 2.914 1.186.092-.923.35-1.547.636-1.903-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.268.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.139 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  ),
  DatabricksIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="4" height="4" rx="1"/>
      <rect x="9" y="4" width="4" height="4" rx="1"/>
      <rect x="15" y="4" width="4" height="4" rx="1"/>
      <rect x="3" y="10" width="4" height="4" rx="1"/>
      <rect x="9" y="10" width="4" height="4" rx="1"/>
      <rect x="15" y="10" width="4" height="4" rx="1"/>
      <rect x="6" y="16" width="4" height="4" rx="1"/>
      <rect x="12" y="16" width="4" height="4" rx="1"/>
    </svg>
  ),
  RIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h8m0 2H8v12h8V6m-2 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
    </svg>
  ),
  PowerBIIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="8" height="8" rx="1"/>
      <rect x="14" y="2" width="8" height="8" rx="1"/>
      <rect x="2" y="14" width="8" height="8" rx="1"/>
      <rect x="14" y="14" width="8" height="8" rx="1"/>
    </svg>
  ),
  TableauIcon: () => (
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
  Neo4jIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="2.5"/>
      <circle cx="18" cy="6" r="2.5"/>
      <circle cx="12" cy="16" r="2.5"/>
      <line x1="7.5" y1="7.5" x2="10.5" y2="14.5" stroke="currentColor" strokeWidth="1"/>
      <line x1="16.5" y1="7.5" x2="13.5" y2="14.5" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  SparkIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9m0 3c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"/>
    </svg>
  ),
  StreamlitIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm-3 0h2v6H8zm6 0h2v6h-2z"/>
    </svg>
  ),
  C3AIIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
    </svg>
  ),
};

const skillIcons: Record<string, any> = {
  "Generative AI & LLMs": "Brain",
  "Agentic Workflows (MCP, A2A)": "Zap",
  "Multi-Agent Systems (MoE)": "CPU",
  "RAG & Vector DBs": "Database",
  "Machine Learning & Deep Learning": "Brain",
  "NLP & Named Entity Recognition": "MessageSquare",
  "Time Series Analysis (Prophet, ARIMA)": "TrendingUp",
  "Python": BrandIcons.PythonIcon,
  "PySpark & Spark SQL": BrandIcons.SparkIcon,
  "SQL": "Database",
  "R": BrandIcons.RIcon,
  "Neo4j & Graph DBs": BrandIcons.Neo4jIcon,
  "Git & GitHub": BrandIcons.GitHubIcon,
  "AWS (EC2, S3, Lambda, CaaS)": BrandIcons.AWSIcon,
  "Databricks & Delta Lake": BrandIcons.DatabricksIcon,
  "Palantir Foundry & AIP": "Shield",
  "C3.ai": BrandIcons.C3AIIcon,
  "Google Cloud Platform": BrandIcons.GCPIcon,
  "Docker & Kubernetes": BrandIcons.DockerIcon,
  "CI/CD & GitHub Actions": BrandIcons.GitHubIcon,
  "Power BI": BrandIcons.PowerBIIcon,
  "Tableau": BrandIcons.TableauIcon,
  "Streamlit & Plotly/Dash": BrandIcons.StreamlitIcon,
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
    CPU: "💻",
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
                      const iconKey = skillIcons[skill.name];
                      const isSVGComponent = typeof iconKey === 'function';
                      
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
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                            {isSVGComponent ? (
                              <div className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                                {iconKey && iconKey()}
                              </div>
                            ) : (
                              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                {getIconEmoji(iconKey)}
                              </span>
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