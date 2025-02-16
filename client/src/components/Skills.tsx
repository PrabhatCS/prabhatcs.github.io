import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const skills = {
  "Data Science": [
    { name: "Machine Learning", level: 95 },
    { name: "Natural Language Processing", level: 90 },
    { name: "Deep Learning", level: 85 },
    { name: "Data Visualization", level: 90 },
    { name: "Predictive Modeling", level: 92 },
  ],
  "Programming": [
    { name: "Python", level: 95 },
    { name: "PySpark", level: 85 },
    { name: "R", level: 80 },
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
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>

        <Tabs defaultValue="Data Science" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {Object.keys(skills).map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skills).map(([category, skillList]) => (
            <TabsContent key={category} value={category}>
              <Card>
                <CardHeader>
                  <CardTitle>{category} Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skillList.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
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