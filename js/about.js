// code for FAQ
document.addEventListener("DOMContentLoaded", function () {
document.querySelector(".menu-toggle").addEventListener("click", function () {
document.querySelector(".navlist-mobile").classList.toggle("show");
console.log("click");
  });
});

function accordion() {
  const acc = document.getElementsByClassName("accordion");
  

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      // Close all other accordions
      for (var j = 0; j < acc.length; j++) {
        if (acc[j] !== this) {
          acc[j].classList.remove("active");
          acc[j].nextElementSibling.style.display = "none";
        }
      }

      // Toggle the clicked accordion
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}
accordion();
