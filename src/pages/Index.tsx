import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, ShoppingBag, Star, Upload, Shield,
  Truck, RefreshCw, Headphones, Shirt, Coffee, Smartphone,
  Image, Sticker, CheckCircle2, Sparkles, Zap, CreditCard,
  Clock, Award, TrendingUp, Heart, BadgePercent
} from "lucide-react";
import { reveal, stagger } from "@/lib/animations";

const categories = [
  { icon: Shirt, name: "T-Shirts", count: "50+ Designs" },
  { icon: Shirt, name: "Hoodies", count: "30+ Designs" },
  { icon: Coffee, name: "Mugs", count: "40+ Designs" },
  { icon: Image, name: "Posters", count: "60+ Designs" },
  { icon: Smartphone, name: "Phone Covers", count: "25+ Designs" },
  { icon: Sticker, name: "Stickers", count: "100+ Designs" },
];

const featuredProducts = [
  { name: "Urban Streetwear Tee", price: "$29.99", oldPrice: "$39.99", rating: 4.8, category: "T-Shirts", image: "👕", badge: "Best Seller" },
  { name: "Abstract Art Hoodie", price: "$49.99", oldPrice: "$64.99", rating: 4.9, category: "Hoodies", image: "🧥", badge: "Trending" },
  { name: "Creative Minds Mug", price: "$14.99", oldPrice: null, rating: 4.7, category: "Mugs", image: "☕", badge: null },
  { name: "Geometric Poster", price: "$19.99", oldPrice: "$24.99", rating: 4.6, category: "Posters", image: "🖼️", badge: "New" },
  { name: "Minimalist Phone Case", price: "$24.99", oldPrice: null, rating: 4.8, category: "Phone Covers", image: "📱", badge: "Best Seller" },
  { name: "Vinyl Sticker Pack", price: "$9.99", oldPrice: "$14.99", rating: 4.9, category: "Stickers", image: "✨", badge: "Hot Deal" },
];

const trendingProducts = [
  { name: "Retro Wave Hoodie", price: "$54.99", rating: 4.9, category: "Hoodies", image: "🧥" },
  { name: "Neon Art Tee", price: "$27.99", rating: 4.8, category: "T-Shirts", image: "👕" },
  { name: "Holographic Sticker Pack", price: "$14.99", rating: 4.9, category: "Stickers", image: "✨" },
  { name: "Inspirational Quote Mug", price: "$12.99", rating: 4.7, category: "Mugs", image: "☕" },
];

const reviews = [
  { name: "Sarah K.", role: "Repeat Customer", text: "The print quality is amazing! My hoodie looks even better in person. B2CDesigner is my go-to for creative merch.", stars: 5 },
  { name: "James M.", role: "Custom Order", text: "Uploaded my own design and it came out perfect. Fast delivery and great customer support.", stars: 5 },
  { name: "Aisha R.", role: "Gift Buyer", text: "Ordered custom mugs for my team — everyone loved them! Will definitely order again.", stars: 5 },
  { name: "David L.", role: "Designer", text: "The variety of products and the quality of prints is unmatched. Highly recommend B2CDesigner!", stars: 5 },
];

const whyChoose = [
  { icon: Sparkles, title: "Premium Print Quality", desc: "High-resolution printing on premium materials for vibrant, long-lasting designs." },
  { icon: CheckCircle2, title: "Unique Creative Designs", desc: "Original artwork and trending designs you won't find anywhere else." },
  { icon: Upload, title: "Custom Merchandise", desc: "Upload your own design and we'll print it on any product you choose." },
  { icon: ShoppingBag, title: "Affordable Pricing", desc: "Premium quality at prices that won't break the bank." },
  { icon: Truck, title: "Fast Delivery", desc: "Quick processing and reliable shipping to get your order on time." },
  { icon: Shield, title: "Secure Payments", desc: "Multiple payment options with bank-level security for every transaction." },
];

const trustBadges = [
  { icon: Shield, label: "Secure Checkout" },
  { icon: CreditCard, label: "Multiple Payment Options" },
  { icon: Truck, label: "Fast Shipping" },
  { icon: RefreshCw, label: "Easy Returns" },
  { icon: Headphones, label: "24/7 Support" },
  { icon: Award, label: "Quality Guaranteed" },
];

function ProductCard({ p, showBadge = false }: { p: typeof featuredProducts[0] | typeof trendingProducts[0]; showBadge?: boolean }) {
  const badge = showBadge && "badge" in p ? (p as typeof featuredProducts[0]).badge : null;
  const oldPrice = "oldPrice" in p ? (p as typeof featuredProducts[0]).oldPrice : null;

  return (
    <motion.div variants={reveal} className="group rounded-xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:border-primary/40 transition-all duration-300" style={{ boxShadow: "var(--shadow-md)" }}>
      <div className="relative h-48 bg-muted flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
        {p.image}
        {badge && (
          <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
            badge === "Best Seller" ? "bg-accent text-accent-foreground" :
            badge === "Trending" ? "bg-primary text-primary-foreground" :
            badge === "Hot Deal" ? "bg-accent text-accent-foreground" :
            "bg-secondary text-secondary-foreground"
          }`}>
            {badge}
          </span>
        )}
        <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-accent">
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="p-5">
        <p className="text-xs font-mono uppercase text-muted-foreground mb-1">{p.category}</p>
        <h3 className="font-semibold text-foreground mb-2">{p.name}</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">{p.price}</span>
            {oldPrice && <span className="text-sm text-muted-foreground line-through">{oldPrice}</span>}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span className="text-xs text-muted-foreground">{p.rating}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <a href="https://swiftbuy-9799.myshopify.com" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            Add to Cart
          </a>
          <a href="https://swiftbuy-9799.myshopify.com" target="_blank" rel="noopener noreferrer" className="py-2.5 px-4 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
            View
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Index() {
  return (
    <>
      {/* Promo Banner */}
      <div className="bg-accent text-accent-foreground py-2.5 text-center">
        <div className="container flex items-center justify-center gap-2 text-sm font-medium">
          <BadgePercent className="h-4 w-4" />
          <span>🔥 Limited Time Offer — <strong>20% OFF</strong> on all Hoodies & T-Shirts!</span>
          <a href="https://swiftbuy-9799.myshopify.com" target="_blank" rel="noopener noreferrer" className="underline font-bold ml-1">Shop Now →</a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl mx-auto text-center">
            <motion.div variants={reveal} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 mb-8">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Trusted by 2,000+ Happy Customers
              </span>
            </motion.div>

            <motion.h1 variants={reveal} className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
              Creative Designs Printed on{" "}
              <span className="text-primary">Premium Merchandise</span>
            </motion.h1>

            <motion.p variants={reveal} className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto mb-4">
              T-Shirts • Hoodies • Mugs • Posters • Custom Designs
            </motion.p>
            <motion.p variants={reveal} className="text-sm text-muted-foreground mb-10">
              Designed by <span className="font-semibold text-foreground">B2CDesigner</span> • Marketed on <span className="font-semibold text-foreground">Shopify</span> by <span className="font-semibold text-accent">Swiftbuy</span>
            </motion.p>

            <motion.div variants={reveal} className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="https://swiftbuy-9799.myshopify.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg">
                <ShoppingBag className="h-5 w-5" /> Shop Now
              </a>
              <Link to="/products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg">
                <Upload className="h-5 w-5" /> Create Custom Design
              </Link>
            </motion.div>

            {/* Hero product preview */}
            <motion.div variants={reveal} className="grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-lg mx-auto">
              {["👕", "🧥", "☕", "🖼️", "📱", "✨"].map((emoji, i) => (
                <div key={i} className="aspect-square rounded-xl bg-card border border-border flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer" style={{ boxShadow: "var(--shadow-sm)" }}>
                  {emoji}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 border-t border-b border-border bg-muted/30">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-muted-foreground">
                <b.icon className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={reveal} className="text-xs font-mono uppercase tracking-wider text-accent mb-3">Shop Now</motion.p>
            <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold mb-4">Featured Products</motion.h2>
            <motion.p variants={reveal} className="text-muted-foreground max-w-lg mx-auto">Hand-picked trending designs across our most popular categories.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p) => (
              <ProductCard key={p.name} p={p} showBadge />
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border font-medium text-foreground hover:bg-secondary transition-colors">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Designs */}
      <section className="py-20 md:py-28 border-t border-border bg-muted/30">
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.div variants={reveal} className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 mb-4">
              <TrendingUp className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-mono uppercase tracking-wider text-accent">Trending Now</span>
            </motion.div>
            <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold mb-4">Trending Designs</motion.h2>
            <motion.p variants={reveal} className="text-muted-foreground max-w-lg mx-auto">Most loved designs this week — grab them before they're gone!</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((p) => (
              <ProductCard key={p.name} p={p} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={reveal} className="text-xs font-mono uppercase tracking-wider text-accent mb-3">Categories</motion.p>
            <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold mb-4">Browse by Category</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((c) => (
              <motion.div key={c.name} variants={reveal}>
                <Link to="/products" className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: "var(--shadow-sm)" }}>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <c.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-sm text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.count}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Design Section */}
      <section className="py-20 md:py-28 border-t border-border bg-muted/30">
        <div className="container">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-14">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto text-center">
              <motion.div variants={reveal} className="h-20 w-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8">
                <Upload className="h-10 w-10 text-accent" />
              </motion.div>
              <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold mb-4">
                Upload Your Design — We Print It
              </motion.h2>
              <motion.p variants={reveal} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Got a unique design? Upload your artwork and choose from T-shirts, hoodies, mugs, posters, and more. We handle the printing and delivery.
              </motion.p>
              <motion.div variants={reveal} className="flex flex-wrap justify-center gap-4">
                <a href="https://swiftbuy-9799.myshopify.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
                  <Upload className="h-5 w-5" /> Upload Your Design
                </a>
                <Link to="/products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border font-semibold text-foreground hover:bg-secondary transition-colors">
                  Browse Products <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose B2CDesigner */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={reveal} className="text-xs font-mono uppercase tracking-wider text-accent mb-3">Why Us</motion.p>
            <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold mb-4">Why Choose B2CDesigner</motion.h2>
            <motion.p variants={reveal} className="text-muted-foreground max-w-lg mx-auto">We combine creative design with premium quality to deliver merchandise you'll love.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <motion.div key={item.title} variants={reveal} className="rounded-xl border border-border bg-card p-7 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300" style={{ boxShadow: "var(--shadow-md)" }}>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 md:py-28 border-t border-border bg-muted/30">
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={reveal} className="text-xs font-mono uppercase tracking-wider text-accent mb-3">Testimonials</motion.p>
            <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold mb-4">What Our Customers Say</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r) => (
              <motion.div key={r.name} variants={reveal} className="rounded-xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-sm)" }}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-5 text-pretty">"{r.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Delivery & Returns Info */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Free Shipping</h4>
                <p className="text-sm text-muted-foreground">Free delivery on orders above $50. Standard shipping takes 5-7 business days.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Easy Returns</h4>
                <p className="text-sm text-muted-foreground">30-day return policy. Not satisfied? Return for a full refund, no questions asked.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Customer Support</h4>
                <p className="text-sm text-muted-foreground">Got questions? Reach us anytime via email or phone. We're here to help!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Brand */}
      <section className="py-20 md:py-28 border-t border-border bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={reveal} className="text-xs font-mono uppercase tracking-wider text-accent mb-3">About</motion.p>
              <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold mb-6">About B2CDesigner</motion.h2>
              <motion.p variants={reveal} className="text-lg text-muted-foreground leading-relaxed mb-6">
                B2CDesigner is a creative e-commerce brand that sells custom design merchandise — from T-shirts and hoodies to mugs, posters, and stickers. Co-powered by{" "}
                <a href="https://b2csolution.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">B2CSOLUTION</a>,
                we market through our Swiftbuy storefront on Shopify.
              </motion.p>
              <motion.div variants={reveal}>
                <Link to="/about" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                  Learn more about us <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold mb-4">Ready to Get Started?</motion.h2>
            <motion.p variants={reveal} className="text-muted-foreground mb-8">
              Browse our collection or reach out to discuss a custom order. We're here to help bring your designs to life.
            </motion.p>
            <motion.div variants={reveal} className="flex flex-wrap justify-center gap-4">
              <a href="https://swiftbuy-9799.myshopify.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                <ShoppingBag className="h-5 w-5" /> Shop Now
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border font-semibold text-foreground hover:bg-secondary transition-colors">
                Contact Us <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
