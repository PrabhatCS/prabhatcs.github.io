import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Star, Code2, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

const topProjects = [
  {
    name: "AI-Powered Data Pipeline",
    description: "End-to-end machine learning pipeline with automated feature engineering and model deployment",
    stars: 245,
    forks: 42,
    language: "Python",
    topics: ["ML", "ETL", "Automation"],
  },
  {
    name: "LLM Context Manager",
    description: "Efficient context window management for large language models with vector caching",
    stars: 189,
    forks: 31,
    language: "Python",
    topics: ["LLMs", "RAG", "Performance"],
  },
  {
    name: "Real-time Analytics Dashboard",
    description: "High-performance dashboard for streaming data visualization using WebSockets",
    stars: 156,
    forks: 28,
    language: "TypeScript",
    topics: ["React", "Streaming", "D3.js"],
  },
  {
    name: "NLP Entity Recognition System",
    description: "Advanced NER system with custom entity types and confidence scoring",
    stars: 128,
    forks: 22,
    language: "Python",
    topics: ["NLP", "BERT", "spaCy"],
  },
  {
    name: "Time Series Forecasting Library",
    description: "Comprehensive library for univariate and multivariate time series prediction",
    stars: 98,
    forks: 17,
    language: "Python",
    topics: ["Forecasting", "Prophet", "ARIMA"],
  },
  {
    name: "Graph Database Explorer",
    description: "Interactive tool for querying and visualizing graph databases",
    stars: 76,
    forks: 14,
    language: "JavaScript",
    topics: ["Neo4j", "Visualization", "Graph DB"],
  },
];

const stats = [
  { label: "Repositories", value: "45+", icon: Code2 },
  { label: "Total Stars", value: "892", icon: Star },
  { label: "Contributions", value: "1,200+", icon: GitFork },
];

export default function GitHubContributions() {
  return (
    <section id="github" className="py-24 bg-gradient-to-b from-transparent via-primary/2 to-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
            GitHub Contributions
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Open source projects and active contributions to the developer community
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:border-primary/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Top Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Top Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {topProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Github className="w-5 h-5 text-primary" />
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.language}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-primary" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4 text-primary" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild className="group shadow-lg hover:shadow-xl">
            <a href="https://github.com/prabhatcs" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Full GitHub Profile
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
