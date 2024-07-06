var carouselInner = document.querySelector(".carouselInner");
var carouselItems = document.querySelectorAll(".carousel-item");
var changeButton = document.querySelector(".change");
var current = 0;


function changeUser(){
    var moving = -current * 100;
    carouselInner.computedStyleMap.transform = "translateX(${moving}%)";
}

function controlButton(){
    current = (current + 1) % carouselItems.length;
    changeUser();
}

changeButton.addEventListener("click", controlButton);

changeUser();