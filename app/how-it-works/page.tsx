import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Mic,
  Brain,
  ClipboardCheck,
  UserCheck,
  ArrowRight,
  ChevronDown,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const STEPS = [
  {
    icon: UserCheck,
    step: "1",
    title: "Create Your Account",
    description:
      "Sign up with your email in under a minute. Your data is encrypted and private from the very start.",
    details: [
      "Quick email-based registration",
      "No personal documents required",
      "Instant account activation",
      "Secure profile creation",
    ],
  },
  {
    icon: Mic,
    step: "2",
    title: "Describe Your Symptoms",
    description:
      "Type or speak your symptoms in your preferred language. Our voice recognition understands multiple Indian languages.",
    details: [
      "Voice input in 10+ languages",
      "Text-based symptom entry",
      "Quick-select common symptoms",
      "Natural language understanding",
    ],
  },
  {
    icon: Brain,
    step: "3",
    title: "AI Analyzes Your Health",
    description:
      "Our medical AI cross-references your symptoms against a comprehensive database of conditions to provide preliminary guidance.",
    details: [
      "Analysis in under 3 seconds",
      "Severity-level assessment",
      "Condition identification",
      "Evidence-based recommendations",
    ],
  },
  {
    icon: ClipboardCheck,
    step: "4",
    title: "Get Clear Guidance",
    description:
      "Receive actionable health recommendations with clear next steps, whether it is home care, doctor visit, or emergency action.",
    details: [
      "Color-coded severity levels",
      "Specific action items",
      "Save to consultation history",
      "Share with your doctor",
    ],
  },
]

const FAQS = [
  {
    question: "Is Sarthi a replacement for visiting a doctor?",
    answer:
      "No. Sarthi provides preliminary health guidance to help you make informed decisions. It is designed to complement traditional healthcare, not replace it. For serious or persistent symptoms, always consult a qualified medical professional.",
  },
  {
    question: "How accurate is the AI symptom analysis?",
    answer:
      "Our AI is trained on a comprehensive medical database and reviewed by healthcare professionals. While it provides reliable preliminary guidance, it should not be considered a medical diagnosis. The severity levels help you understand the urgency of seeking professional care.",
  },
  {
    question: "Does Sarthi work without internet?",
    answer:
      "Yes, core features including basic symptom checking work offline. The app caches essential medical data locally so you can access health guidance even without connectivity. Advanced features require an internet connection.",
  },
  {
    question: "What languages does Sarthi support?",
    answer:
      "Sarthi currently supports voice input in Hindi, English, Punjabi, Tamil, Telugu, Bengali, and Marathi. We are actively adding more regional languages to ensure maximum accessibility across India.",
  },
  {
    question: "Is my health data private and secure?",
    answer:
      "Absolutely. All health data is encrypted end-to-end using industry-standard encryption. We follow strict privacy protocols and never share your personal health information with third parties. You can delete your data at any time.",
  },
  {
    question: "How much does Sarthi cost?",
    answer:
      "Sarthi is free to use for basic symptom checking and health guidance. We believe healthcare access should not be limited by affordability. Premium features for enhanced consultations may be available in the future.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-svh bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold font-serif lg:text-5xl text-balance">
              How Sarthi Works
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              From symptom to guidance in minutes. Sarthi makes healthcare
              accessible through a simple, intuitive process designed for
              everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="space-y-12">
            {STEPS.map((step, index) => (
              <div key={step.step} className="relative">
                {index < STEPS.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-px bg-border hidden md:block">
                    <ChevronDown className="absolute -bottom-3 -left-[9px] h-5 w-5 text-muted-foreground" />
                  </div>
                )}
                <div className="flex gap-6 items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold font-serif">
                    {step.step}
                  </div>
                  <div className="flex-1 rounded-xl border border-border bg-card p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold font-serif text-card-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about using Sarthi.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="rounded-lg border border-border bg-card px-6"
              >
                <AccordionTrigger className="text-left font-medium text-card-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">
            Ready to Try Sarthi?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Create your free account and experience accessible healthcare
            guidance today.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-teal-dark h-12 px-8 text-base font-medium"
            >
              <Link href="/auth/sign-up">
                Get Started Free
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
