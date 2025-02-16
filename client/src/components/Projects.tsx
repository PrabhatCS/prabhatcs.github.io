import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "LLM Based PDF Summarizer",
    description: "Developed a PDF summarization tool using DeereAI and LongChain",
    tags: ["LLM", "DeereAI", "LongChain", "NLP"],
  },
  {
    title: "vLLM Feedback Analyzer",
    description: "Created an automated system for analyzing feedback transcripts",
    tags: ["vLLM", "NLP", "Python"],
  },
  {
    title: "Knowledge Graph Platform",
    description: "Built a platform for analyzing unstructured text and creating knowledge graphs",
    tags: ["Neo4j", "NLP", "Spacy", "Flask"],
  },
  {
    title: "Chatbot Assistant",
    description: "Developed a conversational assistant with features like weather forecasting and news summary",
    tags: ["NLTK", "AIML", "ChatterBot", "Flask"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
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
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
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
