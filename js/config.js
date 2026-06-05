/**
 * KEYLINE ARCHETYPE — MASTER CONFIG
 * ─────────────────────────────────
 * Edit this file to rebrand the entire site.
 * No HTML or CSS changes needed for most updates.
 */

const SITE = {

  // ── BRAND ──────────────────────────────────────────────────────────
  brand: {
    name: "Baseline",         // Displayed in nav + footer (accent char added automatically)
    accentChar: ".",          // The styled accent after the name
    tagline: "Content Studio for Modern Professionals",
    email: "hello@baselinestudio.com",
    year: "2025",
  },

  // ── THEME ───────────────────────────────────────────────────────────
  // To retheme: change hex values here. CSS variables are injected at runtime.
  theme: {
    cream:      "#F7F4EF",
    ink:        "#1A1814",
    inkLight:   "#6B6760",
    accent:     "#B8965A",    // Gold — primary accent colour
    accentLight:"#E8D9BF",
    white:      "#FFFFFF",
    fontSerif:  "Cormorant Garamond",
    fontSans:   "DM Sans",
    // Google Fonts import URL (update if you change fonts)
    fontsUrl:   "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap",
  },

  // ── HERO ────────────────────────────────────────────────────────────
  hero: {
    eyebrow: "Expert Content for Growing Brands",
    titleLine1: "Content that",
    titleLine2: "drives",
    titleAccent: "results.",   // Rendered in italic accent color
    titleLine3: "Not tabs.",
    subtitle: "Baseline Studio delivers scroll-stopping social posts, newsletters, and blog content — refined by strategy and built for professionals who are too busy to write.",
    ctaPrimary:  { label: "View packages",  href: "pricing.html"  },
    ctaSecondary:{ label: "See what we do", href: "services.html" },
    stats: [
      { label: "Avg. time saved per client",       value: "12", unit: "hrs", sub: "per month on content creation" },
      { label: "Content pieces delivered monthly", value: "20", unit: "+",  sub: "posts, emails & blog articles" },
      { label: "First draft turnaround",           value: "48", unit: "h",  sub: "from brief to delivery"       },
    ],
  },

  // ── MARQUEE ─────────────────────────────────────────────────────────
  // Items are duplicated automatically for seamless loop
  marquee: [
    "Social Media Content",
    "Email Newsletters",
    "SEO Blog Posts",
    "Brand Storytelling",
    "Market Update Copy",
    "Lead Magnet Content",
  ],

  // ── SERVICES ────────────────────────────────────────────────────────
  services: {
    eyebrow: "What we deliver",
    titleLine1: "Three pillars of",
    titleAccent: "presence.",
    titlePrefix: "your",
    body: "Every piece of content we produce is written to attract, nurture, and convert — not just fill a feed. We handle the words so you can handle the relationships.",
    items: [
      {
        num: "01",
        name: ["Social", "Content"],
        desc: "Scroll-stopping captions, timely tips, and story hooks tailored to your voice and audience — published consistently, every week.",
        includes: [
          "8 Instagram & Facebook posts/mo",
          "Custom hooks & CTAs",
          "Canva-ready graphic briefs",
          "Content calendar included",
        ],
      },
      {
        num: "02",
        name: ["Email", "Newsletters"],
        desc: "Monthly updates, guides, and nurture sequences that keep you top of mind with your entire database.",
        includes: [
          "2 newsletters per month",
          "Subject line variations",
          "Personalized to your audience",
          "CRM-ready formatting",
        ],
      },
      {
        num: "03",
        name: ["Blog &", "SEO Copy"],
        desc: "Long-form articles and guides that rank on Google and position you as the expert in your field — driving organic leads 24/7.",
        includes: [
          "2 SEO blog posts per month",
          "Keyword research included",
          "Meta titles & descriptions",
          "Internal link strategy",
        ],
      },
    ],
  },

  // ── HOW IT WORKS ────────────────────────────────────────────────────
  process: {
    eyebrow: "Our process",
    titleLine1: "Done-for-you,",
    titleAccent: "finish.",
    titlePrefix: "start to",
    body: "We handle everything from strategy to delivery. Your only job is a 15-minute onboarding call and a quick approval before we publish.",
    steps: [
      { num: "01", title: "Onboarding brief",   desc: "A 15-minute call to capture your voice, niche, target audience, and goals. No lengthy forms." },
      { num: "02", title: "Expert draft",       desc: "Our writers and strategists produce your full month of content in 48 hours, built around your brand." },
      { num: "03", title: "Review & refine",    desc: "You review a clean content deck. We revise until it's perfect — unlimited rounds on all plans." },
      { num: "04", title: "Publish & grow",     desc: "Content goes live. We track performance and refine each month based on what resonates with your audience." },
    ],
  },

  // ── PRICING ─────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Transparent pricing",
    titleLine1: "Simple packages.",
    titleAccent: "surprises.",
    titlePrefix: "No",
    plans: [
      {
        tier: "Starter",
        price: "$800",
        period: "per month",
        featured: false,
        features: [
          "8 social media posts",
          "1 email newsletter",
          "Content calendar",
          "2 revision rounds",
          "48-hour turnaround",
        ],
        cta: "Get started",
      },
      {
        tier: "Growth",
        price: "$1,400",
        period: "per month",
        featured: true,
        featuredLabel: "Most popular",
        features: [
          "12 social media posts",
          "2 email newsletters",
          "1 SEO blog post",
          "Content calendar",
          "Unlimited revisions",
          "Monthly strategy call",
        ],
        cta: "Get started",
      },
      {
        tier: "Authority",
        price: "$2,200",
        period: "per month",
        featured: false,
        features: [
          "20 social media posts",
          "2 email newsletters",
          "2 SEO blog posts",
          "1 lead magnet/quarter",
          "Unlimited revisions",
          "Bi-weekly strategy calls",
          "Performance reporting",
        ],
        cta: "Get started",
      },
    ],
  },

  // ── TESTIMONIAL ─────────────────────────────────────────────────────
  testimonial: {
    quote: "I used to spend every Sunday writing posts and newsletters. Now I spend that time with clients. My pipeline has never been fuller.",
    author: "Sarah K.",
    role: "Independent Professional, Miami",
  },

  // ── CTA / CONTACT ───────────────────────────────────────────────────
  cta: {
    eyebrow: "Ready to start?",
    titleLine1: "Let's build your",
    titleAccent: "content engine.",
    body: "Book a free 20-minute call. We'll audit your current content, show you exactly what we'd create for your market, and send you a free sample post — no strings attached.",
    ctaPrimary:  { label: "Book a free call" },
    ctaSecondary:{ label: "" }, // auto-filled from brand.email
  },

  // ── NAV ─────────────────────────────────────────────────────────────
  nav: [
    { label: "Services", href: "services.html" },
    { label: "Process",  href: "process.html"  },
    { label: "Pricing",  href: "pricing.html"  },
  ],

  // ── FOOTER ──────────────────────────────────────────────────────────
  footer: [
    { label: "Services", href: "services.html"     },
    { label: "Pricing",  href: "pricing.html"      },
    { label: "Contact",  href: "contact.html" },
  ],

};
