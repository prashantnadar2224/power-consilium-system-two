import { motion } from "framer-motion";
import { Target, Shield, Zap, Users } from "lucide-react";

/* About Us section with scroll animation */
const stats = [
  { icon: Zap, value: "1000+", label: "UPS Units Managed" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Target, value: "40+", label: "Cities Covered" },
  { icon: Shield, value: "10+", label: "Years Experience" },
];

const About = () => (
  <section id="about" className="py-16 md:py-24 bg-muted dark:bg-muted" aria-label="About Power Consilium System">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Us</h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
        <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
          Founded in October 2013, <strong>Power Consilium System (PCS)</strong> delivers end-to-end
          uninterruptible power solutions tailored to each client's needs. With over a decade of combined
          industry experience working with MNC companies like APC-MGE, Emerson and Numeric at card level,
          we ensure your critical operations remain protected and fully operational.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-card dark:bg-card rounded-xl p-8 shadow-md mb-12"
      >
        <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Provide reliable, efficient and scalable UPS systems and services</li>
          <li>• Responsive service and technical expertise across Pan India</li>
          <li>• Best-in-class products customized for maximum uptime and cost effectiveness</li>
        </ul>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center bg-card dark:bg-card rounded-xl p-6 shadow-sm"
          >
            <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" aria-hidden="true" />
            <p className="text-2xl md:text-3xl font-bold text-secondary">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
