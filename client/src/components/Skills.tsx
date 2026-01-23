import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Brand Icon URLs
const brandIconUrls: Record<string, string> = {
  "Python": "https://img.icons8.com/color/1200/python.png",
  "PySpark & Spark SQL": "https://img.icons8.com/color/1200/spark.png",
  "AWS (EC2, S3, Lambda, CaaS)": "https://img.icons8.com/color/1200/amazon-web-services.png",
  "Google Cloud Platform": "https://img.icons8.com/color/1200/google-cloud.png",
  "Docker & Kubernetes": "https://img.icons8.com/color/1200/docker.png",
  "Git & GitHub": "https://img.icons8.com/color/1200/github.png",
  "Databricks & Delta Lake": "https://img.icons8.com/color/1200/databricks.png",
  "Power BI": "https://img.icons8.com/color/1200/power-bi.png",
  "Tableau": "https://img.icons8.com/color/1200/tableau.png",
  "R": "https://img.icons8.com/color/1200/r.png",
  "SQL": "https://img.icons8.com/color/1200/sql.png",
  "Neo4j & Graph DBs": "https://img.icons8.com/color/1200/neo4j.png",
  "C3.ai": "https://img.icons8.com/color/1200/c3-ai.png",
  "Streamlit & Plotly/Dash": "https://img.icons8.com/color/1200/streamlit.png",
  "CI/CD & GitHub Actions": "https://img.icons8.com/color/1200/github.png",
};

// Emoji fallbacks for AI/ML skills
const IconsComponent = {
  Brain: () => <span className="text-2xl">🧠</span>,
  Zap: () => <span className="text-2xl">⚡</span>,
  Database: () => <span className="text-2xl">🗄️</span>,
  MessageSquare: () => <span className="text-2xl">💬</span>,
  TrendingUp: () => <span className="text-2xl">📈</span>,
  Shield: () => <span className="text-2xl">🛡️</span>,
  Palette: () => <span className="text-2xl">🎨</span>,
};

const skillIconMap: Record<string, string | keyof typeof IconsComponent> = {
  "Generative AI & LLMs": "Brain",
  "Agentic Workflows (MCP, A2A)": "Zap",
  "Multi-Agent Systems (MoE)": "Zap",
  "RAG & Vector DBs": "Database",
  "Machine Learning & Deep Learning": "Brain",
  "NLP & Named Entity Recognition": "MessageSquare",
  "Time Series Analysis (Prophet, ARIMA)": "TrendingUp",
  "Python": "Python",
  "PySpark & Spark SQL": "PySpark & Spark SQL",
  "SQL": "SQL",
  "R": "R",
  "Neo4j & Graph DBs": "Neo4j & Graph DBs",
  "Git & GitHub": "Git & GitHub",
  "AWS (EC2, S3, Lambda, CaaS)": "AWS (EC2, S3, Lambda, CaaS)",
  "Databricks & Delta Lake": "Databricks & Delta Lake",
  "Palantir Foundry & AIP": "Shield",
  "C3.ai": "C3.ai",
  "Google Cloud Platform": "Google Cloud Platform",
  "Docker & Kubernetes": "Docker & Kubernetes",
  "CI/CD & GitHub Actions": "CI/CD & GitHub Actions",
  "Power BI": "Power BI",
  "Tableau": "Tableau",
  "Streamlit & Plotly/Dash": "Streamlit & Plotly/Dash",
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
                      const iconKey = skillIconMap[skill.name];
                      const iconUrl = brandIconUrls[skill.name];
                      const isEmojiIcon = iconKey && IconsComponent[iconKey as keyof typeof IconsComponent];
                      const IconComponent = isEmojiIcon ? IconsComponent[iconKey as keyof typeof IconsComponent] : null;
                      
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
                            {iconUrl ? (
                              <img src={iconUrl} alt={skill.name} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300" />
                            ) : IconComponent ? (
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