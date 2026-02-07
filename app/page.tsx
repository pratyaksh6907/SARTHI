import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Mic,
  Brain,
  WifiOff,
  Languages,
  Siren,
  Database,
  Clock,
  DollarSign,
  AlertTriangle,
  Shield,
  Wifi,
  Globe,
  Users,
  HeartPulse,
  Stethoscope,
  ArrowRight,
} from "lucide-react"

const TRUST_BADGES = [
  { icon: WifiOff, label: "Works Offline" },
  { icon: Wifi, label: "2G Compatible" },
  { icon: Globe, label: "Multilingual" },
  { icon: Shield, label: "Secure" },
]

const PROBLEMS = [
  {
    icon: Clock,
    title: "Long Travel Times",
    description:
      "Rural patients often travel 50+ km to reach the nearest doctor, losing an entire day of work.",
  },
  {
    icon: DollarSign,
    title: "High Healthcare Costs",
    description:
      "Consultation fees, travel costs, and lost wages make healthcare unaffordable for many families.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Delays",
    description:
      "In critical moments, delays in accessing medical guidance can have life-threatening consequences.",
  },
]

const FEATURES = [
  {
    icon: Mic,
    title: "Voice Input",
    description:
      "Describe symptoms in your own language using voice. No typing needed.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description:
      "Advanced AI analyzes symptoms and provides preliminary health guidance.",
  },
  {
    icon: WifiOff,
    title: "Offline Support",
    description:
      "Core features work without internet connectivity for remote areas.",
  },
  {
    icon: Languages,
    title: "Multiple Languages",
    description:
      "Available in Hindi, Punjabi, English, and more regional languages.",
  },
  {
    icon: Siren,
    title: "Emergency Support",
    description:
      "Immediate triage and guidance for emergency health situations.",
  },
  {
    icon: Database,
    title: "Medical Database",
    description:
      "Comprehensive database of common conditions, medicines, and treatments.",
  },
]

const STATS = [
  { value: "50,000+", label: "Patients Helped", icon: Users },
  { value: "1M+", label: "Lives Impacted", icon: HeartPulse },
  { value: "200,000+", label: "Consultations", icon: Stethoscope },
  { value: "500+", label: "Doctors Connected", icon: Brain },
]

const STEPS = [
  {
    step: "01",
    title: "Describe Symptoms",
    description:
      "Use text or voice to describe how you feel in your preferred language.",
  },
  {
    step: "02",
    title: "AI Analysis",
    description:
      "Our AI processes your symptoms against a comprehensive medical database.",
  },
  {
    step: "03",
    title: "Get Guidance",
    description:
      "Receive personalized health recommendations and next steps.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-svh bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl font-bold font-serif leading-tight lg:text-6xl text-balance">
              Healthcare Access for Every Village
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-2xl lg:text-xl">
              AI-powered telemedicine that works on low bandwidth, speaks your
              language, and brings quality healthcare guidance to your
              fingertips.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-orange-dark h-12 px-8 text-base font-medium"
              >
                <Link href="/auth/sign-up">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 h-12 px-8 text-base font-medium"
              >
                <Link href="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-6">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-sm text-primary-foreground/70"
                >
                  <badge.icon className="h-4 w-4" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">
              The Healthcare Gap in Rural India
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Millions of people lack access to basic healthcare. Sarthi bridges
              this gap with technology.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {PROBLEMS.map((problem) => (
              <div
                key={problem.title}
                className="rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10 mb-6">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold font-serif text-card-foreground">
                  {problem.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">
              How Sarthi Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Three simple steps to get health guidance, anytime, anywhere.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold font-serif mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold font-serif text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">
              Built for Rural Healthcare
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Every feature designed with the unique challenges of underserved
              communities in mind.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif lg:text-4xl text-balance">
              Making a Real Difference
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
              Our impact in numbers, growing every day.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto h-8 w-8 mb-4 text-primary-foreground/60" />
                <p className="text-4xl font-bold font-serif">{stat.value}</p>
                <p className="mt-2 text-sm text-primary-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-2xl bg-muted p-8 text-center lg:p-16">
            <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Join thousands of patients who are already benefiting from
              AI-powered healthcare guidance.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-teal-dark h-12 px-8 text-base font-medium"
              >
                <Link href="/auth/sign-up">
                  Create Free Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-12 px-8 text-base font-medium bg-transparent"
              >
                <Link href="/auth/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
