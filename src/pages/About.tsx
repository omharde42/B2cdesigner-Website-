import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { reveal, stagger } from "@/lib/animations";
import { ShoppingBag, Palette, Truck, Shield, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 md:py-36">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl mx-auto text-center mb-16">
          <motion.p variants={reveal} className="text-xs font-mono uppercase tracking-wider text-accent mb-3">About Us</motion.p>
          <motion.h1 variants={reveal} className="text-4xl md:text-6xl font-bold leading-[0.95] mb-6">
            Creative Designs, <span className="text-primary">Premium Quality</span>
          </motion.h1>
          <motion.p variants={reveal} className="text-lg text-muted-foreground leading-relaxed text-pretty">
            B2CDesigner is a creative e-commerce brand that sells custom design merchandise — T-shirts, hoodies, mugs, posters, phone covers, and stickers. We bring unique artwork to life on premium products.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div variants={reveal} className="rounded-xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-md)" }}>
            <p className="text-xs font-mono uppercase tracking-wider text-accent mb-3">The Partnership</p>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Co-Powered by B2CSOLUTION</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              B2CDesigner and{" "}
              <a href="https://b2csolution.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">B2CSOLUTION</a>{" "}
              collaborate to deliver a full-stack e-commerce solution — from creative design and product creation to storefront deployment and marketing automation through our Swiftbuy platform.
            </p>
          </motion.div>
          <motion.div variants={reveal} className="rounded-xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-md)" }}>
            <p className="text-xs font-mono uppercase tracking-wider text-accent mb-3">Swiftbuy Ecosystem</p>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Marketing on Shopify & Printify</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All our products are marketed through the Swiftbuy brand on both Shopify and Printify. This dual-platform approach ensures wide reach, reliable fulfillment, and seamless customer experiences.
            </p>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Palette, label: "Unique Designs", value: "300+" },
            { icon: ShoppingBag, label: "Products Sold", value: "5,000+" },
            { icon: Truck, label: "Orders Delivered", value: "4,500+" },
            { icon: Shield, label: "Happy Customers", value: "2,000+" },
          ].map((stat) => (
            <motion.div key={stat.label} variants={reveal} className="text-center p-6 rounded-xl border border-border bg-card" style={{ boxShadow: "var(--shadow-sm)" }}>
              <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link to="/products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Browse Our Products <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
