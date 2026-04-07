import { useState, useEffect, lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Loader from "@/components/Loader";
import BackToTop from "@/components/BackToTop";

/* Lazy load below-fold sections for performance */
const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Products = lazy(() => import("@/components/Products"));
const Clients = lazy(() => import("@/components/Clients"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [loading, setLoading] = useState(true);

  // Simulate initial load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <Suspense fallback={<div className="py-20 text-center"><div className="w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin mx-auto" /></div>}>
          <About />
          <Services />
          <Products />
          <Clients />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <BackToTop />
    </>
  );
};

export default Index;
