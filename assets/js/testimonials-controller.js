setInterval(() => {
    window_width = window.innerWidth;
    console.log(window_width);
    if (window_width < 994) {
        document.querySelector("#carouselExampleControls").classList.add("w-100");
    }else {
        document.querySelector("#carouselExampleControls").classList.remove("w-100");
    }

    if (window_width < 700) {
        document.querySelectorAll(".carousel-nav-btn").forEach((e)=> {
            e.style.width = "10%";
        })
    }else {
        document.querySelectorAll(".carousel-nav-btn").forEach((e)=> {
            e.style.width = "5%";
        })
    }
}, 10);