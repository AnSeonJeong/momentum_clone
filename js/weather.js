const API_KEY = "31523363d51053a83b9cbf3375512937"; 

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=35.1378069&lon=126.7927116&appid=31523363d51053a83b9cbf3375512937&units=metric`
    console.log(url);
    console.log(lat, lon);

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherIcon = document.querySelector(".weather img");
        const city = document.querySelector(".weather_info li:first-child");
        const temp = document.querySelector(".weather_info li:nth-child(2)");
        const weather = document.querySelector(".weather_info li:last-child");

        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        city.innerHTML = `${data.name}`;
        temp.innerHTML = `${data.main.temp} ℃`;
        weather.innerHTML = `${data.weather[0].main}`;
    });
}

function onGeoError() {
    alert("I can't found");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);