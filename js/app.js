// This code is for slideshow
let slideIndex = 1;// defining the variable to keep track of the current slide and starts at 1 and 
showSlides(slideIndex);// initially displaying by calling showSlides(slideIndex).

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
//thi function is rersponsible for displaying the slides and dots
//according to the provided inde'n'
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
// this function helps to change the slide automatically in the given time
setInterval(() => {
  plusSlides(1);
}, 4000);



// This code is for Menu bar
//when DOM is loaded, it add the event listener to a "menu-toggle" elment
//On click, it toggles the "show" class on an element with the class "navlist-mobile", 
//presumably for displaying/hiding a mobile navigation menu.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".navlist-mobile").classList.toggle("show");
  });
});




