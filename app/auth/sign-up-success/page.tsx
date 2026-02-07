import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Heart, Mail } from "lucide-react"
import Link from "next/link"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-muted">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Heart className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold font-serif text-foreground">Sarthi</span>
          </Link>
        </div>
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="text-2xl font-serif text-card-foreground">Check your email</CardTitle>
            <CardDescription>
              We sent you a confirmation link
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"You've successfully signed up for Sarthi. Please check your email inbox and click the confirmation link to activate your account."}
            </p>
            <Link
              href="/auth/login"
              className="inline-block text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              Back to sign in
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
