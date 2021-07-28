setInterval(() => {
    document.querySelector("main").style.top = `${document.querySelector("header").clientHeight}px`;
    window_width = window.innerWidth;
    window_heigth = window.innerHeight;
    contact_bar_items = document.querySelectorAll(".contact-bar span");
    
    // contactBarController
    if (parseInt(window_width) <= 975) {
        contactBarBigScreen()
    } else {
        contactBarSmallScreen()
    } // END contactBarController
    
    document.querySelector("main").style.top = `${document.querySelector("header").clientHeight}px`
    if (parseInt(document.querySelector('main').clientHeight) < parseInt(window_heigth)) {
        document.querySelector("main").style.minHeight = `${window_heigth - document.querySelector("header").clientHeight}px`;
    }

}, 10);

function contactBarBigScreen() {
    contact_bar_items.forEach(element => {
        if (element.classList.contains("col-2")) {
            element.classList.remove("col-2");
            element.classList.add("col");
        }
    });
}
function contactBarSmallScreen() {
    contact_bar_items.forEach(element => {
        if (element.classList.contains("col")) {
            element.classList.remove("col");
            element.classList.add("col-2");
        }
    });
}