import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-display font-bold tracking-tight text-foreground">
            B2CDESIGNER
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 rounded-sm border border-border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
            × B2CSOLUTION
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                location.pathname === item.to
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="https://swiftbuy-9799.myshopify.com" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingBag className="h-4 w-4" /> Shop
          </a>
          <ThemeToggle />
          <Link
            to="/login"
            className="hidden md:inline-flex px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="hidden md:inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-md ${
                location.pathname === item.to
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href="https://swiftbuy-9799.myshopify.com" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-muted-foreground">
            🛒 Swiftbuy Shop
          </a>
          <div className="flex gap-2 pt-3 border-t border-border">
            <Link to="/login" onClick={() => setMobileOpen(false)} className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg border border-border text-foreground">
              Login
            </Link>
            <Link to="/signup" onClick={() => setMobileOpen(false)} className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
