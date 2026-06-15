
// ===============================
// Wait for DOM to Load
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // Mobile Menu
  // ===============================
  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("show");
    });

    document.querySelectorAll("#nav a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("show");
      });
    });
  }

  // ===============================
  // Typing Effect
  // ===============================
  const typingElement = document.getElementById("typing");

  const roles = [
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot Developer",
    "React Developer",
    "Frontend Developer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {

    if (!typingElement) return;

    const current = roles[roleIndex];

    if (!isDeleting) {

      typingElement.textContent =
        current.substring(0, charIndex);

      charIndex++;

      if (charIndex > current.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
        return;
      }

    } else {

      typingElement.textContent =
        current.substring(0, charIndex);

      charIndex--;

      if (charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
      }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect();

  // ===============================
  // Sticky Header
  // ===============================
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {
      header.style.background = "rgba(9,9,15,0.95)";
    } else {
      header.style.background = "rgba(9,9,15,0.75)";
    }

  });

  // ===============================
  // Scroll Reveal
  // ===============================
  const revealItems = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .timeline-item"
  );

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

        }

      });

    },
    {
      threshold: 0.15
    }
  );

  revealItems.forEach((item) => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.7s ease";

    observer.observe(item);

  });

  // ===============================
  // Active Navigation
  // ===============================
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#nav a");

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

      const top = section.offsetTop - 120;
      const height = section.offsetHeight;

      if (
        window.scrollY >= top &&
        window.scrollY < top + height
      ) {
        current = section.id;
      }

    });

    navLinks.forEach((link) => {

      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }

    });

  });

  // ===============================
  // Smooth Scroll
  // ===============================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (e) {

      e.preventDefault();

      const target =
        document.querySelector(this.getAttribute("href"));

      if (target) {

        target.scrollIntoView({
          behavior: "smooth"
        });

      }

    });

  });

  // ===============================
  // Footer Year
  // ===============================
  const copyright =
    document.querySelector(".copyright");

  if (copyright) {

    copyright.textContent =
      `© ${new Date().getFullYear()} Barath M. All Rights Reserved.`;

  }

});

