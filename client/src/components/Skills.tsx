import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Brand Icons as SVG components
const BrandIcons = {
  PythonIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.5 6.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm3 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 9c0-2.209 1.791-4 4-4s4 1.791 4 4h-2c0-1.105-.895-2-2-2s-2 .895-2 2h-2z"/>
    </svg>
  ),
  AWSIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M6.763 6.763h2.294v8.474H6.763zm11.474-1.105c-1.421 0-2.526.789-3.158 1.895.737.79 1.526 1.632 2.211 2.526.894-.632 1.58-1.474 1.58-2.58 0-.947-.789-1.841-2.105-1.841zm-2.316 4.105c-.737-.895-1.632-1.842-2.58-2.526-1.316.842-2.211 2.211-2.211 3.79 0 1.579.895 3.105 2.211 3.895.789-.632 1.526-1.526 2.158-2.526-.526-1.16-.789-2.316-.578-2.633zm5.579.947c-.789 1.789-2.58 3.105-4.684 3.105-2.842 0-5.158-2.316-5.158-5.158 0-2.842 2.316-5.158 5.158-5.158 1.579 0 3.053.737 4.053 1.895V5.658h2.316v11.579h-2.316V12.89c-.526.684-1.053 1.211-1.368 1.474z"/>
    </svg>
  ),
  GCPIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12.48 3.359a3.78 3.78 0 0 0-3.78 3.78h3.78a3.78 3.78 0 0 1 0 7.56H8.7a7.56 7.56 0 1 0 7.56-7.56zm0 0a7.56 7.56 0 0 0-7.56 7.56v3.78h3.78c4.171 0 7.56-3.39 7.56-7.56a7.56 7.56 0 0 0-7.56-7.56z"/>
    </svg>
  ),
  DockerIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M18.287 8.087h-2.064v2.106h2.064zm-4.128 0h-2.064v2.106h2.064zM10.127 8.087H8.063v2.106h2.064zm6.16-2.149H14.223V3.832h2.064zm-4.128 0H10.095V3.832h2.064zm-4.128 0H5.967V3.832h2.064zm8.352 4.255H18.287v2.107h2.064zm0 4.255h2.064v-2.106h-2.064z"/>
    </svg>
  ),
  GitHubIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  DatabricksIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9m3.5 4c.828 0 1.5.672 1.5 1.5S16.328 10 15.5 10 14 9.328 14 8.5s.672-1.5 1.5-1.5m-7 0c.828 0 1.5.672 1.5 1.5S9.328 10 8.5 10 7 9.328 7 8.5 7.672 7 8.5 7m3.5 8c2.485 0 4.5 2.015 4.5 4.5S18.485 24 16 24s-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5z"/>
    </svg>
  ),
  RIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12.002 0c-1.193 0-2.338.104-3.482.302 2.603.847 4.543 3.25 4.543 6.108 0 3.505-2.84 6.345-6.345 6.345-2.858 0-5.261-1.94-6.108-4.543C.104 9.664 0 10.809 0 12.002c0 6.627 5.373 12.002 12.002 12.002s12.002-5.375 12.002-12.002S18.629 0 12.002 0m-3.001 10.348c-1.292 0-2.341-1.049-2.341-2.341 0-1.292 1.049-2.341 2.341-2.341 1.292 0 2.341 1.049 2.341 2.341 0 1.292-1.049 2.341-2.341 2.341z"/>
    </svg>
  ),
  PostgreSQLIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12.93 3c-3.26 0-4.843 1.46-5.503 3.07-.44 1.066-.506 2.302-.454 3.594.026.65.07 1.355.166 2.153H2c-.553 0-1 .418-1 .933v7.814c0 .516.447.934 1 .934h20c.553 0 1-.418 1-.934V12.75c0-.515-.447-.933-1-.933h-5.139c.096-.798.14-1.503.166-2.153.052-1.292-.013-2.528-.454-3.594C16.92 4.46 15.337 3 12.07 3"/>
    </svg>
  ),
  PowerBIIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
  TableauIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/>
    </svg>
  ),
  Neo4jIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
    </svg>
  ),
  SparkIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M13 2h-2v7h2V2zm4.82 3.18l-1.41 1.41c.73.73 1.35 1.59 1.76 2.41h2.41c-.66-1.67-1.79-3.12-3.26-4.12l1.41-1.41-1.91-1.91zm-9.64 0L2.77 7.27c-1.47.99-2.6 2.45-3.26 4.12h2.41c.41-.82 1.03-1.68 1.76-2.41L4.27 7.57 2.36 5.66l1.41-1.41 1.91 1.91zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
    </svg>
  ),
  StreamlitIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm-1 5h2v6h-2V9zm-3 0h2v6H8V9zm6 0h2v6h-2V9z"/>
    </svg>
  ),
  C3AIIcon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <text x="12" y="16" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor">C3</text>
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