import { motion } from "framer-motion";
import { Wrench, Settings, HeadphonesIcon, Battery, Server, ClipboardCheck } from "lucide-react";

/* Services section with real PCS offerings */
const services = [
  { icon: Wrench, title: "UPS AMC Services", desc: "Annual Maintenance Contracts for all brands of UPS with Pan India coverage and multivendor support." },
  { icon: Battery, title: "UPS Rental", desc: "Flexible UPS rental solutions for temporary power needs – events, projects, and emergency backup." },
  { icon: Settings, title: "UPS Repairing Services", desc: "Expert card-level repair services for all UPS makes and models with quick turnaround time." },
  { icon: ClipboardCheck, title: "Energy & Power Audit", desc: "Comprehensive energy and power audit services to optimize your power infrastructure efficiency." },
  { icon: Server, title: "UPS & Inverter Supply", desc: "Wholesale supply of Industrial UPS, Online UPS, Power Inverters, SMF & Tubular Batteries from top brands." },
  { icon: HeadphonesIcon, title: "Remote Support", desc: "Real-time monitoring, diagnostics and remote support to minimize downtime across 30+ locations." },
];

const Services = () => (
  <section id="services" className="py-16 md:py-24 bg-background" aria-label="Our services">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Comprehensive UPS solutions from installation to maintenance – we cover it all across Pan India.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group bg-card dark:bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-border"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-7 h-7 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
