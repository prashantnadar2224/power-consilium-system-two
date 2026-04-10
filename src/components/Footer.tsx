import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

/* Intermax-style footer with newsletter */
const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-foreground text-background py-12" role="contentinfo" aria-label="Site footer">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <img src="/images/logo.jpg" alt="Power Consilium System Logo" className="h-10 mb-4 brightness-200" width={130} height={40} loading="lazy" />
          <p className="text-background/70 text-sm leading-relaxed mb-4">
            Welcome to Power Consilium System, a trusted provider of UPS and power infrastructure solutions since 2013.
          </p>
          <div className="space-y-2 text-sm text-background/70">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-background" aria-label="Call us" title="Phone">
              <Phone className="w-4 h-4" aria-hidden="true" /> +91-9876543210
            </a>
            <a href="mailto:info@power-consilium.com" className="flex items-center gap-2 hover:text-background" aria-label="Email us" title="Email">
              <Mail className="w-4 h-4" aria-hidden="true" /> info@power-consilium.com
            </a>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>24/7 x 365 Days Service</span>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", href: "/#home" },
              { label: "About Us", href: "/#about" },
              { label: "Services", href: "/#services" },
              { label: "Products", to: "/products" },
              { label: "Why Choose Us", to: "/why-choose-us" },
              { label: "Contact", href: "/#contact" },
            ].map((l) => (
              <li key={l.label}>
                {"to" in l && l.to ? (
                  <Link to={l.to} className="text-background/70 hover:text-background transition-colors" title={l.label}>{l.label}</Link>
                ) : (
                  <a href={l.href} className="text-background/70 hover:text-background transition-colors" title={l.label}>{l.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-background/70">
            {["UPS AMC Services", "UPS Repairing", "Energy & Power Audit", "UPS Rental", "Battery Supply", "Installation & Commissioning"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
          <p className="text-sm text-background/70 mb-4">
            Sign up for updates, news, and insights about power solutions.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-3 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 text-sm focus:outline-none focus:ring-1 focus:ring-secondary"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity" title="Subscribe">
              Sign Up
            </button>
          </form>

          <div className="flex gap-3 mt-6">
            <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Facebook" title="Facebook">
              <Facebook className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Instagram" title="Instagram">
              <Instagram className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="LinkedIn" title="LinkedIn">
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-6 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-background/50">
        <span>&copy; {new Date().getFullYear()} Power Consilium System. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-background transition-colors" title="Terms of Service">Terms of Use</a>
          <a href="#" className="hover:text-background transition-colors" title="Privacy Policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
