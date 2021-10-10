const musicBtn = document.getElementById("musicBtn");
const music = document.querySelector("#music");
const iframe = music.querySelector("iframe");

const iPlay = document.createElement("i");
const iPause = document.createElement("i");
iPlay.className = "fas fa-play fa-2x";
iPause.className = "fas fa-pause fa-2x";
console.log(iPlay);
musicBtn.appendChild(iPlay);

function onClickMusicBtn(event) {
  player.playVideo();
  let a = player.getPlayerState();
  console.log(a);
  if (a == 1) {
    player.pauseVideo();
    musicBtn.appendChild(iPause);
    musicBtn.removeChild(iPlay);
  } else {
    player.playVideo();
    musicBtn.appendChild(iPlay);
    musicBtn.removeChild(iPause);
  }
}

musicBtn.addEventListener("click", onClickMusicBtn);

//밑에 부터 api

const tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3.
//
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "fC71LJQVoK4",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
      onClickMusicBtn,
    },
  });
}

// 4.
function onPlayerReady(event) {
  event.target.stopVideo();
}

// 5.
let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

const newPlayer = document.querySelector("#player");
