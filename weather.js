//1. get Dom elements
//2. get event listener
//3. get current location
//4. http request
//5. display data
//6. transform data

var humidity, pressure, temperature, windSpeed, weatherSummary, yourCity;
var enterCity = document.getElementById('city');
var clear = "url('https://i2-prod.examinerlive.co.uk/incoming/article10372520.ece/ALTERNATES/s1227b/JS75768352.jpg')";
var cloud = "url('https://cdn.shopify.com/s/files/1/1406/4308/articles/Looking-at-the-clouds-can-help-you-predict-bad-weather-_697_6052888_0_14103285_1000_1024x.jpg')";
var rain = "url('https://ak.picdn.net/shutterstock/videos/1013273603/thumb/3.jpg')";

function getElement(id) {
  return document.getElementById(id);
}

window.onload = function () {
  humidity = getElement('current-humidity');
  pressure = getElement('current-pressure');
  temperature = getElement('current-temperature');
  windSpeed = getElement('current-wind-speed');
  weatherSummary = getElement('current-weather-summary');
  yourCity = getElement('your-city');
};
enterCity.addEventListener('change', getCity);

function getCurrentWeather() {
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      getRemovedWeatherData(lat, lon); //отримати лет і лонг в function getRemovedWeatherData
    })
  } else alert ('This browser doesn\'t support ');
}

function getCity() {
  var searchedCity = event.target.value;
  // console.log(event.target.value);
  getCityWeather(searchedCity)
}

function getRemovedWeatherData(lat, lon) {
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + 'cb72d8152e2289aaf77ef1eaf52ed760')
    .then(function(response) {
    return response.json();
    })
  .then(function (data) {
    displayWeather(data);
    getBgi();
  })
}

function displayWeather(data) {
  console.log(data);
  temperature.innerText = (data.main.temp -273.15).toFixed(1) + ' Celcium';
  console.log(temperature.innerText = (data.main.temp -273.15).toFixed(1) + ' Celcium');
  humidity.innerText = data.main.humidity + '%';
  pressure.innerText = data.main.pressure + ' hpa';
  windSpeed.innerText = data.wind.speed + ' m/s';
  weatherSummary.innerText = data.weather[0].main;
  yourCity.innerText = data.name;
}

function getBgi() {
  if (weatherSummary.innerText === 'Clear'){
    document.body.style.backgroundImage = clear;
  } else if (weatherSummary.innerText === 'Clouds'){
    document.body.style.backgroundImage = cloud;
  } else if (weatherSummary.innerText === 'Rain') {
    document.body.style.backgroundImage = rain;
  }

}

function getCityWeather(searchedCity) {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + searchedCity + '&appid=' + 'cb72d8152e2289aaf77ef1eaf52ed760')
    .then(function(response) {
      return response.json();
    })
    .then(function (data) {
      displayWeather(data);
      getBgi();
    })
}



