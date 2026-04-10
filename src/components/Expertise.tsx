import { motion } from "framer-motion";
import { ShoppingCart, MessageSquare, Truck, SmilePlus } from "lucide-react";
import { useState, useEffect, useRef } from "react";

/* Intermax-style expertise parallax banner with animated counters */
const counters = [
  { icon: ShoppingCart, value: 1000, suffix: "+", label: "Products Sold" },
  { icon: MessageSquare, value: 500, suffix: "+", label: "Consulting Projects" },
  { icon: Truck, value: 30, suffix: "+", label: "Service Locations" },
  { icon: SmilePlus, value: 500, suffix: "+", label: "Satisfied Customers" },
];

/* Animated counter hook */
const useCounter = (end: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);
  return count;
};

const CounterCard = ({ icon: Icon, value, suffix, label }: typeof counters[0]) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCounter(value, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <Icon className="w-10 h-10 text-secondary mx-auto mb-3" aria-hidden="true" />
      <p className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
        {count}{suffix}
      </p>
      <p className="text-primary-foreground/70 text-sm mt-1">{label}</p>
    </div>
  );
};

const Expertise = () => (
  <section
    className="relative py-20 md:py-28 bg-fixed bg-cover bg-center"
    style={{ backgroundImage: "url('/images/smart-solutions-banner.jpg')" }}
    aria-label="Our expertise in numbers"
  >
    <div className="absolute inset-0 bg-foreground/80" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          EXPERTS IN UPS & POWER SOLUTIONS
        </h2>
        <p className="max-w-3xl mx-auto text-primary-foreground/70 leading-relaxed">
          For over 10 years PCS has been a leading supplier of UPS and power conditioning equipment with an objective to help
          customers maximize clean power availability & provide efficient energy solutions. Our incredible track record in providing
          power solutions across India ensures quality, assurance, and reliability.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {counters.map((c) => (
          <CounterCard key={c.label} {...c} />
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
