"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/client"
import { Search, Save, Mic, MicOff, AlertCircle, CheckCircle, AlertTriangle } from "lucide-react"
import { useState, useCallback } from "react"
import { SpeechRecognitionEvent } from "webkit-speech-api"

interface SymptomCheckerProps {
  userId: string
  onConsultationSaved: () => void
}

const SUGGESTED_SYMPTOMS = [
  "Headache",
  "Fever",
  "Cough",
  "Sore throat",
  "Fatigue",
  "Nausea",
  "Body ache",
  "Shortness of breath",
]

interface AnalysisResult {
  conditions: string[]
  severity: "pending" | "in_progress" | "completed"
  recommendations: string[]
}

function analyzeSymptomsLocally(symptoms: string): AnalysisResult {
  const lower = symptoms.toLowerCase()
  const conditions: string[] = []
  const recommendations: string[] = []
  let severity: "pending" | "in_progress" | "completed" = "completed"

  if (lower.includes("fever") || lower.includes("temperature")) {
    conditions.push("Possible viral infection")
    recommendations.push("Stay hydrated and rest", "Monitor temperature regularly")
  }
  if (lower.includes("headache")) {
    conditions.push("Tension headache or migraine")
    recommendations.push("Rest in a quiet, dark room", "Stay hydrated")
  }
  if (lower.includes("cough") || lower.includes("sore throat")) {
    conditions.push("Upper respiratory infection")
    recommendations.push("Warm fluids and rest", "Gargle with salt water")
  }
  if (lower.includes("nausea") || lower.includes("vomit")) {
    conditions.push("Gastric distress")
    recommendations.push("Light diet, avoid spicy foods", "Stay hydrated with ORS")
  }
  if (lower.includes("breath") || lower.includes("chest pain")) {
    conditions.push("Respiratory concern - needs immediate attention")
    severity = "pending"
    recommendations.push("Seek immediate medical attention", "Do not exert yourself")
  }
  if (lower.includes("fatigue") || lower.includes("tired") || lower.includes("body ache")) {
    conditions.push("General fatigue or viral syndrome")
    recommendations.push("Ensure adequate sleep", "Balanced diet with vitamins")
  }

  if (conditions.length === 0) {
    conditions.push("General health concern")
    recommendations.push("Monitor symptoms for 24-48 hours", "Consult a doctor if symptoms persist")
  }

  if (severity === "completed" && (lower.includes("high fever") || lower.includes("severe"))) {
    severity = "in_progress"
    recommendations.unshift("Consider consulting a doctor soon")
  }

  return { conditions, severity, recommendations }
}

export function SymptomChecker({ userId, onConsultationSaved }: SymptomCheckerProps) {
  const [symptoms, setSymptoms] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [isListening, setIsListening] = useState(false)

  const handleAnalyze = useCallback(async () => {
    if (!symptoms.trim()) return
    setIsAnalyzing(true)
    // Simulate analysis time for UX
    await new Promise((r) => setTimeout(r, 1200))
    const analysisResult = analyzeSymptomsLocally(symptoms)
    setResult(analysisResult)
    setIsAnalyzing(false)
  }, [symptoms])

  const handleSaveToHistory = async () => {
    if (!result) return
    setIsSaving(true)
    const supabase = createClient()

    const { error } = await supabase.from("consultations").insert({
      user_id: userId,
      symptoms: symptoms,
      status: result.severity,
      notes: `Conditions: ${result.conditions.join(", ")}. Recommendations: ${result.recommendations.join(", ")}`,
    })

    if (!error) {
      onConsultationSaved()
      setSymptoms("")
      setResult(null)
    }
    setIsSaving(false)
  }

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      return
    }

    const SpeechRecognition = (window as unknown as { SpeechRecognition?: typeof window.SpeechRecognition; webkitSpeechRecognition?: typeof window.SpeechRecognition }).SpeechRecognition || (window as unknown as { webkitSpeechRecognition: typeof window.SpeechRecognition }).webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = "en-US"

    recognition.onstart = () => setIsListening(true)
    recognition.onend = () => setIsListening(false)
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript
      setSymptoms((prev) => (prev ? `${prev}, ${transcript}` : transcript))
    }

    recognition.start()
  }

  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case "pending":
        return {
          label: "Emergency",
          className: "bg-emergency/10 text-emergency border-emergency/30",
          icon: AlertCircle,
        }
      case "in_progress":
        return {
          label: "Caution",
          className: "bg-caution/10 text-caution border-caution/30",
          icon: AlertTriangle,
        }
      default:
        return {
          label: "Safe",
          className: "bg-safe/10 text-safe border-safe/30",
          icon: CheckCircle,
        }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-card-foreground">Symptom Checker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="relative">
            <Textarea
              placeholder="Describe your symptoms... (e.g., headache, fever, cough)"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="min-h-[100px] pr-12 resize-none"
              aria-label="Describe your symptoms"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={handleVoiceInput}
              aria-label={isListening ? "Stop voice input" : "Start voice input"}
            >
              {isListening ? (
                <MicOff className="h-5 w-5 text-destructive" />
              ) : (
                <Mic className="h-5 w-5 text-muted-foreground" />
              )}
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {SUGGESTED_SYMPTOMS.map((symptom) => (
              <button
                type="button"
                key={symptom}
                onClick={() =>
                  setSymptoms((prev) =>
                    prev ? `${prev}, ${symptom.toLowerCase()}` : symptom.toLowerCase()
                  )
                }
                className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary hover:border-primary/30"
              >
                {symptom}
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={handleAnalyze}
          disabled={!symptoms.trim() || isAnalyzing}
          className="w-full bg-primary text-primary-foreground hover:bg-teal-dark"
        >
          <Search className="mr-2 h-4 w-4" />
          {isAnalyzing ? "Analyzing symptoms..." : "Analyze Symptoms"}
        </Button>

        {result && (
          <div className="space-y-4 rounded-lg border border-border bg-muted/50 p-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-card-foreground">Analysis Results</h4>
              {(() => {
                const config = getSeverityConfig(result.severity)
                return (
                  <Badge variant="outline" className={config.className}>
                    <config.icon className="mr-1 h-3 w-3" />
                    {config.label}
                  </Badge>
                )
              })()}
            </div>

            <div>
              <p className="text-sm font-medium text-card-foreground mb-2">Possible Conditions:</p>
              <ul className="space-y-1">
                {result.conditions.map((condition) => (
                  <li key={condition} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {condition}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium text-card-foreground mb-2">Recommendations:</p>
              <ul className="space-y-1">
                {result.recommendations.map((rec) => (
                  <li key={rec} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={handleSaveToHistory}
              disabled={isSaving}
              variant="outline"
              className="w-full bg-transparent"
            >
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "Saving..." : "Save to Consultation History"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
