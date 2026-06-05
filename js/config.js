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
    titleLine1: "Four pillars of",
    titleAccent: "presence.",
    titlePrefix: "brand",
    body: "We handle the content and the platform it lives on — from the words on your website to the posts in your feed. Everything is built around your brand and designed to convert.",
    items: [
      {
        num: "01",
        name: ["Social Media", "Content"],
        desc: "We write, plan, and deliver a full month of social content for your brand — captions, hooks, and a content calendar — so you never have to think about what to post.",
        includes: [
          "8–12 posts per month",
          "Captions written in your brand voice",
          "Monthly content calendar",
          "Creative direction briefs for visuals",
        ],
      },
      {
        num: "02",
        name: ["Email", "Marketing"],
        desc: "We write your email campaigns end to end — from the subject line to the sign-off. Whether it's a product launch, a newsletter, or an automated sequence, we make every send count.",
        includes: [
          "2–4 campaigns per month",
          "Multiple subject line options",
          "Automated welcome & nurture sequences",
          "Clear, action-driving CTAs",
        ],
      },
      {
        num: "03",
        name: ["Web Design", "& Build"],
        desc: "We design and build clean, fast websites that look like your brand and turn visitors into customers — from single landing pages to full multi-page sites.",
        includes: [
          "Custom design & development",
          "Mobile-responsive on all devices",
          "Built for search engine visibility",
          "CMS setup for easy self-editing",
        ],
      },
      {
        num: "04",
        name: ["Brand Copy", "& Strategy"],
        desc: "We write the words behind your brand and build the strategic framework that ties everything together — so your message is clear, consistent, and compelling everywhere it appears.",
        includes: [
          "Website & landing page copy",
          "Brand voice & tone guide",
          "Long-form SEO articles",
          "Page titles & meta descriptions",
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
        price: "$4,000",
        period: "one-time project",
        featured: false,
        features: [
          "Brand voice & tone guide",
          "1 custom landing page build",
          "4-week content calendar",
          "12 social media posts",
          "2 strategy sessions",
        ],
        cta: "Start a sprint",
      },
      {
        tier: "Studio Retainer",
        price: "$5,800",
        period: "per month",
        featured: true,
        featuredLabel: "Most popular",
        features: [
          "16 social media posts",
          "1 email campaign",
          "2 long-form brand articles",
          "Website content updates",
          "Content calendar",
          "Unlimited revisions",
          "Monthly strategy call",
        ],
        cta: "Book a call",
      },
      {
        tier: "Brand Partner",
        price: "$9,900",
        period: "per month",
        featured: false,
        features: [
          "24 social media posts",
          "3 email campaigns",
          "4 long-form brand articles",
          "Full website design & build included",
          "Quarterly brand messaging audit",
          "Dedicated content strategist",
          "Weekly strategy sessions",
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
