import { motion } from "framer-motion";

/* Client data with logo paths */
const clients = [
  { name: "Tata Group", logo: "/images/clients/tata.png" },
  { name: "SBI Mutual Fund", logo: "/images/clients/sbi.png" },
  { name: "AIG Insurance", logo: "/images/clients/aig.png" },
  { name: "Akbar Travels", logo: "/images/clients/akbar.png" },
  { name: "Zee Learn", logo: "/images/clients/zee.png" },
  { name: "Dynacons", logo: "/images/clients/dynacons.png" },
  { name: "Wockhardt Hospitals", logo: "/images/clients/wockhardt.png" },
  { name: "PineBridge Investments", logo: "/images/clients/pinebridge.png" },
  { name: "Adani Group", logo: "/images/clients/adani.png" },
  { name: "Informa Markets", logo: "/images/clients/informa.png" },
  { name: "Korn Ferry", logo: "/images/clients/kornferry.png" },
  { name: "Protium Finance", logo: "/images/clients/protium.png" },
];

/* Duplicate list for seamless infinite scroll */
const doubled = [...clients, ...clients];

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
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="inline-flex items-center justify-center mx-4 px-6 py-4 bg-card rounded-lg border border-border shadow-sm min-w-[180px] h-[100px] shrink-0"
          >
            <img
              src={c.logo}
              alt={c.name}
              title={c.name}
              loading="lazy"
              width={120}
              height={60}
              className="max-h-[60px] w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
