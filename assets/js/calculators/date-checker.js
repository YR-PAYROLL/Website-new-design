const dates_containers = document.querySelectorAll(".date-container");

function checkDates(flag=false) {
    dates_containers.forEach(dc => {
        value = dc.querySelector("input").value;
        date = value.split("/");
        if (value == "") {
            if(flag) {
                invalidDateInput(dc.querySelector(".error-msg"), dc.querySelector("input"));
            }else{
                delErrorDateInput(dc.querySelector(".error-msg"), dc.querySelector("input"));
            }
        } else {
            if (date.length == 3) {
                day = date[0].replace(/\s/g, '');
                month = date[1].replace(/\s/g, '');
                year = date[2].replace(/\s/g, '');

                if (day == "" || month == "" || year == "") {
                    invalidDateInput(dc.querySelector(".error-msg"), dc.querySelector("input"));
                } else {
                    if (parseInt(month) < 0 || parseInt(month) > 12 || parseInt(day) < 1 || parseInt(day) > days_in_month[parseInt(month)] || year.length < 4 || year.length > 4) {
                        invalidDateInput(dc.querySelector(".error-msg"), dc.querySelector("input"));
                    } else {
                        validDateInput(dc.querySelector(".error-msg"), dc.querySelector("input"));
                        dc.querySelector("input").value = `${day}/${month}/${year}`;
                    }
                }
            }
        }
        if (date.length > 3) {
            invalidDateInput(dc.querySelector(".error-msg"), dc.querySelector("input"));
        }
    })
}

function invalidDateInput(err_msg_elem, input_elem) {
    err_msg_elem.classList.add("show");
    err_msg_elem.classList.add("is-invalid");
    input_elem.classList.add("is-invalid");
    input_elem.classList.remove("is-valid");
}
function validDateInput(err_msg_elem, input_elem) {
    err_msg_elem.classList.remove("show");
    err_msg_elem.classList.remove("is-invalid");
    input_elem.classList.remove("is-invalid");
    input_elem.classList.add("is-valid");
}
function delErrorDateInput(err_msg_elem, input_elem) {
    err_msg_elem.classList.remove("show");
    err_msg_elem.classList.remove("is-invalid");
    input_elem.classList.remove("is-invalid");
    input_elem.classList.remove("is-valid");
}


days_in_month = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
}
