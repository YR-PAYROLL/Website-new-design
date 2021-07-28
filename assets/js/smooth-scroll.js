function smoothScroll(target, duration) {
    console.log("smooth link clicks")
    var target = document.querySelector(target);
    var targetPosition = target.offsetTop - (document.querySelector('header').offsetHeight * 1);
    var startPosition = window.scrollY;
    var res = 0;
    // if (target.getAttribute('id') == 'my-work') {
    //     var deg = 30 / 100;
    //     var targetHeight = target.offsetHeight;
    //     res = targetHeight * deg;
    // }
    var distance = targetPosition - startPosition - res;
    var start_time = null;

    function animation(currentTime) {
        if (start_time === null) start_time = currentTime;
        var timeElapsed = currentTime - start_time;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) {
            return (c / 2 * t * t + b)
        }
        t--;
        return (-c / 2 * (t * (t - 2) - 1) + b)
    }
    requestAnimationFrame(animation)
}

const smooth_links = document.querySelectorAll('.scroll-btn');
smooth_links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        var href = link.getAttribute('href');
        smoothScroll(href, 750);
        setTimeout(() => {
            smoothScroll(href, 100);
        }, 751);
    })
})