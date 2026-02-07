import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, Server, Trash2, Bell } from "lucide-react"

const SECTIONS = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "Account information: email address, name, and optional phone number provided during registration.",
      "Health data: symptoms you describe, consultation history, and analysis results you choose to save.",
      "Usage data: how you interact with the app, including pages visited and features used, to improve our service.",
      "Device information: browser type, operating system, and network type for compatibility optimization.",
    ],
  },
  {
    icon: Shield,
    title: "How We Use Your Data",
    content: [
      "Providing AI-powered symptom analysis and health guidance based on your inputs.",
      "Maintaining your consultation history so you can track your health over time.",
      "Improving our AI models and health database accuracy (using anonymized, aggregated data only).",
      "Sending important health alerts or service updates (with your consent).",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.",
      "Row Level Security (RLS) ensures you can only access your own data.",
      "We conduct regular security audits and penetration testing.",
      "Our infrastructure is hosted on SOC 2 compliant cloud providers.",
    ],
  },
  {
    icon: Server,
    title: "Data Storage & Retention",
    content: [
      "Your data is stored on secure servers with automatic backups.",
      "Account data is retained as long as your account is active.",
      "You can export your data at any time from your dashboard.",
      "Upon account deletion, all personal data is permanently removed within 30 days.",
    ],
  },
  {
    icon: Trash2,
    title: "Your Rights",
    content: [
      "Access: Request a copy of all personal data we hold about you.",
      "Correction: Update or correct any inaccurate personal information.",
      "Deletion: Request permanent deletion of your account and all associated data.",
      "Portability: Export your consultation history and health data in a standard format.",
    ],
  },
  {
    icon: Bell,
    title: "Third-Party Sharing",
    content: [
      "We never sell your personal health data to third parties.",
      "We do not share identifiable health information with advertisers.",
      "Anonymized, aggregated data may be used for public health research.",
      "We may share data with law enforcement only when legally required to do so.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-svh bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold font-serif lg:text-5xl text-balance">Privacy Policy</h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Your privacy is fundamental to our mission. This policy explains how we collect, use, and protect your personal and health data.
            </p>
            <p className="mt-4 text-sm text-primary-foreground/60">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="space-y-8">
            {SECTIONS.map((section) => (
              <div key={section.title} className="rounded-xl border border-border bg-card p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold font-serif text-card-foreground">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact for Privacy */}
          <div className="mt-12 rounded-xl border border-border bg-muted p-8 text-center">
            <h3 className="text-lg font-semibold font-serif text-foreground">Questions About Your Privacy?</h3>
            <p className="mt-2 text-muted-foreground">
              If you have any questions about this privacy policy or your data, contact our privacy team at{" "}
              <span className="font-medium text-primary">privacy@sarthi.health</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
