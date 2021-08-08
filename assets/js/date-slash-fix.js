var date_inputs = document.querySelectorAll(".date-input");
date_inputs.forEach(e => {
    setInterval(() => {
        // console.log(e.value)
        var value = e.value;
        if (value.length > 2 && value[2] != "/" && value[1] != "/") {
            var newVal = ""
            for (var i = 0; i < value.length; i++) {
                if (i == 2) {
                    newVal = `${newVal}/`
                }
                newVal = `${newVal}${value[i]}`
                e.value = newVal;
            }
        }

        if (value.length > 5 && value[5] != "/") {
            var newVal = ""
            for (var i = 0; i < value.length; i++) {
                if (i == 5) {
                    newVal = `${newVal}/`
                }
                newVal = `${newVal}${value[i]}`
                e.value = newVal;
            }
        }
    }, 10);
});