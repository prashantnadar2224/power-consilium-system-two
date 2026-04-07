import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";

const Footer = lazy(() => import("@/components/Footer"));

/* Full products listing page */
const allProducts = [
  { name: "Online UPS", category: "UPS Systems", desc: "Enterprise-grade online UPS for mission-critical applications with double conversion technology." },
  { name: "Single Phase Online UPS", category: "UPS Systems", desc: "Single phase online UPS from 1 KVA to 20 KVA for offices and small data centers." },
  { name: "Three Phase Online UPS", category: "UPS Systems", desc: "Three phase online UPS from 10 KVA to 800 KVA for industrial and large-scale deployments." },
  { name: "Industrial UPS", category: "UPS Systems", desc: "Heavy-duty UPS systems designed for manufacturing, industrial plants and harsh environments." },
  { name: "Line Interactive UPS", category: "UPS Systems", desc: "Cost-effective line interactive UPS from 600 VA to 3 KVA for desktops and small offices." },
  { name: "APC Online UPS", category: "UPS Systems", desc: "APC Smart-UPS and Symmetra series for reliable power protection." },
  { name: "Power Inverter", category: "Inverters", desc: "Reliable power inverters for home and commercial use from Luminous and Microtek." },
  { name: "Luminous Inverter Battery", category: "Batteries", desc: "Genuine Luminous inverter batteries with extended warranty and high backup." },
  { name: "UPS SMF Battery", category: "Batteries", desc: "Sealed Maintenance Free batteries from Exide, Amaron, Quanta for UPS applications." },
  { name: "Tubular Battery", category: "Batteries", desc: "Long-lasting tubular batteries for inverters with superior cycle life." },
  { name: "Microtek Inverter", category: "Inverters", desc: "Microtek inverters and UPS with smart features and energy efficiency." },
  { name: "Inverter Battery", category: "Batteries", desc: "Wide range of inverter batteries from leading brands for residential and commercial use." },
  { name: "UPS System", category: "UPS Systems", desc: "Complete UPS systems with installation, commissioning and warranty support." },
  { name: "Battery Terminal Cap", category: "Accessories", desc: "Safety battery terminal caps and accessories for UPS and inverter installations." },
  { name: "LED Display", category: "Accessories", desc: "UPS monitoring LED display panels for real-time status and alerts." },
];

const categories = [...new Set(allProducts.map((p) => p.category))];

const ProductsPage = () => (
  <>
    <Header />
    <main className="pt-24 md:pt-32 pb-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">All Products</h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Premium quality UPS systems, inverters, batteries and accessories from top brands at affordable prices.
        </p>

        {categories.map((cat) => (
          <section key={cat} className="mb-12" aria-label={cat}>
            <h2 className="text-2xl font-semibold text-primary mb-6 border-b border-border pb-2">{cat}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProducts.filter((p) => p.category === cat).map((p) => (
                <div key={p.name} className="bg-card dark:bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{p.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  <a
                    href="/#contact"
                    className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
                    title={`Enquire about ${p.name}`}
                  >
                    Enquire Now →
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
    <Suspense fallback={null}><Footer /></Suspense>
    <BackToTop />
  </>
);

export default ProductsPage;
