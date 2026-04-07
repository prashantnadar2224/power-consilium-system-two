import { motion } from "framer-motion";
import { Target, Shield, Zap, Users, MapPin, Building } from "lucide-react";

/* About Us section with real PCS details */
const stats = [
  { icon: Zap, value: "1000+", label: "UPS Units Managed" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: MapPin, value: "30+", label: "Support Locations" },
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
          Established in 2013 at Mumbai, Maharashtra, <strong>Power Consilium System (PCS)</strong> is a
          Sole Proprietorship firm engaged as the foremost Wholesale Trader of Industrial UPS, Online UPS,
          Power Inverter, UPS Battery and more. We also provide Pan India UPS AMC Service, UPS Repairing
          Service and Energy & Power Audit Services.
        </p>
      </motion.div>

      {/* Company overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-card dark:bg-card rounded-xl p-8 shadow-md mb-8"
      >
        <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
          <Building className="w-5 h-5" aria-hidden="true" /> Who We Are
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          PCS is an Information & Infrastructure Technology based company and a leading provider of power
          infrastructure solutions. Founded by a group of senior executives and entrepreneurs with wide
          experience in Technical aspect, Facility Management, Consulting, HR and General Management —
          including card-level expertise with MNC companies like APC-MGE, Emerson and Numeric.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          With head office in Mumbai and direct presence in <strong>Mumbai, Pune, Bangalore and Delhi</strong>,
          PCS has 16+ direct support locations and partnerships in 14 more locations covering a total of
          <strong> 30 support locations</strong> across North, West and South India.
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
        <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
          <Target className="w-5 h-5" aria-hidden="true" /> Our Mission
        </h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Provide reliable, efficient and scalable UPS systems and services</li>
          <li>• Responsive service and technical expertise across Pan India</li>
          <li>• Best-in-class products customized for maximum uptime and cost effectiveness</li>
          <li>• Deliver delighted customer experience through 30+ support locations</li>
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
