setInterval(() => {
    
    if (window.innerWidth < 992) {
        document.querySelector("#services .services-box").classList.remove("container")
        document.querySelector("#services .services-box").classList.add("container-fluid")
    }else {
        document.querySelector("#services .services-box").classList.remove("container-fluid")
        document.querySelector("#services .services-box").classList.add("container")
    }

    if (window.innerWidth < 700) {
        document.querySelector("#services .services-box").classList.add("d-grid")
        document.querySelector("#services .services-box").classList.remove("d-flex")
    }else {
        document.querySelector("#services .services-box").classList.remove("d-grid")
        document.querySelector("#services .services-box").classList.add("d-flex")
    }

    if (window.innerWidth < 430) {
        document.querySelector("#services .card-title").classList.add("fs-4")
        document.querySelector("#services .card-title").classList.remove("fs-3")
    }else {
        document.querySelector("#services .services-box").classList.remove("fs-4")
        document.querySelector("#services .services-box").classList.add("fs-3")
    }

}, 10);