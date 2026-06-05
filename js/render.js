/**
 * KEYLINE ARCHETYPE — RENDERER
 * ─────────────────────────────
 * Reads SITE config and builds all page sections.
 * Each function returns an HTML string.
 * No framework needed — just vanilla JS DOM injection.
 */

const Render = (() => {

  // ── HELPERS ────────────────────────────────────────────────────────

  const arrowSVG = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  function eyebrowTitle(eyebrow, line1, accent, prefix = "") {
    return `
      <p class="section-eyebrow">${eyebrow}</p>
      <h2 class="section-title">${line1}<br/>${prefix} <em>${accent}</em></h2>
    `;
  }

  // ── THEME INJECTION ────────────────────────────────────────────────

  function injectTheme(theme) {
    const style = document.createElement("style");
    style.textContent = `
      @import url('${theme.fontsUrl}');
      :root {
        --cream:       ${theme.cream};
        --ink:         ${theme.ink};
        --ink-light:   ${theme.inkLight};
        --accent:      ${theme.accent};
        --accent-light:${theme.accentLight};
        --white:       ${theme.white};
        --border:      rgba(26,24,20,0.10);
        --font-serif:  '${theme.fontSerif}', Georgia, serif;
        --font-sans:   '${theme.fontSans}', sans-serif;
      }
      /* Nav bg uses cream with alpha — keep in sync */
      nav { background: ${theme.cream}d9; }
    `;
    document.head.appendChild(style);
  }

  // ── NAV ────────────────────────────────────────────────────────────

  function nav(brand, links) {
    const linkItems = links.map(l =>
      `<li><a href="${l.href}">${l.label}</a></li>`
    ).join("");
    return `
      <nav>
        <a href="#" class="nav-logo">${brand.name}<span>${brand.accentChar}</span></a>
        <ul class="nav-links">
          ${linkItems}
          <li><a href="index.html#contact" class="nav-cta">Get started</a></li>
        </ul>
      </nav>
    `;
  }

  // ── HERO ───────────────────────────────────────────────────────────

  function hero(h) {
    const stats = h.stats.map(s => `
      <div class="hero-stat-card">
        <div class="gold-line"></div>
        <div class="stat-label">${s.label}</div>
        <div class="stat-value">${s.value}<span>${s.unit}</span></div>
        <div class="stat-sub">${s.sub}</div>
      </div>
    `).join("");

    return `
      <section class="hero">
        <div class="hero-left">
          <p class="hero-eyebrow">${h.eyebrow}</p>
          <h1 class="hero-title">
            ${h.titleLine1}<br/>
            ${h.titleLine2} <em>${h.titleAccent}</em><br/>
            ${h.titleLine3}
          </h1>
          <p class="hero-sub">${h.subtitle}</p>
          <div class="hero-actions">
            <a href="${h.ctaPrimary.href}" class="btn-primary">${h.ctaPrimary.label}</a>
            <a href="${h.ctaSecondary.href}" class="btn-ghost">
              ${h.ctaSecondary.label} ${arrowSVG}
            </a>
          </div>
        </div>
        <div class="hero-right">
          <div class="hero-grid-pattern"></div>
          ${stats}
        </div>
      </section>
    `;
  }

  // ── MARQUEE ────────────────────────────────────────────────────────

  function marquee(items) {
    // Duplicate for seamless loop
    const all = [...items, ...items];
    const html = all.map(item =>
      `<div class="marquee-item">${item} <span class="marquee-dot"></span></div>`
    ).join("");
    return `
      <div class="marquee-wrap">
        <div class="marquee-track">${html}</div>
      </div>
    `;
  }

  // ── SERVICES ───────────────────────────────────────────────────────

  function services(s) {
    const items = s.items.map(item => {
      const includes = item.includes.map(i => `<li>${i}</li>`).join("");
      return `
        <div class="service-item">
          <div class="service-num">${item.num}</div>
          <h3 class="service-name">${item.name.join("<br/>")}</h3>
          <p class="service-desc">${item.desc}</p>
          <ul class="service-includes">${includes}</ul>
        </div>
      `;
    }).join("");

    return `
      <section class="services" id="services">
        <div class="services-inner">
          <div class="services-header fade-up">
            <div>
              ${eyebrowTitle(s.eyebrow, s.titleLine1, s.titleAccent, s.titlePrefix)}
            </div>
            <p class="section-body">${s.body}</p>
          </div>
          <div class="services-grid fade-up">${items}</div>
        </div>
      </section>
    `;
  }

  // ── HOW IT WORKS ───────────────────────────────────────────────────

  function process(p) {
    const steps = p.steps.map(s => `
      <div class="step">
        <div class="step-num">${s.num}</div>
        <h3 class="step-title">${s.title}</h3>
        <p class="step-desc">${s.desc}</p>
      </div>
    `).join("");

    return `
      <section class="how" id="how">
        <div class="how-inner">
          <div class="how-header fade-up">
            <div>
              ${eyebrowTitle(p.eyebrow, p.titleLine1, p.titleAccent, p.titlePrefix)}
            </div>
            <p class="section-body">${p.body}</p>
          </div>
          <div class="steps fade-up">${steps}</div>
        </div>
      </section>
    `;
  }

  // ── PRICING ────────────────────────────────────────────────────────

  function pricing(p) {
    const cards = p.plans.map(plan => {
      const features = plan.features.map(f => `<li>${f}</li>`).join("");
      const badge = plan.featured ? `<div class="featured-badge">${plan.featuredLabel}</div>` : "";
      const btnClass = plan.featured ? "btn-pricing-accent" : "btn-pricing-outline";
      const featuredClass = plan.featured ? " featured" : "";

      return `
        <div class="pricing-card${featuredClass}">
          ${badge}
          <div class="pricing-tier">${plan.tier}</div>
          <div class="pricing-price">${plan.price}</div>
          <div class="pricing-period">${plan.period}</div>
          <div class="pricing-divider"></div>
          <ul class="pricing-features">${features}</ul>
          <a href="index.html#contact" class="btn-pricing ${btnClass}">${plan.cta}</a>
        </div>
      `;
    }).join("");

    return `
      <section id="pricing">
        <div class="pricing fade-up">
          ${eyebrowTitle(p.eyebrow, p.titleLine1, p.titleAccent, p.titlePrefix)}
          <div class="pricing-grid">${cards}</div>
        </div>
      </section>
    `;
  }

  // ── TESTIMONIAL ────────────────────────────────────────────────────

  function testimonial(t) {
    return `
      <section class="testimonial">
        <div class="testimonial-inner fade-up">
          <p class="testimonial-quote">"${t.quote}"</p>
          <p class="testimonial-author"><strong>${t.author}</strong> — ${t.role}</p>
        </div>
      </section>
    `;
  }

  // ── CTA ────────────────────────────────────────────────────────────

  function cta(c, brand) {
    const email = brand.email;
    return `
      <section id="contact">
        <div class="cta-section fade-up">
          <p class="section-eyebrow">${c.eyebrow}</p>
          <h2 class="section-title">${c.titleLine1}<br/><em>${c.titleAccent}</em></h2>
          <p class="section-body">${c.body}</p>
          <div class="cta-actions">
            <a href="mailto:${email}" class="btn-primary">${c.ctaPrimary.label}</a>
            <a href="mailto:${email}" class="btn-ghost">
              ${email} ${arrowSVG}
            </a>
          </div>
        </div>
      </section>
    `;
  }

  // ── FOOTER ─────────────────────────────────────────────────────────

  function footer(brand, links) {
    const linkItems = links.map(l =>
      `<li><a href="${l.href}">${l.label}</a></li>`
    ).join("");
    return `
      <footer>
        <div class="footer-logo">${brand.name}<span>${brand.accentChar}</span></div>
        <p class="footer-copy">© ${brand.year} ${brand.name} Studio. All rights reserved.</p>
        <ul class="footer-links">${linkItems}</ul>
      </footer>
    `;
  }

  // ── SCROLL OBSERVER ────────────────────────────────────────────────

  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
  }

  // ── MOUNT ──────────────────────────────────────────────────────────
  // opts: { sections: [...keys], title: 'Page Title' }
  // If sections is omitted, all sections are rendered.

  function mount(config, opts) {
    const options = opts || {};

    injectTheme(config.theme);

    document.title = options.title
      ? `${config.brand.name} Studio — ${options.title}`
      : `${config.brand.name} Studio — ${config.brand.tagline}`;

    const builders = {
      nav:         () => nav(config.brand, config.nav),
      hero:        () => hero(config.hero),
      marquee:     () => marquee(config.marquee),
      services:    () => services(config.services),
      process:     () => process(config.process),
      pricing:     () => pricing(config.pricing),
      testimonial: () => testimonial(config.testimonial),
      cta:         () => cta(config.cta, config.brand),
      footer:      () => footer(config.brand, config.footer),
    };

    const keys = options.sections || Object.keys(builders);
    document.body.innerHTML = keys.map(k => builders[k]()).join("\n");

    requestAnimationFrame(initScrollAnimations);
  }

  return { mount };

})();
