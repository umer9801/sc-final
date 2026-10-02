'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    setLoading(false)

    if (res.ok) {
      router.push('/admin/dashboard')
      router.refresh()
    } else {
      setError('Invalid password')
      setPassword('')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-stone px-4">
      <div className="w-full max-w-md">
        <div className="border-2 border-charcoal bg-pearl p-8 shadow-[6px_6px_0_0_var(--charcoal)]">
          {/* Header */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex size-12 items-center justify-center border-2 border-charcoal bg-forest/10">
              <Lock className="size-5 text-forest" />
            </div>
            <div>
              <h1 className="font-display text-base font-semibold text-charcoal">ADMIN LOGIN</h1>
              <p className="font-mono text-[9px] uppercase tracking-widest text-graphite">Solvix Core</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-mono text-[9px] uppercase tracking-widest text-graphite">
                Admin Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                autoFocus
                className="border-2 border-line bg-background px-4 py-3 text-sm text-charcoal placeholder:text-graphite/40 outline-none focus:border-forest transition-colors"
              />
            </div>

            {error && (
              <div className="border-2 border-red-300 bg-red-50 px-4 py-3 font-mono text-xs text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="border-2 border-charcoal bg-charcoal px-6 py-3 font-mono text-xs uppercase tracking-widest text-pearl shadow-[3px_3px_0_0_var(--forest)] transition-all hover:shadow-[1px_1px_0_0_var(--forest)] hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Checking…' : 'Login'}
            </button>
          </form>

          <div className="mt-6 border-t-2 border-line pt-6">
            <p className="font-mono text-[9px] uppercase tracking-widest text-graphite/50 text-center">
              Protected area — authorized access only
            </p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <a href="/" className="font-mono text-xs text-graphite hover:text-charcoal transition-colors">
            ← Back to site
          </a>
        </div>
      </div>
    </div>
  )
}
