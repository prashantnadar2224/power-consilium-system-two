import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* Products section with full PCS range */
const brands = [
  "Schneider Electric", "EATON", "VERTIV", "Numeric", "Luminous",
  "Microtek", "Legrand", "Exide", "Amaron", "Quanta",
  "Samsung SDI", "Fuji Electric", "APC",
];

const productCategories = [
  { title: "Online UPS", range: "Single & Three Phase", desc: "Enterprise-grade uninterruptible power for mission-critical applications." },
  { title: "Industrial UPS", range: "Heavy Duty", desc: "High-capacity UPS systems for industrial and manufacturing environments." },
  { title: "Line Interactive UPS", range: "600 VA to 3 KVA", desc: "Cost-effective power protection for desktops, POS & small offices." },
  { title: "UPS SMF & Tubular Battery", range: "All Capacities", desc: "Genuine replacement batteries from Exide, Amaron, Quanta & more." },
  { title: "Power Inverters", range: "Home & Commercial", desc: "Luminous and Microtek inverter solutions for residential and commercial use." },
  { title: "Inverter Batteries", range: "All Types", desc: "Luminous inverter battery, tubular batteries and accessories." },
];

const allProducts = [
  "Online UPS", "Single Phase Online UPS", "Three Phase Online UPS", "Industrial UPS",
  "Line Interactive UPS", "Power Inverter", "UPS SMF Battery", "Tubular Battery",
  "APC Online UPS", "Inverters", "Inverter Battery", "Luminous Inverter Battery",
  "UPS System", "Battery Terminal Cap", "Microtek Inverter", "LED Display",
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
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Premium quality products at affordable prices with seamless finish and timely delivery.
        </p>
      </motion.div>

      {/* Product categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {productCategories.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-card dark:bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-primary mb-1">{p.title}</h3>
            <span className="text-sm font-medium text-secondary">{p.range}</span>
            <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Full product list */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-xl font-semibold text-center text-foreground mb-6">Complete Product Range</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {allProducts.map((p) => (
            <span key={p} className="px-4 py-2 bg-card dark:bg-card rounded-lg text-sm font-medium text-foreground shadow-sm border border-border">
              {p}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Partner brands */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h3 className="text-xl font-semibold text-center text-foreground mb-6">Partnered With Leading Brands</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {brands.map((b) => (
            <span key={b} className="px-5 py-2.5 bg-card dark:bg-card rounded-lg text-sm font-medium text-foreground shadow-sm border border-border">
              {b}
            </span>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
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
