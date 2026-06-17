/* The Chandos Arms — site interactions (vanilla JS, no dependencies) */
(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("open");
  }
  function openMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "true");
    menu.classList.add("open");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      expanded ? closeMenu() : openMenu();
    });
    // Close when a link is tapped
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
    // Reset when returning to desktop width
    var mq = window.matchMedia("(min-width: 861px)");
    (mq.addEventListener ? mq.addEventListener.bind(mq, "change") : mq.addListener.bind(mq))(closeMenu);
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (revealEls.length) {
    if (reduce || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var io = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      revealEls.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Highlight today's row in any hours table ---------- */
  var today = new Date().getDay(); // 0 = Sun ... 6 = Sat
  document.querySelectorAll("[data-day]").forEach(function (row) {
    if (parseInt(row.getAttribute("data-day"), 10) === today) {
      row.classList.add("is-today");
    }
  });

  /* ---------- Subtle header shade after scroll ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.style.background = window.scrollY > 30
        ? "rgba(20, 26, 37, 0.96)"
        : "rgba(20, 26, 37, 0.86)";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
