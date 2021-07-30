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
    1: [12, 14, 5],
    2: [12, 14, 6],
    3: [12, 14, 6],
    4: [12, 14, 7],
    5: [12, 14, 7],
    6: [14, 16, 7],
    7: [15, 18, 7],
    8: [16, 19, 7],
    9: [17, 20, 7],
    10: [18, 21, 7],
    11: [19, 22, 8],
    12: [20, 23, 8],
    13: [20, 24, 8],
    14: [20, 24, 8],
    15: [20, 24, 8],
    16: [20, 24, 9],
    17: [20, 24, 9],
    18: [20, 24, 9],
    19: [20, 24, 9],
    20: [20, 24, 10],
    '>20': [20, 24, 10]
}

function finalCalc() {
    var vacation_year = 0;
    var vetek = 0;
    var recovery_year = 0;

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

    vacation_year = parseInt(end_yyyy) - parseInt(start_yyyy) + 1;
    var vetek = Math.abs(end_date - start_date);
    var times = 1000 * 60 * 60 * 24 * (365 / 12) * 12;
    vetek = vetek / times;
    var vetek_final = vetek.toFixed(2);
    recovery_year = Math.ceil(vetek_final)

    if (vacation_year > 20) {
        vacation_year = '>20';
    }
    if (recovery_year > 20) {
        recovery_year = '>20';
    }
    
    var five_days_res = res_dict[vacation_year][0];
    var six_days_res = res_dict[vacation_year][1];
    var entitlement_recovery = res_dict[recovery_year][2];

    document.querySelector('#five-days-work-res').innerText = five_days_res;
    document.querySelector('#six-days-work-res').innerText = six_days_res;
    document.querySelector('#entitlement-recovery-res').innerText = entitlement_recovery;
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

// RESULTS VIEW
var close_btn = document.querySelector(".result-container .close-btn");

close_btn.addEventListener("click", ()=>{
    document.querySelector(".result-container").classList.remove("open");
})

function calc() {
    checkDates(flag=true);
    if (checkIfCalc()) {
        finalCalc();
    }
}

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