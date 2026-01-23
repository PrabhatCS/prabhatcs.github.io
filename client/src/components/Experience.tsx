import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Yash Technologies Pvt Ltd",
    role: "Lead Data Scientist | AI Architect",
    period: "March 2020 – Present (6+ years)",
    location: "Pune",
    projects: [
      {
        name: "Agentic Translation Ecosystem (MCP & A2A)",
        description: "Architected a multi-agent ecosystem on AWS utilizing Model Context Protocol (MCP) and Mixture of Experts (MoE) for optimized model routing. Implemented RAG-based memory agents and automated quality evaluation systems.",
        tech: ["MCP", "Multi-Agent Systems", "AWS", "OpenSearch", "Vector DBs", "LLMs"],
      },
      {
        name: "LLM-Based Warranty Responsibility Code Assignment",
        description: "Designed and deployed an LLM-driven solution to automatically assign responsibility codes to warranty claims. Analyzed complaint cause/correction text using GPT-4o and specialized models to predict supplier vs. manufacturer liability.",
        tech: ["LLMs", "GPT-4o", "BERT", "Python", "ML Classification"],
      },
      {
        name: "Machine Translation Quality Evaluation (MTQE)",
        description: "Engineered an automated audit system using LLMs and Galileo for real-time quality assessment across five dimensions: fluency, accuracy, terminology, style, and local conventions.",
        tech: ["LLMs", "Vector DBs", "Galileo", "Automated Evaluation"],
      },
      {
        name: "Palantir Foundry Data Engineering & Analytics",
        description: "Engineered high-scale ETL pipelines using PySpark to unify disparate extended warranty datasets. Implemented complex data enrichment logic for telematics and claim analysis.",
        tech: ["Palantir Foundry", "PySpark", "ETL", "Data Engineering"],
      },
      {
        name: "Attachments Parts Forecasting (Time Series)",
        description: "Developed ML-driven forecasting framework using Prophet, ARIMA, and Holt-Winters models. Incorporated historical sales and base-coded attachments with RMSE/MAPE evaluation.",
        tech: ["Prophet", "ARIMA", "Holt-Winters", "Time Series", "Python"],
      },
      {
        name: "Enterprise Data Automation & Business Intelligence",
        description: "Engineered end-to-end data pipelines in Databricks with automated Power BI dashboards. Eliminated 1,100+ manual hours annually across logistics and factory performance reporting.",
        tech: ["Databricks", "Power BI", "PySpark", "ETL", "Automation"],
      },
    ],
  },
  {
    company: "Accenture Solutions Pvt Ltd",
    role: "Sr. Data Scientist",
    period: "July 2018 – Feb 2020",
    location: "Gurgaon",
    projects: [
      {
        name: "GCP-Based ML Prototypes (Google Retail)",
        description: "Architected and deployed end-to-end ML prototypes using Google Cloud Platform to solve high-priority business challenges for Google Retail.",
        tech: ["GCP", "Python", "Machine Learning", "MLOps"],
      },
      {
        name: "Market Basket Analysis",
        description: "Applied Apriori algorithm to identify high-confidence purchasing patterns, optimizing cross-selling and product bundling strategies using Big Query.",
        tech: ["Python", "Apriori Algorithm", "Big Query", "Analytics"],
      },
      {
        name: "Email Send-Time Optimization",
        description: "Developed regression models to predict optimal email dispatch times, maximizing click-through rates and campaign engagement.",
        tech: ["Logistic Regression", "Decision Tree", "Random Forest"],
      },
      {
        name: "User Segmentation (PySpark K-means)",
        description: "Leveraged PySpark K-means to segment millions of site visitors for highly targeted marketing and personalized UX.",
        tech: ["PySpark", "K-means", "Clustering", "Data Analytics"],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground">{exp.period}</p>
                      <p className="text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {exp.projects.map((project, pIndex) => (
                      <div key={pIndex} className="border-l-2 border-primary pl-4">
                        <h4 className="font-medium mb-2">{project.name}</h4>
                        <p className="text-muted-foreground mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, tIndex) => (
                            <Badge key={tIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}