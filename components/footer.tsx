import Link from "next/link"
import { Heart } from "lucide-react"

const FOOTER_LINKS = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/health-literacy", label: "Health Literacy" },
    { href: "/impact", label: "Impact" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
  Support: [
    { href: "/auth/login", label: "Sign In" },
    { href: "/auth/sign-up", label: "Create Account" },
    { href: "/dashboard", label: "Dashboard" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Heart className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold font-serif text-card-foreground">Sarthi</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-powered telemedicine bringing quality healthcare to underserved communities across India.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-card-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            2025 Sarthi Health. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with care for rural India.
          </p>
        </div>
      </div>
    </footer>
  )
}
