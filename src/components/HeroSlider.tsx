import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* Intermax-style hero with bold text and product imagery */
const slides = [
  {
    image: "/images/hero-banner.jpg",
    badge: "10+",
    badgeText: "Years of Experience",
    title: "EXPERTS IN POWER",
    titleHighlight: "AND UPS SOLUTIONS",
    subtitle: "Trusted Industry Experts For",
    highlightValue: "10+",
    highlightLabel: "Years",
  },
  {
    image: "/images/hero-1.jpg",
    badge: "1000+",
    badgeText: "UPS Units Managed",
    title: "PAN INDIA UPS",
    titleHighlight: "AMC & SERVICES",
    subtitle: "Comprehensive maintenance across",
    highlightValue: "30+",
    highlightLabel: "Locations",
  },
  {
    image: "/images/hero-2.jpg",
    badge: "500+",
    badgeText: "Happy Clients",
    title: "RELIABLE POWER",
    titleHighlight: "BACKUP SOLUTIONS",
    subtitle: "Wholesale supply of UPS, Batteries & Inverters from",
    highlightValue: "13+",
    highlightLabel: "Top Brands",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="home" className="relative h-[75vh] md:h-[90vh] overflow-hidden" aria-label="Hero image slider">
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== current}
        >
          <img src={s.image} alt={s.title} className="w-full h-full object-cover" width={1920} height={800} loading={i === 0 ? "eager" : "lazy"} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
      ))}

      {/* Text overlay - Intermax style */}
      <div className="absolute inset-0 flex items-center">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              {/* Experience badge */}
              <div className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-5 py-2 rounded-lg mb-6">
                <span className="text-2xl md:text-3xl font-bold">{slide.badge}</span>
                <span className="text-sm font-medium">{slide.badgeText}</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-4">
                <span className="text-secondary">{slide.title}</span>
                <br />
                {slide.titleHighlight}
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/80 mb-2">
                {slide.subtitle}{" "}
                <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded font-bold text-xl">
                  {slide.highlightValue}
                </span>{" "}
                {slide.highlightLabel}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  aria-label="Get a free quote"
                  title="Get a free quote"
                >
                  Get a Free Quote
                </a>
                <a
                  href="#services"
                  className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors"
                  aria-label="Our services"
                  title="View our services"
                >
                  Our Services
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/30 rounded-full hover:bg-background/60 transition-colors" aria-label="Previous slide" title="Previous slide">
        <ChevronLeft className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/30 rounded-full hover:bg-background/60 transition-colors" aria-label="Next slide" title="Next slide">
        <ChevronRight className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-secondary" : "bg-primary-foreground/50"}`}
            aria-label={`Go to slide ${i + 1}`}
            title={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
