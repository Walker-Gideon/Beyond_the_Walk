"use strict";

// Pages link on arrow down
const page_sidebtn = document.querySelector(".has-submenu");
const page = document.querySelector(".section-title-pages");

if (page_sidebtn && page) {
  page_sidebtn.addEventListener("mouseenter", () => {
    page.style.color = "#5ec576";
  });

  page_sidebtn.addEventListener("mouseleave", () => {
    page.style.color = "#ffff";
  });
} else {
  console.error("Element(s) not found:", { page_sidebtn, page });
}

/*
// Testimonal slider
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide-testimonial");
  const dotsContainer = document.querySelector(".dots");
  let currentIndex = 0;
  let interval;

  // Create dots dynamically
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.setAttribute("data-index", index);
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function updateActiveSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active", "prev", "next");
      if (i === index) {
        slide.classList.add("active");
      } else if (i === (index - 1 + slides.length) % slides.length) {
        slide.classList.add("prev");
      } else if (i === (index + 1) % slides.length) {
        slide.classList.add("next");
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateActiveSlide(currentIndex);
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 3000); // Change slide every 3s
  }

  // Click event for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      clearInterval(interval);
      currentIndex = parseInt(e.target.getAttribute("data-index"));
      updateActiveSlide(currentIndex);
      startAutoSlide();
    });
  });

  updateActiveSlide(currentIndex);
  startAutoSlide();
});
*/
