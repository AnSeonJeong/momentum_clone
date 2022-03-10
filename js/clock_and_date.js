const clock = document.getElementById("clock");
const thisDay = document.getElementById("this_day");
const week = ["일", "월", "화", "수", "목", "금", "토"];

function handleClockAndDate() {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}  : ${minutes} : ${seconds}`;

    const month =String(today.getMonth()+1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    const year = today.getFullYear();
    thisDay.innerText = `${year}.${month}.${date}`;
}

handleClockAndDate();
setInterval(handleClockAndDate, 1000);