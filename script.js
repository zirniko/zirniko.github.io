/*principal
window.addEventListener("load", function() {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none"; // Oculta el preloader
  });
  */
window.addEventListener("load", function() {
  var preloader = document.getElementById("preloader");
  preloader.classList.add("preloader-hidden");
});
