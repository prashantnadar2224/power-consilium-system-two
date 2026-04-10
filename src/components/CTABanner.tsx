import { motion } from "framer-motion";

/* Intermax-style CTA banner before footer */
const CTABanner = () => (
  <section className="py-16 bg-primary" aria-label="Call to action">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
          No Power Challenge is Too Big for Us.
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
          Let's start your project and ensure uninterrupted power for your critical operations.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          aria-label="Contact us"
          title="Contact us to get started"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
