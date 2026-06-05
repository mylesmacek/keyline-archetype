# Keyline Archetype
### Modular AI Content Agency Landing Page

A fully componentized, config-driven landing page template.
Rebrand or retheme by editing a single file — no HTML or CSS knowledge required for most changes.

---

## Project Structure

```
keyline-archetype/
├── index.html          ← Shell only. Loads files, boots page. Don't edit.
├── css/
│   └── styles.css      ← All styles. Edit for layout/design changes.
└── js/
    ├── config.js       ← ALL content & theme data. Edit to rebrand.
    └── render.js       ← Component builders. Edit to add/remove sections.
```

---

## How to Run Locally

Just open `index.html` in any browser — no build step, no server needed.

```bash
open index.html
# or drag into Chrome/Safari/Firefox
```

For local font loading you may want a simple server:
```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## How to Rebrand (Config Only)

Open `js/config.js` and change what you need:

### Change the business name
```js
brand: {
  name: "YourBrand",
  accentChar: ".",
  email: "hello@yourbrand.com",
  year: "2025",
}
```

### Change the color theme
```js
theme: {
  cream:    "#F7F4EF",   // Page background
  ink:      "#1A1814",   // Primary text
  accent:   "#B8965A",   // Gold highlight — change this to retheme
  ...
}
```

### Swap to a new niche (e.g. Med Spas)
1. Update `brand.tagline`
2. Update `hero.eyebrow`, `hero.subtitle`
3. Update `services.items` with new service names/descriptions
4. Update `marquee` items
5. Update `pricing.plans` features
6. Update `testimonial`

### Add a pricing plan
```js
pricing: {
  plans: [
    { tier: "Starter", price: "$500", ... },
    { tier: "Pro",     price: "$1200", featured: true, featuredLabel: "Best value", ... },
    { tier: "Elite",   price: "$2500", ... },
    // Add a 4th plan here — CSS will reflow automatically
  ]
}
```

### Add a process step
```js
process: {
  steps: [
    { num: "01", title: "...", desc: "..." },
    { num: "02", title: "...", desc: "..." },
    { num: "03", title: "...", desc: "..." },
    { num: "04", title: "...", desc: "..." },
    { num: "05", title: "New step", desc: "Your new step description." }, // ← add here
  ]
}
```
> Note: update the `.steps` grid in `css/styles.css` from `repeat(4, 1fr)` to `repeat(5, 1fr)`.

---

## How to Add a New Section

1. Add content data to `js/config.js` under a new key, e.g. `SITE.faq`
2. Write a renderer function in `js/render.js`, e.g. `function faq(data) { ... }`
3. Add it to the `mount()` array in `render.js` in the order you want it to appear

---

## Niche Swap Examples

| Niche            | Accent color | Key service changes                          |
|------------------|-------------|----------------------------------------------|
| Real Estate       | `#B8965A`   | Social, Email, Blog (current default)        |
| Med Spa / Wellness| `#7BA89A`   | Before/After Stories, Promo Emails, Reviews  |
| SaaS Startup      | `#5B7FD4`   | Case Studies, LinkedIn, Blog/SEO             |
| Law Firm          | `#2C3E50`   | Thought Leadership, Email, Practice Guides   |
| Fitness Coach     | `#C05C3A`   | Reels Content, Email, Program Guides         |

---

## Deployment

**Vercel (recommended)** — connected to GitHub; pushes to `main` deploy automatically.

```bash
vercel          # preview
vercel --prod   # production
```

See [docs/INTEGRATIONS.md](docs/INTEGRATIONS.md) for GitHub, Vercel, Claude, and Gemini setup.

**Carrd / Framer** — paste `index.html` contents, upload CSS/JS as assets.

**Netlify**
```bash
# Drag the entire keyline-archetype/ folder into netlify.com/drop
```

**Custom domain** — add in Vercel project Settings → Domains, or point DNS at your host.

---

## File Size

| File         | Size   |
|--------------|--------|
| index.html   | ~0.5kb |
| styles.css   | ~8kb   |
| config.js    | ~5kb   |
| render.js    | ~6kb   |
| **Total**    | **~20kb** (excl. fonts) |

Fonts load from Google CDN — zero local file weight.
