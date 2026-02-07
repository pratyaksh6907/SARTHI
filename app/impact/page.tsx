import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Users,
  HeartPulse,
  Stethoscope,
  MapPin,
  Quote,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

const STATS = [
  { value: "50,000+", label: "Patients Served", icon: Users, description: "Across 12 states in India" },
  { value: "1M+", label: "Lives Impacted", icon: HeartPulse, description: "Including families and communities" },
  { value: "200,000+", label: "Consultations", icon: Stethoscope, description: "With 97% satisfaction rate" },
  { value: "500+", label: "Villages Reached", icon: MapPin, description: "In underserved rural areas" },
]

const TESTIMONIALS = [
  {
    quote: "Sarthi helped me understand my child's fever symptoms at 2 AM when no doctor was available. The guidance was clear and reassuring, and we knew exactly when to seek help.",
    name: "Meera Devi",
    location: "Rajasthan",
    context: "Mother of two, 45 km from nearest hospital",
  },
  {
    quote: "As a community health worker, I use Sarthi daily to provide better guidance to villagers. The multilingual support means I can help people who only speak their local dialect.",
    name: "Suresh Kumar",
    location: "Madhya Pradesh",
    context: "Community Health Worker, ASHA",
  },
  {
    quote: "My father had chest pain symptoms. Sarthi immediately flagged it as emergency and told us to go to the hospital. The doctors said early action likely saved his life.",
    name: "Priya Patel",
    location: "Gujarat",
    context: "Helped her father during a cardiac event",
  },
]

const CASE_STUDIES = [
  {
    title: "Reducing Emergency Room Visits",
    stat: "35%",
    statLabel: "Reduction",
    description:
      "In pilot districts, Sarthi helped reduce unnecessary emergency room visits by 35% by providing accurate preliminary guidance, allowing hospitals to focus on critical cases.",
  },
  {
    title: "Earlier Disease Detection",
    stat: "2.5x",
    statLabel: "Faster Detection",
    description:
      "Patients using Sarthi sought medical attention 2.5 times faster for serious conditions compared to the regional average, leading to better health outcomes.",
  },
  {
    title: "Healthcare Cost Savings",
    stat: "60%",
    statLabel: "Cost Savings",
    description:
      "Families using Sarthi reported 60% reduction in healthcare-related travel costs, saving both money and productive work days lost to hospital visits.",
  },
]

const PARTNERS = [
  "National Health Mission",
  "ASHA Worker Network",
  "Rural Health Alliance",
  "Digital India Health",
  "AIIMS Research",
  "WHO India Chapter",
]

export default function ImpactPage() {
  return (
    <div className="min-h-svh bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold font-serif lg:text-5xl text-balance">Our Impact</h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Real stories, real numbers, real change. See how Sarthi is transforming healthcare access across rural India.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card p-6 text-center">
                <stat.icon className="mx-auto h-8 w-8 text-primary mb-4" />
                <p className="text-3xl font-bold font-serif text-card-foreground">{stat.value}</p>
                <p className="mt-1 font-medium text-card-foreground">{stat.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">
              Stories from the Community
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real voices from patients and healthcare workers who use Sarthi every day.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="rounded-xl border border-border bg-card p-6 lg:p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-card-foreground leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.location}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">
              Measurable Impact
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Data-backed results from our pilot programs across India.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <div key={study.title} className="rounded-xl border border-border bg-card p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-5 w-5 text-safe" />
                  <span className="text-xs font-medium text-safe bg-safe/10 rounded-full px-3 py-1">
                    {study.statLabel}
                  </span>
                </div>
                <p className="text-4xl font-bold font-serif text-primary">{study.stat}</p>
                <h3 className="mt-2 text-lg font-semibold font-serif text-card-foreground">{study.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">
            Our Partners
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Working alongside leading health organizations to maximize our impact.
          </p>
          <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center rounded-lg border border-border bg-card px-4 py-6"
              >
                <p className="text-sm font-medium text-muted-foreground text-center">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">
            Be Part of the Change
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Join our mission to make healthcare accessible for everyone. Start using Sarthi today or partner with us to extend our reach.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-teal-dark h-12 px-8 text-base font-medium"
            >
              <Link href="/auth/sign-up">
                Join Sarthi Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
