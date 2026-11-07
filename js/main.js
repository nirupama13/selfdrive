/* MalayaSelfDrive — UI logic */
(function () {
  "use strict";

  const WHATSAPP_NUMBER = "918904358117";
  const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");
  const waLink = (msg) =>
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Scroll-reveal (IntersectionObserver) ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        // --d (set inline or by renderCars) staggers siblings revealed together
        const delay =
          parseFloat(getComputedStyle(entry.target).getPropertyValue("--d")) || 0;
        setTimeout(() => entry.target.classList.add("visible"), delay);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  function observeReveals(root) {
    (root || document)
      .querySelectorAll(".reveal:not(.visible)")
      .forEach((el) => io.observe(el));
  }

  /* ---------- Car cards (rendered from js/cars.js) ---------- */
  const grid = document.getElementById("carsGrid");
  const regionOf = (car) => (car.city === "Bangalore" ? "Bangalore" : "Odisha");

  function carCard(car, index) {
    const title = car.name + " " + car.year;
    const msg =
      "Hi MalayaSelfDrive! I'm interested in the " + title +
      " (" + car.city + ") at ₹" + car.pricePerDay +
      "/day. Please share more details.";

    const article = document.createElement("article");
    article.className = "car-card reveal";
    article.style.setProperty("--d", index * 70 + "ms");
    article.innerHTML =
      '<div class="car-media">' +
      '  <img src="' + car.image + '" alt="' + title + '" loading="lazy" width="400" height="240">' +
      '  <span class="city-tag">' + car.city + "</span>" +
      "</div>" +
      '<div class="car-body">' +
      "  <h3>" + title + "</h3>" +
      '  <p class="car-price"><strong>₹' + car.pricePerDay + "/day</strong>" +
      "<span>" + inr(car.priceExclFees) + " excluding fees</span></p>" +
      '  <p class="car-specs">' + car.transmission + " · " + car.fuel + " · " + car.seats + " Seats</p>" +
      '  <a class="btn btn-wa card-cta" href="' + waLink(msg) + '" target="_blank" rel="noopener">Add More Details</a>' +
      "</div>";
    return article;
  }

  function renderCars(region) {
    grid.innerHTML = "";
    CARS
      .filter((car) => !region || region === "All" || regionOf(car) === region)
      .forEach((car, i) => grid.appendChild(carCard(car, i)));
    observeReveals(grid);
  }

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      renderCars(chip.dataset.region);
    });
  });

  renderCars("All");

  /* ---------- Sticky header + mobile menu ---------- */
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("siteNav");

  window.addEventListener(
    "scroll",
    () => header.classList.toggle("scrolled", window.scrollY > 8),
    { passive: true }
  );

  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  /* ---------- Terms accordion ---------- */
  document.querySelectorAll(".acc-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".acc-item");
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });

  /* ---------- Review stars ---------- */
  document.querySelectorAll(".stars").forEach((el) => {
    const rating = Math.max(0, Math.min(5, Number(el.dataset.rating) || 5));
    el.innerHTML =
      "<span>" + "★".repeat(rating) + "</span>" + "☆".repeat(5 - rating);
    el.setAttribute("role", "img");
    el.setAttribute("aria-label", rating + " out of 5 stars");
  });

  /* ---------- Reviews auto-slide (mobile only) ---------- */
  const track = document.querySelector(".reviews-track");
  if (track && !reducedMotion) {
    let index = 0;
    let paused = false;
    let resumeTimer;

    const pause = () => {
      paused = true;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => (paused = false), 8000);
    };
    ["pointerdown", "touchstart", "wheel"].forEach((evt) =>
      track.addEventListener(evt, pause, { passive: true })
    );

    setInterval(() => {
      if (paused || document.hidden || window.innerWidth >= 900) return;
      index = (index + 1) % track.children.length;
      const card = track.children[index];
      track.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
    }, 3500);
  }

  observeReveals();
})();
