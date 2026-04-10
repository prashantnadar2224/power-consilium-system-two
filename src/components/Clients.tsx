import { motion } from "framer-motion";

const clients = [
  "Tata Group", "SBI Mutual Fund", "AIG Insurance", "Akbar Travels",
  "Zee Learn", "Dynacons", "Wockhardt Hospitals", "PineBridge Investments",
  "Adani Group", "Informa Markets", "Korn Ferry", "Protium Finance",
];

const Clients = () => (
  <section id="clients" className="py-16 md:py-24 bg-background overflow-hidden" aria-label="Our clients">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Clients</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Trusted by leading corporates, hospitals, institutions and enterprises across India.
        </p>
      </motion.div>
    </div>

    {/* Marquee row */}
    <div className="relative w-full">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...clients, ...clients].map((c, i) => (
          <div
            key={`${c}-${i}`}
            className="inline-flex items-center justify-center mx-4 px-8 py-4 bg-card rounded-lg border border-border shadow-sm min-w-[180px] shrink-0"
          >
            <span className="font-semibold text-foreground text-sm">{c}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
