import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Mic,
  Brain,
  WifiOff,
  Languages,
  Siren,
  Database,
  Shield,
  Zap,
  Clock,
  Heart,
  Check,
  X,
} from "lucide-react"

const FEATURES = [
  {
    icon: Mic,
    title: "Voice-First Input",
    description:
      "Simply speak your symptoms in your native language. Our advanced speech recognition supports Hindi, Punjabi, English, and more regional languages, making healthcare accessible to everyone regardless of literacy.",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Our medical AI processes your symptoms against a comprehensive database of conditions, providing preliminary guidance with severity assessment to help you make informed decisions about your health.",
  },
  {
    icon: WifiOff,
    title: "Offline Capability",
    description:
      "Core symptom checking works without an internet connection. Essential health guidance is cached locally, ensuring you have access to medical information even in the most remote areas.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description:
      "Available in 10+ Indian languages including Hindi, Punjabi, Tamil, Telugu, Bengali, and more. The interface adapts to your preferred language for a truly inclusive experience.",
  },
  {
    icon: Siren,
    title: "Emergency Triage",
    description:
      "Instant identification of emergency symptoms with clear, actionable guidance. When seconds matter, Sarthi helps you recognize critical situations and provides step-by-step first aid instructions.",
  },
  {
    icon: Database,
    title: "Medical Knowledge Base",
    description:
      "Access a vast, verified database of common conditions, medicines, and treatments. All information is reviewed by medical professionals and updated regularly to ensure accuracy.",
  },
  {
    icon: Shield,
    title: "Data Privacy & Security",
    description:
      "Your health data is encrypted end-to-end and stored securely. We follow HIPAA-equivalent standards and never share your personal information with third parties.",
  },
  {
    icon: Zap,
    title: "Low Bandwidth Optimized",
    description:
      "Designed to work flawlessly on 2G and 3G networks. Our compressed data protocols ensure fast responses even with limited connectivity, making telehealth truly accessible.",
  },
]

const COMPARISON = [
  {
    feature: "No travel required",
    sarthi: true,
    traditional: false,
  },
  {
    feature: "Available 24/7",
    sarthi: true,
    traditional: false,
  },
  {
    feature: "Works offline",
    sarthi: true,
    traditional: false,
  },
  {
    feature: "Multilingual support",
    sarthi: true,
    traditional: false,
  },
  {
    feature: "Free initial consultation",
    sarthi: true,
    traditional: false,
  },
  {
    feature: "Consultation history",
    sarthi: true,
    traditional: false,
  },
  {
    feature: "In-person examination",
    sarthi: false,
    traditional: true,
  },
  {
    feature: "Prescription medications",
    sarthi: false,
    traditional: true,
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-svh bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold font-serif lg:text-5xl text-balance">
              Features Built for Impact
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Every feature in Sarthi is designed with one goal: making
              healthcare accessible to the 800 million people in rural India who
              need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-serif text-card-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">
              Sarthi vs Traditional Healthcare
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              See how Sarthi complements traditional healthcare by filling
              critical gaps in accessibility.
            </p>
          </div>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-border bg-card">
            <div className="grid grid-cols-3 border-b border-border bg-muted/50 px-6 py-4">
              <p className="font-semibold text-card-foreground">Feature</p>
              <p className="text-center font-semibold text-primary">Sarthi</p>
              <p className="text-center font-semibold text-card-foreground">
                Traditional
              </p>
            </div>
            {COMPARISON.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 border-b border-border px-6 py-4 last:border-0"
              >
                <p className="text-sm text-card-foreground">{row.feature}</p>
                <div className="flex justify-center">
                  {row.sarthi ? (
                    <Check className="h-5 w-5 text-safe" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground/40" />
                  )}
                </div>
                <div className="flex justify-center">
                  {row.traditional ? (
                    <Check className="h-5 w-5 text-safe" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground/40" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Sarthi is designed to complement, not replace, traditional
            healthcare. Always consult a doctor for serious conditions.
          </p>
        </div>
      </section>

      {/* Speed Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">
                Speed When It Matters Most
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                In healthcare, every second counts. Sarthi delivers rapid
                symptom analysis and clear guidance within seconds, even on the
                slowest networks.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Clock,
                  value: "< 3s",
                  label: "Average analysis time",
                },
                {
                  icon: Zap,
                  value: "50KB",
                  label: "Data per consultation",
                },
                {
                  icon: Heart,
                  value: "99.9%",
                  label: "Uptime guarantee",
                },
                {
                  icon: Shield,
                  value: "256-bit",
                  label: "Data encryption",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <stat.icon className="mx-auto h-6 w-6 text-primary mb-3" />
                  <p className="text-2xl font-bold font-serif text-card-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
