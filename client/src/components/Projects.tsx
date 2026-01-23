import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Agentic Translation Ecosystem (MCP & MoE)",
    description: "Multi-agent ecosystem on AWS utilizing Model Context Protocol (MCP) and Mixture of Experts. Achieved 35% reduction in localization turnaround and 90% consistency in technical terminology.",
    tags: ["MCP", "Multi-Agent Systems", "AWS", "LLMs", "RAG", "Vector DBs"],
    impact: "$55M+ value recovered"
  },
  {
    title: "LLM-Based Warranty Responsibility Assignment",
    description: "Automated system using GPT-4o and BERT to assign responsibility codes to warranty claims, analyzing complaint cause/correction text for supplier vs. manufacturer liability prediction.",
    tags: ["LLMs", "GPT-4o", "BERT", "Python", "Machine Learning"],
    impact: "$55M+ recovered from claims"
  },
  {
    title: "Machine Translation Quality Evaluation (MTQE)",
    description: "Automated audit system using LLMs and Galileo for real-time quality assessment across fluency, accuracy, terminology, style, and local conventions with 20% manual effort reduction.",
    tags: ["LLMs", "Vector DBs", "Galileo", "Automation"],
    impact: "20% reduction in QA effort"
  },
  {
    title: "Knowledge Graph Platform",
    description: "NLP platform using Neo4j to visualize entity relationships, perform sentiment analysis, and extract insights from unstructured data.",
    tags: ["Neo4j", "NLP", "Spacy", "Flask", "Graph Databases"],
  },
  {
    title: "Time Series Forecasting & Analytics",
    description: "ML-driven forecasting framework for inventory optimization using Prophet, ARIMA, and Holt-Winters models with high accuracy evaluation metrics.",
    tags: ["Prophet", "ARIMA", "Time Series", "Forecasting", "Python"],
  },
  {
    title: "Conversational AI Chatbot",
    description: "REST API-based chatbot with NER (Named Entity Recognition), weather forecasting, and news summarization capabilities.",
    tags: ["NLTK", "NER", "ChatterBot", "Flask", "Python"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            >
              <Card className="h-full cursor-pointer transition-all duration-300 hover:border-primary/50">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  {project.impact && (
                    <div className="mb-4 p-2 bg-primary/10 rounded border-l-2 border-primary">
                      <p className="text-sm font-medium text-primary">{project.impact}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                        {tag}
                      </Badge>
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