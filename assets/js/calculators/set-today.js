function getToday(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    return (`${dd}/${mm}/${yyyy}`);
}

function setToday() {
    var end_date = document.querySelector("#end-calc");
    end_date.value = getToday();
}

setToday();