import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const reveal = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0, 0, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sign up logic will be connected later
  };

  return (
    <section className="py-32 md:py-40">
      <div className="container max-w-md">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1 variants={reveal} className="text-3xl md:text-4xl font-bold mb-2">
            Get started
          </motion.h1>
          <motion.p variants={reveal} className="text-muted-foreground mb-10">
            Create your B2CDESIGNER account.
          </motion.p>

          <motion.form variants={reveal} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Full Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Password</label>
              <input
                required
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Create Account
            </button>
          </motion.form>

          <motion.p variants={reveal} className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">Sign in</Link>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
