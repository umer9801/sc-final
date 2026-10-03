import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Solvix Core',
  description: 'UK-based digital engineering studio specialising in web development, SaaS platforms, mobile apps, and AI automation. We design and build digital products for ambitious businesses across the United Kingdom and globally.',
  url: 'https://solvixcore.uk',
  ogImage: 'https://solvixcore.uk/og-image.jpg',
  links: {
    email: 'info@solvixcore.uk',
    phone: '+447348486506',
    whatsapp: 'https://wa.me/447348486506',
    linkedin: 'https://linkedin.com/company/solvixcore',
    github: 'https://github.com/solvixcore',
  },
  keywords: [
    // Core services
    'web development UK',
    'web design UK',
    'digital agency UK',
    'software development UK',
    'custom software development',
    
    // Technology specific
    'Next.js development UK',
    'React development UK',
    'TypeScript developers UK',
    'full stack development',
    'frontend development UK',
    'backend development UK',
    
    // Business types
    'SaaS development UK',
    'mobile app development UK',
    'web application development',
    'enterprise software development',
    'startup technology partner',
    
    // AI & Automation
    'AI development UK',
    'AI automation UK',
    'business automation UK',
    'AI integration services',
    'machine learning UK',
    
    // Location specific
    'London web development',
    'Manchester web development',
    'Birmingham web development',
    'UK technology studio',
    'British web developers',
    
    // Service specific
    'e-commerce development UK',
    'API development UK',
    'database design UK',
    'cloud infrastructure UK',
    'AWS development UK',
    
    // Business outcomes
    'digital transformation UK',
    'business automation solutions',
    'scalable web applications',
    'custom business software',
    'digital product development',
  ],
  authors: [
    { name: 'Muhammad Umer', url: 'https://solvixcore.uk/about' },
    { name: 'Shahryar Javed', url: 'https://solvixcore.uk/about' },
    { name: 'Muhammad Abubakar', url: 'https://solvixcore.uk/about' },
    { name: 'Abdul Wahab', url: 'https://solvixcore.uk/about' },
  ],
  creator: 'Solvix Core',
  publisher: 'Solvix Core Ltd',
}

export function createMetadata(override: Metadata = {}): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} — Digital Engineering Studio UK`,
      template: `%s — ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — Digital Engineering Studio`,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: '@solvixcore',
      site: '@solvixcore',
    },
    icons: {
      icon: [
        { url: '/logo.png', type: 'image/png' },
      ],
      apple: [{ url: '/logo.png', sizes: '180x180', type: 'image/png' }],
    },
    manifest: '/manifest.json',
    alternates: {
      canonical: siteConfig.url,
    },
    other: {
      'geo.region': 'GB',
      'geo.placename': 'United Kingdom',
      'format-detection': 'telephone=no',
    },
    ...override,
  }
}

// Page-specific metadata helpers
export const pageMetadata = {
  home: createMetadata({
    title: 'Solvix Core — Digital Engineering Studio UK | Web Development & SaaS',
    description: 'UK digital engineering studio building web applications, SaaS platforms, mobile apps, and AI automation. We turn complex business problems into elegant software solutions.',
    keywords: [
      'web development UK',
      'digital agency UK',
      'SaaS development',
      'software development UK',
      'AI automation UK',
      'Next.js development',
    ],
  }),
  
  services: createMetadata({
    title: 'Services — Web Development, SaaS, Mobile Apps & AI',
    description: 'Full-stack development services: web applications, SaaS platforms, mobile apps, AI automation, and business software. Built for UK businesses, delivered globally.',
    keywords: [
      'web development services UK',
      'SaaS development services',
      'mobile app development',
      'AI development services',
      'custom software development',
    ],
  }),
  
  about: createMetadata({
    title: 'About — UK Digital Engineering Studio',
    description: 'Meet the Solvix Core team. UK-based technology studio combining strategy, design, and engineering. We build digital products for ambitious businesses.',
    keywords: [
      'UK technology studio',
      'digital agency team',
      'software development company UK',
      'technology partners UK',
    ],
  }),
  
  work: createMetadata({
    title: 'Work — Portfolio & Case Studies',
    description: 'Our portfolio of web applications, SaaS platforms, and mobile apps. Real projects for UK businesses across e-commerce, logistics, professional services, and more.',
    keywords: [
      'web development portfolio',
      'SaaS case studies',
      'UK web design portfolio',
      'software development projects',
    ],
  }),
  
  contact: createMetadata({
    title: 'Contact — Get In Touch',
    description: 'Start a conversation about your project. UK-based digital engineering studio ready to help with web development, SaaS, mobile apps, and AI automation.',
    keywords: [
      'contact web developers UK',
      'hire software developers UK',
      'digital agency contact',
      'web development enquiry',
    ],
  }),
  
  insights: createMetadata({
    title: 'Insights — Technology, Strategy & Engineering',
    description: 'Thoughts on building better software, AI integration, business automation, and digital product development from the Solvix Core team.',
    keywords: [
      'technology insights UK',
      'software development blog',
      'AI automation insights',
      'web development best practices',
    ],
  }),
  
  solutions: createMetadata({
    title: 'Solutions — Industry-Specific Digital Products',
    description: 'Digital solutions for e-commerce, logistics, professional services, healthcare, and finance. Custom software built for your industry.',
    keywords: [
      'e-commerce development UK',
      'logistics software UK',
      'professional services software',
      'industry software solutions',
    ],
  }),
}
