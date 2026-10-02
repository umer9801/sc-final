import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { connectDB } from '@/lib/mongodb'
import { Submission } from '@/lib/models/Submission'

async function isAuthed() {
  const cookieStore = await cookies()
  return cookieStore.get('admin_session')?.value === process.env.ADMIN_SESSION_SECRET
}

export async function GET() {
  if (!(await isAuthed())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  await connectDB()
  const submissions = await Submission.find().sort({ createdAt: -1 }).lean()
  return NextResponse.json(submissions)
}

export async function PATCH(req: NextRequest) {
  if (!(await isAuthed())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id, read } = await req.json()
  await connectDB()
  await Submission.findByIdAndUpdate(id, { read })
  return NextResponse.json({ success: true })
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthed())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await req.json()
  await connectDB()
  await Submission.findByIdAndDelete(id)
  return NextResponse.json({ success: true })
}
