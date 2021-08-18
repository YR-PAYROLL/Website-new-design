$(document).ready(function () {
    // window.location.hash = ""
    if (window.location.hash !== "") {
        var currentHash = window.location.hash
        var dest = 0
        if (currentHash !== "#hero-section") {
            dest = $(currentHash).offset().top - $("nav").innerHeight() - $(".contact-bar").innerHeight() + $("nav ul").innerHeight()
            if ($(window).width() < 992) {
                setTimeout(() => {
                    dest = $(currentHash).offset().top - $("nav").innerHeight() - $(".contact-bar").innerHeight() + $("nav ul").innerHeight()
                }, 200);
            }
        }
        $('html, body').animate({
            scrollTop: 0
        }, 10, function () {
            document.location.hash = ''

            setTimeout(() => {
                $('html, body').animate({
                    scrollTop: dest
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    

                });
            }, 10);

        });


    }

    // Add smooth scrolling to all links
    $(".scroll-btn").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            var dest = 0
            if (hash !== "#hero-section") {
                dest = $(hash).offset().top - $("nav").innerHeight() - $(".contact-bar").innerHeight() + $("nav ul").innerHeight()
                if ($(window).width() < 992) {
                    setTimeout(() => {
                        dest = $(hash).offset().top - $("nav").innerHeight() - $(".contact-bar").innerHeight();
                    }, 200);
                }
            }
            // else {
            //     dest = $(hash).offset().top - $("header").innerHeight()
            // }
            $('html, body').animate({
                scrollTop: dest
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                document.location.hash = ''
                

            });
        } // End if
    });
});