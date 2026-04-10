import { motion } from "framer-motion";
import { Target, Shield, Zap, Users, MapPin, Building, CheckCircle } from "lucide-react";

/* Intermax-style "Who We Are" section with image grid + experience badge */
const stats = [
  { icon: Zap, value: "1000+", label: "UPS Units Managed" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: MapPin, value: "30+", label: "Support Locations" },
  { icon: Shield, value: "10+", label: "Years Experience" },
];

const highlights = [
  "Pan India UPS AMC Services",
  "Card-level UPS Repairing",
  "Energy & Power Audit",
  "Wholesale UPS & Battery Supply",
  "Multivendor Support (APC, Emerson, Numeric)",
  "24/7 Remote Monitoring & Support",
];

const About = () => (
  <section id="about" className="py-16 md:py-24 bg-background" aria-label="About Power Consilium System">
    <div className="container">
      {/* Who We Are - Split layout */}
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
        {/* Image grid with experience badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/service-inspection.jpg" alt="UPS site inspection" className="rounded-xl w-full h-48 object-cover" width={640} height={640} loading="lazy" />
            <img src="/images/service-installation.jpg" alt="UPS installation" className="rounded-xl w-full h-48 object-cover" width={640} height={640} loading="lazy" />
            <img src="/images/service-repair.jpg" alt="UPS repair services" className="rounded-xl w-full h-48 object-cover" width={640} height={640} loading="lazy" />
            <img src="/images/about-team.jpg" alt="PCS professional team" className="rounded-xl w-full h-48 object-cover" width={800} height={600} loading="lazy" />
          </div>
          {/* Floating experience badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground rounded-xl p-5 shadow-xl text-center">
            <p className="text-3xl md:text-4xl font-extrabold">10+</p>
            <p className="text-sm font-medium">Years of Experience</p>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Who we are</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Unlocking Power Efficiency with Cutting-Edge UPS Solutions
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Welcome to <strong>Power Consilium System (PCS)</strong>, a trusted provider of UPS and power infrastructure solutions.
            Established in 2013 in Mumbai, Maharashtra, PCS is an Information & Infrastructure Technology based company
            providing power solutions for corporate and IT business areas.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Founded by senior executives with wide experience in Technical aspect, Facility Management and Consulting —
            including card-level expertise with MNC companies like APC-MGE, Emerson and Numeric. With head office in Mumbai
            and direct presence in <strong>Mumbai, Pune, Bangalore and Delhi</strong>.
          </p>

          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>

          <a href="#services" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity" title="Learn more about our services">
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Stats counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center bg-card dark:bg-card rounded-xl p-6 shadow-sm border border-border"
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
