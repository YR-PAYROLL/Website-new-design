setInterval(() => {
    document.querySelector("#hero-section").style.minHeight = `${window.innerHeight - document.querySelector("header").clientHeight}px`;
}, 10);