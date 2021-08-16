const testimonials_view = document.querySelector(".testimonials .testimonials__view");
const testimonials_wrapper = document.querySelector(".testimonials .testimonials__view .testimonials-wrapper");
const testimonials = document.querySelectorAll(".testimonials .testimonials__view .testimonials-wrapper .testimonial");
var current_testimonial = 0;
var wrapper_pos = `${current_testimonial * (-100)}%`;
var timer = 0;

function moveLeft() {
    current_testimonial += 1;

    if (current_testimonial == testimonials.length) {
        current_testimonial = 0;
        testimonials_wrapper.classList.add("no-tran");
    }
    move();
    testimonials_wrapper.classList.remove("no-tran");
}
function moveRight() {
    current_testimonial -= 1;

    if (current_testimonial == -1) {
        current_testimonial = testimonials.length - 1;
        testimonials_wrapper.classList.add("no-tran");

    }
    move();
    testimonials_wrapper.classList.remove("no-tran");
}

function makeNewPos() {
    wrapper_pos = `${current_testimonial * (-100)}%`;
}

function move() {
    makeNewPos()
    testimonials_wrapper.style.right = wrapper_pos;
    testimonials.forEach((t) => {
        t.classList.remove("active");
    })
    testimonials[current_testimonial].classList.add("active");
    timer = 0;
}


setInterval(() => {
    timer += 1;
    if (timer == 7) {
        moveLeft();
    }
}, 1000);