import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credential: "Professional Level",
    skills: ["EC2", "S3", "Lambda", "RDS"],
  },
  {
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2023",
    credential: "Professional Level",
    skills: ["BigQuery", "Dataflow", "Pub/Sub", "Cloud Storage"],
  },
  {
    title: "Databricks Certified Associate",
    issuer: "Databricks",
    date: "2024",
    credential: "Associate Level",
    skills: ["PySpark", "Delta Lake", "MLflow"],
  },
  {
    title: "Advanced Machine Learning Specialization",
    issuer: "Coursera",
    date: "2023",
    credential: "Specialization",
    skills: ["Deep Learning", "NLP", "Computer Vision"],
  },
  {
    title: "Palantir Foundry Certification",
    issuer: "Palantir Technologies",
    date: "2022",
    credential: "Advanced Level",
    skills: ["Data Integration", "Analytics", "Ontology"],
  },
  {
    title: "Microsoft Azure Data Engineer Associate",
    issuer: "Microsoft",
    date: "2023",
    credential: "Associate Level",
    skills: ["Azure Synapse", "Data Factory", "Cosmos DB"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-primary/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
            Certifications & Credentials
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional certifications validating expertise across cloud platforms, data engineering, and machine learning
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Award className="w-6 h-6 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      {cert.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{cert.issuer}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    {cert.credential}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-lg border border-primary/20">
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground text-sm">
                Actively pursuing advanced certifications in AI/ML, maintaining expertise across AWS, Google Cloud, Azure, and emerging technologies. Committed to staying at the forefront of industry innovations.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
