import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Heart,
  Thermometer,
  Droplets,
  Apple,
  Baby,
  ShieldAlert,
  Pill,
  Stethoscope,
  AlertTriangle,
} from "lucide-react"

const HEALTH_TOPICS = [
  {
    icon: Thermometer,
    title: "Common Fevers",
    category: "Diseases",
    description:
      "Understanding different types of fevers, their causes, home remedies, and when to seek medical attention.",
    tips: [
      "Stay hydrated with water, ORS, and clear fluids",
      "Rest in a cool, comfortable environment",
      "Use a damp cloth on forehead for comfort",
      "Seek medical help if fever exceeds 103F (39.4C)",
    ],
  },
  {
    icon: Droplets,
    title: "Clean Water & Hygiene",
    category: "Prevention",
    description:
      "How clean water and proper hygiene practices can prevent the most common waterborne diseases in rural areas.",
    tips: [
      "Always boil or filter drinking water",
      "Wash hands with soap before eating and after using the toilet",
      "Keep food covered and stored properly",
      "Use clean utensils for cooking and eating",
    ],
  },
  {
    icon: Apple,
    title: "Nutrition Basics",
    category: "Wellness",
    description:
      "Essential nutrition guidelines for families, including affordable local food choices that provide complete nutrition.",
    tips: [
      "Include dal, vegetables, and roti in every meal",
      "Eat seasonal fruits for vitamins",
      "Iron-rich foods like spinach prevent anemia",
      "Milk and curd are important for bone health",
    ],
  },
  {
    icon: Baby,
    title: "Maternal & Child Health",
    category: "Care Guide",
    description:
      "Important health information for expecting mothers, new parents, and child health milestones to track.",
    tips: [
      "Regular antenatal checkups are essential",
      "Iron and folic acid supplements during pregnancy",
      "Exclusive breastfeeding for first 6 months",
      "Follow the vaccination schedule strictly",
    ],
  },
  {
    icon: ShieldAlert,
    title: "First Aid Essentials",
    category: "Emergency",
    description:
      "Basic first aid knowledge that can save lives in emergency situations before professional help arrives.",
    tips: [
      "Apply pressure to stop bleeding",
      "Cool burns under running water for 10 minutes",
      "Keep the person warm and calm in case of shock",
      "Do not move someone with a suspected spinal injury",
    ],
  },
  {
    icon: Pill,
    title: "Medicine Safety",
    category: "Awareness",
    description:
      "Understanding how to safely use common medications, read labels, and avoid harmful drug interactions.",
    tips: [
      "Always complete the full course of antibiotics",
      "Check expiry dates before taking any medicine",
      "Do not share prescription medications",
      "Store medicines in a cool, dry place away from children",
    ],
  },
]

const WARNING_SIGNS = [
  "Chest pain or difficulty breathing",
  "Sudden severe headache or confusion",
  "Uncontrolled bleeding",
  "High fever (above 103F) lasting more than 2 days",
  "Severe abdominal pain",
  "Signs of dehydration in children (no tears, dry mouth, no urination)",
  "Loss of consciousness or seizures",
  "Sudden weakness on one side of the body",
]

export default function HealthLiteracyPage() {
  return (
    <div className="min-h-svh bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold font-serif lg:text-5xl text-balance">
              Health Literacy
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Knowledge is the first step to better health. Learn about common
              health topics, prevention strategies, and when to seek medical
              help.
            </p>
          </div>
        </div>
      </section>

      {/* Health Topics */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {HEALTH_TOPICS.map((topic) => (
              <div
                key={topic.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <topic.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {topic.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold font-serif text-card-foreground">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs font-medium text-card-foreground mb-2">
                    Key Tips:
                  </p>
                  <ul className="space-y-1.5">
                    {topic.tips.map((tip) => (
                      <li
                        key={tip}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to See a Doctor */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 mb-6">
              <AlertTriangle className="h-7 w-7 text-destructive" />
            </div>
            <h2 className="text-3xl font-bold font-serif text-foreground lg:text-4xl text-balance">
              When to See a Doctor Immediately
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These warning signs require immediate medical attention. Do not
              delay seeking help.
            </p>
          </div>
          <div className="rounded-xl border border-destructive/20 bg-card p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {WARNING_SIGNS.map((sign) => (
                <div key={sign} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                    <AlertTriangle className="h-3 w-3 text-destructive" />
                  </div>
                  <p className="text-sm text-card-foreground">{sign}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Stethoscope className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold font-serif text-card-foreground">
              Medical Disclaimer
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              The information on this page is for educational purposes only and
              is not a substitute for professional medical advice, diagnosis, or
              treatment. Always seek the advice of a qualified health provider
              with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
