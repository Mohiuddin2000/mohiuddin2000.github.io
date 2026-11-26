/* ==========================================================================
   Portfolio — renders everything from js/config.js
   ========================================================================== */
(function () {
  "use strict";
  const C = window.PORTFOLIO_CONFIG || {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const root = document.documentElement;

  /* ---------- safe storage (may throw in some contexts) ---------- */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} },
  };

  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Icons (inline SVG, no external dependency) ---------- */
  const P = {
    code: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
    server: '<rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01M6 17h.01"/>',
    layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
    test: '<path d="M9 2v6L4 18a2 2 0 0 0 1.8 3h12.4a2 2 0 0 0 1.8-3L15 8V2M8 2h8"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>',
    call: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    down: '<path d="M12 5v14M19 12l-7 7-7-7"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
    upwork: '<path d="M3 5v6a4 4 0 0 0 8 0V5M11 11c1 4 3 6 6 6a3.5 3.5 0 0 0 0-7c-3 0-4 3-5 7l-1.5 5"/>',
    twitter: '<path d="M4 4l16 16M20 4L4 20"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    sparkle: '<path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/>',
    award: '<circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>',
    zoom: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>',
    send: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
    cap: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/><path d="M20 17v5H6.5A2.5 2.5 0 0 1 4 19.5"/>',
  };
  const icon = (n) => `<svg viewBox="0 0 24 24" aria-hidden="true">${P[n] || P.code}</svg>`;

  /* ---------- Fonts ---------- */
  function applyFont() {
    const f = (C.theme && C.theme.font) || "Inter";
    if (f === "system") { root.style.setProperty("--font", 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'); return; }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(f).replace(/%20/g, "+")}:wght@400;500;600;700&display=swap`;
    document.head.appendChild(link);
    root.style.setProperty("--font", `"${f}", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`);
  }

  /* ---------- Theme (day / night / auto) ---------- */
  const mq = window.matchMedia("(prefers-color-scheme: light)");
  const getMode = () => store.get("pf-theme") || (C.theme && C.theme.defaultMode) || "auto";
  const resolve = (m) => (m === "auto" ? (mq.matches ? "light" : "dark") : m);
  function applyTheme(mode) {
    const t = resolve(mode);
    root.setAttribute("data-theme", t);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = t === "dark" ? "#0a0a0a" : "#ffffff";
    $$("#themeSeg button").forEach((b) => b.classList.toggle("on", b.dataset.mode === mode));
  }
  function setMode(mode) { store.set("pf-theme", mode); applyTheme(mode); }
  mq.addEventListener && mq.addEventListener("change", () => { if (getMode() === "auto") applyTheme("auto"); });

  function applyAccent(c) {
    root.style.setProperty("--accent", c);
    $$(".swatch").forEach((s) => s.classList.toggle("on", s.dataset.c === c));
  }
  const getAccent = () => store.get("pf-accent") || (C.theme && C.theme.accentColor) || "#6366f1";

  const animOn = () => { const s = store.get("pf-anim"); return s === null ? C.theme?.animations !== false : s === "1"; };

  /* ---------- Section renderers ---------- */
  const head = (t, s) => `<div class="section__head reveal"><h2 class="section__title">${esc(t)}</h2>${s ? `<p class="section__sub">${esc(s)}</p>` : ""}</div>`;
  const bullets = (arr = []) => (arr.length ? `<ul class="bullets">${arr.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : "");
  const tags = (arr = []) => `<div class="tags">${arr.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
  const socialLinks = () =>
    (C.social || []).filter((s) => s.url).map((s) => {
      const ext = !s.url.startsWith("mailto:");
      return `<a href="${esc(s.url)}" aria-label="${esc(s.type)}" ${ext ? 'target="_blank" rel="noopener"' : ""}>${icon(s.type === "email" ? "mail" : s.type)}</a>`;
    }).join("");
  const initials = (n = "") => n.split(/\s+/).filter(Boolean).map((w) => w[0]).slice(0, 2).join("").toUpperCase();

  const R = {
    hero() {
      const h = C.hero || {};
      const parts = (h.name || "").split(" ");
      const last = parts.length > 1 ? parts.pop() : "";
      const nameHtml = `${esc(parts.join(" "))}${last ? ` <em>${esc(last)}</em>` : ""}`;
      return `
      <section class="hero" id="hero">
        <div class="container hero__grid">
          <div class="hero__text reveal">
            ${h.showBadge !== false && h.badge ? `<span class="badge">${icon("sparkle")} ${esc(h.badge)}</span>` : ""}
            <h1 class="hero__title">${esc(h.greeting || "")}<span class="name">${nameHtml}</span></h1>
            <p class="hero__tagline">${h.tagline || ""}</p>
            ${h.intro ? `<p class="hero__intro">${esc(h.intro)}</p>` : ""}
            ${(h.interests || []).length ? `<div class="interests"><span>Enthusiast in</span>${h.interests.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div>` : ""}
            <div class="hero__cta">
              ${h.resumeUrl ? `<a class="btn btn--primary" href="${esc(h.resumeUrl)}" download="${esc(h.resumeFileName || "")}">${icon("download")} Download Resume</a>` : ""}
              <a class="btn btn--ghost" href="#projects">View My Work ${icon("arrow")}</a>
            </div>
            <div class="social">${socialLinks()}</div>
            ${(h.stats || []).length ? `<div class="stats">${h.stats.map((s) => `<div class="stat"><div class="stat__value" data-count="${esc(s.value)}">${esc(s.value)}</div><div class="stat__label">${esc(s.label)}</div></div>`).join("")}</div>` : ""}
          </div>
          <div class="hero__photo reveal">
            <div class="ring"></div>
            <img src="${esc(h.photo || "")}" alt="${esc(h.name || "Profile photo")}" width="380" height="380"
                 onerror="this.outerHTML='<div class=&quot;avatar-fallback&quot;>${esc(initials(h.name))}</div>'" />
            ${h.photoBadge ? `<div class="hire"><span class="dot"></span>${esc(h.photoBadge)}</div>` : ""}
          </div>
        </div>
        <a class="scroll-hint" href="#${nextSectionId("hero")}">Scroll to explore ${icon("down")}</a>
      </section>`;
    },

    skills() {
      const s = C.skills || {};
      return `
      <section class="section" id="skills">
        <div class="container">
          ${head(s.title, s.subtitle)}
          ${(s.interests || []).length ? `<div class="passion reveal">
            ${s.interestsLabel ? `<div class="passion__label">${esc(s.interestsLabel)}</div>` : ""}
            <div class="passion__items">
              ${s.interests.map((x) => `<div class="passion__item"><span class="skill__icon">${icon(x.icon)}</span><div><strong>${esc(x.name)}</strong><p>${esc(x.text)}</p></div></div>`).join("")}
            </div>
          </div>` : ""}
          <div class="grid grid--3">
            ${(s.categories || []).map((c) => `
              <div class="card reveal">
                <div class="skill__head"><span class="skill__icon">${icon(c.icon)}</span><h3 class="skill__name">${esc(c.name)}</h3></div>
                ${tags(c.items)}
              </div>`).join("")}
          </div>
        </div>
      </section>`;
    },

    experience() {
      const e = C.experience || {};
      return `
      <section class="section" id="experience">
        <div class="container">
          ${head(e.title, e.subtitle)}
          <div class="timeline">
            ${(e.items || []).map((j) => `
              <article class="card job reveal">
                <div class="job__top">
                  <div>
                    <h3 class="job__role">${icon("briefcase")} ${esc(j.role)}</h3>
                    ${e.showCompanyNames !== false && j.company ? `<div class="job__company">${esc(j.company)}</div>` : ""}
                  </div>
                  <div class="job__meta">
                    ${j.period ? `<span>${icon("calendar")} ${esc(j.period)}</span>` : ""}
                    ${j.location ? `<span>${icon("pin")} ${esc(j.location)}</span>` : ""}
                  </div>
                </div>
                ${j.description ? `<p class="job__desc">${esc(j.description)}</p>` : ""}
                ${bullets(j.highlights)}
                ${tags(j.tags)}
              </article>`).join("")}
          </div>
        </div>
      </section>`;
    },

    education() {
      const ed = C.education || {};
      return `
      <section class="section" id="education">
        <div class="container">
          ${head(ed.title, ed.subtitle)}
          <div class="edu-list">
            ${(ed.items || []).map((d) => `
              <article class="card edu reveal">
                <span class="edu__icon">${icon("cap")}</span>
                <div class="edu__main">
                  <h3 class="edu__degree">${esc(d.degree)}</h3>
                  <div class="edu__school">${esc(d.school)}</div>
                  <div class="edu__meta">
                    ${d.period ? `<span>${icon("calendar")} ${esc(d.period)}</span>` : ""}
                    ${d.location ? `<span>${icon("pin")} ${esc(d.location)}</span>` : ""}
                  </div>
                  ${bullets(d.highlights)}
                </div>
                ${d.grade ? `<div class="edu__grade"><div class="edu__gpa">${esc(d.grade)}</div><div class="edu__gpa-label">${esc(d.gradeLabel || "")}</div></div>` : ""}
              </article>`).join("")}
          </div>
        </div>
      </section>`;
    },

    projects() {
      const p = C.projects || {};
      return `
      <section class="section" id="projects">
        <div class="container">
          ${head(p.title, p.subtitle)}
          <div class="grid grid--flex">
            ${(p.items || []).map((x) => `
              <article class="card project reveal">
                <div class="project__thumb">${x.image ? `<img src="${esc(x.image)}" alt="${esc(x.title)}" loading="lazy" />` : icon(x.icon || "folder")}${x.label ? `<span class="project__label">${esc(x.label)}</span>` : ""}</div>
                <h3 class="project__title">${esc(x.title)}</h3>
                <p class="project__desc">${esc(x.description)}</p>
                ${tags(x.tags)}
                ${x.code || x.demo ? `<div class="project__links">
                  ${x.code ? `<a class="btn btn--ghost btn--sm" href="${esc(x.code)}" target="_blank" rel="noopener">${icon("github")} Code</a>` : ""}
                  ${x.demo ? `<a class="btn btn--primary btn--sm" href="${esc(x.demo)}" target="_blank" rel="noopener">${icon("external")} Demo</a>` : ""}
                </div>` : ""}
              </article>`).join("")}
          </div>
        </div>
      </section>`;
    },

    certifications() {
      const c = C.certifications || {};
      const all = (c.items || []).map((x, i) => ({ ...x, i }));
      const withImg = all.filter((x) => x.image), courses = all.filter((x) => !x.image);
      return `
      <section class="section" id="certifications">
        <div class="container">
          ${head(c.title, c.subtitle)}
          ${withImg.length ? `<div class="grid grid--2 certs">
            ${withImg.map((x) => `
              <article class="card cert reveal">
                <button class="cert__img" data-cert="${x.i}" aria-label="View ${esc(x.title)} full size">
                  <img src="${esc(x.image)}" alt="${esc(x.title)} certificate"
                       onerror="this.outerHTML='<div class=&quot;img-missing&quot;>Add image: ${esc(x.image)}</div>'" />
                  <span class="zoom">${icon("zoom")} View</span>
                </button>
                <div class="cert__body">
                  <h3 class="cert__title">${icon("award")} ${esc(x.title)}</h3>
                  <p class="cert__meta">${esc(x.issuer)}${x.date ? ` · ${esc(x.date)}` : ""}</p>
                  ${x.url ? `<a class="btn btn--ghost btn--sm cert__link" href="${esc(x.url)}" target="_blank" rel="noopener">${icon("external")} Verify credential</a>` : ""}
                </div>
              </article>`).join("")}
          </div>` : ""}
          ${courses.length ? `<div class="grid grid--2 courses">
            ${courses.map((x) => `
              <div class="card course reveal">
                <span class="skill__icon">${icon("book")}</span>
                <div>
                  <h3 class="course__title">${esc(x.title)}</h3>
                  <p class="cert__meta">${esc(x.issuer)}${x.date ? ` · ${esc(x.date)}` : ""}</p>
                  ${x.url ? `<a class="course__link" href="${esc(x.url)}" target="_blank" rel="noopener">View certificate ${icon("external")}</a>` : ""}
                </div>
              </div>`).join("")}
          </div>` : ""}
        </div>
      </section>`;
    },

    achievements() {
      const a = C.achievements || {};
      const profiles = (a.profiles || []).filter((x) => x.url);
      return `
      <section class="section" id="achievements">
        <div class="container">
          ${head(a.title, a.subtitle)}
          <div class="ach">
            ${(a.highlights || []).map((x) => `
              <div class="card ach__stat reveal">
                <span class="skill__icon">${icon(x.icon)}</span>
                <div class="ach__value">${esc(x.value)}</div>
                <div class="ach__label">${esc(x.label)}</div>
                ${x.note ? `<div class="ach__note">${esc(x.note)}</div>` : ""}
                ${x.tags ? tags(x.tags) : ""}
              </div>`).join("")}
            ${(a.contests || []).length ? `
              <div class="card ach__contests reveal">
                <h3 class="ach__title">${icon("award")} ${esc(a.contestsTitle || "Contest rankings")}</h3>
                <ol class="ranks">
                  ${a.contests.map((c) => `<li><span class="rank">${esc(c.rank)}</span><div><strong>${esc(c.name)}</strong>${c.note ? `<small>${esc(c.note)}</small>` : ""}</div></li>`).join("")}
                </ol>
                ${profiles.length ? `<div class="ach__links">${profiles.map((x) => `<a class="btn btn--ghost btn--sm" href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.name)} ${icon("external")}</a>`).join("")}</div>` : ""}
              </div>` : ""}
          </div>
        </div>
      </section>`;
    },

    contact() {
      const c = C.contact || {};
      const info = [
        c.email && { i: "mail", l: "Email", v: `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>` },
        c.phone && { i: "call", l: "Phone", v: `<a href="tel:${esc(c.phone.replace(/[^\d+]/g, ""))}">${esc(c.phone)}</a>` },
        c.location && { i: "pin", l: "Location", v: esc(c.location) },
      ].filter(Boolean);
      return `
      <section class="section" id="contact">
        <div class="container">
          ${head(c.title, c.subtitle)}
          <div class="contact__grid">
            <div class="contact__info">
              ${info.map((x) => `<div class="card info reveal"><span class="skill__icon">${icon(x.i)}</span><div><div class="info__label">${x.l}</div><div class="info__value">${x.v}</div></div></div>`).join("")}
            </div>
            <form class="card form reveal" id="contactForm" novalidate>
              <div class="form__body" id="formBody">
                <div class="form__head">
                  <h3>Send a Message</h3>
                  ${c.replyTime ? `<p class="form__hint">${esc(c.replyTime)}</p>` : ""}
                </div>
                <input type="checkbox" name="botcheck" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true" />
                <div class="form__row">
                  <div class="field">
                    <label for="f-name">Name <span class="req" aria-hidden="true">*</span></label>
                    <input id="f-name" name="name" autocomplete="name" maxlength="100" aria-describedby="err-name" />
                    <small class="field__err" id="err-name"></small>
                  </div>
                  <div class="field">
                    <label for="f-email">Email <span class="req" aria-hidden="true">*</span></label>
                    <input id="f-email" name="email" type="email" autocomplete="email" maxlength="150" aria-describedby="err-email" />
                    <small class="field__err" id="err-email"></small>
                  </div>
                </div>
                <div class="field">
                  <label for="f-subject">Subject</label>
                  <input id="f-subject" name="subject" maxlength="150" placeholder="e.g. Spring Boot + Angular project" />
                </div>
                <div class="field">
                  <label for="f-msg">Message <span class="req" aria-hidden="true">*</span></label>
                  <textarea id="f-msg" name="message" maxlength="${+c.messageMaxLength || 2000}" aria-describedby="err-message msg-count" placeholder="Tell me about your project, timeline and budget"></textarea>
                  <div class="field__foot"><small class="field__err" id="err-message"></small><small class="field__count" id="msg-count">0 / ${+c.messageMaxLength || 2000}</small></div>
                </div>
                ${c.web3formsKey && c.hcaptcha ? `<div class="h-captcha" data-captcha="true" data-theme="${root.getAttribute("data-theme") === "light" ? "light" : "dark"}"></div>` : ""}
                <button class="btn btn--primary form__submit" type="submit"><span class="spinner" aria-hidden="true"></span><span class="form__submit-label">${icon("send")} Send Message</span></button>
                <div class="form__status" id="formStatus" role="status" aria-live="polite"></div>
              </div>
              <div class="form__done" id="formDone" hidden tabindex="-1">
                <span class="form__done-icon">${icon("check")}</span>
                <h3>Message sent!</h3>
                <p id="formDoneText"></p>
                <button type="button" class="btn btn--ghost btn--sm" id="formAgain">Send another message</button>
              </div>
            </form>
          </div>
        </div>
      </section>`;
    },
  };

  const enabled = () => (C.sections || []).filter((s) => s.enabled && R[s.id]);
  function nextSectionId(id) {
    const list = enabled(); const i = list.findIndex((s) => s.id === id);
    return (list[i + 1] || list[0] || { id: "hero" }).id;
  }
  const LABELS = { hero: "Home", skills: "Skills", experience: "Experience", education: "Education", projects: "Projects", certifications: "Certifications", achievements: "Achievements", contact: "Contact" };

  /* ---------- Render page ---------- */
  function render() {
    const site = C.site || {};
    document.title = site.title || "Portfolio";
    const setMeta = (sel, v) => { const m = $(sel); if (m && v) m.content = v; };
    setMeta('meta[name="description"]', site.description);
    setMeta('meta[property="og:title"]', site.title);
    setMeta('meta[property="og:description"]', site.description);
    setMeta('meta[property="og:image"]', site.shareImage);

    $("#navLogo").textContent = site.logoText || (C.hero && C.hero.name) || "";
    $("#navLinks").innerHTML = enabled().map((s) => `<a href="#${s.id}" data-id="${s.id}">${LABELS[s.id]}</a>`).join("");
    $("#main").innerHTML = enabled().map((s) => R[s.id]()).join("");
    // alternate section backgrounds automatically, whatever the order
    $$("#main > section.section").forEach((el, i) => el.classList.toggle("section--alt", i % 2 === 0));
    $("#footer").innerHTML = `<div class="container footer__inner">
      <span>© ${new Date().getFullYear()} ${esc((C.hero && C.hero.name) || "")}. ${esc((C.footer && C.footer.text) || "")}</span>
      <div class="social">${socialLinks()}</div></div>`;

    if (C.theme && C.theme.radius != null) root.style.setProperty("--radius", C.theme.radius + "px");
  }

  /* ---------- Interactions ---------- */
  function initNav() {
    const nav = $("#nav"), burger = $("#burger"), links = $("#navLinks");
    const close = () => { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    window.addEventListener("resize", () => { if (innerWidth > 1100) close(); });

    const toTop = $("#toTop");
    const onScroll = () => {
      nav.classList.toggle("scrolled", scrollY > 10);
      toTop.classList.toggle("show", scrollY > 600);
    };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
    toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

    // Active link highlighting
    const map = {}; $$("#navLinks a").forEach((a) => (map[a.dataset.id] = a));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          Object.values(map).forEach((a) => a.classList.remove("active"));
          map[en.target.id] && map[en.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("#main > section").forEach((s) => io.observe(s));
  }

  function initReveal() {
    document.body.classList.toggle("anim", animOn());
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((e, i) => { e.style.transitionDelay = `${(i % 3) * 80}ms`; io.observe(e); });
  }

  function initCounters() {
    if (!animOn()) return;
    const els = $$(".stat__value[data-count]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target, raw = el.dataset.count, m = raw.match(/^(\d+)(.*)$/);
        io.unobserve(el);
        if (!m) return;
        const end = +m[1], suf = m[2], t0 = performance.now(), dur = 1200;
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
          el.textContent = v + suf; if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });
    els.forEach((e) => io.observe(e));
  }

  function initLightbox() {
    const lb = $("#lightbox"), img = $("#lightboxImg"), cap = $("#lightboxCaption");
    const items = (C.certifications && C.certifications.items) || [];
    let last = null;
    const close = () => { lb.hidden = true; document.body.style.overflow = ""; last && last.focus(); };
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-cert]");
      if (!b) return;
      const x = items[+b.dataset.cert];
      if (!x || !b.querySelector("img")) return;
      last = b; img.src = x.image; img.alt = x.title;
      cap.textContent = [x.title, x.issuer, x.date].filter(Boolean).join(" · ");
      lb.hidden = false; document.body.style.overflow = "hidden"; $("#lightboxClose").focus();
    });
    $("#lightboxClose").addEventListener("click", close);
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) close(); });
  }

  function initForm() {
    const form = $("#contactForm"); if (!form) return;
    const c = C.contact || {};
    const status = $("#formStatus"), btn = form.querySelector(".form__submit");
    const body = $("#formBody"), done = $("#formDone");
    const max = +c.messageMaxLength || 2000;
    const mode = c.web3formsKey ? "web3forms" : c.formEndpoint ? "endpoint" : "mailto";
    const loadedAt = Date.now();
    const F = { name: $("#f-name"), email: $("#f-email"), subject: $("#f-subject"), message: $("#f-msg") };

    // Optional hCaptcha (Web3Forms free plan)
    if (mode === "web3forms" && c.hcaptcha && !document.querySelector('script[src*="web3forms.com/client/script.js"]')) {
      const sc = document.createElement("script");
      sc.src = "https://web3forms.com/client/script.js"; sc.async = true; sc.defer = true;
      document.body.appendChild(sc);
    }

    const say = (html, cls) => { status.innerHTML = html; status.className = "form__status " + (cls || ""); };
    const setErr = (key, msg) => {
      const el = F[key], out = $("#err-" + key);
      if (out) out.textContent = msg || "";
      el.closest(".field").classList.toggle("invalid", !!msg);
      el.setAttribute("aria-invalid", msg ? "true" : "false");
    };
    const rules = {
      name: (v) => (v.trim().length < 2 ? "Please enter your name." : ""),
      email: (v) => (!v.trim() ? "Please enter your email." : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "Please enter a valid email address." : ""),
      message: (v) => (v.trim().length < 10 ? "Please write a little more (at least 10 characters)." : ""),
    };
    const validate = () => {
      let first = null;
      Object.keys(rules).forEach((k) => { const m = rules[k](F[k].value); setErr(k, m); if (m && !first) first = F[k]; });
      return first;
    };
    // live feedback: clear an error as soon as the field becomes valid
    Object.keys(rules).forEach((k) => F[k].addEventListener("input", () => {
      if (F[k].closest(".field").classList.contains("invalid")) setErr(k, rules[k](F[k].value));
    }));
    const counter = $("#msg-count");
    const updateCount = () => {
      const n = F.message.value.length;
      counter.textContent = `${n} / ${max}`;
      counter.classList.toggle("near", n > max * 0.9);
    };
    F.message.addEventListener("input", updateCount);

    const loading = (on) => {
      btn.disabled = on; btn.classList.toggle("is-loading", on);
      btn.querySelector(".form__submit-label").innerHTML = on ? "Sending…" : `${icon("send")} Send Message`;
    };
    const showDone = (name) => {
      $("#formDoneText").textContent = `Thanks${name ? ", " + name.split(" ")[0] : ""}! Your message is in my inbox. ${c.replyTime || ""}`.trim();
      body.hidden = true; done.hidden = false; done.focus();
      form.reset(); updateCount(); say("");
      if (window.hcaptcha) { try { window.hcaptcha.reset(); } catch (e) {} }
    };
    const fail = (msg) => {
      say(`<span>${esc(msg)}</span>
        <span class="form__fallback">
          <span>You can also email me directly at <strong class="form__addr">${esc(c.email)}</strong></span>
          <span class="form__fallback-btns">
            <button type="button" class="btn btn--ghost btn--sm" id="copyEmail">${icon("copy")} Copy email</button>
            <a class="btn btn--ghost btn--sm" href="mailto:${esc(c.email)}">${icon("mail")} Open email app</a>
          </span>
        </span>`, "err");
      const cb = $("#copyEmail");
      cb && cb.addEventListener("click", () => {
        const ok = () => { cb.innerHTML = `${icon("check")} Copied`; };
        if (navigator.clipboard) navigator.clipboard.writeText(c.email).then(ok).catch(() => { cb.textContent = c.email; });
        else cb.textContent = c.email;
      });
    };

    $("#formAgain").addEventListener("click", () => { done.hidden = true; body.hidden = false; F.name.focus(); });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      say("");
      const firstBad = validate();
      if (firstBad) { firstBad.focus(); return say("Please fix the highlighted fields.", "err"); }

      const name = F.name.value.trim(), email = F.email.value.trim();
      const subj = F.subject.value.trim(), msg = F.message.value.trim();

      // Spam traps: hidden honeypot ticked, or form sent faster than a human could type it.
      // Pretend success so bots learn nothing.
      if (form.botcheck.checked || Date.now() - loadedAt < 3000) return showDone(name);

      if (mode === "mailto") {
        const s = encodeURIComponent(subj || `Portfolio message from ${name}`);
        const b = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
        location.href = `mailto:${c.email}?subject=${s}&body=${b}`;
        return say(`Opening your email app… If nothing opens, email me at <strong>${esc(c.email)}</strong>.`, "ok");
      }

      const fd = new FormData(form);   // includes h-captcha-response when hCaptcha is on
      if (mode === "web3forms" && c.hcaptcha && !String(fd.get("h-captcha-response") || "").trim()) {
        return say("Please complete the captcha check.", "err");
      }
      fd.delete("botcheck");
      fd.set("name", name); fd.set("email", email); fd.set("message", msg);
      fd.set("subject", `${c.subjectPrefix ? c.subjectPrefix + " " : ""}${subj || "New message from " + name}`);
      if (c.fromName) fd.set("from_name", c.fromName);
      fd.set("page", location.href);

      let url = c.formEndpoint;
      if (mode === "web3forms") { url = "https://api.web3forms.com/submit"; fd.set("access_key", c.web3formsKey); }

      loading(true);
      const ctrl = new AbortController(), timer = setTimeout(() => ctrl.abort(), 15000);
      try {
        const res = await fetch(url, { method: "POST", body: fd, headers: { Accept: "application/json" }, signal: ctrl.signal });
        const json = await res.json().catch(() => ({}));
        const ok = res.ok && (mode !== "web3forms" || json.success === true);
        if (ok) return showDone(name);
        if (res.status === 429) return fail("Too many messages right now. Please try again in a few minutes.");
        const detail = json.message || (json.body && json.body.message) || "";
        fail(`Sorry, your message couldn't be sent${detail ? ` (${detail})` : ""}.`);
      } catch (err) {
        fail(err && err.name === "AbortError" ? "The request timed out. Please check your connection and try again." : "Network error. Please check your connection and try again.");
      } finally { clearTimeout(timer); loading(false); }
    });
  }

  function initSettings() {
    $("#themeToggle").addEventListener("click", () => setMode(root.getAttribute("data-theme") === "dark" ? "light" : "dark"));
    if (!(C.theme && C.theme.showSettingsPanel)) return;

    const wrap = $("#settings"), fab = $("#settingsFab"), panel = $("#settingsPanel");
    wrap.hidden = false;
    fab.addEventListener("click", () => {
      panel.hidden = !panel.hidden; fab.setAttribute("aria-expanded", String(!panel.hidden));
    });
    document.addEventListener("click", (e) => { if (!wrap.contains(e.target)) { panel.hidden = true; fab.setAttribute("aria-expanded", "false"); } });

    $$("#themeSeg button").forEach((b) => b.addEventListener("click", () => setMode(b.dataset.mode)));
    $("#swatches").innerHTML = (C.theme.accentChoices || []).map((c) => `<button class="swatch" data-c="${esc(c)}" style="background:${esc(c)}" aria-label="Accent ${esc(c)}"></button>`).join("");
    $$(".swatch").forEach((s) => s.addEventListener("click", () => { store.set("pf-accent", s.dataset.c); applyAccent(s.dataset.c); }));

    const anim = $("#animToggle"); anim.checked = animOn();
    anim.addEventListener("change", () => {
      store.set("pf-anim", anim.checked ? "1" : "0");
      document.body.classList.toggle("anim", anim.checked);
      $$(".reveal").forEach((e) => e.classList.add("in"));
    });
    $("#settingsReset").addEventListener("click", () => {
      ["pf-theme", "pf-accent", "pf-anim"].forEach(store.del);
      applyTheme(getMode()); applyAccent(getAccent()); anim.checked = animOn();
      document.body.classList.toggle("anim", animOn());
    });
    applyTheme(getMode()); applyAccent(getAccent());
  }

  /* ---------- Boot ---------- */
  applyFont();
  applyTheme(getMode());
  applyAccent(getAccent());
  render();
  initNav();
  initSettings();
  initReveal();
  initCounters();
  initLightbox();
  initForm();
})();
