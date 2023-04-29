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

// EmailJs
function sendmail() {
  var params = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    sujet: document.getElementById("sujet").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_2trxrnt";
  const templateID = "template_j2qs4v8";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("firstname").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("sujet").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Votre message a bien été envoyer !");
    })
    .catch((err) => console.log(err));
}
