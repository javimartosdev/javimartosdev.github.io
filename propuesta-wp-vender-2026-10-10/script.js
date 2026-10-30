/* ListingPro services spec — isolated mockup (fictional data, no production) */
(function () {
  "use strict";

  const STORAGE_KEY = "dmm-spec-lang-20261028";

  const I18N = {
    es: {
      headerTitle: "Especificación funcional — Servicios (ListingPro)",
      headerSub: "Mockup aislado para el equipo de desarrollo · No conectado al sitio en producción",
      isolation: "Solo propuesta",
      milestoneBanner:
        "<strong>Este envío</strong> La línea roja es lo que la web aún no tiene: salas, checkbox y cajas nuevas del servicio, la reserva en dos pasos, y en eventos los checkbox, las cajas y el bloque de compra.",
      scopeOut:
        "Fuera de alcance en esta entrega: compra de entradas, actos publicados como eventos, tribus como evento, módulos EventPro y cualquier pantalla de «evento» en panel o ficha pública.",
      checklistTitle: "En rojo: lo que la web aún no tiene",
      check1: "Multi-recurso en el alta del anuncio (salas / profesionales / turnos)",
      check2: "Editor de servicio (CubeWP actual): extensiones dentro de cada fila — WYSIWYG, tarifas por día, servicios adicionales",
      check3: "Flujo de reserva: foto cuadrada 1:1, selector de recurso, calendario que aplica tarifa del día, extras y total en vivo",
      checkFoot: "Conmutador ES/EN para revisión interna y desarrollo. Naranja = especificación técnica.",
      nav1: "1. Backend · Anuncio",
      nav2: "2. Backend · Servicio",
      nav3: "3. Frontend · Reserva",
      s1Title: "Backend — Nivel anuncio (Listing)",
      s1Lead: "Debajo del bloque nativo de Categorías. Define recursos compartidos por todo el anuncio (salas o profesionales).",
      editListing: "Editar anuncio — Ludoteca El Pitillito",
      nativeCategories: "Categorías (nativo ListingPro)",
      catPlaceholder: "Ludoteca · Fiestas infantiles",
      resourcesTitle: "Recursos o profesionales del anuncio",
      labelType: "Etiqueta en el frontend para el cliente",
      typeRooms: "Salas / Espacios",
      typeStaff: "Profesionales / Especialistas",
      typeGeneric: "Genérico / Turnos",
      addResource: "+ Añadir recurso / profesional",
      spec1Title: "Especificación técnica #1 — Recursos a nivel Listing",
      spec1p1: "Meta en el post <code>listing</code> (post meta o tabla custom). Un solo conjunto de recursos por anuncio, no por servicio.",
      spec1p2: "Disponibilidad: en cada slot horario el sistema permite hasta <strong>N reservas simultáneas</strong>, donde N = recursos definidos que no estén ya reservados en ese tramo.",
      spec1p3: "El cliente elige sala/profesional en el widget de reserva (Sección 3).",
      s2Title: "Backend — Editor de servicio",
      s2Lead:
        "Réplica del bloque «Servicios» en edit-listing (CubeWP). Las mejoras #2a–#2c se integran debajo de Precio/Duración, sin cambiar cajas ni botones nativos.",
      serviceEditor: "Edit your Listing — extracto (La Revuela)",
      servicesSection: "Servicios",
      servicesLabel: "Servicios",
      fldTitle: "Título",
      fldDesc: "Descripción",
      fldPrice: "Precio",
      fldDuration: "Duración",
      weekdayRates: "Tarifa según día de la semana",
      weekdayRatesHint:
        "Misma idea que el selector de días del horario comercial: filas con días + importe. El total en reserva = tarifa del día + sala + extras.",
      dynCheck: "Activar precios distintos por día de la semana",
      addDayRate: "Añadir tramo de días",
      rangeFrom: "de",
      rangeTo: "a",
      seatsCheck: "Activar número de plazas",
      seatsOffHint: "Apagado: el precio no se multiplica por plazas.",
      seatsOnHint: "Encendido: el cliente elige plazas (mínimo 1) y el total se multiplica.",
      priceEur: "Precio (€)",
      extrasTitle: "Servicios adicionales",
      spec2Title: "Especificación técnica #2 — Editor de servicios (ListingPro + CubeWP)",
      extraName: "Nombre del cargo extra",
      calcType: "Tipo de cálculo",
      calcQty: "Por cantidad / unidad",
      calcOnce: "Cargo único (checkbox)",
      addExtra: "+ Añadir servicio adicional",
      spec2a:
        "<strong>#2a Rich text:</strong> el campo «Descripción» pasa de <code>textarea</code> a editor visual (como «Cuéntanos más»). HTML saneado en meta; ficha con <code>wp_kses_post</code>.",
      spec2b:
        "<strong>#2b Precio por día:</strong> cada fila es un tramo (de un día a otro) y un importe. El checkbox muestra u oculta las filas. Otro checkbox, número de plazas: apagado, el precio no se multiplica.",
      spec2c:
        "<strong>#2c Servicios adicionales:</strong> repetidor anidado (nombre, precio, tipo). No mezclar con EventPro/entradas. JSON en meta del servicio.",
      s3Title: "Frontend — Ficha y flujo de reserva",
      s3Lead: "Vista pública. Todo el cálculo ocurre dentro del widget al pulsar Reservar.",
      cotaSquare: "Imagen 1:1 estricta — altura del contenedor, object-fit: cover, sin estirar",
      reserveNow: "Reservar ahora",
      widgetTitle: "Reserva — simulación interactiva",
      lblService: "Servicio",
      lblResource: "Sala / profesional",
      lblDate: "Fecha y horario",
      lblExtras: "Servicios adicionales",
      dayRate: "Tarifa del día seleccionado",
      extrasSum: "Suma de extras",
      totalPay: "Total a pagar",
      btnContinue: "Continuar",
      btnBack: "Atrás",
      lblSeats: "Número de plazas",
      btnBook: "Continuar al pago (mock)",
      spec3Title: "Especificación técnica #3 — Widget de reserva",
      spec3: "Dos pantallas: servicio, sala y día; después extras y, si el servicio lo tiene activado, número de plazas (mínimo 1). Solo se muestra el total.",
      days: ["D", "L", "M", "X", "J", "V", "S"],
      daysLong: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      chipSol: "Sala Sol",
      chipLuna: "Sala Luna",
      svcParty: "Fiesta Neón 3 h (precio base fijo)",
      svcRoom: "Alquiler de sala — Tarifa por día",
      svcCourse: "Taller de porteo (precio por plaza)",
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
      headerSub: "Isolated mockup for the development team · Not connected to production",
      isolation: "Proposal only",
      milestoneBanner:
        "<strong>This shipment</strong> The red line is what the site does not have yet: rooms, the new service checkboxes and boxes, the two-step booking, and in events the checkboxes, the boxes, and the purchase block.",
      scopeOut:
        "Out of scope: ticket purchase, published events, tribe-as-event listings, EventPro modules, and any “event” UI in dashboard or public pages.",
      checklistTitle: "In red: what the site does not have yet",
      check1: "Multi-resource on listing submit (rooms / staff / shifts)",
      check2: "Service editor (current CubeWP): extensions inside each row — WYSIWYG, weekday rates, add-ons",
      check3: "Booking flow: 1:1 square image, resource picker, calendar day-rate, extras, live total",
      checkFoot: "ES/EN toggle for internal review and development. Orange = technical spec.",
      nav1: "1. Backend · Listing",
      nav2: "2. Backend · Service",
      nav3: "3. Frontend · Booking",
      s1Title: "Backend — Listing level",
      s1Lead: "Below native Categories block. Resources shared across the whole listing (rooms or staff).",
      editListing: "Edit listing — El Pitillito Play Centre",
      nativeCategories: "Categories (native ListingPro)",
      catPlaceholder: "Play centre · Kids parties",
      resourcesTitle: "Listing resources or staff",
      labelType: "Frontend label for the customer",
      typeRooms: "Rooms / Spaces",
      typeStaff: "Professionals / Specialists",
      typeGeneric: "Generic / Shifts",
      addResource: "+ Add resource / staff",
      spec1Title: "Technical spec #1 — Listing-level resources",
      spec1p1: "Store on <code>listing</code> post (post meta or custom table). One resource set per listing, not per service.",
      spec1p2: "Availability: each time slot allows up to <strong>N concurrent bookings</strong>, N = resources not already booked in that slot.",
      spec1p3: "Customer picks room/staff in booking widget (Section 3).",
      s2Title: "Backend — Service editor",
      s2Lead:
        "Replica of the «Services» block on edit-listing (CubeWP). Improvements #2a–#2c sit below Price/Duration without changing native UI chrome.",
      serviceEditor: "Edit your Listing — excerpt (demo venue)",
      servicesSection: "Services",
      servicesLabel: "Services",
      fldTitle: "Title",
      fldDesc: "Description",
      fldPrice: "Price",
      fldDuration: "Duration",
      weekdayRates: "Rate by weekday",
      weekdayRatesHint:
        "Same pattern as business-hours day pickers: rows of days + amount. Booking total = day rate + room + add-ons.",
      dynCheck: "Enable different prices by weekday",
      addDayRate: "Add day range",
      rangeFrom: "from",
      rangeTo: "to",
      seatsCheck: "Enable number of seats",
      seatsOffHint: "Off: the price is not multiplied by seats.",
      seatsOnHint: "On: the customer picks seats (minimum 1) and the total is multiplied.",
      priceEur: "Price (€)",
      extrasTitle: "Additional services",
      extraName: "Add-on name",
      calcType: "Calculation type",
      calcQty: "Per quantity / unit",
      calcOnce: "One-time charge (checkbox)",
      addExtra: "+ Add additional service",
      spec2Title: "Technical spec #2 — Service editor (ListingPro + CubeWP)",
      spec2a:
        "<strong>#2a Rich text:</strong> «Description» becomes a visual editor (like listing body). Sanitized HTML in meta; public page uses <code>wp_kses_post</code>.",
      spec2b:
        "<strong>#2b Weekday price:</strong> each row is a range (from one weekday to another) plus an amount. The checkbox shows or hides the rows. A second checkbox, number of seats: off, the price is not multiplied.",
      spec2c:
        "<strong>#2c Add-ons:</strong> nested repeater (name, price, type). Not EventPro tickets. JSON in service meta.",
      s3Title: "Frontend — Service page & booking flow",
      s3Lead: "Public view. All pricing happens inside the widget after Reserve.",
      cotaSquare: "Strict 1:1 square image — full container height, object-fit: cover, no stretch",
      reserveNow: "Book now",
      widgetTitle: "Booking — interactive simulation",
      lblService: "Service",
      lblResource: "Space / professional",
      lblDate: "Date & time",
      lblExtras: "Additional services",
      dayRate: "Selected day rate",
      extrasSum: "Extras total",
      totalPay: "Total to pay",
      btnContinue: "Continue",
      btnBack: "Back",
      lblSeats: "Number of seats",
      btnBook: "Continue to payment (mock)",
      spec3Title: "Technical spec #3 — Booking widget",
      spec3: "Two screens: service, room and day; then extras and, if the service has it on, number of seats (minimum 1). Only the total is shown.",
      days: ["S", "M", "T", "W", "T", "F", "S"],
      daysLong: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      chipSol: "Sun Room",
      chipLuna: "Moon Room",
      svcParty: "Neon Party 3 h (fixed base price)",
      svcRoom: "Room rental — Day-based rate",
      svcCourse: "Babywearing workshop (price per seat)",
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

  let lang = localStorage.getItem(STORAGE_KEY) || "en";

  const SERVICES = {
    party: {
      id: "party",
      baseFixed: 289,
      dynamic: false,
      useSeats: false,
      extras: [
        { id: "child", nameKey: "extraChild", price: 15, type: "qty" },
        { id: "monitor", nameKey: "extraMonitor", price: 40, type: "qty", minIfChild: true },
      ],
    },
    room: {
      id: "room",
      baseFixed: 100,
      dynamic: true,
      useSeats: false,
      dayRates: [
        { days: [1, 2, 3, 4], price: 100 },
        { days: [5], price: 130 },
        { days: [0, 6], price: 160 },
      ],
      extras: [{ id: "clean", nameKey: "extraClean", price: 25, type: "once" }],
    },
    course: {
      id: "course",
      baseFixed: 45,
      dynamic: false,
      useSeats: true,
      extras: [],
    },
  };

  const state = {
    resources: ["sol", "luna"],
    serviceId: "party",
    resourceId: "sol",
    selectedDay: null,
    selectedDow: null,
    selectedSlot: null,
    extras: { child: 0, monitor: 0, clean: false },
    seats: 1,
  };

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || key;
  }

  function applyI18n() {
    document.documentElement.lang = lang === "es" ? "es" : "en";
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
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
    const seatsHint = document.getElementById("seats-hint");
    const seatsCheck = document.getElementById("seats-check");
    if (seatsHint && seatsCheck) {
      seatsHint.textContent = seatsCheck.checked ? t("seatsOnHint") : t("seatsOffHint");
    }
    document.querySelectorAll("select option[data-i18n]").forEach((opt) => {
      opt.textContent = t(opt.getAttribute("data-i18n"));
    });
    updateChipLabels();
    document.querySelectorAll("#eventos [data-es], .section-nav a[data-es]").forEach((el) => {
      const value = el.getAttribute(lang === "es" ? "data-es" : "data-en");
      if (value) el.textContent = value;
    });
    document.querySelectorAll("#eventos [data-es-value]").forEach((el) => {
      el.value = el.getAttribute(lang === "es" ? "data-es-value" : "data-en-value");
    });
    document.querySelectorAll("#eventos [data-es-placeholder]").forEach((el) => {
      el.placeholder = el.getAttribute(lang === "es" ? "data-es-placeholder" : "data-en-placeholder");
    });
    updateEventTotal();
    rebuildCalendar();
    updateSummary();
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem(STORAGE_KEY, lang);
    applyI18n();
  }

  function updateChipLabels() {
    const map = { sol: "chipSol", luna: "chipLuna" };
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
      ["sol", "luna"].forEach((id) => {
        const opt = document.createElement("option");
        opt.value = id;
        opt.textContent = labels[id] || id;
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

    const seatsCheck = document.getElementById("seats-check");
    const seatsHint = document.getElementById("seats-hint");
    function syncSeatsHint() {
      if (!seatsHint || !seatsCheck) return;
      seatsHint.textContent = seatsCheck.checked ? t("seatsOnHint") : t("seatsOffHint");
    }
    seatsCheck?.addEventListener("change", syncSeatsHint);
    syncSeatsHint();

    document.querySelectorAll("#services-repeater .cwp-repeating-single-field-actions").forEach((bar) => {
      bar.addEventListener("click", (e) => {
        if (e.target.closest(".cwp-repeating-single-field-remove")) return;
        const content = bar.parentElement?.querySelector(".cwp-repeating-single-field-content");
        if (!content) return;
        const collapsed = bar.classList.toggle("cubewp-collapse");
        content.classList.toggle("cwp-hide", collapsed);
      });
    });

    const weekdayOptions =
      lang === "es"
        ? ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "domingo"]
        : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    function makeDaySelect() {
      const sel = document.createElement("select");
      sel.className = "weekday form-control";
      weekdayOptions.forEach((d) => {
        const opt = document.createElement("option");
        opt.value = d;
        opt.textContent = d;
        sel.appendChild(opt);
      });
      return sel;
    }

    document.getElementById("add-day-rate")?.addEventListener("click", () => {
      const wrap = document.getElementById("day-rates");
      if (!wrap) return;
      const ul = document.createElement("ul");
      ul.className = "hours-select clearfix inline-layout up-4 dmm-day-rate-row";
      const liFrom = document.createElement("li");
      const fromLabel = document.createElement("span");
      fromLabel.className = "dmm-from";
      fromLabel.textContent = t("rangeFrom");
      liFrom.appendChild(fromLabel);
      liFrom.appendChild(makeDaySelect());
      ul.appendChild(liFrom);
      const liTo = document.createElement("li");
      const toLabel = document.createElement("span");
      toLabel.className = "dmm-to";
      toLabel.textContent = t("rangeTo");
      liTo.appendChild(toLabel);
      const toSel = makeDaySelect();
      toSel.selectedIndex = 3;
      liTo.appendChild(toSel);
      ul.appendChild(liTo);
      const liPrice = document.createElement("li");
      const price = document.createElement("input");
      price.type = "number";
      price.className = "form-control rate-price";
      price.value = "350";
      price.min = "0";
      liPrice.appendChild(price);
      ul.appendChild(liPrice);
      const liBtn = document.createElement("li");
      const rm = document.createElement("button");
      rm.type = "button";
      rm.className = "ybtn ybtn--small remove-rate";
      rm.innerHTML = '<span><i class="fa fa-times"></i></span>';
      rm.addEventListener("click", () => ul.remove());
      liBtn.appendChild(rm);
      ul.appendChild(liBtn);
      wrap.appendChild(ul);
    });
    document.querySelectorAll("#day-rates .remove-rate").forEach((btn) => {
      btn.addEventListener("click", () => btn.closest(".dmm-day-rate-row")?.remove());
    });

    document.getElementById("add-extra-row")?.addEventListener("click", () => {
      const wrap = document.getElementById("extra-rows");
      const row = document.createElement("div");
      row.className = "extra-row hours-rate-row";
      row.innerHTML =
        '<input type="text" class="form-control" placeholder="' +
        t("extraName") +
        '"><input type="number" class="form-control" value="10" min="0"><select class="form-control"><option>' +
        t("calcQty") +
        "</option><option>" +
        t("calcOnce") +
        '</option></select><button type="button" class="ybtn ybtn--small remove-extra">×</button>';
      row.querySelector(".remove-extra").addEventListener("click", () => row.remove());
      wrap.appendChild(row);
    });
    document.querySelectorAll("#extra-rows .remove-extra").forEach((btn) => {
      btn.addEventListener("click", () => btn.closest(".extra-row")?.remove());
    });
  }

  /* ——— Booking widget ——— */
  function getService() {
    return SERVICES[state.serviceId] || SERVICES.party;
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
      document.getElementById("booking-step-2")?.classList.add("hidden");
      document.getElementById("booking-step-1")?.classList.remove("hidden");
      document.getElementById("booking-widget")?.scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById("to-step-2")?.addEventListener("click", () => {
      document.getElementById("booking-step-1")?.classList.add("hidden");
      document.getElementById("booking-step-2")?.classList.remove("hidden");
    });
    document.getElementById("back-step")?.addEventListener("click", () => {
      document.getElementById("booking-step-2")?.classList.add("hidden");
      document.getElementById("booking-step-1")?.classList.remove("hidden");
    });
    document.getElementById("seats-stepper")?.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      let n = (state.seats || 1) + parseInt(btn.dataset.delta, 10);
      if (n < 1) n = 1;
      state.seats = n;
      const count = document.getElementById("seats-count");
      if (count) count.textContent = String(n);
      updateSummary();
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
    const totEl = document.getElementById("sum-total");
    const seatsField = document.getElementById("seats-field");
    if (seatsField) seatsField.classList.toggle("hidden", !svc.useSeats);
    if (!totEl) return;

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

    const seats = svc.useSeats ? state.seats || 1 : 1;
    const total = (base + extrasTotal) * seats;
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

  function updateEventTotal() {
    const total = document.getElementById("front-total");
    const vip = document.getElementById("front-vip");
    const picked = document.querySelector('input[name="front-price"]:checked');
    if (!total || !vip || !picked) return;
    const amount = Number(picked.value) + Number(vip.textContent || 0) * 8;
    total.textContent = amount + " €";
  }

  function addEvtRow(containerId, nameKey, priceKey) {
    const box = document.getElementById(containerId);
    const row = document.createElement("div");
    row.className = "evt-inline";
    const name = document.createElement("input");
    name.type = "text";
    name.setAttribute("data-es-placeholder", nameKey === "type" ? "Tipo de precio" : "Nombre del extra");
    name.setAttribute("data-en-placeholder", nameKey === "type" ? "Price type" : "Extra name");
    const price = document.createElement("input");
    price.type = "number";
    price.min = "0";
    price.setAttribute("data-es-placeholder", nameKey === "type" ? "Precio" : "Precio del extra");
    price.setAttribute("data-en-placeholder", nameKey === "type" ? "Price" : "Extra price");
    const euro = document.createElement("span");
    euro.textContent = "€";
    row.appendChild(name);
    row.appendChild(price);
    row.appendChild(euro);
    box.appendChild(row);
    const langNow = document.documentElement.lang === "en" ? "en" : "es";
    row.querySelectorAll("[data-es-placeholder]").forEach((el) => {
      el.placeholder = el.getAttribute(langNow === "es" ? "data-es-placeholder" : "data-en-placeholder");
    });
  }

  function initEvents() {
    const root = document.getElementById("eventos");
    if (!root) return;
    const diff = document.getElementById("evt-diff");
    const extra = document.getElementById("evt-extra");
    if (diff) {
      diff.addEventListener("change", () => {
        document.getElementById("evt-diff-box").classList.toggle("hidden", !diff.checked);
      });
    }
    if (extra) {
      extra.addEventListener("change", () => {
        document.getElementById("evt-extra-box").classList.toggle("hidden", !extra.checked);
      });
    }
    const addPrice = document.getElementById("evt-add-price");
    if (addPrice) addPrice.addEventListener("click", () => addEvtRow("evt-price-rows", "type"));
    const addExtra = document.getElementById("evt-add-extra");
    if (addExtra) addExtra.addEventListener("click", () => addEvtRow("evt-extra-rows", "extra"));
    root.querySelectorAll('input[name="front-price"]').forEach((input) => {
      input.addEventListener("change", updateEventTotal);
    });
    const minus = document.getElementById("front-vip-minus");
    const plus = document.getElementById("front-vip-plus");
    const vip = document.getElementById("front-vip");
    if (minus && plus && vip) {
      minus.addEventListener("click", () => {
        vip.textContent = String(Math.max(0, Number(vip.textContent) - 1));
        updateEventTotal();
      });
      plus.addEventListener("click", () => {
        vip.textContent = String(Number(vip.textContent) + 1);
        updateEventTotal();
      });
    }
    updateEventTotal();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLang();
    initNav();
    initResources();
    initServiceEditor();
    initBooking();
    initEvents();
    applyI18n();
  });
})();
