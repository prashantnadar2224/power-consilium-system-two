import { motion } from "framer-motion";
import { Building2, Landmark, Monitor, Hotel, ShoppingBag, GraduationCap, Server, Building } from "lucide-react";

/* Industries served section - Intermax style */
const industries = [
  { icon: Building2, name: "Travel & Hospitality" },
  { icon: Landmark, name: "Banking & Financial" },
  { icon: Monitor, name: "IT Industries" },
  { icon: Hotel, name: "Hotels & Healthcare" },
  { icon: ShoppingBag, name: "Retail & Distribution" },
  { icon: GraduationCap, name: "Education & Entertainment" },
  { icon: Server, name: "Data Centers" },
  { icon: Building, name: "Government & PSU" },
];

const Industries = () => (
  <section className="py-16 md:py-24 bg-background" aria-label="Industries we serve">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Industries we serve</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          We Serve a Wide Range of Industries
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto" />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-card rounded-xl p-5 text-center shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all group"
          >
            <ind.icon className="w-10 h-10 text-primary mx-auto mb-3 group-hover:text-secondary transition-colors" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-foreground">{ind.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
