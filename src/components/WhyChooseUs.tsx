import { motion } from "framer-motion";
import { Award, Clock, IndianRupee, Headphones, MapPin, Cpu } from "lucide-react";

/* Why Choose PCS section */
const reasons = [
  { icon: Cpu, title: "Card-Level Expertise", desc: "Our team has hands-on experience with MNC companies like APC-MGE, Emerson and Numeric at card level repair." },
  { icon: MapPin, title: "Pan India Presence", desc: "30+ support locations across North, West and South India with direct offices in Mumbai, Pune, Bangalore & Delhi." },
  { icon: Award, title: "10+ Years Experience", desc: "Founded in 2013, PCS brings over a decade of proven industry expertise in power solutions." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Premium quality products at competitive prices with flexible payment and rental options." },
  { icon: Clock, title: "Quick Turnaround", desc: "Fast response times with dedicated service teams ensuring minimal downtime for your operations." },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock remote monitoring and support to keep your critical infrastructure running." },
];

const WhyChooseUs = () => (
  <section id="why-choose-us" className="py-16 md:py-24 bg-muted dark:bg-muted" aria-label="Why choose Power Consilium System">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Trusted by 500+ clients across India for reliable UPS solutions and unmatched service quality.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card dark:bg-card rounded-xl p-6 shadow-sm border border-border text-center"
          >
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <r.icon className="w-7 h-7 text-secondary" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
