import { motion } from "framer-motion";
import { Award, Database, Lock, Microscope, Shield } from "lucide-react";

const badges = [
  { icon: Shield, label: "100% Secure" },
  { icon: Database, label: "Science-Backed" },
  { icon: Award, label: "Made in India" },
  { icon: Lock, label: "Privacy First" },
  { icon: Microscope, label: "Trusted Research" },
];

export function TrustBadgesSection() {
  const oddLast = badges.length % 2 === 1;

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-background border-y border-border/60">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 sm:gap-8"
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground text-center">
            Trusted by conscious shoppers
          </p>

          {/* Mobile: centered grid; sm+: wrap */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 justify-items-center sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:gap-y-4">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className={`flex items-center gap-2.5 group cursor-default w-full max-w-[190px] justify-center sm:w-auto sm:max-w-none sm:justify-start ${
                  oddLast && index === badges.length - 1 ? "col-span-2" : ""
                }`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-secondary border border-border">
                  <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <span className="font-medium text-xs sm:text-sm whitespace-nowrap text-foreground/80">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
