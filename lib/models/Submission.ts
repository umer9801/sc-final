import mongoose, { Schema, type Document } from 'mongoose'

export interface ISubmission extends Document {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
  read: boolean
  createdAt: Date
}

const SubmissionSchema = new Schema<ISubmission>(
  {
    name:        { type: String, required: true },
    email:       { type: String, required: true },
    company:     { type: String, default: '' },
    projectType: { type: String, default: '' },
    budget:      { type: String, default: '' },
    message:     { type: String, required: true },
    read:        { type: Boolean, default: false },
  },
  { timestamps: true },
)

export const Submission =
  mongoose.models.Submission ??
  mongoose.model<ISubmission>('Submission', SubmissionSchema)
