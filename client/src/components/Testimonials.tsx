import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Project Manager, Yash Technologies",
    content: "Prabhat's expertise in machine learning and data science has been instrumental in delivering high-impact projects. His ability to translate complex data into actionable insights is exceptional.",
    rating: 5,
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    role: "CTO, Tech Innovations Ltd",
    content: "Working with Prabhat on the NLP project was a game-changer. He brought innovative solutions and deep technical knowledge that exceeded our expectations.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Amit Patel",
    role: "VP Engineering, Accenture",
    content: "Prabhat is a data scientist who doesn't just deliver results, but delivers insights that drive business strategy. Highly recommended for any AI/ML initiative.",
    rating: 5,
    initials: "AP",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
            What People Say
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            >
              <Card className="h-full transition-all duration-300 hover:border-primary/50 cursor-pointer">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-6 border-t border-primary/10">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
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
