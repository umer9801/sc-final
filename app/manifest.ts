import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Solvix Core — Digital Engineering Studio UK',
    short_name: 'Solvix Core',
    description: 'UK-based digital engineering studio specialising in web development, SaaS platforms, mobile apps, and AI automation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f6f2',
    theme_color: '#3a6b4a',
    icons: [
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    lang: 'en-GB',
    dir: 'ltr',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'technology'],
  }
}
