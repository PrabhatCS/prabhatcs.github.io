import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
            Skills & Expertise
          </span>
        </h2>

        <Tabs defaultValue="AI & ML Frameworks" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {Object.keys(skills).map((category) => (
              <TabsTrigger key={category} value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skills).map(([category, skillList]) => (
            <TabsContent key={category} value={category}>
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{category} Skills</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  {skillList.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="space-y-2">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-primary/10" 
                          indicatorClassName="bg-gradient-to-r from-primary to-primary/70"
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  );
}