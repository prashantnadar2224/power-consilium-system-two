import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

/* Google Reviews / Testimonials section */
const googleRating = 4.8;
const totalReviews = 45;

const reviews = [
  { name: "Rajesh Kumar", rating: 5, text: "Excellent UPS AMC service. PCS team is always responsive and provides quick turnaround for repairs. Highly recommended for corporate power solutions.", time: "2 months ago" },
  { name: "Sneha Patel", rating: 5, text: "We have been using PCS for our office UPS maintenance for 3 years now. Very professional team with great technical knowledge at card level.", time: "3 months ago" },
  { name: "Amit Sharma", rating: 5, text: "Best UPS supplier in Mumbai. Got a great deal on Schneider Electric UPS with proper installation and AMC support. Very satisfied.", time: "4 months ago" },
  { name: "Priya Deshmukh", rating: 4, text: "Good service for our battery replacement needs. They stock all major brands like Exide, Amaron and Quanta. Timely delivery as promised.", time: "5 months ago" },
  { name: "Vikram Singh", rating: 5, text: "PCS handled our complete data center UPS setup in Pune. From consulting to installation, everything was professional and on time.", time: "6 months ago" },
  { name: "Anita Joshi", rating: 5, text: "Their energy audit service helped us reduce power costs by 20%. Knowledgeable team with Pan India support presence.", time: "7 months ago" },
];

const Testimonials = () => (
  <section id="testimonials" className="py-16 md:py-24 bg-background" aria-label="Customer testimonials and Google reviews">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6" />

        {/* Google rating badge */}
        <div className="inline-flex items-center gap-3 bg-card dark:bg-card rounded-xl px-6 py-3 shadow-md border border-border">
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" width={24} height={24} loading="lazy" />
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < Math.floor(googleRating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`} aria-hidden="true" />
            ))}
          </div>
          <span className="font-bold text-foreground">{googleRating}</span>
          <span className="text-muted-foreground text-sm">({totalReviews} reviews)</span>
        </div>
      </motion.div>

      {/* Reviews grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card dark:bg-card rounded-xl p-6 shadow-sm border border-border"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">{r.name.charAt(0)}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.time}</p>
              </div>
            </div>
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className={`w-4 h-4 ${j < r.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`} aria-hidden="true" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Link to Google profile */}
      <div className="text-center">
        <a
          href="https://www.google.com/maps/place/Power+Consilium+System"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          aria-label="View all Google reviews"
          title="View all reviews on Google"
        >
          <ExternalLink className="w-4 h-4" aria-hidden="true" /> View All Reviews on Google
        </a>
      </div>
    </div>
  </section>
);

export default Testimonials;
