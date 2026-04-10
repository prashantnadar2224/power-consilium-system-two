import { useState, useEffect, lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Loader from "@/components/Loader";
import BackToTop from "@/components/BackToTop";

/* Lazy load below-fold sections */
const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Expertise = lazy(() => import("@/components/Expertise"));
const Products = lazy(() => import("@/components/Products"));
const Industries = lazy(() => import("@/components/Industries"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Clients = lazy(() => import("@/components/Clients"));
const Contact = lazy(() => import("@/components/Contact"));
const CTABanner = lazy(() => import("@/components/CTABanner"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [loading, setLoading] = useState(true);

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
          <Expertise />
          <Products />
          <Industries />
          <WhyChooseUs />
          <Testimonials />
          <Clients />
          <Contact />
          <CTABanner />
        </Suspense>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
      <BackToTop />
    </>
  );
};

export default Index;
