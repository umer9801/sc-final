'use server'

import { connectDB } from '@/lib/mongodb'
import { Submission } from '@/lib/models/Submission'
import { sendAdminAlert, sendUserConfirmation } from '@/lib/mailer'

export type ContactFormData = {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
}

export type ActionResult =
  | { success: true }
  | { success: false; error: string }

export async function submitContactForm(data: ContactFormData): Promise<ActionResult> {
  try {
    await connectDB()

    const submission = await Submission.create({
      name:        data.name.trim(),
      email:       data.email.trim().toLowerCase(),
      company:     data.company.trim(),
      projectType: data.projectType,
      budget:      data.budget,
      message:     data.message.trim(),
      read:        false,
    })

    const payload = {
      name:        submission.name,
      email:       submission.email,
      company:     submission.company,
      projectType: submission.projectType,
      budget:      submission.budget,
      message:     submission.message,
      createdAt:   submission.createdAt.toISOString(),
    }

    // Send emails in parallel — don't block on failure
    await Promise.allSettled([
      sendAdminAlert(payload),
      sendUserConfirmation(payload),
    ])

    return { success: true }
  } catch (err) {
    console.error('[contact action]', err)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}
