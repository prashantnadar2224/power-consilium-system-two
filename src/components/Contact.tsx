import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

/* Contact form + info + Google Maps */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted dark:bg-muted" aria-label="Contact us">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-secondary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground">Get In Touch</h3>
            <p className="text-muted-foreground">We would be glad to partner for your success. Reach out to us for any UPS related requirements.</p>

            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors" aria-label="Phone number" title="Call us">
                <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                +91-9876543210
              </a>
              <a href="mailto:info@power-consilium.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors" aria-label="Email address" title="Email us">
                <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                info@power-consilium.com
              </a>
              <div className="flex items-start gap-3 text-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5" aria-hidden="true" />
                <span>Mumbai, Maharashtra (Head Office)<br />Pune | Bangalore | Delhi</span>
              </div>
              <div className="flex items-start gap-3 text-foreground">
                <Clock className="w-5 h-5 text-primary mt-0.5" aria-hidden="true" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM<br />Sunday: Closed</span>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card dark:bg-card rounded-xl p-6 shadow-md space-y-4"
            aria-label="Contact form"
          >
            <input type="text" placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Your name" />
            <input type="email" placeholder="Your Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Your email" />
            <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Your phone number" />
            <textarea placeholder="Your Message" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" aria-label="Your message" />
            <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2" aria-label="Send message" title="Send message">
              <Send className="w-4 h-4" aria-hidden="true" /> Send Message
            </button>
            {submitted && <p className="text-center text-secondary font-medium" role="alert">Thank you! We'll get back to you soon.</p>}
          </motion.form>
        </div>

        {/* Google Maps embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl overflow-hidden shadow-md border border-border"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Power Consilium System - Mumbai Office Location"
            aria-label="Google Maps showing Power Consilium System office location in Mumbai"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
