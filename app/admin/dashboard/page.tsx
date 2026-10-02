'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Mail, Calendar, Building2, DollarSign, FileText, LogOut, Eye, Trash2, RefreshCw,
  CheckCircle, Circle, TrendingUp, Users, Briefcase, Clock, BarChart3, PieChart, Activity
} from 'lucide-react'
import { LineChart, Line, BarChart, Bar, PieChart as RechartsPie, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, subMonths, isWithinInterval } from 'date-fns'

type Submission = {
  _id: string
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
  read: boolean
  createdAt: string
}

type Project = {
  id: string
  name: string
  client: string
  revenue: number
  status: 'completed' | 'in-progress' | 'planned'
  completedAt?: string
}

// Project data — all revenue in CAD $
const PROJECTS: Project[] = [
  { id: '1', name: 'Dairy Barn & Grill Website', client: 'Dairy Barn & Grill', revenue: 3500, status: 'completed', completedAt: '2024-12-15' },
  { id: '2', name: 'Sleek Automotive Website', client: 'Sleek Automotive', revenue: 4200, status: 'completed', completedAt: '2024-11-20' },
  { id: '3', name: 'EZA Logistics Platform', client: 'EZA Logistics', revenue: 5800, status: 'completed', completedAt: '2024-10-10' },
  { id: '4', name: 'Al Chemist Coffee Bar', client: 'Al Chemist', revenue: 3200, status: 'completed', completedAt: '2025-01-05' },
  { id: '5', name: 'MMM Studio By Moni', client: 'MMM Studio', revenue: 2800, status: 'completed', completedAt: '2025-01-12' },
  { id: '6', name: 'Sudcan Painting Website', client: 'Sudcan Painting', revenue: 2500, status: 'completed', completedAt: '2024-11-08' },
  { id: '7', name: 'Proper Accounting UK', client: 'Proper Accounting', revenue: 4500, status: 'completed', completedAt: '2025-01-18' },
  { id: '8', name: 'Prudential Legal Services', client: 'Prudential Legal', revenue: 5200, status: 'completed', completedAt: '2025-02-01' },
  { id: '9', name: 'Lepro Wellness Center', client: 'Lepro Wellness', revenue: 3800, status: 'completed', completedAt: '2025-01-25' },
  { id: '10', name: 'Lucky Driving School', client: 'Lucky Driving', revenue: 2900, status: 'completed', completedAt: '2025-02-10' },
]

const COLORS = ['#3a6b4a', '#89b4a4', '#f4a261', '#e76f51', '#264653', '#2a9d8f']

export default function AdminDashboard() {
  const router = useRouter()
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [selected, setSelected] = useState<Submission | null>(null)
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<'overview' | 'submissions' | 'projects'>('overview')

  async function fetchSubmissions() {
    setLoading(true)
    const res = await fetch('/api/admin/submissions')
    if (res.status === 401) {
      router.push('/admin')
      return
    }
    const data = await res.json()
    setSubmissions(data)
    setLoading(false)
  }

  async function markRead(id: string, read: boolean) {
    await fetch('/api/admin/submissions', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, read }),
    })
    await fetchSubmissions()
  }

  async function deleteSubmission(id: string) {
    if (!confirm('Delete this submission?')) return
    await fetch('/api/admin/submissions', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setSelected(null)
    await fetchSubmissions()
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
    router.refresh()
  }

  useEffect(() => {
    fetchSubmissions()
  }, [])

  // Analytics
  const unreadCount = submissions.filter((s) => !s.read).length
  const totalRevenue = PROJECTS.reduce((sum, p) => sum + p.revenue, 0)
  const avgProjectValue = totalRevenue / PROJECTS.length
  const completedProjects = PROJECTS.filter((p) => p.status === 'completed').length

  // Last 6 months submission trend
  const last6Months = Array.from({ length: 6 }, (_, i) => {
    const d = subMonths(new Date(), 5 - i)
    return {
      month: format(d, 'MMM'),
      count: submissions.filter((s) => {
        const date = new Date(s.createdAt)
        return date.getMonth() === d.getMonth() && date.getFullYear() === d.getFullYear()
      }).length,
    }
  })

  // Project type distribution
  const projectTypes = submissions.reduce((acc, s) => {
    const type = s.projectType || 'Other'
    acc[type] = (acc[type] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  const pieData = Object.entries(projectTypes).map(([name, value]) => ({ name, value }))

  // Monthly revenue
  const revenueByMonth = PROJECTS.reduce((acc, p) => {
    if (p.completedAt) {
      const month = format(new Date(p.completedAt), 'MMM yyyy')
      acc[month] = (acc[month] || 0) + p.revenue
    }
    return acc
  }, {} as Record<string, number>)
  const revenueData = Object.entries(revenueByMonth).map(([month, revenue]) => ({ month, revenue }))

  return (
    <div className="min-h-screen bg-stone">
      {/* Header */}
      <div className="border-b-2 border-charcoal bg-charcoal text-pearl shadow-lg">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex size-11 items-center justify-center border-2 border-forest bg-forest/20">
              <Activity className="size-5 text-forest" />
            </div>
            <div>
              <h1 className="font-display text-sm font-semibold">ADMIN DASHBOARD</h1>
              <p className="font-mono text-[8px] uppercase tracking-widest text-pearl/60">Solvix Core Business Intelligence</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={fetchSubmissions}
              className="flex items-center gap-2 border-2 border-pearl/20 bg-pearl/5 px-4 py-2 font-mono text-[9px] uppercase tracking-widest text-pearl hover:bg-pearl/10 transition-colors">
              <RefreshCw className="size-3" /> Refresh
            </button>
            <button onClick={logout}
              className="flex items-center gap-2 border-2 border-forest bg-forest px-4 py-2 font-mono text-[9px] uppercase tracking-widest text-charcoal hover:bg-forest/90 transition-colors">
              <LogOut className="size-3" /> Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t-2 border-pearl/10 px-6">
          <div className="mx-auto flex max-w-[1800px] gap-1">
            {[
              { key: 'overview', label: 'Overview', icon: BarChart3 },
              { key: 'submissions', label: 'Submissions', icon: Mail },
              { key: 'projects', label: 'Projects', icon: Briefcase },
            ].map((tab) => (
              <button key={tab.key} onClick={() => setView(tab.key as any)}
                className={`flex items-center gap-2 border-b-4 px-5 py-3 font-mono text-[9px] uppercase tracking-widest transition-colors ${
                  view === tab.key ? 'border-forest bg-pearl/10 text-pearl' : 'border-transparent text-pearl/50 hover:text-pearl/80'
                }`}>
                <tab.icon className="size-3.5" /> {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1800px] px-6 py-6">
        {view === 'overview' && (
          <>
            {/* Key Metrics */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="border-2 border-charcoal bg-pearl p-5 shadow-[4px_4px_0_0_var(--charcoal)]">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-graphite">Total Revenue</p>
                  <DollarSign className="size-5 text-forest" />
                </div>
                <p className="font-display text-3xl font-semibold text-charcoal">${(totalRevenue / 1000).toFixed(1)}k</p>
                <p className="mt-1 font-mono text-[8px] text-graphite">{completedProjects} projects · CAD</p>
              </div>

              <div className="border-2 border-charcoal bg-pearl p-5 shadow-[4px_4px_0_0_var(--charcoal)]">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-graphite">Avg Project Value</p>
                  <TrendingUp className="size-5 text-forest" />
                </div>
                <p className="font-display text-3xl font-semibold text-charcoal">${Math.round(avgProjectValue)}</p>
                <p className="mt-1 font-mono text-[8px] text-graphite">Per project (CAD)</p>
              </div>

              <div className="border-2 border-charcoal bg-pearl p-5 shadow-[4px_4px_0_0_var(--charcoal)]">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-graphite">Total Enquiries</p>
                  <Users className="size-5 text-forest" />
                </div>
                <p className="font-display text-3xl font-semibold text-charcoal">{submissions.length}</p>
                <p className="mt-1 font-mono text-[8px] text-forest">{unreadCount} unread</p>
              </div>

              <div className="border-2 border-charcoal bg-pearl p-5 shadow-[4px_4px_0_0_var(--charcoal)]">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-graphite">Conversion Rate</p>
                  <Activity className="size-5 text-forest" />
                </div>
                <p className="font-display text-3xl font-semibold text-charcoal">
                  {submissions.length > 0 ? Math.round((completedProjects / submissions.length) * 100) : 0}%
                </p>
                <p className="mt-1 font-mono text-[8px] text-graphite">Enquiries → Projects</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid gap-6 lg:grid-cols-2 mb-6">
              {/* Submissions Trend */}
              <div className="border-2 border-charcoal bg-pearl p-6 shadow-[4px_4px_0_0_var(--charcoal)]">
                <h3 className="font-mono text-[9px] uppercase tracking-widest text-graphite mb-4">Enquiry Trend (Last 6 Months)</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={last6Months}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e0" />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: 'monospace' }} stroke="#666" />
                    <YAxis tick={{ fontSize: 11, fontFamily: 'monospace' }} stroke="#666" />
                    <Tooltip contentStyle={{ border: '2px solid #1a1a18', fontFamily: 'monospace', fontSize: 11 }} />
                    <Line type="monotone" dataKey="count" stroke="#3a6b4a" strokeWidth={3} dot={{ fill: '#3a6b4a', r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Project Types */}
              <div className="border-2 border-charcoal bg-pearl p-6 shadow-[4px_4px_0_0_var(--charcoal)]">
                <h3 className="font-mono text-[9px] uppercase tracking-widest text-graphite mb-4">Enquiries by Project Type</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <RechartsPie>
                    <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                      {pieData.map((_, i) => <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />)}
                    </Pie>
                    <Tooltip contentStyle={{ border: '2px solid #1a1a18', fontFamily: 'monospace', fontSize: 11 }} />
                    <Legend wrapperStyle={{ fontFamily: 'monospace', fontSize: 10 }} />
                  </RechartsPie>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Revenue Chart */}
            <div className="border-2 border-charcoal bg-pearl p-6 shadow-[4px_4px_0_0_var(--charcoal)]">
              <h3 className="font-mono text-[9px] uppercase tracking-widest text-graphite mb-4">Monthly Revenue</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e0" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: 'monospace' }} stroke="#666" />
                  <YAxis tick={{ fontSize: 11, fontFamily: 'monospace' }} stroke="#666" />
                  <Tooltip contentStyle={{ border: '2px solid #1a1a18', fontFamily: 'monospace', fontSize: 11 }} />
                  <Bar dataKey="revenue" fill="#3a6b4a" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Activity */}
            <div className="mt-6 border-2 border-charcoal bg-pearl shadow-[4px_4px_0_0_var(--charcoal)]">
              <div className="border-b-2 border-charcoal bg-stone/40 px-6 py-3">
                <h3 className="font-mono text-[9px] uppercase tracking-widest text-graphite">Recent Enquiries</h3>
              </div>
              <div className="divide-y-2 divide-line">
                {submissions.slice(0, 5).map((s) => (
                  <div key={s._id} className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                      {!s.read && <Circle className="size-2 fill-forest text-forest" />}
                      <div>
                        <p className="font-display text-xs font-semibold text-charcoal">{s.name}</p>
                        <p className="font-mono text-[9px] text-graphite">{s.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {s.projectType && (
                        <span className="border border-line bg-stone px-2 py-1 font-mono text-[8px] uppercase text-graphite">
                          {s.projectType}
                        </span>
                      )}
                      <p className="font-mono text-[8px] text-graphite">{format(new Date(s.createdAt), 'dd MMM yyyy')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {view === 'submissions' && (
          <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
            {/* List */}
            <div className="flex flex-col gap-3">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="font-mono text-[9px] uppercase tracking-widest text-graphite">All Submissions ({submissions.length})</h2>
              </div>
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <RefreshCw className="size-6 animate-spin text-graphite" />
                </div>
              ) : submissions.length === 0 ? (
                <div className="border-2 border-line bg-pearl p-8 text-center">
                  <p className="font-mono text-xs text-graphite">No submissions yet.</p>
                </div>
              ) : (
                submissions.map((s) => (
                  <button key={s._id} onClick={() => setSelected(s)}
                    className={`group relative border-2 bg-pearl p-4 text-left transition-all hover:shadow-[3px_3px_0_0_var(--charcoal)] ${
                      selected?._id === s._id ? 'border-forest shadow-[3px_3px_0_0_var(--forest)]' : 'border-line'
                    } ${!s.read ? 'border-l-4 border-l-forest' : ''}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display text-xs font-semibold text-charcoal truncate">{s.name}</h3>
                          {!s.read && <Circle className="size-2 shrink-0 fill-forest text-forest" />}
                        </div>
                        <p className="font-mono text-[9px] uppercase tracking-widest text-graphite mb-2">{s.email}</p>
                        <div className="flex flex-wrap gap-2">
                          {s.projectType && (
                            <span className="border border-line bg-stone px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest text-graphite">
                              {s.projectType}
                            </span>
                          )}
                          {s.budget && (
                            <span className="border border-line bg-stone px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest text-graphite">
                              {s.budget}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="font-mono text-[8px] text-graphite/50 whitespace-nowrap">
                        {format(new Date(s.createdAt), 'dd MMM')}
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>

            {/* Detail */}
            <div>
              {selected ? (
                <div className="border-2 border-charcoal bg-pearl shadow-[5px_5px_0_0_var(--charcoal)]">
                  <div className="border-b-2 border-charcoal bg-stone/40 px-6 py-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h2 className="font-display text-base font-semibold text-charcoal mb-1">{selected.name}</h2>
                        <p className="text-sm text-graphite">{selected.email}</p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => markRead(selected._id, !selected.read)}
                          className="flex items-center gap-1.5 border-2 border-line bg-background px-3 py-2 font-mono text-[8px] uppercase tracking-widest text-charcoal hover:border-charcoal transition-colors">
                          {selected.read ? <Eye className="size-3" /> : <CheckCircle className="size-3" />}
                          {selected.read ? 'Unread' : 'Read'}
                        </button>
                        <button onClick={() => deleteSubmission(selected._id)}
                          className="flex items-center gap-1.5 border-2 border-red-300 bg-red-50 px-3 py-2 font-mono text-[8px] uppercase tracking-widest text-red-600 hover:border-red-400 transition-colors">
                          <Trash2 className="size-3" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid gap-4 sm:grid-cols-2 mb-6">
                      {selected.company && (
                        <div className="flex items-start gap-3">
                          <Building2 className="mt-0.5 size-4 shrink-0 text-graphite" />
                          <div>
                            <p className="font-mono text-[9px] uppercase tracking-widest text-graphite">Company</p>
                            <p className="mt-1 text-sm text-charcoal">{selected.company}</p>
                          </div>
                        </div>
                      )}
                      {selected.projectType && (
                        <div className="flex items-start gap-3">
                          <FileText className="mt-0.5 size-4 shrink-0 text-graphite" />
                          <div>
                            <p className="font-mono text-[9px] uppercase tracking-widest text-graphite">Project Type</p>
                            <p className="mt-1 text-sm text-charcoal">{selected.projectType}</p>
                          </div>
                        </div>
                      )}
                      {selected.budget && (
                        <div className="flex items-start gap-3">
                          <DollarSign className="mt-0.5 size-4 shrink-0 text-graphite" />
                          <div>
                            <p className="font-mono text-[9px] uppercase tracking-widest text-graphite">Budget</p>
                            <p className="mt-1 text-sm text-charcoal">{selected.budget}</p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-start gap-3">
                        <Calendar className="mt-0.5 size-4 shrink-0 text-graphite" />
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-widest text-graphite">Submitted</p>
                          <p className="mt-1 text-sm text-charcoal">{format(new Date(selected.createdAt), 'PPpp')}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t-2 border-line pt-6">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-graphite mb-3">Message</p>
                      <div className="border-2 border-line bg-stone/40 p-4">
                        <p className="whitespace-pre-wrap text-sm leading-relaxed text-charcoal">{selected.message}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <a href={`mailto:${selected.email}`}
                        className="flex w-fit items-center gap-2 border-2 border-charcoal bg-charcoal px-5 py-3 font-mono text-[9px] uppercase tracking-widest text-pearl hover:bg-forest hover:border-forest transition-colors">
                        <Mail className="size-3.5" /> Reply via Email
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex min-h-[400px] items-center justify-center border-2 border-line bg-pearl">
                  <div className="text-center">
                    <Mail className="mx-auto size-8 text-graphite/30 mb-3" />
                    <p className="font-mono text-xs text-graphite">Select a submission</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {view === 'projects' && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-mono text-[9px] uppercase tracking-widest text-graphite">Completed Projects ({PROJECTS.length})</h2>
            </div>
            <div className="border-2 border-charcoal bg-pearl shadow-[4px_4px_0_0_var(--charcoal)]">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b-2 border-charcoal bg-stone/40">
                    <tr>
                      <th className="px-6 py-3 text-left font-mono text-[9px] uppercase tracking-widest text-graphite">Project</th>
                      <th className="px-6 py-3 text-left font-mono text-[9px] uppercase tracking-widest text-graphite">Client</th>
                      <th className="px-6 py-3 text-left font-mono text-[9px] uppercase tracking-widest text-graphite">Revenue</th>
                      <th className="px-6 py-3 text-left font-mono text-[9px] uppercase tracking-widest text-graphite">Status</th>
                      <th className="px-6 py-3 text-left font-mono text-[9px] uppercase tracking-widest text-graphite">Completed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-line">
                    {PROJECTS.map((p) => (
                      <tr key={p.id} className="hover:bg-stone/20 transition-colors">
                        <td className="px-6 py-4">
                          <p className="font-display text-xs font-semibold text-charcoal">{p.name}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-graphite">{p.client}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-display text-sm font-semibold text-forest">${p.revenue.toLocaleString()}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-block border px-2 py-1 font-mono text-[8px] uppercase tracking-widest ${
                            p.status === 'completed' ? 'border-forest bg-forest/10 text-forest' :
                            p.status === 'in-progress' ? 'border-blue-500 bg-blue-50 text-blue-600' :
                            'border-graphite bg-stone text-graphite'
                          }`}>
                            {p.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-mono text-[9px] text-graphite">
                            {p.completedAt ? format(new Date(p.completedAt), 'dd MMM yyyy') : '—'}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
