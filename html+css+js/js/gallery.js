var overlay = document.querySelector(".db-overlay");
var frameImage = document.querySelector(".db-gallery-frame-image");
var frameContainer = document.querySelector(".db-gallery-frame-container");
var galleryImages = document.querySelectorAll(".db-thumb-img");

const getImageSrc = function () {
  for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener("click", function () {
      var imageSrc = this.getAttribute("data-src");
      frameImage.setAttribute("src", imageSrc);

      overlay.classList.toggle("db-is-open");
      frameContainer.classList.toggle("db-is-open");
    });
  }
};

getImageSrc();
