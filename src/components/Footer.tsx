import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-display font-bold text-foreground">B2CDESIGNER</span>
            </div>
            <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
              Co-powered by{" "}
              <a href="https://b2csolution.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                B2CSOLUTION
              </a>
              . Design for scale. Powered by logic.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Ecosystem</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://swiftbuy-9799.myshopify.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Swiftbuy Shopify Store
                </a>
              </li>
              <li><span className="text-sm text-muted-foreground">Swiftbuy — Printify</span></li>
              <li>
                <a href="https://b2csolution.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  B2CSOLUTION
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted-foreground">Phone: 9882303030</span></li>
              <li><span className="text-sm text-muted-foreground">Om Harde</span></li>
              <li>
                <a href="https://instagram.com/itzomharde_6" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  @itzomharde_6
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted-foreground">Privacy Policy</span></li>
              <li><span className="text-sm text-muted-foreground">Terms of Service</span></li>
              <li><span className="text-sm text-muted-foreground">Cookie Policy</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} B2CDESIGNER. All rights reserved.
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            CO-POWERED BY B2CSOLUTION
          </p>
        </div>
      </div>
    </footer>
  );
}
