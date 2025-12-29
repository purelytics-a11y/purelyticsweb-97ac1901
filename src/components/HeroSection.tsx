import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { MockupCarousel } from "@/components/MockupCarousel";

const trustPoints = ["Free during beta", "No app install needed", "100% private & secure"];

export function HeroSection() {
  return (
    <header className="relative pt-28 pb-12 sm:pb-14 md:pt-32 lg:pt-36 lg:pb-20 bg-background overflow-hidden">
      {/* Soft ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-56 w-56 md:h-72 md:w-72 rounded-full bg-secondary blur-[90px] opacity-70" />
        <div className="absolute right-0 top-0 h-64 w-64 md:h-80 md:w-80 rounded-full bg-secondary blur-[110px] opacity-60" />
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Phone visual first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 w-full"
          >
            <div className="panel-olive relative rounded-[2rem] p-4 sm:p-6 lg:p-8 overflow-hidden shadow-glow">
              {/* subtle sparkles */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 22% 24%, rgba(255,255,255,0.45) 2px, transparent 3px), radial-gradient(circle at 70% 62%, rgba(255,255,255,0.30) 2px, transparent 3px), radial-gradient(circle at 42% 84%, rgba(255,255,255,0.22) 1.5px, transparent 3px)",
                  backgroundSize: "220px 220px",
                }}
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-background/10 border border-white/15 text-xs font-semibold">
                    Live preview
                  </div>
                  <Link
                    to="/beta"
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-accent text-accent-foreground font-semibold text-sm"
                  >
                    Join Beta
                  </Link>
                </div>

                <div className="rounded-[1.55rem] bg-background border border-border p-4 sm:p-6">
                  <MockupCarousel />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-foreground">
              Scan any product.
              <span className="block text-primary">Instantly know what’s inside.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Purelytics decodes ingredients, reveals toxicity, and suggests safer alternatives — in seconds.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                to="/beta"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center justify-center h-12 px-7 rounded-full btn-primary text-base font-semibold"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full btn-secondary text-base font-medium"
              >
                See how it works
              </a>
            </div>

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
        </div>
      </div>
    </header>
  );
}
