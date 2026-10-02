'use client'

import { usePathname } from 'next/navigation'
import { SiteShell } from './site-shell'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Admin pages don't get SiteShell (no header/footer)
  if (pathname?.startsWith('/admin')) {
    return <>{children}</>
  }

  // All other pages get full site chrome
  return <SiteShell>{children}</SiteShell>
}
