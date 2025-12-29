import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BetaSignupSection } from "@/components/BetaSignupSection";
import { MockupCarousel } from "@/components/MockupCarousel";
import { motion } from "framer-motion";

const Beta = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-secondary blur-[110px] opacity-70" />
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-secondary blur-[120px] opacity-60" />
          </div>

          <div className="container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="text-center lg:text-left"
              >
                <p className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border text-foreground text-xs sm:text-sm font-semibold">
                  Coming soon
                </p>
                <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground">
                  We’re launching Purelytics soon.
                  <span className="block text-primary">Get beta access first.</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                  Join the early access list to test the app, share feedback, and help us perfect the ingredient scanner.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
              >
                <div className="panel-olive rounded-[2rem] p-4 sm:p-6 lg:p-8 shadow-glow overflow-hidden">
                  <div className="rounded-[1.55rem] bg-background border border-border p-4 sm:p-6">
                    <MockupCarousel />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Apply for beta (reuse existing form) */}
        <BetaSignupSection />
      </main>
      <Footer />
    </div>
  );
};

export default Beta;
