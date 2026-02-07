"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createClient } from "@/lib/supabase/client"
import {
  Clock,
  Trash2,
  Pencil,
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  FileText,
} from "lucide-react"
import { useState } from "react"

interface Consultation {
  id: string
  symptoms: string
  status: string
  notes: string | null
  created_at: string
  updated_at: string
}

interface ConsultationHistoryProps {
  consultations: Consultation[]
  onUpdate: () => void
}

function getSeverityConfig(status: string) {
  switch (status) {
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
    case "completed":
      return {
        label: "Safe",
        className: "bg-safe/10 text-safe border-safe/30",
        icon: CheckCircle,
      }
    default:
      return {
        label: "Cancelled",
        className: "bg-muted text-muted-foreground border-border",
        icon: Clock,
      }
  }
}

export function ConsultationHistory({ consultations, onUpdate }: ConsultationHistoryProps) {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editSymptoms, setEditSymptoms] = useState("")
  const [editStatus, setEditStatus] = useState("")
  const [editNotes, setEditNotes] = useState("")
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [isUpdating, setIsUpdating] = useState(false)

  const handleEdit = (consultation: Consultation) => {
    setEditingId(consultation.id)
    setEditSymptoms(consultation.symptoms)
    setEditStatus(consultation.status)
    setEditNotes(consultation.notes || "")
  }

  const handleUpdate = async () => {
    if (!editingId) return
    setIsUpdating(true)
    const supabase = createClient()

    const { error } = await supabase
      .from("consultations")
      .update({
        symptoms: editSymptoms,
        status: editStatus,
        notes: editNotes,
        updated_at: new Date().toISOString(),
      })
      .eq("id", editingId)

    if (!error) {
      onUpdate()
      setEditingId(null)
    }
    setIsUpdating(false)
  }

  const handleDelete = async (id: string) => {
    const supabase = createClient()
    const { error } = await supabase.from("consultations").delete().eq("id", id)
    if (!error) {
      onUpdate()
      setDeletingId(null)
    }
  }

  return (
    <>
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="font-serif text-card-foreground">Consultation History</CardTitle>
        </CardHeader>
        <CardContent>
          {consultations.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted mb-4">
                <FileText className="h-7 w-7 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground font-medium">No consultations yet</p>
              <p className="text-sm text-muted-foreground mt-1">
                Use the Symptom Checker to analyze and save your first consultation.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {consultations.map((consultation) => {
                const config = getSeverityConfig(consultation.status)
                return (
                  <div
                    key={consultation.id}
                    className="flex items-start gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <config.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="font-medium text-card-foreground truncate">
                            {consultation.symptoms}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {new Date(consultation.created_at).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                          {consultation.notes && (
                            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                              {consultation.notes}
                            </p>
                          )}
                        </div>
                        <Badge variant="outline" className={config.className}>
                          {config.label}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex shrink-0 gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleEdit(consultation)}
                        aria-label="Edit consultation"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => setDeletingId(consultation.id)}
                        aria-label="Delete consultation"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={!!editingId} onOpenChange={() => setEditingId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-serif">Edit Consultation</DialogTitle>
            <DialogDescription>
              Update the details of this consultation record.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-symptoms">Symptoms</Label>
              <Textarea
                id="edit-symptoms"
                value={editSymptoms}
                onChange={(e) => setEditSymptoms(e.target.value)}
                className="resize-none"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-status">Status</Label>
              <Select value={editStatus} onValueChange={setEditStatus}>
                <SelectTrigger id="edit-status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="completed">Safe</SelectItem>
                  <SelectItem value="in_progress">Caution</SelectItem>
                  <SelectItem value="pending">Emergency</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-notes">Notes</Label>
              <Textarea
                id="edit-notes"
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                className="resize-none"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingId(null)}>
              Cancel
            </Button>
            <Button
              onClick={handleUpdate}
              disabled={isUpdating}
              className="bg-primary text-primary-foreground hover:bg-teal-dark"
            >
              {isUpdating ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deletingId} onOpenChange={() => setDeletingId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-serif">Delete Consultation</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this consultation? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeletingId(null)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => deletingId && handleDelete(deletingId)}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
