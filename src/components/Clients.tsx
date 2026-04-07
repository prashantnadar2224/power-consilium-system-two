import { motion } from "framer-motion";

/* Client logos / names section */
const clients = [
  "Tata Group", "SBI Mutual Fund", "AIG Insurance", "Akbar Travels",
  "Zee Learn", "Dynacons", "Wockhardt Hospitals", "PineBridge Investments",
  "Adani Group", "Informa Markets", "Korn Ferry", "Protium Finance",
];

const Clients = () => (
  <section id="clients" className="py-16 md:py-24 bg-background" aria-label="Our clients">
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {clients.map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="bg-card dark:bg-card rounded-lg p-4 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <span className="font-medium text-foreground text-sm">{c}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
