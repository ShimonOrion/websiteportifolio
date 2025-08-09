/* Testes */

/*  Declarando Variáveis   */

var btnContact = document.querySelector(".db-btn-contact");
var contactInfo = document.querySelector(".db-contact-info");
var toggleModal = document.querySelectorAll(".db-toggle-modal");
var toggleMenu = document.querySelectorAll(".db-toggle-menu");
var menuMobile = document.querySelector(".db-menu-mob");
var btnMenuIcon = document.querySelector(".db-btn-mob ion-icon");

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

for (var m = 0; m < toggleMenu.length; m++) {
  toggleMenu[m].addEventListener("click", function () {
    var overlay = document.querySelector(".db-menu-overlay");
    overlay.classList.toggle("db-is-open");
    menuMobile.classList.toggle("db-menu-is-closed");
    menuMobile.classList.toggle("db-menu-is-open");

    var icon = btnMenuIcon.getAttribute("name");
    if (icon === "close") {
      btnMenuIcon.setAttribute("name", "menu");
    } else {
      btnMenuIcon.setAttribute("name", "close");
    }
  });
}

// Função para exibir/ocultar modal

for (var i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function () {
    var overlay = document.querySelector(".db-overlay");
    var modalOrcamento = document.querySelector("#db-modal-orcamento");

    overlay.classList.toggle("db-is-open");
    modalOrcamento.classList.toggle("db-is-open");
    modalOrcamento.classList.toggle("db-slide-top-in");
  });
}

var triggerTopbar = document.querySelector(".db-trigger-topbar");
var topbar = document.querySelector(".db-topbar");
var logo = document.querySelector(".db-logo");
var waypointTopbar = new Waypoint({
  element: triggerTopbar,
  handler: function () {
    topbar.classList.toggle("db-topbar-bg");
    logo.classList.toggle("db-logo-shorten");
    logo.classList.toggle("db-logo-big");
  },
  offset: "50px",
});
