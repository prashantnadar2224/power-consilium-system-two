import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Battery, Zap, Server, Monitor, BatteryCharging, Power } from "lucide-react";

/* Intermax-style product offerings with bullet lists */
const productOfferings = [
  {
    icon: Zap,
    title: "UPS Systems",
    items: ["Online UPS (Single & Three Phase)", "Industrial UPS", "Line Interactive UPS", "APC Online UPS"],
  },
  {
    icon: Battery,
    title: "Batteries",
    items: ["UPS SMF Battery", "Tubular Battery", "Luminous Inverter Battery", "Battery Terminal Cap"],
  },
  {
    icon: Power,
    title: "Inverters & More",
    items: ["Power Inverter", "Microtek Inverter", "Luminous Inverter", "LED Display"],
  },
];

const brands = [
  "Schneider Electric", "EATON", "VERTIV", "Numeric", "Luminous",
  "Microtek", "Legrand", "Exide", "Amaron", "Quanta",
  "Samsung SDI", "Fuji Electric", "APC",
];

const Products = () => (
  <section id="products" className="py-16 md:py-24 bg-muted dark:bg-muted" aria-label="Our products">
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
          Comprehensive Range of Power Solutions
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6" />
      </motion.div>

      {/* Product offerings with bullet lists */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {productOfferings.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <p.icon className="w-7 h-7 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
            <ul className="space-y-2">
              {p.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-block mt-4 text-primary text-sm font-medium hover:underline" title={`Learn more about ${p.title}`}>
              Learn more →
            </a>
          </motion.div>
        ))}
      </div>

      {/* Partner brands - scrolling marquee */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h3 className="text-xl font-semibold text-center text-foreground mb-6">Partnered With Leading Brands</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {brands.map((b) => (
            <span key={b} className="px-5 py-2.5 bg-card rounded-lg text-sm font-medium text-foreground shadow-sm border border-border">
              {b}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="text-center mt-10">
        <Link
          to="/products"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          aria-label="View all products"
          title="View all products"
        >
          View All Products →
        </Link>
      </div>
    </div>
  </section>
);

export default Products;
