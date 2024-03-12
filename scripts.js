(() => {
  "use strict";
  window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", function () {
      var e;
      (e = document.querySelector(".feedback-widget"))
        .querySelector(".feedback-widget__btn")
        .addEventListener("click", function () {
          e.classList.toggle("active");
        });
    });
  });
})();
