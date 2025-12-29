import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";

const testimonials = [
  {
    quote:
      "As a mother of two, I finally feel confident about what I'm putting on my kids' skin. Purelytics is a game-changer.",
    author: "Priya Sharma",
    role: "Parent & Early Tester",
    location: "Mumbai",
    rating: 5,
    avatar: avatar1,
  },
  {
    quote:
      "I've been into skincare for years, but never truly understood ingredients until now. This app makes it so simple.",
    author: "Ananya Reddy",
    role: "Skincare Enthusiast",
    location: "Hyderabad",
    rating: 5,
    avatar: avatar2,
  },
  {
    quote:
      "Finally, an Indian app that understands our local products and regulations. The FSSAI integration is brilliant.",
    author: "Rahul Verma",
    role: "Health Blogger",
    location: "Delhi",
    rating: 5,
    avatar: avatar3,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-3 tracking-wide text-xs sm:text-sm uppercase">
            Early Feedback
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
            What our beta testers say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real users who tried Purelytics early.
          </p>
        </motion.div>

        {/* Testimonials grid - mobile: stack, md: 3 cols */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative bg-secondary/70 rounded-2xl p-5 sm:p-6 border border-border"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-5 text-sm sm:text-base italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover border border-border"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
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
