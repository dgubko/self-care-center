var receiveMsgBtn = document.querySelector("#recieve-msg-btn");
var clearBtn = document.querySelector("#clear-btn");
var affirmation = document.querySelector("#radio-btn1");
var mantra = document.querySelector("#radio-btn2");
var displayMessage = document.querySelector("#output");
var bellImg = document.querySelector("#bell-img");
var likeBtn = document.querySelector("#likeBtn");
var unlikeBtn = document.querySelector("#unlikeBtn");
var favMsg = document.querySelector("#favBtn");
var msgBox = document.querySelector(".message-box");
var inputBox = document.querySelector(".input-box");
var favBox = document.querySelector(".fav-box");
var typeOfMsg = document.querySelector("#message-type-text");
var goBackBtn = document.querySelector("#go-backBtn");
var likedMessages = [];

receiveMsgBtn.addEventListener("click", getRandomMessage);
affirmation.addEventListener("click", show);
mantra.addEventListener("click", show);
clearBtn.addEventListener("click", clear);
likeBtn.addEventListener("click", likeBtnChange);
unlikeBtn.addEventListener("click", deleteFavMessage);
favMsg.addEventListener("click", showFavorites);
goBackBtn.addEventListener("click", goBack);
favBox.addEventListener("click", deleteFavFromList);

function displayFavElements() {
  favBox.innerHTML = "";
  for (var i = 0; i < likedMessages.length; i++) {
    favBox.innerHTML += `
      <li>
        <p>${likedMessages[i]}</p>
        <button class="deleteBtn">X</button>
      </li>
    `;
  }
}

function deleteFavFromList(event) {
  if (event.target.classList.contains("deleteBtn")) {
    for (var i = 0; i < likedMessages.length; i++) {
      if (likedMessages[i] === event.target.previousElementSibling.innerText) {
        if (likedMessages[i] === displayMessage.innerText) {
          likeBtn.classList.remove("hidden");
          unlikeBtn.classList.add("hidden");
        }
        likedMessages.splice(i, 1);
        event.target.closest("li").remove();
      }
    }
    if (!likedMessages.length) {
      favBox.innerHTML = `<p>You don't have any favorite messages so far!</p>`;
    }
  }
}

function goBack() {
  goBackBtn.classList.add("hidden");
  inputBox.classList.remove("hidden");
  msgBox.classList.remove("hidden");
  favBox.classList.add("hidden");
  typeOfMsg.innerText = "Which type of message?";
}

function showFavorites() {
  goBackBtn.classList.remove("hidden");
  inputBox.classList.add("hidden");
  msgBox.classList.add("hidden");
  favBox.classList.remove("hidden");
  typeOfMsg.innerText = "Favorites";
  if (likedMessages.length) {
    displayFavElements();
  }
}

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
  likeBtn.classList.remove("hidden");
  unlikeBtn.classList.add("hidden");
  favMsg.classList.remove("hidden");
  if (likedMessages.includes(randomizedItem)) {
    likeBtn.classList.add("hidden");
    unlikeBtn.classList.remove("hidden");
  }
}

function clear() {
  var selected = document.querySelector("input[name=switcher]:checked");
  displayMessage.classList.add("hidden");
  bellImg.classList.remove("hidden");
  clearBtn.classList.add("hidden");
  receiveMsgBtn.setAttribute("disabled", true);
  selected.checked = false;
  likeBtn.classList.add("hidden");
  unlikeBtn.classList.add("hidden");
  favMsg.classList.add("hidden");
  likedMessages = [];
}

function show() {
  receiveMsgBtn.removeAttribute("disabled");
}

function likeBtnChange() {
  likeBtn.classList.add("hidden");
  unlikeBtn.classList.remove("hidden");
  saveFavMessage();
}

function saveFavMessage() {
  likedMessages.push(displayMessage.innerText);
}

function deleteFavMessage() {
  likeBtn.classList.remove("hidden");
  unlikeBtn.classList.add("hidden");
  for (var i = 0; i < likedMessages.length; i++)
    if (displayMessage.innerText === likedMessages[i]) {
      likedMessages.splice(i, 1);
    }
}
