import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.png";

const trustPoints = [
  "Free during beta",
  "No app install needed",
  "100% private & secure",
];

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 bg-background overflow-hidden">
      {/* Soft ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-56 w-56 md:h-72 md:w-72 rounded-full bg-secondary blur-[80px] opacity-70" />
        <div className="absolute right-0 top-0 h-64 w-64 md:h-80 md:w-80 rounded-full bg-secondary blur-[100px] opacity-60" />
      </div>

      <div className="container relative">
        {/* Mobile-first: stack vertically, then side-by-side on lg */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-foreground">
              Take control of your
              <span className="block text-primary">product safety</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
              Scan any label and instantly understand ingredients, toxicity flags, and safer alternatives — built for everyday shoppers in India.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#beta"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full btn-primary text-base font-semibold"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full btn-secondary text-base font-medium"
              >
                See how it works
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center bg-secondary border border-border">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Phone visual - shows first on mobile (order-1) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-sm mx-auto lg:max-w-none order-1 lg:order-2"
          >
            <div className="panel-olive relative rounded-[2rem] p-5 sm:p-6 lg:p-8 overflow-hidden shadow-glow">
              {/* Star-like sparkles */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.14]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.45) 2px, transparent 3px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.35) 2px, transparent 3px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.25) 1.5px, transparent 3px)",
                  backgroundSize: "200px 200px",
                }}
              />

              <div className="relative">
                {/* CTA inside panel */}
                <div className="flex justify-end mb-4 sm:mb-5">
                  <a
                    href="#beta"
                    className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-accent text-accent-foreground font-semibold text-sm"
                  >
                    Join Beta
                  </a>
                </div>

                {/* Inner cream card */}
                <div className="relative rounded-[1.5rem] bg-background border border-border p-4 sm:p-6">
                  <div className="flex justify-center">
                    <img
                      src={phoneMockup}
                      alt="Purelytics ingredient scanner app preview"
                      className="w-[200px] sm:w-[240px] lg:w-[280px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
                      loading="eager"
                    />
                  </div>

                  {/* Floating cards - hidden on very small screens */}
                  <div className="hidden md:block absolute -left-14 top-6 w-[220px] glass-card rounded-2xl p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-background flex items-center justify-center font-semibold text-primary text-sm border border-border">
                        P
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-foreground">Self care & relaxation</div>
                        <div className="mt-1.5 h-1.5 rounded-full bg-muted overflow-hidden">
                          <div className="h-full w-[78%] bg-primary rounded-full" />
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">Completed 80%</div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block absolute -right-16 top-20 w-[230px] glass-card rounded-2xl p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-background flex items-center justify-center font-semibold text-primary text-sm border border-border">
                        P
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-foreground">Scan ingredients</div>
                        <div className="mt-1.5 h-1.5 rounded-full bg-muted overflow-hidden">
                          <div className="h-full w-[52%] bg-primary rounded-full" />
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">Analyzing…</div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block absolute -right-8 -bottom-4 w-[200px] glass-card rounded-2xl p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-foreground">Safety score</div>
                        <div className="font-display text-2xl text-primary">92</div>
                      </div>
                      <div className="text-xs px-2.5 py-1 rounded-full bg-background text-foreground border border-border">
                        Clean
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
