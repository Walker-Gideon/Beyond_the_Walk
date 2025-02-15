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

loadComponent("header__container", "header.html");
loadComponent("footer__container", "footer.html");

//
const homeBtn = document.querySelector(".home_btn").classList.add("active");
const activeBtn = document.querySelectorAll(".section-title");

activeBtn.forEach((button) => {
  button.addEventListener("click", () => {
    activeBtn.forEach((btn) => btn.classList.remove("active"));

    console.log("click");

    button.classList.add("active");
  });
});
