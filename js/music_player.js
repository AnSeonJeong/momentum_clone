const music = [
    {
        mp3: "백예린 - 산책.mp3",
        art: "산책.jpg",
        name: "산책" 
    },
    {
        mp3: "백예린 - 그럴 때 마다.mp3",
        art: "그럴때마다.jpg",
        name: "그럴 때 마다" 
    },
    {
        mp3: "백예린 - 한계.mp3",
        art: "한계.jpg",
        name: "한계" 
    },
    {
        mp3: "백예린 - 왜 날.mp3",
        art: "왜날.jpg" ,
        name: "왜? 날"
    },
    {
        mp3: "백예린 - lovelovelove.mp3",
        art: "lovelovelove&Mr.gloomy.jpg",
        name: "lovelovelove"
    },
    {
        mp3: "백예린 - Mr gloomy.mp3",
        art: "lovelovelove&Mr.gloomy.jpg",
        name: "Mr.gloomy" 
    },
    {
        mp3: "백예린 - Antifreeze.mp3",
        art: "안티프리즈.jpg", 
        name: "Antifreeze"
    },
    {
        mp3: "백예린 - 돌아가자.mp3",
        art: "돌아가자.jpg",
        name: "돌아가자" 
    },
    {
        mp3: "백예린 -  As I am.mp3",
        art: "as i am.jpg",
        name: "As I am" 
    },
    {
        mp3: "백예린 - Love you on Christmas.mp3",
        art: "love you on christmas.jpg",
        name: "Love you on Christmas" 
    },
    {
        mp3: "백예린 - 어느 새_디깅클럽서울 Ver..mp3",
        art: "어느 새.jpg",
        name: "어느 새 (디깅클럽서울 Ver.)" 
    },
    {
        mp3: "백예린 - 지켜줄게.mp3",
        art: "지켜줄게.jpg",
        name: "지켜줄게" 
    },
    {
        mp3: "백예린 - Lovegame.mp3",
        art: "lovegame.jpg",
        name: "Lovegame" 
    },
]

const albumArt = document.querySelector(".music_player .music_img img");
const musicName = document.querySelector(".info .name");
const audio = document.querySelector("audio");
const prevBtn = document.querySelector(".nav .prev");
const playBtn = document.querySelector(".nav .play");
const playBtnImg = playBtn.querySelector("img");
const nextBtn = document.querySelector(".nav .next");
const progressBar = document.querySelector(".info .progress .bar");
const musicStart = document.querySelector(".info .progress .time .start");
const musicEnd = document.querySelector(".info .progress .time .end");

const PAUSED = "paused";
const ROTATE = "rotate";

setInterval(()=>{
    let min = String(Math.round(audio.currentTime%60)).padStart(2, "0");
    let sec = String(parseInt(audio.currentTime/60)).padStart(2, "0");

    if(sec===60) {
        min= `0${parseInt(audio.currentTime/60)+1}`; 
        sec="00";
    }
    musicStart.innerText = `${sec}:${min}`;
},1000)

function timeOfMusic() {
    const min = String(parseInt(audio.duration/60)).padStart(2, "0");
    const sec = String(Math.round(audio.duration%60)).padStart(2, "0");
    musicEnd.innerText = `${min}:${sec}`;
}

function loadMusic(index) {
    audio.src = `mp3/${music[index].mp3}`;
    albumArt.src = `img/${music[index].art}`;
    musicName.innerText = music[index].name;
}

function playMusic() {
    playBtn.classList.remove(PAUSED);
    playBtnImg.src="img/pause-solid.svg";
    albumArt.classList.add(ROTATE);
    musicBar();
    audio.play();
}

function handlePlayBtn() {
    if(playBtn.classList[1] === PAUSED) {
        playMusic();
    } else {
        playBtn.classList.add(PAUSED);
        playBtnImg.src="img/play-solid.svg";
        albumArt.classList.remove(ROTATE);
        audio.pause();
    }
}

let i = 0;

function nextMusic() {
    loadMusic(i);
    playMusic();
}

function handleNextBtn() {
    i++;
    i %= music.length;
    nextMusic();
}

function handlePrevBtn() {
    i--;
    if(i < 0) {
        i = music.length-1;
    } 
    nextMusic();
}

function musicBar() {
    setInterval(()=>{
        let percentage = (audio.currentTime)/(audio.duration)*100
        progressBar.style.width = `${percentage}%`;
    },1000);
}

audio.addEventListener("loadedmetadata", timeOfMusic);
audio.addEventListener("ended", handleNextBtn);
playBtn.addEventListener("click", handlePlayBtn);
nextBtn.addEventListener("click", handleNextBtn);
prevBtn.addEventListener("click", handlePrevBtn);

