/* ==========================
   Portfolio Script
========================== */

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.style.transition = "opacity 0.6s ease";
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }
});

// Typing Effect
const roles = [
  "Full Stack Developer",
  "Java Developer",
  "Spring Boot Developer",
  "React Enthusiast",
  "Front End Developer"
];

const typing = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  if (!typing) return;

  const current = roles[roleIndex];

  if (!deleting) {
    typing.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typing.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

// Mobile Menu Toggle
const menuBtn = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });
}

// Sticky Header Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Scroll Reveal
const revealElements = document.querySelectorAll(
  ".project-card, .skill, .timeline-item, .box"
);

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;

    if (top < trigger) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
      element.style.transition = "all 0.8s ease";
    }
  });
}

// Initial hidden state
revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Active Navigation Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Contact Form Validation
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector("textarea");

    if (
      !name.value.trim() ||
      !email.value.trim() ||
      !message.value.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Thank you! Your message has been submitted.");

    form.reset();
  });
}

// Floating Blob Animation
const blob = document.querySelector(".blob");

if (blob) {
  let angle = 0;

  setInterval(() => {
    angle += 0.02;

    blob.style.transform =
      `translate(${Math.sin(angle) * 12}px, ${Math.cos(angle) * 12}px)`;
  }, 30);
}