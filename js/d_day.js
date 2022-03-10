const addBtn = document.querySelector("#dDay_form button");
const dDayForm = document.querySelector("#dDay_form");
const dDaySetting = document.querySelector("#dDay_setting");
const dDayDateForm = document.querySelector("#dDay_setting .dDay_date");
const dDayName = document.querySelector("#dDay_setting .dDay_date input:first-child");
const dDayDate = document.querySelector("#dDay_setting .dDay_date input:nth-child(2)");
const showName = document.querySelector(".showing h2");
const showDate = document.querySelector(".showing span");
const showing = document.querySelector(".showing");
const deleteBtn = document.querySelector(".d_day .deleteBtn");

const HIDDEN = "hidden";
const DDAYNAME = "d-day_name";
const DDAYDATE = "d-day_date";
const DDAY = "d-day";

let dDay = [];

function deleteDDay() {
    dDay.splice(0);
    localStorage.removeItem(DDAY);
    dDayForm.classList.remove(HIDDEN);
    dDaySetting.classList.add(HIDDEN);
    deleteBtn.classList.add(HIDDEN);
    showing.classList.add(HIDDEN);
    saveDDay();

    showName.innerText = "";
    showDate.innerText = "";
}

function saveDDay() {
    localStorage.setItem(DDAY, JSON.stringify(dDay));
}

function enterForm() {
    dDayForm.classList.add(HIDDEN);
    dDaySetting.classList.remove(HIDDEN);
}

function settingForm(e) {
    e.preventDefault();
    const name = dDayName.value;
    const date = dDayDate.value;
    dDaySetting.classList.add(HIDDEN);
    showing.classList.remove(HIDDEN);
    deleteBtn.classList.remove(HIDDEN);

    const endDay = new Date(date).getTime();
    const today = new Date().getTime();
    const gap = (endDay-today)/1000;
    const days = Math.ceil(gap/(60*60*24));
    console.log(endDay, today, days);

    const dDayObj = {
        dDayName:name,
        dDayDate:days
    }
    dDayName.value = "";
    dDayDate.value = "";

    dDay.push(dDayObj);
    showDDay(dDayObj);
    saveDDay();
}

function showDDay(dDay) {
    if(dDay.dDayDate===0) {dDay.dDayDate="day"}
    showName.innerText = dDay.dDayName;
    showDate.innerText = `D - ${dDay.dDayDate}`;
}

const savedDDay= localStorage.getItem(DDAY);

if(savedDDay!==null) {
    const parsedDDay = JSON.parse(savedDDay)
    dDay = parsedDDay;
    parsedDDay.forEach(showDDay);
}

addBtn.addEventListener("click", enterForm);
dDayDateForm.addEventListener("submit", settingForm);
deleteBtn.addEventListener("click", deleteDDay);