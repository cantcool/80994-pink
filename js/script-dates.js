(function init() { "use strict";

  if (!document.querySelector("#dates-range")) {
    return;
  };

  var _form = document.querySelector("#reg_form"),
      controls = _form.querySelector("#dates-range"),
      decrBtn = controls.querySelector("#dates-decr"),
      incrBtn = controls.querySelector("#dates-incr"),
      daysDurationInput = controls.querySelector("#dates-duration"),
      daysDuration = parseInt(daysDurationInput.getAttribute("placeholder"));

  // console.log(daysDuration);

  disableRequiringOfItemsForDebug();
  initControls();

  function initControls() {
    decrBtn.addEventListener("click", decrDays);
    incrBtn.addEventListener("click", incrDays);
  }

  function decrDays(e) {
    e.preventDefault();

    if(daysDuration <= 1) { return; }

    daysDuration -= 1;
    updateDays();
  }

  function incrDays(e) {
    e.preventDefault();

    if(daysDuration >= 356) { return; }

    daysDuration += 1;
    updateDays();
  }

  function updateDays() {
    daysDurationInput.setAttribute("placeholder", daysDuration + " " + numberToDaysWord( daysDuration ).toLowerCase() );
  }

  function numberToDaysWord(number) {
    var digit = parseInt(number.toString().substr(-1));

    if(number > 10 && number < 16) {
      return 'Дней';
    } else if (digit == 1) {
      return 'День';
    } else if (digit > 1 && digit < 5) {
      return 'Дня';
    } else {
      return 'Дней';
    }
  }

  function disableRequiringOfItemsForDebug() {
    var allInputsArray = Array.prototype.slice.call(document.querySelectorAll('input'));
    allInputsArray.forEach(function(item, i, arr) {
      item.required = false;
    });
  }


})();
