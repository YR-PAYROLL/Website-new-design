setInterval(() => {
    document.querySelector("#hero-section").style.height = `${window.innerHeight - document.querySelector("header").clientHeight}px`;
}, 10);