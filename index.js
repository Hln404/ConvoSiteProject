var textarea = document.querySelectorAll("textarea");

var chat = document.querySelector("#chat");
var sdChat = document.querySelector("#sdChat");

var carouselInner = document.querySelector(".carouselInner");
var carouselItems = document.querySelectorAll(".carousel-item");

var send = document.querySelector(".send");
var sdSend = document.querySelector(".sdSend");
var changeButton = document.querySelector(".change");

var current = 0;

function cleanText(event) {
    if (event.target.value === "Write your message") {
        event.target.value = "";
    }
}

function addBalloon(boxText) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.innerText = boxText;
    chat.appendChild(balloon);

    var balloonClone = balloon.cloneNode(true);
    balloonClone.className = "balloon";
    sdChat.appendChild(balloonClone)
}

function addSdBalloon(boxText) {
    var sdBalloon = document.createElement("div");
    sdBalloon.className = "sdBalloon";
    sdBalloon.innerText = boxText;
    sdChat.appendChild(sdBalloon);

    var sdBalloonClone = sdBalloon.cloneNode(true);
    sdBalloonClone.className = "sdBalloon";
    chat.appendChild(sdBalloonClone);
}

function enter() {
    var text = textarea[0].value.trim();
    if (text === "Write your message") {
        textarea[0].value = "";
    }
    else if(text === ""){
        textarea[0].value = "Write your message"
    }
    else{
        addBalloon(text);
        textarea[0].value = "";
    }
}

function sdEnter() {
    var sdText = textarea[1].value.trim();
    if (sdText === "Write your message") {
        textarea[1].value = "";
    }
    else if (sdText === ""){
        textarea[1].value = "Write your message"
    }
    else{
        addSdBalloon(sdText); 
        textarea[1].value = "";
    }
}

function enterButton(event){
    if(event.key === "Enter"){
        event.preventDefault();
        send.click();
        sdSend.click();
    }
}

function sdEnterButton(event){
    if(event.key === "Enter"){
        event.preventDefault();
        sdSend.click();
    }
}

function changeUser() {
    var moving = -current * 100;
    carouselInner.style.transform = `translateX(${moving}%)`;
    if (current === 0) {
        carouselItems[1].classList.add("sdItem");
    } else {
        carouselItems[1].classList.remove("sdItem");
    }
}

function controlButton() {
    current = (current + 1) % carouselItems.length;
    changeUser();
}

textarea[0].addEventListener("focus", cleanText);
textarea[1].addEventListener("focus", cleanText);

textarea[0].addEventListener("keypress", enterButton);
textarea[1].addEventListener("keypress", sdEnterButton);

send.addEventListener("click", enter);
sdSend.addEventListener("click", sdEnter)
changeButton.addEventListener("click", controlButton);

changeUser();