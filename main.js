var receiveMsgBtn = document.querySelector("#recieve-msg-btn");
var clearBtn = document.querySelector("#clear-btn");
var affirmation = document.querySelector("#radio-btn1");
var mantra = document.querySelector("#radio-btn2");
var displayMessage = document.querySelector("#output");
var bellImg = document.querySelector("#bell-img");

function randomize(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomItem = array[randomIndex];
  return randomItem;
}

function getRandomMessage() {
  var selected = document.querySelector("input[name=switcher]:checked");
  var messages = selected.value === "affirmations" ? affirmations : mantras;
  var randomizedItem = randomize(messages);
  displayMessage.innerText = randomizedItem;
  bellImg.classList.add("hidden");
  displayMessage.classList.remove("hidden");
  clearBtn.classList.remove("hidden");
}

function clear() {
  var selected = document.querySelector("input[name=switcher]:checked");
  displayMessage.classList.add("hidden");
  bellImg.classList.remove("hidden");
  clearBtn.classList.add("hidden");
  receiveMsgBtn.setAttribute("disabled", true);
  selected.checked = false;
}

function show() {
  receiveMsgBtn.removeAttribute("disabled");
}

// 0 event click on button
// 1 define selevted category
// 2 create click event
// 3 get randomized item
// 4 send value to <p> and make it visible (hidden by the default)
// 5 hide bell image
// 6 check results

receiveMsgBtn.addEventListener("click", getRandomMessage);
affirmation.addEventListener("click", show);
mantra.addEventListener("click", show);
clearBtn.addEventListener("click", clear);
