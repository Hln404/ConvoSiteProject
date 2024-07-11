var writing = document.querySelectorAll("textarea");
var chat = document.querySelector("#chat");
var sdChat = document.querySelector("#sdChat");

var carouselInner = document.querySelector(".carouselInner");
var carouselItems = document.querySelectorAll(".carousel-item");

var send = document.querySelector(".send");
var sdSend = document.querySelector(".sdSend");
var changeButton = document.querySelector(".change");

var current = 0;

function cleanText() {
    if (writing[0].value === "Write your writing") {
        writing[0].value = "";
    }
    if(writing[1].value === "Write your writing"){
        writing[1].value = "";
    }
}

function addBalloonForUser(boxText, userInfo){
    var chatUser1Balloon = createBalloon(boxText, userInfo);
    var chatUser2Balloon = createBalloon(boxText, userInfo);
    chat.appendChild(chatUser1Balloon);
    sdChat.appendChild(chatUser2Balloon);
}

function createBalloon(boxText,user)
{
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.innerText = `${user}: ${boxText}`;

    return balloon;
}

function enter(){
    var text = writing[0].value.trim();
    // TODO: Figure out which user is going to send the message
    var user = "User 1";
    if(text){
        addBalloonForUser(text,user);
        writing[0].value = "";
    }
}

function enterButton(event){
    if(event.key === "Enter"){
        event.preventDefault();
        send.click();
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

writing[0].addEventListener("focus", cleanText);
writing[1].addEventListener("focus", cleanText);

writing[0].addEventListener("keypress", enterButton);

send.addEventListener("click", enter);
changeButton.addEventListener("click", controlButton);

changeUser();