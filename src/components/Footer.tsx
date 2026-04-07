import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

/* Footer with quick links and contact info */
const Footer = () => (
  <footer className="bg-foreground text-background py-12" role="contentinfo" aria-label="Site footer">
    <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Brand */}
      <div>
        <img src="/images/logo.jpg" alt="Power Consilium System Logo" className="h-10 mb-4 brightness-200" width={130} height={40} loading="lazy" />
        <p className="text-background/70 text-sm leading-relaxed">
          Powering Reliability, Securing Continuity. Your trusted partner for UPS solutions across India since 2013.
        </p>
      </div>

      {/* Quick links */}
      <div>
        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
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
          {["UPS AMC Services", "UPS Repairing", "Energy & Power Audit", "UPS Rental", "UPS & Inverter Supply"].map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
        <div className="space-y-3 text-sm text-background/70">
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-background" aria-label="Call us" title="Phone">
            <Phone className="w-4 h-4" aria-hidden="true" /> +91-9876543210
          </a>
          <a href="mailto:info@power-consilium.com" className="flex items-center gap-2 hover:text-background" aria-label="Email us" title="Email">
            <Mail className="w-4 h-4" aria-hidden="true" /> info@power-consilium.com
          </a>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5" aria-hidden="true" />
            <span>Mumbai, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-8 pt-6 border-t border-background/20 text-center text-sm text-background/50">
      &copy; {new Date().getFullYear()} Power Consilium System. All rights reserved.
    </div>
  </footer>
);

export default Footer;
