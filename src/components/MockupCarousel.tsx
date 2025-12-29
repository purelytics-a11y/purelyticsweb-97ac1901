import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import phoneMockup from "@/assets/phone-mockup.png";
import phoneMockupNew from "@/assets/phone-mockup-new.png";

const slides = [
  {
    src: phoneMockup,
    alt: "Purelytics mockup: scanning a label and ingredient list",
    label: "Scan",
  },
  {
    src: phoneMockupNew,
    alt: "Purelytics mockup: toxicity flags and safer alternatives",
    label: "Decode",
  },
];

export function MockupCarousel() {
  const [active, setActive] = useState(0);

  const slide = useMemo(() => slides[active], [active]);

  return (
    <div className="w-full">
      <div className="relative rounded-2xl bg-card border border-border overflow-hidden">
        <div className="flex items-center justify-center px-6 py-8 sm:py-10">
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading="eager"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="w-[220px] sm:w-[260px] lg:w-[300px] h-auto drop-shadow-[0_18px_35px_rgba(0,0,0,0.22)]"
          />
        </div>

        <div className="absolute left-4 top-4 inline-flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-secondary border border-border text-xs font-semibold text-foreground">
            {slide.label}
          </span>
        </div>

        <div className="absolute right-4 bottom-4 flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Show ${s.label} mockup`}
              className={`h-2.5 w-2.5 rounded-full border transition-all ${
                idx === active
                  ? "bg-primary border-primary"
                  : "bg-background border-border hover:border-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
