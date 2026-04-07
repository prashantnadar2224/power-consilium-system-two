import { motion } from "framer-motion";

/* Products / Brands section */
const brands = [
  "Schneider Electric", "EATON", "VERTIV", "Numeric", "Luminous",
  "Microtek", "Legrand", "Exide", "Amaron", "Quanta",
  "Samsung SDI", "Fuji Electric",
];

const productCategories = [
  { title: "Online UPS Systems", range: "1 KVA to 800 KVA", desc: "Enterprise-grade uninterruptible power for mission-critical applications." },
  { title: "Offline / Line Interactive UPS", range: "600 VA to 3 KVA", desc: "Cost-effective power protection for desktops, POS & small offices." },
  { title: "UPS Batteries", range: "SMF & Tubular", desc: "Genuine replacement batteries from Exide, Amaron, Quanta & more." },
  { title: "Inverters", range: "Home & Commercial", desc: "Reliable inverter solutions for residential and commercial use." },
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
      </motion.div>

      {/* Product categories */}
      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {productCategories.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card dark:bg-card rounded-xl p-6 shadow-sm border border-border"
          >
            <h3 className="text-lg font-semibold text-primary mb-1">{p.title}</h3>
            <span className="text-sm font-medium text-secondary">{p.range}</span>
            <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Partner brands */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-center text-foreground mb-6">Partnered With Leading Brands</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {brands.map((b) => (
            <span
              key={b}
              className="px-5 py-2.5 bg-card dark:bg-card rounded-lg text-sm font-medium text-foreground shadow-sm border border-border"
            >
              {b}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Products;
