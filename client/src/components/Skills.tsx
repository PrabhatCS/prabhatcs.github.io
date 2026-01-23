import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const skills = {
  "AI & ML Frameworks": [
    { name: "Generative AI & LLMs", level: 95, icon: "🤖" },
    { name: "Agentic Workflows (MCP, A2A)", level: 92, icon: "🔄" },
    { name: "Multi-Agent Systems (MoE)", level: 90, icon: "👥" },
    { name: "RAG & Vector DBs", level: 88, icon: "🔍" },
    { name: "Machine Learning & Deep Learning", level: 95, icon: "🧠" },
    { name: "NLP & Named Entity Recognition", level: 90, icon: "📝" },
    { name: "Time Series Analysis (Prophet, ARIMA)", level: 85, icon: "📈" },
  ],
  "Programming & Data": [
    { name: "Python", level: 95, icon: "🐍" },
    { name: "PySpark & Spark SQL", level: 90, icon: "⚡" },
    { name: "SQL", level: 90, icon: "🗄️" },
    { name: "R", level: 80, icon: "📊" },
    { name: "Neo4j & Graph DBs", level: 85, icon: "🕸️" },
    { name: "Git & GitHub", level: 88, icon: "🔗" },
  ],
  "Cloud, MLOps & Platforms": [
    { name: "AWS (EC2, S3, Lambda, CaaS)", level: 88, icon: "☁️" },
    { name: "Databricks & Delta Lake", level: 90, icon: "🔥" },
    { name: "Palantir Foundry & AIP", level: 88, icon: "🛡️" },
    { name: "C3.ai", level: 82, icon: "🎯" },
    { name: "Google Cloud Platform", level: 85, icon: "🌐" },
    { name: "Docker & Kubernetes", level: 85, icon: "🐳" },
    { name: "CI/CD & GitHub Actions", level: 85, icon: "🚀" },
  ],
  "Data Visualization & BI": [
    { name: "Power BI", level: 90, icon: "📱" },
    { name: "Tableau", level: 85, icon: "🎨" },
    { name: "Streamlit & Plotly/Dash", level: 88, icon: "⚙️" },
    { name: "Matplotlib & Seaborn", level: 85, icon: "🎭" },
  ],
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
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg border border-primary/10 bg-primary/2 hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
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
                    ))}
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