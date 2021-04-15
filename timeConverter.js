let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let timeInSecondsEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");

function convert() {
    let hours = parseInt(hoursInputEl.value);
    let minutes = parseInt(minutesInputEl.value);
    if (hoursInputEl.value === "") {
        errorMsgEl.textContent = "Please enter a valid number of hours.";
    } else if (minutesInputEl.value === "") {
        errorMsgEl.textContent = "Please enter a valid number of minutes.";
    } else {
        errorMsgEl.textContent = "";
    }
    timeInSecondsEl.textContent = ((hours) * 60 + minutes) * 60;
}
convertBtnEl.addEventListener("click", convert);
