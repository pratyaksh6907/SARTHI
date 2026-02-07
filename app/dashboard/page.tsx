"use client"

import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Heart, LogOut, Loader2 } from "lucide-react"
import { ProfileCard } from "./components/profile-card"
import { SymptomChecker } from "./components/symptom-checker"
import { ConsultationHistory } from "./components/consultation-history"
import { DashboardMedicines } from "./components/medicines"
import Link from "next/link"
import type { User } from "@supabase/supabase-js"

interface Profile {
  id: string
  full_name: string | null
  phone: string | null
  email: string | null
  created_at: string
}

interface Consultation {
  id: string
  symptoms: string
  status: string
  notes: string | null
  created_at: string
  updated_at: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [consultations, setConsultations] = useState<Consultation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  const fetchData = useCallback(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      router.push("/auth/login")
      return
    }

    setUser(user)

    const [profileResult, consultationsResult] = await Promise.all([
      supabase.from("profiles").select("*").eq("id", user.id).single(),
      supabase
        .from("consultations")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false }),
    ])

    if (profileResult.data) setProfile(profileResult.data)
    if (consultationsResult.data) setConsultations(consultationsResult.data)
    setIsLoading(false)
  }, [supabase, router])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="flex min-h-svh items-center justify-center bg-muted">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-svh bg-muted">
      {/* Dashboard Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Heart className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold font-serif text-card-foreground">Sarthi</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-card-foreground">
                Welcome, {profile?.full_name || "User"}
              </p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="gap-2 bg-transparent"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sign out</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold font-serif text-foreground lg:text-3xl">
            Health Dashboard
          </h1>
          <p className="mt-1 text-muted-foreground">
            Manage your health profile, check symptoms, and view your consultation history.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ProfileCard
            user={user}
            profile={profile}
            onProfileUpdate={fetchData}
          />
          <SymptomChecker
            userId={user.id}
            onConsultationSaved={fetchData}
          />
          <ConsultationHistory
            consultations={consultations}
            onUpdate={fetchData}
          />
          <DashboardMedicines />
        </div>
      </main>
    </div>
  )
}
