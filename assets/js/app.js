/* Polski Klub Polarny — interakcje */
(function () {
  "use strict";

  /* sticky header */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* menu mobilne */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        toggle.classList.remove("open");
      }
    });
  }

  /* reveal on scroll */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* lightbox galerii */
  var lb = document.querySelector(".lb");
  if (lb) {
    var lbImg = lb.querySelector("img");
    var lbCap = lb.querySelector(".lb-cap");
    document.querySelectorAll(".gallery figure").forEach(function (fig) {
      fig.addEventListener("click", function () {
        var img = fig.querySelector("img");
        var cap = fig.querySelector("figcaption");
        lbImg.src = img.getAttribute("data-full") || img.src;
        lbImg.alt = img.alt;
        lbCap.textContent = cap ? cap.textContent : img.alt;
        lb.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });
    var close = function () { lb.classList.remove("open"); document.body.style.overflow = ""; };
    lb.addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* rok w stopce */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
