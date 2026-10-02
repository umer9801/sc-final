import fs from 'fs'
import path from 'path'

export type Submission = {
  id: string
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
  createdAt: string
  read: boolean
}

const DATA_DIR = path.join(process.cwd(), 'data')
const FILE = path.join(DATA_DIR, 'submissions.json')

function ensureFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
  if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, '[]', 'utf-8')
}

export function getSubmissions(): Submission[] {
  ensureFile()
  try {
    return JSON.parse(fs.readFileSync(FILE, 'utf-8')) as Submission[]
  } catch {
    return []
  }
}

export function saveSubmission(data: Omit<Submission, 'id' | 'createdAt' | 'read'>): Submission {
  const submissions = getSubmissions()
  const entry: Submission = {
    ...data,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    read: false,
  }
  submissions.unshift(entry)
  ensureFile()
  fs.writeFileSync(FILE, JSON.stringify(submissions, null, 2), 'utf-8')
  return entry
}

export function markRead(id: string) {
  const submissions = getSubmissions()
  const updated = submissions.map((s) => (s.id === id ? { ...s, read: true } : s))
  ensureFile()
  fs.writeFileSync(FILE, JSON.stringify(updated, null, 2), 'utf-8')
}

export function deleteSubmission(id: string) {
  const submissions = getSubmissions().filter((s) => s.id !== id)
  ensureFile()
  fs.writeFileSync(FILE, JSON.stringify(submissions, null, 2), 'utf-8')
}
