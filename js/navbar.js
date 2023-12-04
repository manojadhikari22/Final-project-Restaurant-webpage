// this is for responsive menu
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".menu-toggle").addEventListener("click", function () {
      document.querySelector(".navlist-mobile").classList.toggle("show");
      console.log("click");
    });
  });
  