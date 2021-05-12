function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = (response.data.name);
    descriptionElement.innerHTML = (response.data.weather[0].description);
    humidityElement.innerHTML = (response.data.main.humidity);
    windElement.innerHTML = Math.round(response.data.wind.speed);
} 

let apiKey = "576745a04c3376d5329a519bd2c46d25";
let apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=Ciudad de Mexico&appid=576745a04c3376d5329a519bd2c46d25&units=metric";

axios.get(apiUrl).then(displayTemperature);


