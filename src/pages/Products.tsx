import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ShoppingBag, ExternalLink, Shirt, Coffee, Smartphone, Image, Sticker, Upload, ArrowRight } from "lucide-react";
import { reveal, stagger } from "@/lib/animations";

const categories = ["All", "T-Shirts", "Hoodies", "Mugs", "Posters", "Phone Covers", "Stickers"];

const products = [
  { name: "Classic Logo Tee", price: "$24.99", rating: 4.8, category: "T-Shirts", image: "👕" },
  { name: "Urban Streetwear Tee", price: "$29.99", rating: 4.9, category: "T-Shirts", image: "👕" },
  { name: "Vintage Graphic Tee", price: "$27.99", rating: 4.7, category: "T-Shirts", image: "👕" },
  { name: "Abstract Art Hoodie", price: "$49.99", rating: 4.9, category: "Hoodies", image: "🧥" },
  { name: "Minimalist Zip Hoodie", price: "$54.99", rating: 4.8, category: "Hoodies", image: "🧥" },
  { name: "Bold Statement Hoodie", price: "$44.99", rating: 4.7, category: "Hoodies", image: "🧥" },
  { name: "Creative Minds Mug", price: "$14.99", rating: 4.7, category: "Mugs", image: "☕" },
  { name: "Inspirational Quote Mug", price: "$12.99", rating: 4.6, category: "Mugs", image: "☕" },
  { name: "Artist Edition Mug", price: "$16.99", rating: 4.8, category: "Mugs", image: "☕" },
  { name: "Geometric Wall Poster", price: "$19.99", rating: 4.6, category: "Posters", image: "🖼️" },
  { name: "Motivational Poster", price: "$17.99", rating: 4.5, category: "Posters", image: "🖼️" },
  { name: "Abstract Art Print", price: "$22.99", rating: 4.7, category: "Posters", image: "🖼️" },
  { name: "Minimalist Phone Case", price: "$24.99", rating: 4.8, category: "Phone Covers", image: "📱" },
  { name: "Bold Pattern Case", price: "$22.99", rating: 4.7, category: "Phone Covers", image: "📱" },
  { name: "Vinyl Sticker Pack", price: "$9.99", rating: 4.9, category: "Stickers", image: "✨" },
  { name: "Laptop Sticker Set", price: "$12.99", rating: 4.8, category: "Stickers", image: "✨" },
  { name: "Custom Die-Cut Stickers", price: "$7.99", rating: 4.6, category: "Stickers", image: "✨" },
  { name: "Holographic Sticker Pack", price: "$14.99", rating: 4.9, category: "Stickers", image: "✨" },
];

import { useState } from "react";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 md:py-36">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" animate="show" className="text-center mb-12">
          <motion.p variants={reveal} className="text-xs font-mono uppercase tracking-wider text-accent mb-3">Swiftbuy Store</motion.p>
          <motion.h1 variants={reveal} className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-primary">Products</span>
          </motion.h1>
          <motion.p variants={reveal} className="text-lg text-muted-foreground max-w-xl mx-auto mb-2">
            Browse our collection of creative merchandise available on the Swiftbuy Shopify Store.
          </motion.p>
          <motion.div variants={reveal}>
            <a href="https://swiftbuy-9799.myshopify.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium">
              Visit Swiftbuy Shopify Store <ExternalLink className="h-3 w-3" />
            </a>
          </motion.div>
        </motion.div>

        {/* Category Filters */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <motion.div key={p.name + i} variants={reveal} className="group rounded-xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:border-primary/40 transition-all duration-300" style={{ boxShadow: "var(--shadow-md)" }}>
              <div className="h-44 bg-muted flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-300">
                {p.image}
              </div>
              <div className="p-5">
                <p className="text-xs font-mono uppercase text-muted-foreground mb-1">{p.category}</p>
                <h3 className="font-semibold text-foreground mb-2">{p.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-primary">{p.price}</span>
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
          ))}
        </motion.div>

        {/* Custom Design CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12 text-center">
          <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Upload className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Want a Custom Design?</h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">Upload your own artwork and we'll print it on any product. T-shirts, hoodies, mugs — you choose!</p>
          <a href="https://swiftbuy-9799.myshopify.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
            <Upload className="h-5 w-5" /> Start Creating
          </a>
        </motion.div>
      </div>
    </section>
  );
}
