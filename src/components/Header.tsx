import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Phone, Mail } from "lucide-react";

/* Sticky header with nav, dark mode, mobile menu */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { href: isHome ? "#home" : "/", label: "Home", isRoute: !isHome },
    { href: isHome ? "#about" : "/#about", label: "About Us" },
    { href: isHome ? "#services" : "/#services", label: "Services" },
    { href: "/products", label: "Products", isRoute: true },
    { href: "/why-choose-us", label: "Why Choose Us", isRoute: true },
    { href: isHome ? "#testimonials" : "/#testimonials", label: "Testimonials" },
    { href: isHome ? "#clients" : "/#clients", label: "Clients" },
    { href: isHome ? "#contact" : "/#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-background/95 backdrop-blur-sm ${scrolled ? "shadow-lg" : ""}`}
      role="banner"
    >
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-1.5 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <a href="tel:+919876543210" aria-label="Call us" title="Call us" className="flex items-center gap-1 hover:opacity-80">
              <Phone className="w-3 h-3" aria-hidden="true" /> +91-9876543210
            </a>
            <a href="mailto:info@power-consilium.com" aria-label="Email us" title="Email us" className="flex items-center gap-1 hover:opacity-80">
              <Mail className="w-3 h-3" aria-hidden="true" /> info@power-consilium.com
            </a>
          </div>
          <span>Powering Reliability, Securing Continuity</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container flex items-center justify-between py-3" aria-label="Main navigation">
        <Link to="/" aria-label="Power Consilium System - Home" title="Power Consilium System">
          <img src="/images/logo.jpg" alt="Power Consilium System Logo" className="h-12 w-auto" width={160} height={48} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.isRoute ? (
                <Link to={link.href} className="font-medium text-foreground hover:text-primary transition-colors text-sm" title={link.label}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} className="font-medium text-foreground hover:text-primary transition-colors text-sm" title={link.label}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button onClick={() => setDark(!dark)} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title="Toggle dark mode" className="p-2 rounded-full hover:bg-muted transition-colors">
            {dark ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2" aria-label={isOpen ? "Close menu" : "Open menu"} title="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <ul className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.isRoute ? (
                  <Link to={link.href} onClick={() => setIsOpen(false)} className="block py-2 font-medium text-foreground hover:text-primary transition-colors" title={link.label}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} onClick={() => setIsOpen(false)} className="block py-2 font-medium text-foreground hover:text-primary transition-colors" title={link.label}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
