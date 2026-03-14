import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Palette, Megaphone, Star, Send } from "lucide-react";
import { useState } from "react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const reveal = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0, 0, 1] } },
};

const services = [
  {
    icon: Palette,
    title: "Brand Design",
    desc: "High-fidelity brand assets engineered for e-commerce scale.",
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    desc: "Swiftbuy-powered campaigns across Shopify and Printify.",
  },
  {
    icon: ShoppingBag,
    title: "Store Setup",
    desc: "End-to-end Shopify and Printify store configuration.",
  },
];

const reviews = [
  { name: "Sarah K.", role: "Shopify Store Owner", text: "B2CDESIGNER transformed our brand. The Swiftbuy integration doubled our conversion rate.", stars: 5 },
  { name: "James M.", role: "Print-on-Demand Seller", text: "Professional design and seamless Printify automation. Highly recommend.", stars: 5 },
  { name: "Aisha R.", role: "E-commerce Entrepreneur", text: "The co-powered ecosystem between B2CDESIGNER and B2CSOLUTION is unmatched.", stars: 5 },
];

export default function Index() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setContactForm({ name: "", email: "", service: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="py-32 md:py-40">
        <div className="container">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.div variants={reveal} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 mb-8">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Co-powered by B2CSOLUTION
              </span>
            </motion.div>

            <motion.h1 variants={reveal} className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-6">
              Design for Scale.{" "}
              <span className="text-primary">Powered by Logic.</span>
            </motion.h1>

            <motion.p variants={reveal} className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl mb-10">
              B2CDESIGNER integrates high-fidelity brand assets directly into your Swiftbuy ecosystem across Shopify and Printify.
            </motion.p>

            <motion.div variants={reveal} className="flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Swiftbuy Spotlight */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={reveal} className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
              Swiftbuy Ecosystem
            </motion.p>
            <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold mb-6">
              Marketing on <span className="text-primary">Shopify</span> &{" "}
              <span className="text-primary">Printify</span>
            </motion.h2>
            <motion.p variants={reveal} className="text-muted-foreground text-lg max-w-2xl mb-12 text-pretty leading-relaxed">
              Swiftbuy automates your e-commerce marketing pipeline — from product design to storefront deployment — across both Shopify and Printify platforms.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
              className="rounded-xl border border-border bg-card p-8 hover:-translate-y-1 hover:border-primary/50 transition-all duration-200"
              style={{ boxShadow: "var(--shadow-md)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">Shopify Integration</h3>
                  <p className="text-xs font-mono text-muted-foreground">swiftbuy://shopify</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                Automated product listings, buy-now buttons, and conversion-optimized storefronts powered by Swiftbuy's Shopify API.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.2, 0, 0, 1], delay: 0.04 }}
              className="rounded-xl border border-border bg-card p-8 hover:-translate-y-1 hover:border-primary/50 transition-all duration-200"
              style={{ boxShadow: "var(--shadow-md)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">Printify Integration</h3>
                  <p className="text-xs font-mono text-muted-foreground">swiftbuy://printify</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                Design-to-print pipeline with automated mockups, product variants, and fulfilment sync via Printify's API.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={reveal} className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
              What We Do
            </motion.p>
            <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold mb-12">
              Services
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={reveal}
                className="group rounded-xl border border-border bg-card p-8 hover:-translate-y-1 hover:border-primary/50 transition-all duration-200"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <Link to="/services" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
              View all services <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={reveal} className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
              Testimonials
            </motion.p>
            <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold mb-12">
              Client Reviews
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {reviews.map((r) => (
              <motion.div
                key={r.name}
                variants={reveal}
                className="rounded-xl border border-border bg-card p-8"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-6 text-pretty">"{r.text}"</p>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={reveal} className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
              Get in Touch
            </motion.p>
            <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold mb-12">
              Contact Us
            </motion.h2>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center"
            >
              <p className="text-lg font-semibold mb-2">Message sent!</p>
              <p className="text-sm text-muted-foreground">We'll get back to you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-primary hover:underline">
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Name</label>
                  <input
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Email</label>
                  <input
                    required
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Service Type</label>
                <select
                  required
                  value={contactForm.service}
                  onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                  className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a service</option>
                  <option value="marketing">Marketing</option>
                  <option value="design">Design</option>
                  <option value="technical">Technical</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                <textarea
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  rows={5}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </>
  );
}
