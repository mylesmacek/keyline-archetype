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
    cream:      "#EDE9E1",
    ink:        "#100E0B",
    inkLight:   "#615B53",
    accent:     "#BF3B2A",
    accentLight:"#F0CEC9",
    white:      "#FAF9F6",
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
    titleLine1: "Four pillars of",
    titleAccent: "presence.",
    titlePrefix: "brand",
    body: "We handle the content and the platform it lives on — from the words on your website to the posts in your feed. Everything is built around your brand and designed to convert.",
    items: [
      {
        num: "01",
        name: ["Social Media", "Content"],
        desc: "We manage your brand's social presence from start to finish. Every caption is written in your voice, every post is planned around what your audience actually responds to, and everything goes out on a consistent schedule — so your brand stays visible without you having to think about it.",
      },
      {
        num: "02",
        name: ["Email", "Marketing"],
        desc: "We write your emails from subject line to sign-off. Product launches, newsletters, automated welcome sequences — each one is built around your brand's tone and written to get your audience to open, read, and act.",
      },
      {
        num: "03",
        name: ["Web Design", "& Build"],
        desc: "We design and build websites that look like your brand and work for your business. Clean layouts, clear copy, and fast performance — whether you need a single landing page or a full site, we handle the design, the build, and the words.",
      },
      {
        num: "04",
        name: ["Brand Copy", "& Strategy"],
        desc: "We find the right words for your brand and build a framework that keeps everything consistent. From your website and long-form articles to the snippets people see on Google, your brand sounds like itself — everywhere it shows up.",
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
      { num: "03", title: "Review & refine",  desc: "You review a clean content deck and tell us what lands and what doesn't. We refine until every piece feels right." },
      { num: "04", title: "Publish & grow",   desc: "Content goes live. We track what resonates and refine your strategy every month based on real performance data." },
    ],
  },

  // ── PRICING ─────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Transparent pricing",
    titleLine1: "Engagements built",
    titleAccent: "your brand.",
    titlePrefix: "around",
    body: "Simple, transparent packages built around what your brand actually needs. No lock-in, no hidden fees — just consistent content that compounds.",
    plans: [
      {
        tier: "Brand Sprint",
        price: "$3,500",
        period: "one-time project",
        featured: false,
        features: [
          "Brand voice & tone guide",
          "4-week content calendar",
          "12 social media posts",
          "2 strategy sessions",
        ],
        cta: "Start a sprint",
      },
      {
        tier: "Studio Retainer",
        price: "$4,500",
        period: "per month",
        featured: true,
        featuredLabel: "Most popular",
        features: [
          "16 social media posts",
          "2 email campaigns",
          "2 long-form brand articles",
          "Content calendar",
          "Monthly strategy call",
        ],
        cta: "Book a call",
      },
      {
        tier: "Brand Partner",
        price: "$7,500",
        period: "per month",
        featured: false,
        features: [
          "24 social media posts",
          "3 email campaigns",
          "4 long-form brand articles",
          "Website build or refresh & ongoing copy upkeep",
          "Monthly performance reporting",
          "Dedicated content strategist",
          "Weekly strategy sessions",
        ],
        cta: "Let's talk",
      },
    ],
    addons: [
      {
        name: "Social Media Content",
        price: "$2,200",
        period: "per month",
        desc: "Consistent, on-brand content for your social channels — written, planned, and ready to post.",
        includes: [
          "12 posts per month",
          "Post copy & captions in your brand voice",
          "Monthly content calendar",
          "Hashtag & platform strategy",
        ],
      },
      {
        name: "Email Marketing",
        price: "$1,400",
        period: "per month",
        desc: "Two campaigns a month crafted to get your audience to open, read, and act.",
        includes: [
          "2 campaigns per month",
          "Subject line & full body copy",
          "Audience segmentation strategy",
          "Performance summary",
        ],
      },
      {
        name: "Web Design & Build",
        price: "$4,800",
        period: "one-time",
        desc: "A clean, fast website that looks like your brand and says exactly what it needs to.",
        includes: [
          "Up to 5 pages",
          "Brand-aligned design",
          "Copywriting included",
          "SEO-ready page structure",
        ],
      },
    ],
  },

  // ── TESTIMONIALS ────────────────────────────────────────────────────
  testimonials: [
    {
      quote: "We went from posting once a month to having a full content calendar. Our community grew 40% and our emails actually get replies now.",
      author: "Marcus R.",
      role: "Founder, DTC Lifestyle Brand",
    },
    {
      quote: "Baseline took the brand voice we'd been trying to nail for two years and made it feel effortless. Every piece of content sounds exactly like us.",
      author: "Priya S.",
      role: "Co-founder, Wellness Brand",
    },
    {
      quote: "Our open rates went from 18% to 41% in three months. The emails don't feel like marketing — they feel like something worth reading.",
      author: "Daniel M.",
      role: "CEO, B2B SaaS",
    },
    {
      quote: "I was spending 10 hours a week on content that wasn't converting. Now I spend zero and the results are better than anything I was producing myself.",
      author: "Lena K.",
      role: "Creative Director, Fashion Label",
    },
    {
      quote: "The onboarding call alone was worth it. They understood our audience better after 20 minutes than most agencies do after a month.",
      author: "James O.",
      role: "Head of Marketing, Consumer Fintech",
    },
  ],

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
