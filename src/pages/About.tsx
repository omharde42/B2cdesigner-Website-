import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { reveal, stagger } from "@/lib/animations";

export default function About() {
  return (
    <section className="py-32 md:py-40">
      <div className="container max-w-3xl">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p variants={reveal} className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
            About Us
          </motion.p>
          <motion.h1 variants={reveal} className="text-4xl md:text-6xl font-bold leading-[0.9] mb-8">
            Design meets <span className="text-primary">commerce</span>
          </motion.h1>
          <motion.p variants={reveal} className="text-lg text-muted-foreground leading-relaxed text-pretty mb-8">
            B2CDESIGNER is a precision design studio co-powered by{" "}
            <a href="https://b2csolution.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              B2CSOLUTION
            </a>
            . We bridge the gap between high-end design services and automated e-commerce marketing through our proprietary Swiftbuy platform.
          </motion.p>
          <motion.p variants={reveal} className="text-lg text-muted-foreground leading-relaxed text-pretty mb-8">
            Our Swiftbuy ecosystem integrates seamlessly with Shopify and Printify, enabling entrepreneurs and e-commerce operators to scale their businesses with professionally designed brand assets that convert.
          </motion.p>
          <motion.div variants={reveal} className="rounded-xl border border-border bg-card p-8 mb-12" style={{ boxShadow: "var(--shadow-md)" }}>
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">The Partnership</p>
            <p className="text-sm text-foreground leading-relaxed text-pretty">
              B2CDESIGNER and B2CSOLUTION collaborate to deliver a full-stack e-commerce solution — from brand identity and asset creation to storefront deployment and marketing automation. Together, we power Swiftbuy.
            </p>
          </motion.div>
          <motion.div variants={reveal}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Work with us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
