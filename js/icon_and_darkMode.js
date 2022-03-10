// icons
const icon = document.querySelectorAll("#icons li img");
const weatherBtn = document.querySelector(".weather");
const dailyBtn = document.querySelector(".daily");
const dDayBtn = document.querySelector(".d_day");
const musicBtn = document.querySelector(".music_player");
const todoBtn = document.querySelector(".todo");

function showEvent(event) {
    switch(event.target.alt) {
        case "weather":
            weatherBtn.classList.toggle('hidden');
            break;
        case "daily":
            dailyBtn.classList.toggle('hidden');
            break;
        case "d-day":
            dDayBtn.classList.toggle('hidden');
            break;
        case "music":
            musicBtn.classList.toggle('hidden');
            break;
        case "todo":
            todoBtn.classList.toggle('hidden');
            break;    
    }
}

for(let i=0; i<icon.length; i++) {
    icon[i].addEventListener("click", showEvent)
}

// darkMode
const toggleBtn = document.querySelector(".toggleBtn");
const toggleImg = toggleBtn.querySelector("img");
const toggleText = toggleBtn.querySelector("span");
const body = document.querySelector("body");
const contentsBox = document.querySelectorAll(".contents_box");
const clockColor = document.querySelector("#clock");

const color = ["#3d3d3d", "#fbfbfb"]

let darkMode = false

function doDarkMode() {
    toggleImg.src="img/outline_dark_mode_black_24dp.png"; 
    toggleText.innerText = "Dark Mode";
    toggleImg.classList.add("dark");

    toggleText.style.color = color[1];
    toggleBtn.style.backgroundColor = color[0];
    body.style.color = color[1];
    contentsBox.forEach(box => box.style.backgroundColor = color[0]);
    clockColor.style.color = color[0];
    darkMode = true;
}

function doLightMode() {
    toggleImg.src="img/outline_light_mode_black_24dp.png"; 
    toggleText.innerText = "Light Mode";
    toggleImg.classList.remove("dark");

    toggleText.style.color = color[0];
    toggleBtn.style.backgroundColor = color[1];
    body.style.color = color[0];
    contentsBox.forEach(box => box.style.backgroundColor = color[1]);
    clockColor.style.color = color[1];
    darkMode = false;
}

function handleDarkMode() {
    if(!darkMode) {
        doDarkMode();
    } else {
        doLightMode();
    }
}

toggleBtn.addEventListener("click", handleDarkMode);