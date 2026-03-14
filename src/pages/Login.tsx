import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { reveal, stagger } from "@/lib/animations";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-32 md:py-40">
      <div className="container max-w-md">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1 variants={reveal} className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back
          </motion.h1>
          <motion.p variants={reveal} className="text-muted-foreground mb-10">
            Sign in to your B2CDESIGNER account.
          </motion.p>

          <motion.form variants={reveal} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Email</label>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Password</label>
              <input required type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </motion.form>

          <motion.p variants={reveal} className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline font-medium">Sign up</Link>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
