// const btn = document.querySelector("#imgChange");
// const white = document.querySelector("#white");
// const black = document.querySelector("#black");

// const CLASS_HIDDEN = "hidden"

// function onClickChangeImg() {
//   white.classList.toggle(CLASS_HIDDEN)
//   black.classList.toggle(CLASS_HIDDEN)  
// }

// btn.addEventListener("click", onClickChangeImg)

const images = [
  "img/달, 나무.jpg",
  "img/열기구.jpg",
  "img/car.jpg",
  "img/black.jpg"
]

const ran = Math.floor(Math.random() * images.length)

const img = document.createElement("img");
img.src = images[ran];
img.id = "backimg";

document.body.appendChild(img)