"use strict";

const homeBtn = document.querySelector(".home_btn");
const contactBtn = document.querySelector(".contact_btn");
const aboutBtn = document.querySelector(".about_btn");
const servicesBtn = document.querySelector(".services_btn");
const activeBtn = document.querySelectorAll(".section-title");

const aboutSection = document.querySelector(".about-section");
const servicesSection = document.querySelector(".services-section");
const bookingSection = document.querySelector(".booking-section");
const processSection = document.querySelector(".process-section");
const contactSection = document.querySelector(".contact-display");
const testimonialSection = document.querySelector(".testimonial-section");
const travelGuideSection = document.querySelector(".travel-guide-section");
const destinationSection = document.querySelector(".destination-section");

const loder = document.querySelector(".loader");
const heroH1 = document.querySelector(".hero_h1");
const parap = document.querySelector(".para_p");
const scrollToMoreBtn = document.querySelector(".scroll_to_more");

const bookBtn = document.querySelector(".book_btn");

const tabsContainer = document.querySelector(".operations-tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");

// Spinner
loder.classList.add("loader_hidden");
function spinnerFun(
  text1,
  text2,
  display,
  about,
  service,
  travel,
  booking,
  process,
  testimonial,
  destionation,
  contact
) {
  loder.classList.remove("loader_hidden");

  setTimeout(() => {
    loder.classList.add("loader_hidden");

    // hero Text
    heroH1.textContent = text1;
    parap.textContent = text2;
    scrollToMoreBtn.style.visibility = display;

    // Section
    aboutSection.style.display = about;
    travelGuideSection.style.display = travel;
    servicesSection.style.display = service;
    bookingSection.style.display = booking;
    processSection.style.display = process;
    testimonialSection.style.display = testimonial;
    destinationSection.style.display = destionation;
    contactSection.style.display = contact;
  }, 1000);
}

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

//Action of the navigation buttons
homeBtn.classList.add("active");
activeBtn.forEach((button) => {
  button.addEventListener("click", () => {
    activeBtn.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
  });
});

homeBtn.addEventListener("click", () => {
  spinnerFun(
    "Travel. Discover. Explore.",
    "Enjoy your vacation with us and make memories to cherish forever.",
    "visible",
    "block",
    "block",
    "block",
    "block",
    "block",
    "block",
    "block",
    "none"
  );
});

servicesBtn.addEventListener("click", () => {
  spinnerFun(
    "Our Services",
    "We offer premium travel services, personalized experiences, and exclusive deals to make your adventure seamless.",
    "hidden",
    "none",
    "block",
    "none",
    "none",
    "none",
    "block",
    "none",
    "none"
  );
});

aboutBtn.addEventListener("click", () => {
  spinnerFun(
    "About Us",
    "Learn about our journey, mission, and the values that drive our passion for delivering unforgettable experiences.",
    "hidden",
    "block",
    "none",
    "block",
    "none",
    "none",
    "none",
    "none",
    "none"
  );
});

contactBtn.addEventListener("click", () => {
  spinnerFun(
    "Contact Us",
    "Learn about our journey, mission, and the values that drive our passion for delivering unforgettable experiences.",
    "hidden",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "block"
  );
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
    contactSection.style.display = "none";
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

// Process logic
tabsContainer.addEventListener("click", (e) => {
  const tabBtnsClick = e.target.closest(".operations__tab");

  if (!tabBtnsClick) return;

  console.log(tabBtnsClick);

  // remove select
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  // Add selected tab
  tabBtnsClick.classList.add("operations__tab--active");

  document
    .querySelector(`.operations__content--${tabBtnsClick.dataset.tab}`)
    .classList.add("operations__content--active");
});
