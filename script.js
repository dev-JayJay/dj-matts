
// variables for displays in portfolio section
let v = document.getElementById("videos");
let w = document.getElementById("grid");
let x = document.getElementById("dj_mix");
let y = document.getElementById("events");
let z = document.getElementById("gallery");

//display for DJ-mix
function djMix() {
    x.style.display = "flex";
    w.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    v.style.display = "none";
}

//display for events
function events() {
    y.style.display = "flex";
    x.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
    v.style.display = "none";
}

//display for gallery 
function gallery() {
    z.style.display = "flex";
    y.style.display = "none";
    x.style.display = "none";
    w.style.display = "none";
    v.style.display = "none";
}

//display for vidoes
function videos() {
    v.style.display = "flex";
    y.style.display = "none";
    x.style.display = "none";
    w.style.display = "none";
    z.style.display = "none";
}

const skills_wrap = document.querySelector("skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

window.addEventListener("scroll", () => {
    skillsEffect();
});

function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if(window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}

function skillsEffect() {
    if(!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill)=> (skill.style.width = skill.dataset.progress));
}

//function for previous and next button
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("review");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";
}


//script for email input
const footer_input = document.querySelector(".footer-input");

footer_input.addEventListener("focus", () => {
    footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
    if(footer_input.value != "") return;
    footer_input.classList.remove("focus");
});

//for moblie nav links

function closeMenu() {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
    if(!navbar.classList.contains("open")) {
        navbar.classList.add("open");
        document.body.classList.add("stop-scrolling");
    } else {
        closeMenu();
    }
});
   
links.forEach( link => link.addEventListener("click", () => closeMenu()));
