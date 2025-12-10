import { motion } from "framer-motion";
import { Baby, Utensils, Droplets, SprayCan, Heart, Leaf } from "lucide-react";

const useCases = [
  {
    icon: Droplets,
    title: "Skincare Lovers",
    description: "Decode serums, moisturizers & sunscreens. Know exactly what touches your skin.",
    color: "primary",
  },
  {
    icon: Utensils,
    title: "Health-Conscious Eaters",
    description: "Scan packaged foods to spot hidden sugars, preservatives & allergens.",
    color: "amber",
  },
  {
    icon: Baby,
    title: "Parents & Caregivers",
    description: "Extra scrutiny for baby products. Protect the ones who can't protect themselves.",
    color: "soft-blue",
  },
  {
    icon: SprayCan,
    title: "Home & Cleaning",
    description: "Understand what chemicals you're bringing into your living spaces.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Allergy Sufferers",
    description: "Personalized alerts for ingredients that affect you specifically.",
    color: "destructive",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious Shoppers",
    description: "Identify harmful environmental ingredients and choose sustainable options.",
    color: "primary",
  },
];

export function UseCasesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-soft-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-primary font-semibold mb-3">Who It's For</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for every conscious shopper
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a parent, health enthusiast, or just someone who cares — Purelytics is for you.
          </p>
        </motion.div>

        {/* Use cases grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-500"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                  useCase.color === "primary" ? "bg-green-light" : 
                  useCase.color === "soft-blue" ? "bg-soft-blue/10" : 
                  useCase.color === "amber" ? "bg-amber/10" :
                  "bg-destructive/10"
                }`}>
                  <useCase.icon className={`w-7 h-7 ${
                    useCase.color === "primary" ? "text-primary" : 
                    useCase.color === "soft-blue" ? "text-soft-blue" : 
                    useCase.color === "amber" ? "text-amber" :
                    "text-destructive"
                  }`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
