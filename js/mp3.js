const musicBtn = document.getElementById("musicBtn");
const music = document.querySelector("#music");
const audio = document.querySelector("audio");

const iPlay = document.createElement("i");
const iPause = document.createElement("i");
iPlay.className = "fas fa-play fa-2x";
iPause.className = "fas fa-pause fa-2x";
musicBtn.appendChild(iPlay);
function onClickMusicBtn(event) {
  if (audio.paused) {
    audio.play();
    musicBtn.appendChild(iPause);
    musicBtn.removeChild(iPlay);
  } else {
    audio.pause();
    musicBtn.appendChild(iPlay);
    musicBtn.removeChild(iPause);
  }
}

musicBtn.addEventListener("click", onClickMusicBtn);

//click하면 랜덤으로 src바뀌는 것

const audioSRC = [
  "Good For You – THBD (No Copyright Music)",
  "Movie – Alex-Productions (No Copyright Music)",
  "Together – Justhea (No Copyright Music)",
  "watchv=MkNeIUgNPQ8",
  "We Are One – Vexento (No Copyright Music)",
]

const randomNum = Math.floor(Math.random()*audioSRC.length);
console.log(randomNum);

function randomPlayAudio() {
  audio.volume = 0.75;
  audio.src = `/mp3/${audioSRC[randomNum]}.mp3`;
}

window.addEventListener("load", randomPlayAudio);
console.log(audio.src)