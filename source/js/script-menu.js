(function init() { "use strict";
  var hamburger = document.querySelector("#hamburger"),
      hamburgerOpenBtn = hamburger.querySelector("#hamburger_open"),
      hamburgerCloseBtn = hamburger.querySelector("#hamburger_close"),
      naviMenu = document.querySelector("#navigationMenu");

  hamburger.addEventListener("click", function(e) {
    e.preventDefault();

    hamburgerOpenBtn.classList.toggle("navigation__hamburger-icon--js-hided");
    hamburgerCloseBtn.classList.toggle("navigation__hamburger-icon--js-displayed");

    naviMenu.classList.toggle("navigation__list--js-displayed");
  })

})();
