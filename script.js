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

// header and footer function
function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => (document.getElementById(id).innerHTML = data))
    .catch((error) => console.error(`Error loading ${file}:`, error));
}

// loadComponent("header__container", "header.html");
// loadComponent("footer__container", "footer.html");

//Action of the navigation buttons
const homeBtn = document.querySelector(".home_btn");
const contactBtn = document.querySelector(".contact_btn");
const aboutBtn = document.querySelector(".about_btn");
const servicesBtn = document.querySelector(".services_btn");
const activeBtn = document.querySelectorAll(".section-title");

const aboutSection = document.querySelector(".about-section");
const servicesSection = document.querySelector(".services-section");
const bookingSection = document.querySelector(".booking-section");
const processSection = document.querySelector(".process-section");
const testimonialSection = document.querySelector(".testimonial-section");
const travelGuideSection = document.querySelector(".travel-guide-section");
const destinationSection = document.querySelector(".destination-section");

homeBtn.classList.add("active");

activeBtn.forEach((button) => {
  button.addEventListener("click", () => {
    activeBtn.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
  });
});

homeBtn.addEventListener("click", () => {
  aboutSection.style.display = "block";
  travelGuideSection.style.display = "block";
  servicesSection.style.display = "block";
  bookingSection.style.display = "block";
  processSection.style.display = "block";
  testimonialSection.style.display = "block";
  destinationSection.style.display = "block";
});

servicesBtn.addEventListener("click", () => {
  testimonialSection.style.display = "block";
  servicesSection.style.display = "block";
  aboutSection.style.display = "none";
  travelGuideSection.style.display = "none";
  bookingSection.style.display = "none";
  processSection.style.display = "none";
  destinationSection.style.display = "none";
});

aboutBtn.addEventListener("click", () => {
  aboutSection.style.display = "block";
  travelGuideSection.style.display = "block";
  servicesSection.style.display = "none";
  bookingSection.style.display = "none";
  processSection.style.display = "none";
  testimonialSection.style.display = "none";
  destinationSection.style.display = "none";
});

document.querySelectorAll(".inner_link").forEach((links) => {
  links.addEventListener("click", () => {
    activeBtn.forEach((btn) => btn.classList.remove("active"));
    homeBtn.classList.add("active");

    aboutSection.style.display = "block";
    travelGuideSection.style.display = "block";
    servicesSection.style.display = "block";
    bookingSection.style.display = "block";
    processSection.style.display = "block";
    testimonialSection.style.display = "block";
    destinationSection.style.display = "block";
  });
});

// Scrolling logic with the links
document
  .querySelector(".inner__nav__links")
  .addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("inner_link")) {
      const refId = e.target.getAttribute("href");
      document.querySelector(refId).scrollIntoView({ behavior: "smooth" });
    }
  });

// Button Scrolling logic
const scrollToMoreBtn = document.querySelector(".scroll_to_more");
const bookBtn = document.querySelector(".book_btn");

function scrollingFun(btn, sectionScrollTo) {
  btn.addEventListener("click", function (e) {
    const section = sectionScrollTo.getBoundingClientRect();

    window.scrollTo({
      left: section.left + window.pageXOffset,
      top: section.top + window.pageYOffset,
      behavior: "smooth",
    });
  });
}

scrollingFun(scrollToMoreBtn, aboutSection);
scrollingFun(bookBtn, bookingSection);
