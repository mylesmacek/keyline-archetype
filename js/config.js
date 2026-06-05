/**
 * BASELINE ARCHETYPE — MASTER CONFIG
 * ────────────────────────────────────
 * Edit this file to rebrand the entire site.
 * No HTML or CSS changes needed for most updates.
 */

const SITE = {

  // ── BRAND ──────────────────────────────────────────────────────────
  brand: {
    name: "Baseline",         // Displayed in nav + footer (accent char added automatically)
    accentChar: ".",          // The styled accent after the name
    tagline: "Content Studio for Modern Brands",
    email: "hello@baselinestudio.com",
    year: "2025",
  },

  // ── THEME ───────────────────────────────────────────────────────────
  theme: {
    cream:      "#F7F4EF",
    ink:        "#1A1814",
    inkLight:   "#6B6760",
    accent:     "#B8965A",
    accentLight:"#E8D9BF",
    white:      "#FFFFFF",
    fontSerif:  "Cormorant Garamond",
    fontSans:   "DM Sans",
    fontsUrl:   "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap",
  },

  // ── HERO ────────────────────────────────────────────────────────────
  hero: {
    eyebrow: "Done-for-you content for growing brands",
    titleLine1: "Content that",
    titleLine2: "builds brands",
    titleAccent: "worth following.",   // Rendered in italic accent color
    titleLine3: "",
    subtitle: "Baseline Studio crafts scroll-stopping social content, campaign copy, and brand narratives — built to grow your audience, deepen loyalty, and make your brand impossible to ignore.",
    ctaPrimary:  { label: "View packages",  href: "pricing.html"  },
    ctaSecondary:{ label: "See what we do", href: "services.html" },
    stats: [
      { label: "Avg. engagement lift",              value: "3",  unit: "×", sub: "across brand social channels"      },
      { label: "Content pieces delivered monthly",  value: "20", unit: "+", sub: "posts, emails & campaign copy"     },
      { label: "First draft turnaround",            value: "48", unit: "h", sub: "from brief to delivery"            },
    ],
  },

  // ── MARQUEE ─────────────────────────────────────────────────────────
  marquee: [
    "Brand Storytelling",
    "Social Content",
    "Email Campaigns",
    "Content Strategy",
    "SEO Copywriting",
    "Campaign Creative",
  ],

  // ── SERVICES ────────────────────────────────────────────────────────
  services: {
    eyebrow: "What we deliver",
    titleLine1: "Three pillars of",
    titleAccent: "presence.",
    titlePrefix: "brand",
    body: "Every piece of content we produce is crafted to attract your ideal audience, deepen brand loyalty, and convert — not just fill a feed.",
    items: [
      {
        num: "01",
        name: ["Social &", "Content"],
        desc: "Consistent, on-brand content that grows your following, drives engagement, and keeps your brand top of feed — week after week.",
        includes: [
          "8–12 posts per month",
          "Custom brand voice & tone",
          "Canva-ready creative briefs",
          "Content calendar included",
        ],
      },
      {
        num: "02",
        name: ["Email &", "Campaigns"],
        desc: "Campaign emails, product launches, and nurture sequences crafted to convert subscribers into loyal customers.",
        includes: [
          "2–4 emails per month",
          "Subject line variations",
          "Segmentation-ready copy",
          "Performance-focused CTAs",
        ],
      },
      {
        num: "03",
        name: ["Copy &", "Strategy"],
        desc: "Long-form brand content, SEO articles, and strategic messaging that positions your brand as the authority in your space.",
        includes: [
          "2 long-form pieces per month",
          "Brand messaging framework",
          "SEO keyword strategy",
          "Meta copy & descriptions",
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
    body: "We handle everything from strategy to delivery. Your only job is a 20-minute onboarding call and a quick approval before anything goes live.",
    steps: [
      { num: "01", title: "Brand deep-dive",  desc: "A 20-minute call to capture your brand voice, audience, positioning, and goals. We study your world before we write a word." },
      { num: "02", title: "Expert draft",     desc: "Our writers and strategists produce your full month of content in 48 hours, built around your brand's unique voice and tone." },
      { num: "03", title: "Review & refine",  desc: "You review a clean content deck. We revise until it's right — unlimited rounds on all plans, no extra charges." },
      { num: "04", title: "Publish & grow",   desc: "Content goes live. We track what resonates and refine your strategy every month based on real performance data." },
    ],
  },

  // ── PRICING ─────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Transparent pricing",
    titleLine1: "Engagements built",
    titleAccent: "your brand.",
    titlePrefix: "around",
    plans: [
      {
        tier: "Brand Sprint",
        price: "$4,500",
        period: "one-time project",
        featured: false,
        features: [
          "Brand voice & tone guide",
          "4-week content calendar",
          "12 social media posts",
          "2 email campaigns",
          "1 long-form brand article",
          "2 strategy sessions",
        ],
        cta: "Start a sprint",
      },
      {
        tier: "Studio Retainer",
        price: "$6,500",
        period: "per month",
        featured: true,
        featuredLabel: "Most popular",
        features: [
          "16 social media posts",
          "3 email campaigns",
          "2 long-form brand articles",
          "Content calendar",
          "Unlimited revisions",
          "Monthly strategy call",
          "Performance snapshot",
        ],
        cta: "Book a call",
      },
      {
        tier: "Brand Partner",
        price: "$11,000",
        period: "per month",
        featured: false,
        features: [
          "24 social media posts",
          "5 email campaigns",
          "4 long-form brand articles",
          "Quarterly brand messaging audit",
          "Dedicated content strategist",
          "Weekly strategy sessions",
          "Full performance reporting",
        ],
        cta: "Let's talk",
      },
    ],
  },

  // ── TESTIMONIAL ─────────────────────────────────────────────────────
  testimonial: {
    quote: "We went from posting once a month to having a full content calendar. Our community grew 40% and our emails actually get replies now.",
    author: "Marcus R.",
    role: "Founder, DTC Lifestyle Brand",
  },

  // ── CTA / CONTACT ───────────────────────────────────────────────────
  cta: {
    eyebrow: "Ready to start?",
    titleLine1: "Let's build your",
    titleAccent: "brand voice.",
    body: "Book a free 20-minute call. We'll review your current content, map out what we'd create for your brand, and send you a free sample piece — no strings attached.",
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
    { label: "Services", href: "services.html" },
    { label: "Pricing",  href: "pricing.html"  },
    { label: "Contact",  href: "contact.html"  },
  ],

};
