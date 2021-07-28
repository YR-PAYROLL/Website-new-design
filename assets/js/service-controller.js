const services_divs = document.querySelectorAll('section.services .service.card');
const desc_divs = document.querySelectorAll('section.services .service .card-text');

services_divs.forEach((s) => {
    s.setAttribute('data-open', 'false');
})

function closeAll() {
    services_divs.forEach((s) => {
        s.setAttribute('data-open', 'false');
        s.classList.remove("show");
        s.querySelector("i").style.opacity = '1';
    })
    desc_divs.forEach((d) => {
        d.classList.remove('show');
        d.style.height = '0px';
    })
}

function openDiv(s_div_clicked) {
    s_div_clicked.setAttribute('data-open', 'true');
    s_div_clicked.classList.add("show");
    var current_d_div = s_div_clicked.querySelector(".card-text")
    current_d_div.classList.add('show')
    current_d_div.style.height = `${current_d_div.scrollHeight}px`;
    s_div_clicked.querySelector("i").style.opacity = '0';
}

services_divs.forEach((s) => {
    s.addEventListener('click', () => {
        if (s.getAttribute('data-open') == 'false'){
            console.log('close')
            closeAll();
            openDiv(s);
        }else{
            closeAll();
        }
    })
})