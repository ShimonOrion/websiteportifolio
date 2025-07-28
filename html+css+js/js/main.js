/*  Declarando Variáveis   */

var btnContact = document.querySelector(".db-btn-contact");
var contactInfo = document.querySelector(".db-contact-info");

/*  Page Preloader  */

window.addEventListener("load", function () {
  var pagePreloader = document.querySelector(".db-preloader");
  pagePreloader.classList.add("db-fade-out");
});

/*  Função para exibir/ocultar informações de contato  */
btnContact.addEventListener("click", function () {
  var boxContact = document.querySelector(".db-contact-info");

  boxContact.classList.toggle("db-is-open");

  this.classList.toggle("db-change-icon");
});
