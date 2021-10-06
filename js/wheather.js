const aa = document.getElementById("wheathers");
const city = aa.querySelector("#city");
const temp = aa.querySelector("#temp");
const bb = aa.querySelector("#wheather");
console.log(city);

function successLocation(a) {
  const lat = a.coords.latitude;
  const lon = a.coords.longitude;
  const API_key = "89a3866f6f04f62329760b39edf2c304";
  const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
  //api 호출할 때 https:// 이거 꼭 붙히기, 안 그러면 url호출이 이상하게 됨
  console.log(lat);
  console.log(lon);
  console.log(API);
  fetch(API)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    console.log(data.name)
    console.log(data.main.temp)
    console.log(data.sys.country)
    console.log(data.weather[0].main)
    city.innerText = `${data.sys.country} : ${data.name}`
    temp.innerText = `기온 : ${data.main.temp}`
    bb.innerText = `날씨 : ${data.weather[0].main}`
  });
} 

function errorLocation() {
  console.log("error");
}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation)