(function init() { "use strict";
  if (!document.querySelector("#accomp-range")) {
    return;
  };

  var _form = document.querySelector("#reg_form"),
      controls = _form.querySelector("#accomp-range"),
      decrBtn = controls.querySelector("#accomp-decr"),
      incrBtn = controls.querySelector("#accomp-incr"),
      itemsContainer = _form.querySelector("#accompMembers_group"),
      itemTemplate = document.querySelector("#accomp-tpl").innerHTML,
      itemsAmountInput = controls.querySelector("#accomp-quantity"),
      itemsAmount = parseInt(itemsAmountInput.getAttribute("placeholder"));

  initControls();
  // disableRequiringOfItemsForDebug();

  function initControls() {
    decrBtn.addEventListener("click", removeLastItem);
    incrBtn.addEventListener("click", addItem);

    var fields = itemsContainer.querySelectorAll(".regform__input-group--accomp-set");

    assignItemHandlers(fields[0]);
    assignItemHandlers(fields[1]);
  }

  function removeLastItem(e) {
    e.preventDefault();

    var allItems = itemsContainer.querySelectorAll(".regform__input-group--accomp-set"),
        lastItem = allItems[allItems.length-1];

    if(allItems.length <= 0) { return; }

    lastItem.parentNode.removeChild(lastItem);
    updateIndexes();
  }

  function removeItem(e) {
    e.preventDefault();

    var thisItem = e.target.parentNode;

    thisItem.parentNode.removeChild(thisItem);
    updateIndexes();
  }

  function addItem(e) {
    e.preventDefault();

    var allItems = itemsContainer.querySelectorAll(".regform__input-group--accomp-set"),
        itemsNum = allItems.length,
        newItem;

    if(itemsNum >= 9) { return; }

    newItem = document.createElement('div');
    newItem.classList.add("regform__input-group");
    newItem.classList.add("regform__input-group--accomp-set");

    newItem.innerHTML = Mustache.render(itemTemplate, {
      "number": itemsNum + 1
    });

    itemsContainer.appendChild(newItem);

    assignItemHandlers(newItem);
    updateIndexes();
  }

  function assignItemHandlers(item) {
    var deleteBtn = item.querySelector(".regform__delete-btn");
    deleteBtn.addEventListener("click", removeItem)
  }

  function updateIndexes() {
    var fields = itemsContainer.querySelectorAll(".regform__input--person-num"),
        i,
        fieldsNumber = fields.length;

    itemsAmount = fieldsNumber;
    itemsAmountInput.value = '';
    itemsAmountInput.setAttribute("placeholder", itemsAmount + ' чел');

    for (i = 0; i < fieldsNumber; i++) {
      fields[i].setAttribute("placeholder", i + 1);
    };
  };

  function disableRequiringOfItemsForDebug() {
    var allInputsArray = Array.prototype.slice.call(document.querySelectorAll('input'));
    allInputsArray.forEach(function(item, i, arr) {
      item.required = false;
    });
  }
})();
