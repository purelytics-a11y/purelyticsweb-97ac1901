import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "As a mother of two, I finally feel confident about what I'm putting on my kids' skin. Purelytics is a game-changer.",
    author: "Priya Sharma",
    role: "Parent & Early Tester",
    location: "Mumbai",
    rating: 5,
  },
  {
    quote: "I've been into skincare for years, but never truly understood ingredients until now. This app makes it so simple.",
    author: "Ananya Reddy",
    role: "Skincare Enthusiast",
    location: "Hyderabad",
    rating: 5,
  },
  {
    quote: "Finally, an Indian app that understands our local products and regulations. The FSSAI integration is brilliant.",
    author: "Rahul Verma",
    role: "Health Blogger",
    location: "Delhi",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-3">Early Feedback</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What our beta testers say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real users who tried Purelytics early.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-card rounded-2xl p-6 lg:p-8 shadow-soft border border-border/50"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
