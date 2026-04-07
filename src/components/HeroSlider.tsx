import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* Auto/manual image slider with hero overlay text */
const slides = [
  {
    image: "/images/hero-1.jpg",
    title: "Powering Reliability, Securing Continuity",
    subtitle: "End-to-end UPS solutions for your critical operations",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Expert UPS Maintenance & AMC",
    subtitle: "Pan India service with 1000+ units managed across all brands",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Trusted Since 2013",
    subtitle: "Over a decade of experience in uninterruptible power systems",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-[70vh] md:h-[85vh] overflow-hidden" aria-label="Hero image slider">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            width={1920}
            height={800}
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
      ))}

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto drop-shadow">
            {slides[current].subtitle}
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            aria-label="Get a free quote"
            title="Get a free quote"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/30 rounded-full hover:bg-background/60 transition-colors"
        aria-label="Previous slide"
        title="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/30 rounded-full hover:bg-background/60 transition-colors"
        aria-label="Next slide"
        title="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-secondary" : "bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            title={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
