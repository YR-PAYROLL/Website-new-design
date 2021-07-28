setInterval(() => {
    document.querySelector("#hero-section").style.height = `${window.innerHeight - document.querySelector("header").clientHeight}px`;
    
    // heroCtaBtnController
    if (parseInt(window.innerWidth) <= 1000) {
        ctaBigScreen();
    } else {
        ctaSmallScreen();
    } // END heroCtaBtnController

}, 10);



function ctaBigScreen() {
    if (document.querySelector("#hero-section .cta").classList.contains("w-25")) {
        document.querySelector("#hero-section .cta").classList.remove("w-25");
        document.querySelector("#hero-section .cta").classList.add("w-50");
    }
}
function ctaSmallScreen() {
    if (document.querySelector("#hero-section .cta").classList.contains("w-50")) {
        document.querySelector("#hero-section .cta").classList.remove("w-50");
        document.querySelector("#hero-section .cta").classList.add("w-25");
    }
}