import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, ExternalLink, ShoppingBag } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-display font-bold text-foreground">B2CDESIGNER</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Creative designs printed on premium merchandise. Co-powered by{" "}
              <a href="https://b2csolution.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                B2CSOLUTION
              </a>.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/itzomharde_6" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors" title="Instagram - @itzomharde_6">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://instagram.com/techdesigner_30" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors" title="Instagram - @techdesigner_30">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://swiftbuy-9799.myshopify.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors" title="Swiftbuy Shopify Store">
                <ShoppingBag className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "Products", to: "/products" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Ecosystem</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://swiftbuy-9799.myshopify.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Swiftbuy Shopify Store <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li><span className="text-sm text-muted-foreground">Swiftbuy — Printify</span></li>
              <li>
                <a href="https://b2csolution.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  B2CSOLUTION <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">9882303030 — Om Harde</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:b2csolution2436@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  b2csolution2436@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-muted-foreground" />
                <a href="https://instagram.com/itzomharde_6" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  @itzomharde_6
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-muted-foreground" />
                <a href="https://instagram.com/techdesigner_30" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  @techdesigner_30
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Policies & Copyright */}
        <div className="mt-14 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} B2CDESIGNER. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">Privacy Policy</span>
              <span className="text-xs text-muted-foreground">Terms of Service</span>
              <span className="text-xs text-muted-foreground">Return Policy</span>
            </div>
            <p className="text-xs font-mono text-muted-foreground">
              CO-POWERED BY B2CSOLUTION
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
