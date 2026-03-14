import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { reveal, stagger } from "@/lib/animations";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section className="py-32 md:py-40">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={reveal} className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Contact</motion.p>
            <motion.h1 variants={reveal} className="text-4xl md:text-6xl font-bold leading-[0.9] mb-6">
              Let's <span className="text-primary">talk</span>
            </motion.h1>
            <motion.p variants={reveal} className="text-lg text-muted-foreground leading-relaxed text-pretty mb-12">
              Ready to scale your e-commerce brand? Get in touch and we'll discuss your project.
            </motion.p>

            <motion.div variants={reveal} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">b2csolution2436@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Collaboration</p>
                  <p className="text-sm font-medium">
                    Co-powered by{" "}
                    <a href="https://b2csolution.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      B2CSOLUTION
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center h-full flex flex-col items-center justify-center"
              >
                <p className="text-lg font-semibold mb-2">Message sent!</p>
                <p className="text-sm text-muted-foreground">We'll get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-primary hover:underline">
                  Send another
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Name</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Email</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Service Type</label>
                  <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select a service</option>
                    <option value="marketing">Marketing</option>
                    <option value="design">Design</option>
                    <option value="technical">Technical</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                  <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
