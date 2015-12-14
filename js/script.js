"use strict";

(function init() {
  var hamburger = document.querySelector("#hamburger");
  var hamburgerOpen = document.querySelector("#hamburger_open");
  var hamburgerClose = document.querySelector("#hamburger_close");
  var naviMenu = document.querySelector("#navigationMenu");
  // var writeUsBtn = document.querySelector("#writeUsBtn");
  // var contactForm = document.querySelector(".contact-form");
  // var closeBtn = contactForm.querySelector(".close-btn");

  // var form = contactForm.querySelector("form");
  // var inputName = form.querySelector("input[name='name']");
  // var inputMail = form.querySelector("input[name='mail']");
  // var inputMessage = form.querySelector("input[name='message']");

  // var submitBtn = form.querySelector("input[type='submit']");

  hamburger.addEventListener("click", function(e) {
    e.preventDefault();
    naviMenu.classList.toggle("navigation__list--js-visible");
    hamburger.classList.toggle("js-toggle-hamburger-icons");
  })

  // writeUsBtn.addEventListener("click", function(e) {
  //   e.preventDefault();
  //   submitBtn.classList.remove("contact-form-error");
  //   contactForm.classList.add("contact-form-show");
  //   inputName.focus();
  // })

  // form.addEventListener("submit", function(e) {
  //   e.preventDefault();
  //   if(!(inputName.value && inputMail.value && inputMessage.value)) {
  //     submitBtn.classList.remove("contact-form-error");
  //     submitBtn.classList.add("contact-form-error");
  //   }
  // });

  // window.addEventListener("keydown", function(e) {
  //   if(e.keyCode == 27) {
  //     if(contactForm.classList.contains("contact-form-show")) {
  //      contactForm.classList.remove("contact-form-show");
  //     }
  //   }
  // })

  // closeBtn.addEventListener("click", function(e) {
  //   e.preventDefault();
  //   contactForm.classList.remove("contact-form-show");
  // })
})();
