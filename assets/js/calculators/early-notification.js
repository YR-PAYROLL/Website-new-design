var month_dict = {
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
    12: 31
}
var res_dict = {
    1: [1, 1],
    2: [2, 2],
    3: [3, 3],
    4: [4, 4],
    5: [5, 5],
    6: [6, 6],
    7: [8.5, 7],
    8: [11, 8],
    9: [13.5, 9],
    10: [16, 10],
    11: [18.5, 11],
    12: [21, 12],
    13: [31, 14],
    14: [31, 15],
    15: [31, 15],
    16: [31, 16],
    17: [31, 16],
    18: [31, 17],
    19: [31, 17],
    20: [31, 18],
    21: [31, 18],
    22: [31, 19],
    23: [31, 19],
    24: [31, 20],
    25: [31, 31],
    '>25': [31, 31]
}

function finalCalc() {
    var yyyy_delta = 0;
    var mm_delta = 0;
    var senior_in_months = 0;

    // Start
    var start_input = document.querySelector("#start-calc").value;
    start_input = start_input.split("/")
    var start_dd = start_input[0]
    var start_mm = start_input[1]
    var start_yyyy = start_input[2]
    var start_date = new Date(parseInt(start_yyyy), parseInt(start_mm), parseInt(start_dd));
    // Calc Date
    var end_input = document.querySelector("#end-calc").value;
    end_input = end_input.split("/")
    var end_dd = end_input[0]
    var end_mm = end_input[1]
    var end_yyyy = end_input[2]
    var end_date = new Date(parseInt(end_yyyy), parseInt(end_mm), parseInt(end_dd));

    // Worker Type -> 1 = Monthly, 2 = Dayly/Hourly
    var radios = document.getElementsByName('btnradio');
    var worker_type = "0";
    for ( var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            worker_type = radios[i].value;
            console.log(`worker type value = ${worker_type}`)
            break;
        }
    }

    yyyy_delta = parseInt(end_yyyy) - parseInt(start_yyyy);
    if (yyyy_delta == 0) {
        yyyy_delta = 1;
    }
    mm_delta = parseInt(end_mm) - parseInt(start_mm);
    senior_in_months = (yyyy_delta * 12) + mm_delta;
    if (parseInt(end_dd) > parseInt(start_dd)) {
        senior_in_months -= 1;
    }

    if (senior_in_months > 25){
        senior_in_months = '>25';
    }

    console.log(`senior in months: ${senior_in_months}, workerType: ${worker_type}`)
    document.querySelector('#notice-days-res').innerText = res_dict[senior_in_months][parseInt(worker_type)-1];

    var end_date_of_work = new Date(parseInt(end_yyyy), parseInt(end_mm), parseInt(end_dd));
    end_date_of_work.setDate(end_date_of_work.getDate() + res_dict[senior_in_months][parseInt(worker_type)-1]);
    var end_dd = end_date_of_work.getDate();
    var end_mm = parseInt(end_date_of_work.getMonth());
    var end_yyyy = end_date_of_work.getFullYear();

    if (parseInt(end_dd) < 10){
        end_dd = `0${end_dd}`
    }
    if (parseInt(end_mm) < 10){
        end_mm = `0${end_mm}`
    }
    document.querySelector('#end-date-of-work-res').innerText = `${end_dd}/${end_mm}/${end_yyyy}`;
    document.querySelector(".result-container").classList.add("open");
}

function makeNumberForPrint(n, b, st) {
    if (n == "" || n == NaN) {
        return st;
    }
    var x = "0";
    // n = String(n);
    if (b){
        return `${x.repeat(4 - n.length)}${n}`
    }else{
        return `${x.repeat(2 - n.length)}${n}`
    }
}

function calc() {
    checkDates(flag=true);
    if (checkIfCalc()) {
        finalCalc();
    }
}

// RESULTS VIEW
var close_btn = document.querySelector(".result-container .close-btn");

close_btn.addEventListener("click", ()=>{
    document.querySelector(".result-container").classList.remove("open");
})

function checkIfCalc() {
    flag = true
    var dates_containers = document.querySelectorAll(".date-container");
    dates_containers.forEach(dc => {
        if ( dc.querySelector("input").classList.contains("is-valid") ) {
            flag = flag;
            console.log(`has is-valid class`);
        }else {
            console.log(`hasn't is-valid class`);
            flag = false;
            invalidDateInput( dc.querySelector(".error-msg"), dc.querySelector("input") );
        }
    })
    return flag
}

document.onkeyup = function(e) {
    if (e.key === 'Escape') {
        document.querySelector(".result-container").classList.remove("open");
    }
	if (e.key == 'Enter' || e.keyCode === 13) {
        calc();
    }
}