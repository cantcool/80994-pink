(function init() { "use strict";
  var hamburger = document.querySelector("#hamburger");
  var naviMenu = document.querySelector("#navigationMenu");


  hamburger.addEventListener("click", function(e) {
    e.preventDefault();
    naviMenu.classList.toggle("navigation__list--js-visible");
    hamburger.classList.toggle("js-toggle-hamburger-icons");
  })

})();
