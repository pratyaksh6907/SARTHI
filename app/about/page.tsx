import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Heart, Target, Eye, Users, Globe, Shield, Lightbulb, Mail, MapPin } from "lucide-react"

const VALUES = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every decision we make starts with empathy for the communities we serve.",
  },
  {
    icon: Globe,
    title: "Inclusive Access",
    description: "Healthcare should be available to everyone, regardless of location, language, or income.",
  },
  {
    icon: Shield,
    title: "Trust & Privacy",
    description: "We protect health data with the highest standards of security and transparency.",
  },
  {
    icon: Lightbulb,
    title: "Innovation for Impact",
    description: "We leverage cutting-edge technology to solve real-world healthcare challenges.",
  },
]

const TEAM = [
  { name: "Dr. Priya Sharma", role: "Chief Medical Officer", expertise: "Public Health & Telemedicine" },
  { name: "Rahul Verma", role: "CTO", expertise: "AI & Machine Learning" },
  { name: "Anita Desai", role: "Head of Design", expertise: "Healthcare UX" },
  { name: "Vikram Singh", role: "Community Lead", expertise: "Rural Health Programs" },
]

export default function AboutPage() {
  return (
    <div className="min-h-svh bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold font-serif lg:text-5xl text-balance">About Sarthi</h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Sarthi means &ldquo;companion&rdquo; in Hindi. We are building a companion for health &mdash; one that walks with you through every health concern, no matter where you live.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8 lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold font-serif text-card-foreground">Our Mission</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To democratize healthcare access across rural India by providing AI-powered, multilingual health guidance that works on any device, on any network, for anyone. We believe that geography should never determine the quality of healthcare a person receives.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-6">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold font-serif text-card-foreground">Our Vision</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A world where every person &mdash; regardless of where they live, what language they speak, or what connectivity they have &mdash; can access reliable health guidance within seconds. We envision Sarthi as the first point of contact for health concerns across the developing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">Our Story</h2>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              Sarthi was born from a simple observation: in rural India, the nearest doctor can be hours away. Millions of people delay seeking medical help because of distance, cost, and language barriers. By the time they reach a hospital, conditions that could have been managed early become critical.
            </p>
            <p>
              We brought together a team of doctors, AI engineers, and community health workers to build something different &mdash; a health companion that speaks your language, works on your phone, and gives you the guidance you need, when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we build.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-serif text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Doctors, engineers, and community workers united by a common purpose.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div key={member.name} className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
                <p className="mt-1 text-xs text-muted-foreground">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions, feedback, or want to partner with us? We would love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" />
              <span>hello@sarthi.health</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
