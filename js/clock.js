const clock = document.getElementById("clock");

handleClock()

function handleClock() {
  let today = new Date();
  let hours = today.getHours().toString().padStart(2, "0"); // 시
  let minutes = today.getMinutes().toString().padStart(2, "0");  // 분
  let seconds = today.getSeconds().toString().padStart(2, "0");  // 초
  clock.innerText = `${hours}:${minutes}:${seconds}`
}

setInterval(handleClock, 1000)