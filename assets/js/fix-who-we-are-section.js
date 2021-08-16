var who_we_are_sect = document.querySelector("#who-we-are");

setInterval(() => {

    if (window.innerWidth < 995) {
        who_we_are_sect.querySelectorAll("div")[0].classList.remove("container");
        who_we_are_sect.querySelectorAll("div")[0].classList.add("container-fluid");
    }else {
        who_we_are_sect.querySelectorAll("div")[0].classList.add("container");
        who_we_are_sect.querySelectorAll("div")[0].classList.remove("container-fluid");
    }

    if (window.innerWidth < 905) {
        gridModeOn();
    }else {
        gridModeOff();
    }

    if (window.innerWidth < 500) {
        who_we_are_sect.querySelectorAll("div")[0].classList.remove("px-5");
        who_we_are_sect.querySelectorAll("div")[0].classList.add("px-2");
    }else {
        who_we_are_sect.querySelectorAll("div")[0].classList.add("px-5");
        who_we_are_sect.querySelectorAll("div")[0].classList.remove("px-2");
    }

}, 10);

function gridModeOn() {
    who_we_are_sect.querySelectorAll("div")[0].classList.remove("d-flex")
    who_we_are_sect.querySelectorAll("div")[0].classList.add("d-grid")
    who_we_are_sect.querySelectorAll("div")[0].classList.add("align-items-center")
    who_we_are_sect.querySelectorAll("div")[0].classList.add("justify-content-center")
    who_we_are_sect.querySelectorAll("div")[0].querySelector("img").classList.add("mx-auto");
    who_we_are_sect.querySelectorAll("div")[0].querySelector("div").classList.add("text-center");
}
function gridModeOff() {
    who_we_are_sect.querySelectorAll("div")[0].classList.add("d-flex")
    who_we_are_sect.querySelectorAll("div")[0].classList.remove("d-grid")
    who_we_are_sect.querySelectorAll("div")[0].classList.remove("align-items-center")
    who_we_are_sect.querySelectorAll("div")[0].classList.remove("justify-content-center")
    who_we_are_sect.querySelectorAll("div")[0].querySelector("img").classList.remove("mx-auto");
    who_we_are_sect.querySelectorAll("div")[0].querySelector("div").classList.remove("text-center");
}