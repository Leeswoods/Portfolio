// Creating button click show hide navbar

var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function () {
  this.classList.toggle("click");
  nav.classList.toggle("open");
});

// Typed JS for typing text effect
var typed = new Typed(".input", {
  strings: [
    "Etudiant en BTS SIO SISR",
    "En recherche d'une alternance",
    "Développeur Web",
    "Passionné d'Informatique",
    "Investi",
    "Disponible sur Paris",
  ],
  typeSpeed: 60,
  backSpeed: 60,
  loopCount: Infinity,
  loop: true,
});
