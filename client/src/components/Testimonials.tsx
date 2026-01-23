import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Richey",
    role: "Senior Business Intelligence Analyst at John Deere",
    content: "I highly recommend Prabhat for his exceptional skills and collaborative nature. He is highly proficient in Power BI and Python, helping us build efficient data structures and reports. His ability to think through automation and machine learning pathways has helped drive significant innovation and efficiency in our processes.",
    rating: 5,
    initials: "MR",
  },
  {
    name: "Rahul Pandey",
    role: "Technology Solution Architect at John Deere",
    content: "Prabhat has been an excellent team member, known for his quick learning and ability to swiftly apply new skills to enhance business value. His analytics expertise and adeptness at managing global stakeholders are highly commendable. I highly recommend Prabhat for any role that requires strong analytical skills.",
    rating: 5,
    initials: "RP",
  },
  {
    name: "Niraj Chaudhary",
    role: "Associate Director - Solution Delivery & Operations at Novartis",
    content: "Prabhat is a hard working and sincere data analyst who never shied away from putting in extra hours to ensure high quality deliveries. His skills as a programmer and constant effort to equip himself with better know-how made him an asset for our team. Most importantly, he lives and breathes data science. This passion really sets him apart.",
    rating: 5,
    initials: "NC",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
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
