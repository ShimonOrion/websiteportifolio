// Portfolio Slider
// declarando variáveis do slider
var sliderContainer = document.querySelector(".db-slider-container");
var sliderList = document.querySelector(".db-slider-list");
var sliderItem = document.querySelectorAll(".db-slider-item");
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector(".db-item-prev");
var nextItem = document.querySelector(".db-item-next");
var sliderPos = 0;
var currentSlide = document.querySelector(".db-current-slide");
var totalSlide = document.querySelector(".db-total-slide");
var currentCounter = 1;
var navItems = document.querySelectorAll(".db-item-navigator a");
var navCounter = document.querySelector(".db-navigator-counter span");

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

// Handers
var nextSliderAnim = function () {
  var lastItem = sliderListWidth - containerWidth;
  if (-1 * sliderPos === lastItem) {
    return;
  }
  sliderPos -= containerWidth;
  animate(sliderItem, { x: sliderPos });
};

var prevSliderAnim = function () {
  if (sliderPos === 0) {
    return;
  }
  sliderPos += containerWidth;
  animate(sliderItem, { x: sliderPos });
};

// Counter formatter
var counterFormatter = function (n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
};

//Counter Add
var counterAdd = function () {
  if (currentCounter >= 1 && currentCounter < sliderTotalItems) {
    currentCounter++;
    currentSlide.innerHTML = counterFormatter(currentCounter);
    navCounter.innerHTML = counterFormatter(currentCounter);
  }
};

// Counter remover
var counterRemove = function () {
  if (currentCounter > 1 && currentCounter <= sliderTotalItems) {
    currentCounter--;
    currentSlide.innerHTML = counterFormatter(currentCounter);
    navCounter.innerHTML = counterFormatter(currentCounter);
  }
};

//Set active nav

var setActiveNav = function () {
  for (var nv = 0; nv < navItems.length; nv++) {
    let myNavNum = parseInt(navItems[nv].getAttribute("data-nav"));
    if (myNavNum === currentCounter) {
      navItems[nv].classList.add("db-item-active");
    }
    animate(".db-item-active", { width: 90 + "px" });
  }
};

// Remove active nav
var changeActive = function () {
  for (var rm = 0; rm < navItems.length; rm++) {
    navItems[rm].classList.remove("db-item-active");
    animate(navItems[rm], { width: 20 + "px" });
  }

  setActiveNav();
};

// Actions
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

animate(".db-item-active", { width: 90 + "px" });

nextItem.addEventListener("click", function () {
  nextSliderAnim();
  counterAdd();
  changeActive();
});

prevItem.addEventListener("click", function () {
  prevSliderAnim();
  counterRemove();
  changeActive();
});
