

const hamburgerBtn = document.getElementById("mobile-toggle");
const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");
const nav = document.getElementById("navbar");
const header = document.getElementById("header");
const body = document.getElementById("body");
const h1 = document.getElementById("hero");
const navLinks = document.querySelectorAll(".nav-link");
const main = document.getElementById('main')
console.log(navLinks);

const toggle = () => {
  nav.classList.toggle("translate-x-full");
   h1.classList.toggle("-z-20");
   main.classList.toggle("bg-black");
  body.classList.toggle("bg-black");
  nav.classList.toggle("h-full");
  header.classList.toggle("bg-black");
  header.classList.toggle("h-full");
  hamburger.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  console.log('hi')
};

hamburgerBtn.addEventListener("click", toggle);
navLinks.forEach((link)=>{
  link.addEventListener('click', toggle)
})
