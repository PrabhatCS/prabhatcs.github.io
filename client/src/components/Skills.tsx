import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const skills = {
  "Data Science": [
    { name: "Machine Learning", level: 95 },
    { name: "Generative AI", level: 92 },
    { name: "Agentic AI", level: 88 },
    { name: "Natural Language Processing", level: 90 },
    { name: "Deep Learning", level: 85 },
    { name: "Data Visualization", level: 90 },
    { name: "Predictive Modeling", level: 92 },
  ],
  "Programming": [
    { name: "Python", level: 95 },
    { name: "PySpark", level: 85 },
    { name: "R", level: 80 },
    { name: "SQL", level: 90 },
  ],
  "Cloud & Tools": [
    { name: "Google Cloud", level: 85 },
    { name: "Azure", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Power BI", level: 90 },
    { name: "Databricks", level: 85 },
    { name: "Palantir Foundry", level: 88 },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
            Skills & Expertise
          </span>
        </h2>

        <Tabs defaultValue="Data Science" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
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