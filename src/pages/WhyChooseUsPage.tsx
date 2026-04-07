import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import WhyChooseUs from "@/components/WhyChooseUs";
import BackToTop from "@/components/BackToTop";

const Footer = lazy(() => import("@/components/Footer"));

/* Standalone Why Choose Us page */
const WhyChooseUsPage = () => (
  <>
    <Header />
    <main className="pt-20 md:pt-28">
      <WhyChooseUs />
    </main>
    <Suspense fallback={null}><Footer /></Suspense>
    <BackToTop />
  </>
);

export default WhyChooseUsPage;
