export const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
] as const

export type MegaItem = {
  key: string
  title: string
  description: string
  href: string
}

export const MEGA_MENU: MegaItem[] = [
  { key: 'WEB', title: 'Web', description: 'Marketing sites & web platforms', href: '/services#web' },
  { key: 'SAAS', title: 'SaaS', description: 'Multi-tenant products at scale', href: '/services#saas' },
  { key: 'MOBILE', title: 'Mobile', description: 'iOS & Android applications', href: '/services#mobile' },
  { key: 'AI', title: 'AI', description: 'Agents, chatbots & integrations', href: '/services#ai' },
  { key: 'AUTOMATION', title: 'Automation', description: 'n8n & business process ops', href: '/services#automation' },
  { key: 'ECOMMERCE', title: 'E-commerce', description: 'Storefronts, POS & payments', href: '/services#ecommerce' },
]

export type Service = {
  no: string
  id: string
  title: string
  short: string
  description: string
  capabilities: string[]
  stack: string[]
}

export const SERVICES: Service[] = [
  {
    no: '01',
    id: 'web',
    title: 'Web Development',
    short: 'Web',
    description:
      'High-performance marketing sites and web platforms engineered for speed, accessibility and measurable conversion.',
    capabilities: ['Design systems', 'Headless CMS', 'Edge rendering', 'Core Web Vitals'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    no: '02',
    id: 'saas',
    title: 'SaaS Products',
    short: 'SaaS',
    description:
      'Multi-tenant SaaS products with billing, auth, dashboards and infrastructure built to scale from first user to thousands.',
    capabilities: ['Multi-tenancy', 'Billing & auth', 'Analytics', 'Role systems'],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    no: '03',
    id: 'mobile',
    title: 'Mobile Applications',
    short: 'Mobile',
    description:
      'Native-feeling iOS and Android applications with shared codebases, offline support and polished motion.',
    capabilities: ['Cross-platform', 'Offline-first', 'Push & deep links', 'App store ops'],
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
  },
  {
    no: '04',
    id: 'ai',
    title: 'AI Systems',
    short: 'AI',
    description:
      'AI chatbots, agents and retrieval systems wired directly into your data, tools and business workflows.',
    capabilities: ['Chatbots & agents', 'RAG pipelines', 'Evals', 'Guardrails'],
    stack: ['OpenAI', 'LangChain', 'Vector DBs', 'AI SDK'],
  },
  {
    no: '05',
    id: 'automation',
    title: 'Automation',
    short: 'Automation',
    description:
      'Business process automation with n8n and custom integrations that remove manual work across your stack.',
    capabilities: ['n8n workflows', 'API integrations', 'Data sync', 'Ops tooling'],
    stack: ['n8n', 'Node.js', 'Webhooks', 'REST & GraphQL'],
  },
  {
    no: '06',
    id: 'ecommerce',
    title: 'E-commerce',
    short: 'E-commerce',
    description:
      'Conversion-focused storefronts, POS systems and payment flows engineered for reliability at checkout.',
    capabilities: ['Storefronts', 'POS systems', 'Payments', 'Inventory'],
    stack: ['Shopify', 'Stripe', 'Next.js', 'Postgres'],
  },
  {
    no: '07',
    id: 'software',
    title: 'Custom Software',
    short: 'Software',
    description:
      'Bespoke internal tools, dashboards and platforms tailored to how your business actually operates.',
    capabilities: ['Internal tools', 'Dashboards', 'Integrations', 'Data models'],
    stack: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
  },
]

export const CAPABILITIES = ['WEB', 'SAAS', 'MOBILE', 'AI', 'AUTOMATION', 'ECOMMERCE', 'SOFTWARE']

export const PROCESS = [
  { no: '01', title: 'Discover', body: 'We map goals, constraints and the systems around the problem.' },
  { no: '02', title: 'Architect', body: 'We design the data models, infrastructure and technical approach.' },
  { no: '03', title: 'Design', body: 'We craft interfaces and interactions with intent and clarity.' },
  { no: '04', title: 'Engineer', body: 'We build in tight iterations with production quality from day one.' },
  { no: '05', title: 'Launch', body: 'We ship with monitoring, analytics and a plan for scale.' },
  { no: '06', title: 'Optimize', body: 'We measure, refine and expand based on real usage.' },
]

export const STATS = [
  { value: 50, suffix: '+', label: 'Digital Projects' },
  { value: 30, suffix: '+', label: 'Businesses Supported' },
  { value: 10, suffix: '+', label: 'Technology Domains' },
  { value: 24, suffix: '/7', label: 'Digital Systems' },
]

export const TECH = [
  'Next.js',
  'React',
  'Node.js',
  'Python',
  'MongoDB',
  'PostgreSQL',
  'OpenAI',
  'LangChain',
  'n8n',
  'FastAPI',
  'AWS',
  'TypeScript',
]

export type Project = {
  slug: string
  title: string
  category: string
  tag: 'Web' | 'SaaS' | 'AI' | 'Automation' | 'Mobile' | 'E-commerce'
  year: string
  summary: string
  image: string
  challenge: string
  approach: string
  results: { value: string; label: string }[]
  stack: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'nordwind-saas-platform',
    title: 'Nordwind Platform',
    category: 'SaaS Platform',
    tag: 'SaaS',
    year: '2025',
    summary: 'A multi-tenant operations platform unifying billing, analytics and team workflows.',
    image: '/work-saas-dashboard.png',
    challenge:
      'A fragmented set of spreadsheets and legacy tools slowed every internal team and made scaling impossible.',
    approach:
      'We designed a single multi-tenant platform with a shared data model, granular roles and a real-time analytics layer.',
    results: [
      { value: '4.2x', label: 'Faster onboarding' },
      { value: '-38%', label: 'Support tickets' },
      { value: '99.9%', label: 'Uptime' },
    ],
    stack: ['Next.js', 'PostgreSQL', 'Node.js', 'Stripe'],
  },
  {
    slug: 'helix-ai-automation',
    title: 'Helix Automation',
    category: 'AI Automation System',
    tag: 'AI',
    year: '2025',
    summary: 'An AI agent pipeline that triages requests and routes them across CRM, email and analytics.',
    image: '/work-ai-workflow.png',
    challenge:
      'Inbound requests were handled manually, creating delays and inconsistent responses across channels.',
    approach:
      'We built an AI agent layer on top of n8n that classifies, enriches and routes every request automatically.',
    results: [
      { value: '82%', label: 'Auto-resolved' },
      { value: '11h', label: 'Saved weekly' },
      { value: '<2min', label: 'Response time' },
    ],
    stack: ['OpenAI', 'n8n', 'LangChain', 'Node.js'],
  },
  {
    slug: 'meridian-ecommerce',
    title: 'Meridian Store',
    category: 'E-commerce Platform',
    tag: 'E-commerce',
    year: '2024',
    summary: 'A high-conversion storefront with integrated POS and unified inventory.',
    image: '/work-ecommerce.png',
    challenge:
      'Online and in-store systems were disconnected, causing stock errors and a broken customer experience.',
    approach:
      'We unified storefront, POS and inventory into a single system with real-time sync and a refined checkout.',
    results: [
      { value: '+46%', label: 'Conversion' },
      { value: '2.1s', label: 'Load time' },
      { value: '0', label: 'Stock conflicts' },
    ],
    stack: ['Next.js', 'Shopify', 'Stripe', 'Postgres'],
  },
  {
    slug: 'atlas-pos-system',
    title: 'Atlas POS',
    category: 'POS System',
    tag: 'E-commerce',
    year: '2024',
    summary: 'A resilient point-of-sale system for multi-location retail with offline support.',
    image: '/work-pos.png',
    challenge:
      'Unreliable connectivity across locations meant checkout failures and lost sales during outages.',
    approach:
      'We engineered an offline-first POS that syncs seamlessly and never blocks a sale.',
    results: [
      { value: '100%', label: 'Offline sales' },
      { value: '-63%', label: 'Checkout errors' },
      { value: '12', label: 'Locations' },
    ],
    stack: ['React', 'Node.js', 'SQLite', 'PostgreSQL'],
  },
  {
    slug: 'verde-business-site',
    title: 'Verde Studio',
    category: 'Business Website',
    tag: 'Web',
    year: '2025',
    summary: 'An editorial marketing site engineered for performance and brand impact.',
    image: '/work-website.png',
    challenge:
      'The previous site was slow, hard to update and failed to communicate the brand’s positioning.',
    approach:
      'We built a fast, CMS-driven site with a bespoke design system and motion-led storytelling.',
    results: [
      { value: '98', label: 'Lighthouse' },
      { value: '+120%', label: 'Engagement' },
      { value: '0.4s', label: 'LCP' },
    ],
    stack: ['Next.js', 'Sanity', 'Tailwind', 'Vercel'],
  },
  {
    slug: 'pulse-mobile-app',
    title: 'Pulse App',
    category: 'Mobile Application',
    tag: 'Mobile',
    year: '2024',
    summary: 'A cross-platform mobile app with offline sync and real-time notifications.',
    image: '/work-mobile.png',
    challenge:
      'Users needed reliable access to their data on the move, with or without a connection.',
    approach:
      'We shipped a cross-platform app with an offline-first architecture and polished, native-feeling motion.',
    results: [
      { value: '4.8', label: 'App rating' },
      { value: '60fps', label: 'Interactions' },
      { value: '2', label: 'Platforms' },
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
  },
]

export const SOLUTIONS = [
  { no: '01', title: 'Business Automation', body: 'Remove repetitive manual work with orchestrated workflows across every tool you use.' },
  { no: '02', title: 'AI Integration', body: 'Embed agents, assistants and intelligent search directly into your products and operations.' },
  { no: '03', title: 'Digital Transformation', body: 'Replace legacy systems with modern, connected infrastructure built to evolve.' },
  { no: '04', title: 'Customer Experience', body: 'Design and engineer experiences that convert, retain and delight at every touchpoint.' },
  { no: '05', title: 'Internal Tools', body: 'Custom dashboards and tooling shaped exactly around how your teams work.' },
  { no: '06', title: 'E-commerce', body: 'Storefronts, POS and payment systems engineered for reliability and growth.' },
  { no: '07', title: 'Operations', body: 'Connect data and processes so your operations run without friction or gaps.' },
  { no: '08', title: 'Data & Analytics', body: 'Turn scattered data into clear, actionable insight with pipelines and dashboards.' },
]

export type InsightSection = {
  type: 'heading' | 'paragraph' | 'callout' | 'list' | 'code'
  content: string
  items?: string[]   // for list type
  label?: string     // for callout/code label
}

export type Insight = {
  slug: string
  title: string
  category: string
  excerpt: string
  date: string
  readTime: string
  body: InsightSection[]
  keyTakeaways: string[]
  tags: string[]
}

export const INSIGHTS: Insight[] = [
  {
    slug: 'designing-ai-agents-for-production',
    title: 'Designing AI Agents That Survive Production',
    category: 'AI',
    excerpt: 'What actually breaks when you move an AI agent from a demo to real, messy business workflows — and how to design around it.',
    date: 'Sep 2026',
    readTime: '8 min',
    tags: ['AI Agents', 'LLM', 'Production', 'Architecture'],
    keyTakeaways: [
      'Demos work on clean inputs. Production does not have clean inputs.',
      'Guardrails are not optional — they are load-bearing architecture.',
      'Every agent needs an eject button: a clear path to human handoff.',
      'Observability on agents is harder than on APIs, and twice as important.',
      'Latency is a UX problem. Design around it from day one.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'The demo worked perfectly. The agent answered every question, routed every request, and summarised every document flawlessly. Then it hit real users. Within 48 hours it was hallucinating customer names, looping on ambiguous inputs, and occasionally emailing the wrong person. This is not a cautionary tale — this is a pattern we have seen on nearly every AI project we have shipped.',
      },
      {
        type: 'heading',
        content: 'Why demos lie',
      },
      {
        type: 'paragraph',
        content:
          'Demos are curated. The inputs are clean, the context is complete, and the person running the demo knows what the agent can handle. Production is the opposite. Users write in fragments, switch topics mid-conversation, attach malformed files, and ask questions the agent was never designed to answer. If your agent was only tested on good inputs, you do not have a production agent — you have a demo.',
      },
      {
        type: 'callout',
        label: 'Key insight',
        content:
          'The failure mode is not the LLM. The failure mode is the assumptions baked into the system around the LLM — the prompt, the context window, the routing logic, and the absence of fallbacks.',
      },
      {
        type: 'heading',
        content: 'The three layers that actually break',
      },
      {
        type: 'list',
        content: 'In every production AI system we have built, breakage concentrates in three places:',
        items: [
          'Context assembly — the code that builds the prompt. Off-by-one errors, missing delimiters, stale data from a cache, or a context window that silently truncates. None of this surfaces in a demo.',
          'Routing logic — the code that decides which tool or agent handles a request. Ambiguous inputs hit the wrong branch. Edge cases fall through to no branch at all.',
          'Output handling — the code that consumes the LLM response. Parsing brittle JSON, assuming a specific format, failing silently when the model diverges from the expected schema.',
        ],
      },
      {
        type: 'heading',
        content: 'Guardrails are load-bearing, not cosmetic',
      },
      {
        type: 'paragraph',
        content:
          'Most teams treat guardrails as a post-launch checklist item. Block bad words, add a disclaimer, ship it. That is not guardrails — that is theatre. Real guardrails are structural. They define what the agent is allowed to do, what it must refuse, how it handles uncertainty, and what happens when confidence is low. They need to be designed in from the start, not bolted on after the first incident.',
      },
      {
        type: 'paragraph',
        content:
          'We use a simple rule: every action an agent can take that has side effects — sending a message, updating a record, making an API call — requires an explicit confidence threshold before it fires. Below that threshold, the agent surfaces the action for human review instead of executing it. This single pattern has prevented more production incidents than any other measure we have implemented.',
      },
      {
        type: 'heading',
        content: 'Build the eject button first',
      },
      {
        type: 'paragraph',
        content:
          'Before we write a single line of agent logic, we design the human handoff path. What does the agent say when it cannot handle a request? Where does that request go? Who gets notified? How long before it escalates? This is not a fallback — it is a first-class feature. Users trust a system that knows its limits more than one that confidently answers everything.',
      },
      {
        type: 'heading',
        content: 'Observability is not optional',
      },
      {
        type: 'paragraph',
        content:
          'Standard application monitoring does not work for agents. A 200 OK from your LLM call tells you nothing about whether the response was correct, helpful, or safe. You need to log inputs, outputs, tool calls, confidence scores, and escalations — and you need a way to replay and audit individual conversations. We treat every agent interaction as a structured trace, not a log line.',
      },
      {
        type: 'callout',
        label: 'What we do',
        content:
          'Every agent we ship includes a dashboard that shows live escalation rate, average confidence score, tool call distribution, and a conversation replay tool. This is non-negotiable. Without it, you are flying blind.',
      },
      {
        type: 'heading',
        content: 'Latency is a design constraint, not an afterthought',
      },
      {
        type: 'paragraph',
        content:
          'LLM calls are slow. GPT-4 can take 5–15 seconds for a complex response. In a chat interface, that is tolerable. In a workflow that chains three agent calls, that is a 30–45 second wait. Users abandon. The system looks broken even when it is working correctly. Design for latency from day one: stream responses where possible, parallelize independent tool calls, cache deterministic lookups, and set clear timeout budgets for every step in the chain.',
      },
    ],
  },
  {
    slug: 'automation-without-chaos',
    title: 'Automation Without the Chaos',
    category: 'Automation',
    excerpt: 'A pragmatic framework for introducing n8n and process automation without creating a fragile web of hidden dependencies.',
    date: 'Aug 2026',
    readTime: '6 min',
    tags: ['n8n', 'Automation', 'Workflow', 'Architecture'],
    keyTakeaways: [
      'Automate stable processes first. Do not automate what is still changing.',
      'Every workflow needs an owner — not a team, one person.',
      'Treat automation failures as first-class incidents, not silent errors.',
      'Document the workflow in plain English before you build it in n8n.',
      'Version control your workflows. Unversioned automation is technical debt.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Automation is one of the highest-ROI investments a business can make. It is also one of the fastest ways to create a fragile, undocumented web of hidden dependencies that no one understands six months later. We have inherited both kinds. The difference is almost always in how the automation was introduced, not how it was built.',
      },
      {
        type: 'heading',
        content: 'The automation graveyard problem',
      },
      {
        type: 'paragraph',
        content:
          'Most automation projects start the same way: someone discovers n8n, builds a workflow in an afternoon that saves them two hours a week, and shares it with the team. Three months later there are forty workflows. Half of them overlap. A quarter of them are broken and silently failing. Nobody knows which ones are critical. The person who built them left. This is the automation graveyard, and it is more common than any vendor will tell you.',
      },
      {
        type: 'callout',
        label: 'The rule',
        content: 'Before you build a workflow, write down what it does, who owns it, what it connects to, and what happens when it fails. If you cannot answer all four questions, you are not ready to automate yet.',
      },
      {
        type: 'heading',
        content: 'Automate stable processes first',
      },
      {
        type: 'paragraph',
        content:
          'Automation encodes assumptions about how a process works. If the process is still changing, the automation becomes wrong before it becomes useful. The best candidates for early automation are processes that have been running the same way for at least three months, involve more than two manual steps, and produce the same output every time given the same input. Data sync, report generation, notification routing, and lead enrichment are almost always good starting points.',
      },
      {
        type: 'heading',
        content: 'Every workflow needs a named owner',
      },
      {
        type: 'paragraph',
        content:
          'Not a team. One person. When a workflow fails at 3am and a customer is affected, someone needs to be paged. When the API it connects to changes its schema, someone needs to update it. "The team owns it" means no one owns it. Assign a human name to every workflow in production.',
      },
      {
        type: 'heading',
        content: 'Failures are incidents, not log lines',
      },
      {
        type: 'paragraph',
        content:
          'n8n will retry failed steps. That is useful. It will also silently succeed at retrying while the data it processed is now corrupted, duplicated, or incomplete. Silent success is worse than explicit failure. Instrument every workflow with an explicit failure path: a Slack message, a ticket, an email — something that creates a visible signal when the workflow does not complete as expected. Treat that signal like a production incident.',
      },
      {
        type: 'heading',
        content: 'Version control is not optional',
      },
      {
        type: 'paragraph',
        content:
          'n8n exports workflows as JSON. Check them in. Every change should go through the same review process as application code — especially for workflows that touch customer data or financial records. We use a simple convention: a workflows/ directory in the project repo, one file per workflow, named by its function not its ID. Changes are reviewed in pull requests. Deployments are logged.',
      },
      {
        type: 'list',
        content: 'The framework we use before building any new workflow:',
        items: [
          'Write the process in plain English, step by step.',
          'Identify every external system it touches.',
          'Define the success condition and the failure condition.',
          'Assign an owner and a on-call escalation path.',
          'Build a minimal version first — one happy path, then edge cases.',
          'Add monitoring before you add complexity.',
        ],
      },
    ],
  },
  {
    slug: 'the-case-for-boring-infrastructure',
    title: 'The Case for Boring Infrastructure',
    category: 'Technology',
    excerpt: 'Why the most reliable SaaS products are built on unglamorous, well-understood foundations.',
    date: 'Aug 2026',
    readTime: '5 min',
    tags: ['Infrastructure', 'PostgreSQL', 'Architecture', 'SaaS'],
    keyTakeaways: [
      'Boring technology is predictable. Predictable technology is reliable.',
      'The cost of novel infrastructure is paid in debugging, not licensing.',
      'PostgreSQL solves more problems than most teams give it credit for.',
      'Every exotic dependency is a bus-factor risk and a hiring tax.',
      'Optimize for operational simplicity, not architectural elegance.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Every generation of engineers has its exotic stack. In the early 2010s it was Cassandra and Riak. In the late 2010s it was Kafka for everything and microservices for a CRUD app. Today it is vector databases, edge compute for things that should be server-rendered, and distributed systems patterns applied to problems that a single Postgres instance would solve in milliseconds. The pattern is consistent: novel technology gets adopted for reasons of fashion, then paid for in years of operational pain.',
      },
      {
        type: 'heading',
        content: 'What "boring" actually means',
      },
      {
        type: 'paragraph',
        content:
          'Boring technology is not old technology. It is technology that is well-understood, well-documented, and well-staffed. It has known failure modes, mature operational tooling, and a large pool of engineers who can work with it. When something goes wrong at 2am — and it will — boring technology means you can find the answer in the docs or Stack Overflow in minutes, not wait for a vendor to respond to a support ticket.',
      },
      {
        type: 'callout',
        label: 'The test',
        content: 'Before adopting a new piece of infrastructure, ask: if this breaks in production at 3am, can I diagnose and fix it without the vendor? If the answer is no, you are outsourcing reliability to someone who is not on your on-call rotation.',
      },
      {
        type: 'heading',
        content: 'PostgreSQL is underrated at every scale',
      },
      {
        type: 'paragraph',
        content:
          'We have built multi-tenant SaaS products serving millions of rows on a single Postgres instance with no performance issues. Postgres handles JSONB for flexible schemas, full-text search, time-series data with partitioning, geospatial queries with PostGIS, and queue-like workloads with SKIP LOCKED. Before reaching for Redis, Elasticsearch, or a purpose-built time-series database, we always ask: can Postgres do this? More often than not, the answer is yes — and the operational simplicity of one database instead of three is worth the marginal performance trade-off.',
      },
      {
        type: 'heading',
        content: 'The hiring tax on exotic stacks',
      },
      {
        type: 'paragraph',
        content:
          "Every unusual technology in your stack is a hiring filter. Not the good kind. It narrows your candidate pool, increases onboarding time, and makes every future engineer's first three weeks harder. If your data pipeline requires deep knowledge of Apache Flink, you have just eliminated 95% of available engineers from being able to maintain it. Choose technology that the next person you hire can understand on day one.",
      },
      {
        type: 'heading',
        content: 'When novel is the right choice',
      },
      {
        type: 'paragraph',
        content:
          'This is not an argument against ever adopting new technology. Vector databases are genuinely useful for semantic search in ways that Postgres cannot fully replicate today. Edge compute solves real latency problems for global products. The question is not "is this technology good?" but "is this technology the right trade-off for this business, at this stage, with this team?" In almost every early-stage SaaS product, the answer favours boring — and the time saved on infrastructure is better spent on the product.',
      },
    ],
  },
  {
    slug: 'web-performance-as-a-feature',
    title: 'Web Performance Is a Feature',
    category: 'Web Development',
    excerpt: 'How treating Core Web Vitals as a product requirement changes the way you build.',
    date: 'Jul 2026',
    readTime: '7 min',
    tags: ['Performance', 'Core Web Vitals', 'Next.js', 'UX'],
    keyTakeaways: [
      'Every 100ms of load time costs measurable conversion. This is not theoretical.',
      'LCP is the metric that matters most for first impressions.',
      'CLS is almost always caused by images and fonts without explicit dimensions.',
      'Performance budgets defined at the start of a project prevent regression.',
      'Lighthouse is a floor, not a ceiling. Real-user monitoring is the source of truth.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Performance is not a technical concern. It is a product decision with measurable business impact. Amazon measured that every 100ms of latency cost them 1% in sales. Google found that a 0.1-second improvement in mobile load time increased conversions by 8% in retail and 10% in travel. These numbers are from companies with enormous sample sizes. They are not flukes. When a page is slow, users leave — and they do not come back.',
      },
      {
        type: 'heading',
        content: 'Why Core Web Vitals matter beyond SEO',
      },
      {
        type: 'paragraph',
        content:
          'Core Web Vitals get most of their attention as an SEO ranking signal. That framing undersells them. LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), and INP (Interaction to Next Paint) are measurements of real user experience. A high CLS score means your page is jumping around while users try to read it. A slow LCP means users are staring at a blank or partial screen. These are not theoretical quality metrics — they are direct measurements of friction in the experience.',
      },
      {
        type: 'callout',
        label: 'The number that changes minds',
        content: 'A 1-second delay in page load reduces conversions by an average of 7%. On a site doing $100k/month, that is $7,000 left on the table every month for every second of avoidable delay.',
      },
      {
        type: 'heading',
        content: 'The most common CWV killers',
      },
      {
        type: 'list',
        content: 'After auditing dozens of Next.js projects, the same culprits appear repeatedly:',
        items: [
          'Images without explicit width and height attributes causing layout shift (CLS).',
          'Web fonts loaded without font-display: swap, blocking first render.',
          'Large JavaScript bundles that are not code-split, delaying interactivity.',
          'Unoptimised third-party scripts (analytics, chat widgets, tag managers) loaded synchronously.',
          'Server components fetching data sequentially instead of in parallel.',
          'Hero images not marked as priority, meaning the browser de-prioritises them.',
        ],
      },
      {
        type: 'heading',
        content: 'Setting a performance budget',
      },
      {
        type: 'paragraph',
        content:
          'A performance budget is a set of thresholds — LCP under 2.5s, CLS under 0.1, total JavaScript under 200KB — defined at the start of the project and enforced in CI. The value of a budget is not in the specific numbers; it is in the conversation it forces. When a designer wants to add a 4MB video background, the budget makes the trade-off explicit. When an engineer wants to pull in a new third-party widget, the bundle size check makes the cost visible before it ships.',
      },
      {
        type: 'heading',
        content: 'Lighthouse is a floor, not a ceiling',
      },
      {
        type: 'paragraph',
        content:
          'A 100 Lighthouse score in a controlled lab environment says nothing about real-user experience on a $200 Android phone on a 4G connection in a rural area. Lab scores are useful for catching obvious regressions. Real-User Monitoring (RUM) — using tools like Vercel Analytics, web-vitals.js, or Datadog — is how you see what your actual users are experiencing. Run both. Weight the RUM data more heavily when making decisions.',
      },
    ],
  },
  {
    slug: 'scaling-a-saas-data-model',
    title: 'Scaling a SaaS Data Model',
    category: 'SaaS',
    excerpt: 'Multi-tenancy decisions you make on day one that determine what is possible on day one thousand.',
    date: 'Jul 2026',
    readTime: '9 min',
    tags: ['SaaS', 'PostgreSQL', 'Multi-tenancy', 'Architecture'],
    keyTakeaways: [
      'Row-level tenancy is the right default for most early-stage SaaS.',
      'Add tenant_id to every table before you have more than one tenant.',
      'Shared schema with RLS is PostgreSQL\'s killer feature for multi-tenant SaaS.',
      'Plan your indexing strategy around tenant_id from day one.',
      'The data model you choose on day one is the hardest thing to change later.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'The most important architecture decision in a SaaS product is not which framework you use, which cloud you deploy to, or which ORM you pick. It is how you isolate tenant data. Get it wrong and you will spend years working around it. Get it right and it becomes invisible infrastructure that scales quietly in the background while you focus on the product.',
      },
      {
        type: 'heading',
        content: 'The three tenancy models',
      },
      {
        type: 'list',
        content: 'There are three standard approaches to multi-tenant data isolation, each with different trade-offs:',
        items: [
          'Separate databases per tenant — maximum isolation, maximum operational overhead. Right for enterprise products with strict compliance requirements or wildly different data volumes per tenant.',
          'Separate schemas per tenant (in Postgres) — strong isolation, moderate overhead. Useful when tenants need custom fields or schema extensions.',
          'Shared schema with a tenant_id column — lowest overhead, scales well, right default for most SaaS products. Requires careful use of Row Level Security (RLS) to prevent data leakage.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'We use shared schema with RLS for the majority of projects. It means one database to manage, one schema to migrate, and one set of indexes to maintain. The isolation guarantee comes from Postgres RLS policies, which filter rows at the database level — not in application code, where it is easier to get wrong.',
      },
      {
        type: 'callout',
        label: 'The one rule',
        content: 'Add tenant_id to every single table before you have more than one tenant. Retrofitting it later is painful, migration-heavy, and risky. The cost of adding it early is one extra column. The cost of adding it late is a multi-day migration on a live database.',
      },
      {
        type: 'heading',
        content: 'Row Level Security in practice',
      },
      {
        type: 'paragraph',
        content:
          'PostgreSQL Row Level Security lets you define policies that automatically filter queries based on a session variable. Set the current tenant ID at the start of each request, and every query in that request automatically sees only that tenant\'s rows. You cannot forget to add a WHERE tenant_id = ? clause because the database enforces it for you. This is the correct level of defence for tenant isolation — the application layer is too easy to accidentally bypass.',
      },
      {
        type: 'code',
        label: 'RLS policy example',
        content: `-- Enable RLS on the table
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Policy: users see only their tenant's rows
CREATE POLICY tenant_isolation ON projects
  USING (tenant_id = current_setting('app.tenant_id')::uuid);

-- Set at the start of each request
SET LOCAL app.tenant_id = '${'{tenant_id}'}';`,
      },
      {
        type: 'heading',
        content: 'Indexing for multi-tenant queries',
      },
      {
        type: 'paragraph',
        content:
          'In a single-tenant app, you index on the columns you filter by most. In a multi-tenant app, almost every query starts with tenant_id, so almost every index should start with tenant_id as the leading column. A composite index on (tenant_id, created_at) will serve most list queries. A composite index on (tenant_id, status) will serve most filtered list queries. Without this, even a small table will do sequential scans once you have hundreds of tenants.',
      },
      {
        type: 'heading',
        content: 'The migration you cannot avoid',
      },
      {
        type: 'paragraph',
        content:
          'Every SaaS product eventually needs to move some tenants to dedicated infrastructure — either for performance, compliance, or because a large customer demands it. Design for this from the start. Use UUIDs for all IDs (not auto-incrementing integers), keep tenant_id consistent across all tables, and avoid any schema-level coupling between tenants. When the time comes to extract a tenant, it should be a data migration, not an architectural rewrite.',
      },
    ],
  },
  {
    slug: 'technology-that-earns-its-keep',
    title: 'Technology That Earns Its Keep',
    category: 'Business',
    excerpt: 'A simple test for whether a new system is actually worth building for your business.',
    date: 'Jun 2026',
    readTime: '4 min',
    tags: ['Strategy', 'ROI', 'Business', 'Decision-making'],
    keyTakeaways: [
      'Technology is a means to a business end, not an end in itself.',
      'If you cannot articulate the ROI in one sentence, the project is not ready.',
      'The best technology decision is sometimes to not build.',
      'Maintenance cost is almost always underestimated. Double your estimate.',
      'A system that 3 people depend on and 0 people understand is a liability.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'We turn down projects. Not often, but regularly. Usually it is a business that wants to build a custom system to replace something that an off-the-shelf tool already does perfectly well. Or a startup that wants to build an internal tool before they have validated that anyone will pay for their product. Or a company that wants to add AI to something where the existing manual process is fast, accurate, and costs $200 a month. We turn these down because building them would not help the business — it would consume resources that the business needs for things that actually matter.',
      },
      {
        type: 'heading',
        content: 'The one-sentence ROI test',
      },
      {
        type: 'paragraph',
        content:
          'Before committing to any significant technology investment, we ask the client to complete this sentence: "We are building this because it will [specific outcome] by [measurable amount] within [timeframe]." If they cannot complete it, the project is not ready. This is not a paperwork exercise — it is the forcing function that separates technology that earns its keep from technology that feels important in a meeting.',
      },
      {
        type: 'callout',
        label: 'Examples',
        content: '"We are building this because it will reduce order processing time from 4 minutes to 30 seconds, saving 20 hours per week within 3 months." That is a real ROI. "We are building this to improve operational efficiency" is not.',
      },
      {
        type: 'heading',
        content: 'The true cost of ownership',
      },
      {
        type: 'paragraph',
        content:
          'Every system you build has a maintenance cost. Someone needs to keep it running, update its dependencies, handle the edge cases that the original spec did not anticipate, and train new team members on how it works. This cost is almost always underestimated in the initial project, and it compounds every year the system exists. We tell every client to double whatever maintenance estimate we give them — and to ask themselves whether the system will still be worth its cost in three years, not just in the first three months.',
      },
      {
        type: 'heading',
        content: 'When not building is the right answer',
      },
      {
        type: 'list',
        content: 'We recommend not building when:',
        items: [
          'An existing tool solves 90% of the problem for less than the cost of one sprint.',
          'The process the system would automate is still changing frequently.',
          'The team that will maintain the system does not yet exist.',
          'The expected users are fewer than 10 people and the volume is low.',
          'The ROI depends on assumptions that have not been validated.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'None of this means technology is not valuable. It means technology is most valuable when it is chosen deliberately, scoped tightly, and measured honestly. The businesses we have seen get the most out of their technology investments are not the ones that build the most — they are the ones that build the right things at the right time and maintain them well.',
      },
    ],
  },
]

export const INSIGHT_CATEGORIES = ['AI', 'Automation', 'Web Development', 'SaaS', 'Technology', 'Business']
