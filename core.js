document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
    backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

