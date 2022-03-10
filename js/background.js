const images = [
    "다이노탱 배경1.jpg",
    "다이노탱 배경2.jpg",
    "다이노탱 배경3.jpg",
    "다이노탱 배경4.jpg",
];

const bgImage = images[Math.floor(Math.random()*images.length)];
console.log(bgImage);

const img = document.createElement("img");
img.src = `img/${bgImage}`;
img.className = "bgImg";
document.body.appendChild(img);