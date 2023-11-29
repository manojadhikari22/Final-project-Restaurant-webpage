// This code is for slidesow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = Array.from(document.getElementsByClassName("mySlides"));
  const dots = Array.from(document.getElementsByClassName("dot"));

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

setInterval(() => {
  plusSlides(1);
}, 4000);

// This code is for Menu bar
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".navlist-mobile").classList.toggle("show");
  });
});




