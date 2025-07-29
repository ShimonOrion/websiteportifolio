/*  Declarando Variáveis   */

var btnContact = document.querySelector(".db-btn-contact");
var contactInfo = document.querySelector(".db-contact-info");
var toggleModal = document.querySelectorAll(".db-toggle-modal");

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

// Animando elementos com Waypoints
var myScrollDown = document.querySelector(".db-scroll-down");
var waypointScrollDown = new Waypoint({
  element: myScrollDown,
  handler: function () {
    myScrollDown.classList.toggle("db-fade-out");
  },
  offset: "80%",
});

// Portfolio Slider

// declarando variáveis do slider

var sliderContainer = document.querySelector(".db-slider-container");
var sliderList = document.querySelector(".db-slider-list");
var sliderItem = document.querySelectorAll(".db-slider-item");
var sliderListWidth = null;

// Capturando larguras individuais

var containerWidth = sliderContainer.parentElement.offsetWidth;

// Passando larguras dinamicamente
sliderContainer.style.width = containerWidth + "px";

for (var p = 0; p < sliderItem.length; p++) {
  sliderItem[p].style.width = containerWidth + "px";

  var sliderItemWidth = sliderItem[p].offsetWidth;
  sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + "px";

// Fazendo animação do slider onClick

var prevItem = document.querySelector(".db-item-prev");
var nextItem = document.querySelector(".db-item-next");

nextItem.addEventListener("click", function () {
  anime({
    targets: sliderList,
    translateX: -1000,
  });
  console.log("clicou?");
});
