import { motion } from "framer-motion";

/* Intermax-style services with images and descriptions */
const services = [
  {
    image: "/images/service-inspection.jpg",
    title: "Site Inspection & Load Study",
    desc: "Conducting load studies and site inspections, providing valuable data for optimized UPS performance and enhanced safety.",
  },
  {
    image: "/images/service-installation.jpg",
    title: "Installation & Commissioning",
    desc: "Expert installation and commissioning services ensuring seamless setup and operation of UPS systems and power infrastructure.",
  },
  {
    image: "/images/service-repair.jpg",
    title: "UPS Repairing Services",
    desc: "Card-level repair services for all UPS makes and models with quick turnaround time by experienced technicians.",
  },
  {
    image: "/images/service-battery.jpg",
    title: "Battery Supply & Replacements",
    desc: "Reliable battery supply and replacement — SMF, Tubular, Exide, Amaron, Quanta and more for all UPS systems.",
  },
  {
    image: "/images/service-rental.jpg",
    title: "Supply of UPS on Rent",
    desc: "Convenient UPS rental service providing reliable backup power for events, projects, and emergency requirements.",
  },
  {
    image: "/images/service-audit.jpg",
    title: "Energy & Power Audit",
    desc: "Comprehensive energy and power audit services to optimize your power infrastructure efficiency and reduce costs.",
  },
];

const Services = () => (
  <section id="services" className="py-16 md:py-24 bg-muted dark:bg-muted" aria-label="Our services">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">What we offer</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Superior Products, Expert Guidance, Responsive Support
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Comprehensive UPS solutions from installation to maintenance — we cover it all across Pan India with 30+ support locations.
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
            className="group bg-card dark:bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border"
          >
            <div className="overflow-hidden h-48">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                width={640}
                height={640}
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              <a href="#contact" className="inline-block mt-3 text-primary text-sm font-medium hover:underline" title={`Learn more about ${s.title}`}>
                Learn more →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="#contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity" title="View all services">
          All Services
        </a>
      </div>
    </div>
  </section>
);

export default Services;
