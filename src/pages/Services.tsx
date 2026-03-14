import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Palette, Megaphone, ShoppingBag, Code, BarChart3, Layers } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0, 0, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };

const allServices = [
  { icon: Palette, title: "Brand Design", desc: "Logo systems, visual identity, brand guidelines, and asset libraries engineered for e-commerce." },
  { icon: Megaphone, title: "Marketing Automation", desc: "Swiftbuy-powered campaigns, email flows, and ad creative optimized for Shopify and Printify." },
  { icon: ShoppingBag, title: "Store Setup", desc: "End-to-end Shopify and Printify store configuration, theme customization, and product setup." },
  { icon: Code, title: "Technical Integration", desc: "Custom API integrations, webhook setup, and Swiftbuy ecosystem configuration." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Performance dashboards, conversion tracking, and data-driven optimization." },
  { icon: Layers, title: "Product Design", desc: "Print-ready mockups, product photography, and variant design for Printify catalogs." },
];

export default function Services() {
  return (
    <section className="py-32 md:py-40">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl mb-16">
          <motion.p variants={reveal} className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
            Services
          </motion.p>
          <motion.h1 variants={reveal} className="text-4xl md:text-6xl font-bold leading-[0.9] mb-6">
            What we <span className="text-primary">build</span>
          </motion.h1>
          <motion.p variants={reveal} className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Every service is designed to integrate with the Swiftbuy ecosystem across Shopify and Printify. Service and product pages will be updated soon with detailed case studies.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {allServices.map((s) => (
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

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Discuss your project
          </Link>
        </div>
      </div>
    </section>
  );
}
