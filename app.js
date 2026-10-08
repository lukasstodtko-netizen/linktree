(function () {
  const S = window.SITE;

  const ICONS = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    strava: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    shop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.8 4 12 4 12 4s-6.8 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.6 2.8 2.8 0 0 0 2 2c1.7.4 8.5.4 8.5.4s6.8 0 8.5-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.6z"/><path d="m9.75 15.02 5.75-3.02-5.75-3.02z"/></svg>',
    route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.8 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
  };

  // Die vier Formen, mdnss zu leben – jede mit ihrem Akzent aus der Palette
  const TYPES = {
    salida: { label: "Salida", accent: "accent-white" },
    evento: { label: "Evento", accent: "accent-blue" },
    reto: { label: "Reto", accent: "accent-salmon" },
    carrera: { label: "Carrera", accent: "accent-orange" }
  };

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (sel) => document.querySelector(sel);

  // ---------- Events helpers ----------
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const parseDate = (d) => { const [y, m, day] = d.split("-").map(Number); return new Date(y, m - 1, day); };
  const events = (S.events || []).slice().sort((a, b) => parseDate(a.date) - parseDate(b.date));
  const upcoming = events.filter((e) => parseDate(e.date) >= today);
  const past = events.filter((e) => parseDate(e.date) < today).reverse();

  // ---------- Kopf / Fuß ----------
  function renderHero() {
    const el = $("#hero");
    if (!el) return;
    if (S.hero) el.style.backgroundImage = `url("${S.hero}")`;
    const title = el.dataset.title;
    const headline = title ? `<h1>${esc(title)}</h1>` : "";
    el.insertAdjacentHTML("beforeend", `
      <img class="logo" src="${esc(S.logo)}" alt="mdnss · ${esc(S.name)}">
      ${headline}`);
  }

  function renderFooter() {
    const el = $("#footer");
    if (!el) return;
    el.innerHTML = `
      © ${new Date().getFullYear()} ${esc(S.name)} · <a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`;
  }

  // ---------- Startseite ----------
  function button({ href, icon, title, sub, accent = "accent-white", badge = "", external = true }) {
    return `<a class="btn ${accent}" href="${esc(href)}" ${external ? 'target="_blank" rel="noopener"' : ""}>
      <span class="icon-wrap">${ICONS[icon] || ICONS.link}</span>
      <span class="label">${esc(title)}${sub ? `<span class="sub">${esc(sub)}</span>` : ""}</span>
      ${badge ? `<span class="badge">${esc(badge)}</span>` : ""}
      <span class="arrow">${ICONS.arrow}</span>
    </a>`;
  }

  function renderLinks() {
    const el = $("#links");
    if (!el) return;
    let html = `
      <button class="btn btn-primary" id="collab-toggle" aria-expanded="false" aria-controls="collab">
        <span class="icon-wrap">${ICONS.mail}</span>
        <span class="label">Colabora con nosotros<span class="sub">Escríbenos directamente por mail</span></span>
        <span class="arrow">${ICONS.arrow}</span>
      </button>
      <form class="collab" id="collab" novalidate>
        <label for="c-name">Nombre / Marca</label>
        <input id="c-name" name="name" required placeholder="Tu nombre o tu marca">
        <label for="c-type">¿Qué tienes en mente?</label>
        <select id="c-type" name="type">
          <option>Patrocinio</option>
          <option>Probar producto</option>
          <option>Salida o evento juntos</option>
          <option>Contenido</option>
          <option>Otra locura</option>
        </select>
        <label for="c-msg">Mensaje</label>
        <textarea id="c-msg" name="message" placeholder="Cuéntanos tu idea…"></textarea>
        <button type="submit" class="send">Abrir mail</button>
        <p class="hint">Se abre tu app de correo. O escríbenos a <a href="mailto:${esc(S.email)}">${esc(S.email)}</a></p>
      </form>`;

    if (S.strava) html += button({ href: S.strava, icon: "strava", title: "Club de Strava", sub: "Únete y rueda con la grupeta", accent: "accent-orange" });
    if (upcoming.length) {
      html += button({
        href: "events.html", icon: "calendar", title: "Próximas experiencias",
        sub: `Lo siguiente: ${upcoming[0].title}`, badge: `${upcoming.length}`, accent: "accent-blue", external: false
      });
    }
    (S.links || []).forEach((l) => { html += button({ href: l.url, icon: l.icon, title: l.title, sub: l.sub, accent: "accent-salmon" }); });
    if (S.instagram) html += button({ href: S.instagram, icon: "instagram", title: "Instagram", sub: "Fotos, retos y backstage", accent: "accent-white" });

    el.innerHTML = html;

    const toggle = $("#collab-toggle");
    const form = $("#collab");
    toggle.addEventListener("click", () => {
      const open = form.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      if (open) $("#c-name").focus();
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.elements.name.value.trim();
      const type = form.elements.type.value;
      const msg = form.elements.message.value.trim();
      const subject = `Colaboración mdnss: ${type}${name ? " – " + name : ""}`;
      const body = `¡Hola, equipo mdnss!\n\n${msg || "Nos encantaría colaborar con vosotros."}\n\nTipo: ${type}\n\nUn saludo,\n${name}`;
      window.location.href = `mailto:${S.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  function renderSponsors() {
    const el = $("#sponsors");
    if (!el) return;
    const list = S.sponsors || [];
    if (!list.length) { el.closest(".section").remove(); return; }
    el.innerHTML = list.map((s) => {
      const inner = s.logo ? `<img src="${esc(s.logo)}" alt="${esc(s.name)}" loading="lazy">` : esc(s.name);
      return s.url
        ? `<a class="sponsor" href="${esc(s.url)}" target="_blank" rel="noopener" title="${esc(s.name)}">${inner}</a>`
        : `<div class="sponsor" title="${esc(s.name)}">${inner}</div>`;
    }).join("");
  }

  // ---------- Veranstaltungsseite ----------
  const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  function eventCard(e, isPast) {
    const d = parseDate(e.date);
    const t = TYPES[e.type] || TYPES.evento;
    const meta = [e.time && `${esc(e.time)} h`, e.location, e.distance].filter(Boolean).map(esc);
    return `<article class="event ${t.accent}${isPast ? " past" : ""}">
      <div class="event-date">
        <span class="day">${d.getDate()}</span>
        <span class="month">${MONTHS[d.getMonth()]}</span>
        <span class="year">${d.getFullYear()}</span>
      </div>
      <div>
        <p class="type">${t.label}</p>
        <h3>${esc(e.title)}${e.edition ? ` <span class="edition">${esc(e.edition)}</span>` : ""}</h3>
        ${meta.length ? `<p class="meta">${meta.map((m) => `<span>${m}</span>`).join("")}</p>` : ""}
        ${e.description ? `<p>${esc(e.description)}</p>` : ""}
        ${e.link && !isPast ? `<a class="event-link" href="${esc(e.link)}" target="_blank" rel="noopener">Info e inscripción →</a>` : ""}
        <p class="sign">Una experiencia mdnss</p>
      </div>
    </article>`;
  }

  function renderEvents() {
    const up = $("#events-upcoming");
    if (!up) return;
    up.innerHTML = upcoming.length
      ? upcoming.map((e) => eventCard(e, false)).join("")
      : `<div class="empty">Ahora mismo estamos preparando la próxima locura.<br>
           Síguenos en <a href="${esc(S.instagram)}" target="_blank" rel="noopener">Instagram</a>
           o únete al <a href="${esc(S.strava)}" target="_blank" rel="noopener">club de Strava</a> para no perderte nada.</div>`;

    const pastEl = $("#events-past");
    if (past.length) pastEl.innerHTML = past.map((e) => eventCard(e, true)).join("");
    else pastEl.closest(".section").remove();
  }

  document.title = document.title.replace("{name}", S.name);
  renderHero();
  renderLinks();
  renderSponsors();
  renderEvents();
  renderFooter();
})();
