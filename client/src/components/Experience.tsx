import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Yash Technologies Pvt Ltd",
    role: "Sr. Data Scientist",
    period: "Feb 2020 – Present",
    location: "Indore",
    projects: [
      {
        name: "Automated Warranty Responsibility Code Assignment",
        description: "Automatically assigning responsibility codes to warranty claims using BERT and LLM",
        tech: ["Random Forest", "BERT", "LLM", "vLLM"],
      },
      {
        name: "Attachments Parts Forecasting",
        description: "Designed forecasting mechanism for attachments parts using time series analysis",
        tech: ["Prophet", "ARIMA", "Holt-Winter", "Pandas", "Plotly"],
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
        name: "Market Basket Analysis",
        description: "Generated rules linking products using association rule mining",
        tech: ["Python", "Apriori Algorithm", "Big Query"],
      },
      {
        name: "Email Sent Time Optimization",
        description: "Predicted optimal email sending times to increase engagement",
        tech: ["Logistic Regression", "Decision Tree", "Random Forest"],
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
