import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Building Agentic AI Systems with Model Context Protocol",
    description: "Deep dive into designing multi-agent ecosystems using MCP, implementing RAG-based memory systems, and optimizing agent routing with Mixture of Experts.",
    date: "Jan 2026",
    category: "AI Architecture",
    link: "https://medium.com/@prabhatcs",
    platform: "Medium",
  },
  {
    title: "LLM Fine-tuning for Domain-Specific Tasks: A Practical Guide",
    description: "Comprehensive guide on fine-tuning large language models for specialized use cases, including data preparation, training strategies, and evaluation metrics.",
    date: "Dec 2025",
    category: "Machine Learning",
    link: "https://medium.com/@prabhatcs",
    platform: "Medium",
  },
  {
    title: "Scaling ML Pipelines with PySpark and Databricks",
    description: "Best practices for building production-grade data pipelines at scale, optimizing Spark jobs, and implementing automated quality checks.",
    date: "Nov 2025",
    category: "Data Engineering",
    link: "https://medium.com/@prabhatcs",
    platform: "Medium",
  },
  {
    title: "Implementing RAG Systems: From Concept to Production",
    description: "Complete walkthrough of building Retrieval-Augmented Generation systems, including vector databases, embeddings, and prompt optimization.",
    date: "Oct 2025",
    category: "LLMs",
    link: "https://medium.com/@prabhatcs",
    platform: "Medium",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
            Latest Articles & Insights
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Sharing my thoughts on AI, machine learning, data engineering, and building scalable systems
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <Badge variant="outline" className="text-xs">
                      {article.platform}
                    </Badge>
                    <Button variant="ghost" size="sm" asChild className="group">
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        Read Article
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="group border-2">
            <a href="https://medium.com/@prabhatcs" target="_blank" rel="noopener noreferrer">
              View All Articles on Medium
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
