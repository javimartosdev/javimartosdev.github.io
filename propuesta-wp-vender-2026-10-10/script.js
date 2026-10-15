/* WP Vender / WPBender — Functional Spec (isolated mockup, no production) */
(function () {
  "use strict";

  const STORAGE_KEY = "dmm-spec-lang";

  const I18N = {
    es: {
      headerTitle: "Especificación funcional — Servicios (ListingPro)",
      headerSub: "Mockup aislado para WPBender · No conectado a demamiamami.com",
      isolation: "Solo propuesta",
      nav1: "1. Backend · Anuncio",
      nav2: "2. Backend · Servicio",
      nav3: "3. Frontend · Reserva",
      s1Title: "Backend — Nivel anuncio (Listing)",
      s1Lead: "Debajo del bloque nativo de Categorías. Define recursos compartidos por todo el anuncio (salas o profesionales).",
      editListing: "Editar anuncio — La Revuela",
      nativeCategories: "Categorías (nativo ListingPro)",
      catPlaceholder: "Ludoteca · Cumpleaños infantiles",
      resourcesTitle: "Recursos o profesionales del anuncio",
      labelType: "Etiqueta en el frontend para el cliente",
      typeRooms: "Salas / Espacios",
      typeStaff: "Profesionales / Especialistas",
      typeGeneric: "Genérico / Turnos",
      addResource: "+ Añadir recurso / profesional",
      spec1Title: "WPBender Spec #1 — Recursos a nivel Listing",
      spec1p1: "Meta en el post <code>listing</code> (post meta o tabla custom). Un solo conjunto de recursos por anuncio, no por servicio.",
      spec1p2: "Disponibilidad: en cada slot horario el sistema permite hasta <strong>N reservas simultáneas</strong>, donde N = recursos definidos que no estén ya reservados en ese tramo.",
      spec1p3: "El cliente elige sala/profesional en el widget de reserva (Sección 3).",
      s2Title: "Backend — Editor de servicio",
      s2Lead: "Formulario actual del proveedor al crear/editar un servicio. Tres extensiones marcadas.",
      serviceEditor: "Añadir / editar servicio",
      richLabel: "Descripción del servicio",
      basePrice: "Precio base (€)",
      dynCheck: "¿Este servicio tiene precios distintos según el día de la semana o fin de semana?",
      addDayRate: "+ Añadir tarifa por días",
      priceEur: "Precio (€)",
      extrasTitle: "Cargos / servicios extras personalizables",
      extraName: "Nombre del cargo extra",
      calcType: "Tipo de cálculo",
      calcQty: "Por cantidad / unidad",
      calcOnce: "Cargo único (checkbox)",
      addExtra: "+ Añadir cargo extra",
      addServiceBtn: "Añadir servicio",
      translationNote: "Nota: corregir bug de traducción — no reutilizar la cadena «Abrir horario» (booking slots / CubeWP) en este botón.",
      spec2aTitle: "WPBender Spec #2a — Rich Text",
      spec2a: "Sustituir <code>textarea</code> por editor WYSIWYG (wp_editor o equivalente). Guardar HTML saneado en meta del servicio. Renderizar en ficha pública con <code>wp_kses_post</code>.",
      spec2bTitle: "WPBender Spec #2b — Precio por día de semana",
      spec2b: "El cliente <strong>no</strong> elige tarifa en un desplegable. Al pulsar un día en el calendario de reserva, el sistema aplica la regla que coincida (días de la fila → precio). Si no hay regla, usar Precio base.",
      spec2cTitle: "WPBender Spec #2c — Extras repetidor",
      spec2c: "Filas libres: nombre, precio, tipo (multiplicador vs único). Sin campos fijos «niño extra». Persistir como JSON/meta del servicio.",
      s3Title: "Frontend — Ficha y flujo de reserva",
      s3Lead: "Vista pública. Todo el cálculo ocurre dentro del widget al pulsar Reservar.",
      cotaSquare: "Imagen 1:1 estricta — altura del contenedor, object-fit: cover, sin estirar",
      reserveNow: "Reservar ahora",
      widgetTitle: "Reserva — simulación interactiva",
      stepService: "Paso 1 — Selecciona el servicio",
      stepResource: "Paso 2 — Selecciona sala / profesional",
      stepDate: "Paso 3 — Fecha y horario",
      stepExtras: "Paso 4 — Cargos extras",
      stepSummary: "Paso 5 — Resumen y total",
      dayRate: "Tarifa del día seleccionado",
      extrasSum: "Suma de extras",
      totalPay: "Total a pagar",
      btnBook: "Continuar al pago (mock)",
      spec3Title: "WPBender Spec #3 — Widget de reserva",
      spec3: "Flujo en modal o columna lateral ListingPro Bookings: servicio → recurso (listing meta) → calendario (precio día) → extras del servicio → total → Stripe.",
      days: ["D", "L", "M", "X", "J", "V", "S"],
      daysLong: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      chipJarana: "Sala Jarana",
      chipMarea: "Sala Marea",
      svcGlow: "Glow Revuela — Cumpleaños (precio base fijo)",
      svcRoom: "Alquiler de sala — Tarifa por día",
      slot1: "11:00 – 14:00",
      slot2: "16:00 – 19:00",
      slot3: "12:00 – 21:00 (bloque)",
      extraChild: "Niño extra",
      extraMonitor: "Monitor adicional",
      extraClean: "Limpieza final",
      richInc: "Incluye",
      richPrice: "Precio",
      richCancel: "Cancelación",
    },
    en: {
      headerTitle: "Functional Spec — Services (ListingPro)",
      headerSub: "Isolated mockup for WPBender · Not connected to demamiamami.com",
      isolation: "Proposal only",
      nav1: "1. Backend · Listing",
      nav2: "2. Backend · Service",
      nav3: "3. Frontend · Booking",
      s1Title: "Backend — Listing level",
      s1Lead: "Below native Categories block. Resources shared across the whole listing (rooms or staff).",
      editListing: "Edit listing — La Revuela",
      nativeCategories: "Categories (native ListingPro)",
      catPlaceholder: "Play centre · Kids parties",
      resourcesTitle: "Listing resources or staff",
      labelType: "Frontend label for the customer",
      typeRooms: "Rooms / Spaces",
      typeStaff: "Professionals / Specialists",
      typeGeneric: "Generic / Shifts",
      addResource: "+ Add resource / staff",
      spec1Title: "WPBender Spec #1 — Listing-level resources",
      spec1p1: "Store on <code>listing</code> post (post meta or custom table). One resource set per listing, not per service.",
      spec1p2: "Availability: each time slot allows up to <strong>N concurrent bookings</strong>, N = resources not already booked in that slot.",
      spec1p3: "Customer picks room/staff in booking widget (Section 3).",
      s2Title: "Backend — Service editor",
      s2Lead: "Current provider form when creating/editing a service. Three functional extensions.",
      serviceEditor: "Add / edit service",
      richLabel: "Service description",
      basePrice: "Base price (€)",
      dynCheck: "This service has different prices by weekday or weekend?",
      addDayRate: "+ Add day-based rate",
      priceEur: "Price (€)",
      extrasTitle: "Custom extra charges",
      extraName: "Extra charge name",
      calcType: "Calculation type",
      calcQty: "Per quantity / unit",
      calcOnce: "One-time charge (checkbox)",
      addExtra: "+ Add extra charge",
      addServiceBtn: "Add service",
      translationNote: "Note: fix translation bug — do not reuse booking-slots string «Open schedule» (CubeWP) for this button.",
      spec2aTitle: "WPBender Spec #2a — Rich Text",
      spec2a: "Replace plain <code>textarea</code> with WYSIWYG (wp_editor). Save sanitized HTML on service meta. Frontend: <code>wp_kses_post</code>.",
      spec2bTitle: "WPBender Spec #2b — Dynamic pricing by weekday",
      spec2b: "Customer does <strong>not</strong> pick a rate dropdown. Calendar day click applies matching day rule → price; else Base price.",
      spec2cTitle: "WPBender Spec #2c — Extra charges repeater",
      spec2c: "Free-form rows: name, price, type (multiplier vs one-time). No hard-coded «extra child» fields. JSON/meta on service.",
      s3Title: "Frontend — Service page & booking flow",
      s3Lead: "Public view. All pricing happens inside the widget after Reserve.",
      cotaSquare: "Strict 1:1 square image — full container height, object-fit: cover, no stretch",
      reserveNow: "Book now",
      widgetTitle: "Booking — interactive simulation",
      stepService: "Step 1 — Select service",
      stepResource: "Step 2 — Select space / professional",
      stepDate: "Step 3 — Date & time slot",
      stepExtras: "Step 4 — Extra charges",
      stepSummary: "Step 5 — Summary & total",
      dayRate: "Selected day rate",
      extrasSum: "Extras total",
      totalPay: "Total to pay",
      btnBook: "Continue to payment (mock)",
      spec3Title: "WPBender Spec #3 — Booking widget",
      spec3: "Flow in ListingPro Bookings modal/sidebar: service → resource (listing meta) → calendar (day price) → service extras → total → Stripe.",
      days: ["S", "M", "T", "W", "T", "F", "S"],
      daysLong: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      chipJarana: "Jarana Room",
      chipMarea: "Marea Room",
      svcGlow: "Glow Revuela — Party (fixed base price)",
      svcRoom: "Room rental — Day-based rate",
      slot1: "11:00 – 14:00",
      slot2: "16:00 – 19:00",
      slot3: "12:00 – 21:00 (block)",
      extraChild: "Extra child",
      extraMonitor: "Extra monitor",
      extraClean: "Final cleaning",
      richInc: "Includes",
      richPrice: "Price",
      richCancel: "Cancellation",
    },
  };

  let lang = localStorage.getItem(STORAGE_KEY) || "es";

  const SERVICES = {
    glow: {
      id: "glow",
      baseFixed: 370,
      dynamic: false,
      extras: [
        { id: "child", nameKey: "extraChild", price: 15, type: "qty" },
        { id: "monitor", nameKey: "extraMonitor", price: 40, type: "qty", minIfChild: true },
      ],
    },
    room: {
      id: "room",
      baseFixed: 100,
      dynamic: true,
      dayRates: [
        { days: [1, 2, 3, 4], price: 100 },
        { days: [5], price: 130 },
        { days: [0, 6], price: 160 },
      ],
      extras: [{ id: "clean", nameKey: "extraClean", price: 25, type: "once" }],
    },
  };

  const state = {
    resources: ["jarana", "marea"],
    serviceId: "glow",
    resourceId: "jarana",
    selectedDay: null,
    selectedDow: null,
    selectedSlot: null,
    extras: { child: 0, monitor: 0, clean: false },
  };

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || key;
  }

  function applyI18n() {
    document.documentElement.lang = lang === "es" ? "es" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (el.tagName === "INPUT" && el.hasAttribute("data-i18n-placeholder")) {
        el.placeholder = val;
      } else if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    document.querySelectorAll("select option[data-i18n]").forEach((opt) => {
      opt.textContent = t(opt.getAttribute("data-i18n"));
    });
    updateChipLabels();
    rebuildCalendar();
    updateSummary();
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem(STORAGE_KEY, lang);
    applyI18n();
  }

  function updateChipLabels() {
    const map = { jarana: "chipJarana", marea: "chipMarea" };
    document.querySelectorAll("[data-resource-chip]").forEach((chip) => {
      const id = chip.getAttribute("data-resource-chip");
      const span = chip.querySelector(".chip-label");
      if (span && map[id]) span.textContent = t(map[id]);
    });
  }

  /* ——— Section nav ——— */
  function initNav() {
    const links = document.querySelectorAll(".section-nav a");
    const sections = document.querySelectorAll(".section-block");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    links.forEach((a) => {
      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        document.querySelector(a.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  /* ——— Listing resources repeater ——— */
  function initResources() {
    const row = document.getElementById("resource-chips");
    const addBtn = document.getElementById("add-resource");
    addBtn?.addEventListener("click", () => {
      const name = prompt(lang === "es" ? "Nombre del recurso:" : "Resource name:");
      if (!name) return;
      const id = "r" + Date.now();
      state.resources.push(id);
      const chip = document.createElement("span");
      chip.className = "lp-chip";
      chip.setAttribute("data-resource-chip", id);
      chip.innerHTML =
        '<span class="chip-label"></span> <button type="button" aria-label="Remove">&times;</button>';
      chip.querySelector(".chip-label").textContent = name;
      chip.querySelector("button").addEventListener("click", () => chip.remove());
      row.appendChild(chip);
      refreshResourceSelect();
    });
    document.querySelectorAll("#resource-chips .lp-chip button").forEach((btn) => {
      btn.addEventListener("click", () => btn.closest(".lp-chip")?.remove());
    });
  }

  function refreshResourceSelect() {
    const sel = document.getElementById("book-resource");
    if (!sel) return;
    const labels = {
      jarana: t("chipJarana"),
      marea: t("chipMarea"),
    };
    sel.innerHTML = "";
    document.querySelectorAll("#resource-chips .lp-chip").forEach((chip) => {
      const id = chip.getAttribute("data-resource-chip") || "custom";
      const label = chip.querySelector(".chip-label")?.textContent || id;
      const opt = document.createElement("option");
      opt.value = id;
      opt.textContent = label;
      if (id === state.resourceId) opt.selected = true;
      sel.appendChild(opt);
    });
    if (!sel.options.length) {
      ["jarana", "marea"].forEach((id) => {
        const opt = document.createElement("option");
        opt.value = id;
        opt.textContent = labels[id];
        sel.appendChild(opt);
      });
    }
  }

  /* ——— Service editor ——— */
  function initServiceEditor() {
    const dyn = document.getElementById("dyn-pricing-check");
    const panel = document.getElementById("dyn-pricing-panel");
    dyn?.addEventListener("change", () => {
      panel?.classList.toggle("hidden", !dyn.checked);
    });
    document.getElementById("add-day-rate")?.addEventListener("click", () => {
      const wrap = document.getElementById("day-rates");
      const row = document.createElement("div");
      row.className = "pricing-row";
      row.innerHTML =
        '<div class="day-pills"></div><input type="number" class="rate-price" value="100" min="0" step="1"><button type="button" class="lp-btn remove-rate">&times;</button>';
      const pills = row.querySelector(".day-pills");
      for (let d = 0; d < 7; d++) {
        const b = document.createElement("button");
        b.type = "button";
        b.textContent = t("days")[d];
        b.dataset.dow = String(d);
        b.addEventListener("click", () => b.classList.toggle("on"));
        pills.appendChild(b);
      }
      row.querySelector(".remove-rate").addEventListener("click", () => row.remove());
      wrap.appendChild(row);
    });
    document.querySelectorAll("#day-rates .day-pills button").forEach((b) => {
      b.addEventListener("click", () => b.classList.toggle("on"));
    });
    document.querySelectorAll("#day-rates .remove-rate").forEach((btn) => {
      btn.addEventListener("click", () => btn.closest(".pricing-row")?.remove());
    });
    document.getElementById("add-extra-row")?.addEventListener("click", () => {
      const wrap = document.getElementById("extra-rows");
      const row = document.createElement("div");
      row.className = "extra-row";
      row.innerHTML =
        '<input type="text" placeholder="' +
        t("extraName") +
        '"><input type="number" value="10" min="0"><select><option>' +
        t("calcQty") +
        "</option><option>" +
        t("calcOnce") +
        '</option></select><button type="button" class="lp-btn remove-extra">&times;</button>';
      row.querySelector(".remove-extra").addEventListener("click", () => row.remove());
      wrap.appendChild(row);
    });
  }

  /* ——— Booking widget ——— */
  function getService() {
    return SERVICES[state.serviceId] || SERVICES.glow;
  }

  function priceForDay(svc, dow) {
    if (!svc.dynamic) return svc.baseFixed;
    for (const rule of svc.dayRates) {
      if (rule.days.indexOf(dow) !== -1) return rule.price;
    }
    return svc.baseFixed;
  }

  function rebuildCalendar() {
    const grid = document.getElementById("cal-grid");
    if (!grid) return;
    grid.innerHTML = "";
    t("days").forEach((d) => {
      const h = document.createElement("div");
      h.className = "cal-dow";
      h.textContent = d;
      grid.appendChild(h);
    });
    const today = new Date(2026, 9, 15);
    const year = today.getFullYear();
    const month = today.getMonth();
    const first = new Date(year, month, 1);
    const startPad = first.getDay();
    for (let i = 0; i < startPad; i++) {
      const empty = document.createElement("div");
      grid.appendChild(empty);
    }
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const dow = date.getDay();
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cal-day" + (dow === 0 || dow === 6 ? " weekend" : "");
      btn.textContent = String(d);
      btn.dataset.dow = String(dow);
      btn.dataset.date = date.toISOString().slice(0, 10);
      if (state.selectedDay === d) btn.classList.add("selected");
      btn.addEventListener("click", () => {
        state.selectedDay = d;
        state.selectedDow = dow;
        state.selectedSlot = null;
        rebuildCalendar();
        document.querySelectorAll(".slot-row button").forEach((b) => b.classList.remove("selected"));
        updateSummary();
      });
      grid.appendChild(btn);
    }
  }

  function initBooking() {
    const svcSel = document.getElementById("book-service");
    const resSel = document.getElementById("book-resource");
    svcSel?.addEventListener("change", () => {
      state.serviceId = svcSel.value;
      state.extras = { child: 0, monitor: 0, clean: false };
      renderExtras();
      updateSummary();
    });
    resSel?.addEventListener("change", () => {
      state.resourceId = resSel.value;
    });
    document.querySelectorAll(".slot-row button").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".slot-row button").forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        state.selectedSlot = btn.dataset.slot;
        updateSummary();
      });
    });
    document.getElementById("open-booking")?.addEventListener("click", () => {
      document.getElementById("booking-widget")?.scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById("extras-container")?.addEventListener("click", (e) => {
      const tBtn = e.target.closest(".stepper button");
      if (!tBtn) return;
      const box = tBtn.closest(".stepper");
      const key = box?.dataset.extra;
      const delta = parseInt(tBtn.dataset.delta, 10);
      if (!key) return;
      let n = parseInt(box.querySelector("span").textContent, 10) + delta;
      if (n < 0) n = 0;
      if (key === "monitor" && state.extras.child > 0 && n < 1) n = 1;
      state.extras[key] = n;
      if (key === "child" && n > 0 && state.extras.monitor < 1) state.extras.monitor = 1;
      box.querySelector("span").textContent = String(n);
      if (key === "child") {
        const mon = document.querySelector('.stepper[data-extra="monitor"] span');
        if (mon) mon.textContent = String(state.extras.monitor);
      }
      updateSummary();
    });
    document.getElementById("extra-clean")?.addEventListener("change", (e) => {
      state.extras.clean = e.target.checked;
      updateSummary();
    });
    refreshResourceSelect();
    renderExtras();
    rebuildCalendar();
    updateSummary();
  }

  function renderExtras() {
    const wrap = document.getElementById("extras-container");
    if (!wrap) return;
    wrap.innerHTML = "";
    const svc = getService();
    svc.extras.forEach((ex) => {
      const line = document.createElement("div");
      line.className = "extra-line";
      if (ex.type === "once") {
        line.innerHTML =
          '<label><input type="checkbox" id="extra-clean"> <strong>' +
          t(ex.nameKey) +
          "</strong><small>+" +
          ex.price +
          " €</small></label>";
        const cb = line.querySelector("input");
        cb.checked = state.extras.clean;
        cb.addEventListener("change", (e) => {
          state.extras.clean = e.target.checked;
          updateSummary();
        });
      } else {
        const qty = state.extras[ex.id] || 0;
        line.innerHTML =
          "<div><strong>" +
          t(ex.nameKey) +
          "</strong><small>+" +
          ex.price +
          " € / ud.</small></div>" +
          '<div class="stepper" data-extra="' +
          ex.id +
          '"><button type="button" data-delta="-1">−</button><span>' +
          qty +
          '</span><button type="button" data-delta="1">+</button></div>';
      }
      wrap.appendChild(line);
    });
  }

  function updateSummary() {
    const svc = getService();
    const dayEl = document.getElementById("sum-day-rate");
    const extEl = document.getElementById("sum-extras");
    const totEl = document.getElementById("sum-total");
    if (!dayEl) return;

    let base = svc.baseFixed;
    if (state.selectedDow !== null) base = priceForDay(svc, state.selectedDow);
    else if (!svc.dynamic) base = svc.baseFixed;

    let extrasTotal = 0;
    svc.extras.forEach((ex) => {
      if (ex.type === "once") {
        if (state.extras.clean) extrasTotal += ex.price;
      } else {
        extrasTotal += (state.extras[ex.id] || 0) * ex.price;
      }
    });

    const total = base + extrasTotal;
    dayEl.textContent = base + " €";
    extEl.textContent = extrasTotal + " €";
    totEl.textContent = total + " €";

    const hint = document.getElementById("day-hint");
    if (hint && state.selectedDow !== null) {
      hint.textContent =
        (lang === "es" ? "Día: " : "Day: ") + t("daysLong")[state.selectedDow];
    } else if (hint) {
      hint.textContent = lang === "es" ? "Selecciona un día en el calendario" : "Select a calendar day";
    }
  }

  /* ——— Lang buttons ——— */
  function initLang() {
    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLang();
    initNav();
    initResources();
    initServiceEditor();
    initBooking();
    applyI18n();
  });
})();
