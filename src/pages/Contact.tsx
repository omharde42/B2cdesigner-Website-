import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { reveal, stagger } from "@/lib/animations";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const firstError = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0];
      toast.error(firstError || "Please check your input");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      service: parsed.data.service,
      message: parsed.data.message,
    });
    setLoading(false);
    if (error) {
      toast.error("Failed to send message. Please try again.");
    } else {
      setSubmitted(true);
      setForm({ name: "", email: "", service: "", message: "" });
      toast.success("Message sent successfully!");
    }
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
              Have questions about our products or want to place a custom order? Get in touch!
            </motion.p>

            <motion.div variants={reveal} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</p>
                  <a href="mailto:b2csolution2436@gmail.com" className="text-sm font-medium text-foreground hover:text-primary transition-colors">b2csolution2436@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium">9882303030 — Om Harde</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Partnership</p>
                  <p className="text-sm font-medium">
                    Co-powered by{" "}
                    <a href="https://b2csolution.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">B2CSOLUTION</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div>
            {submitted ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center h-full flex flex-col items-center justify-center">
                <p className="text-lg font-semibold mb-2">Message sent!</p>
                <p className="text-sm text-muted-foreground">We'll get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-primary hover:underline">Send another</button>
              </motion.div>
            ) : (
              <motion.form initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={handleSubmit} className="space-y-6">
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
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">What are you looking for?</label>
                  <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select an option</option>
                    <option value="custom-design">Custom Design Order</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                  <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us what you need..." />
                </div>
                <button type="submit" disabled={loading} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
                  {loading ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
