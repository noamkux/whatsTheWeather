var apiKey = "80c0494135a7a288b17f77c5b40a9fe3";
var forecast = [];
var city = "tokyo";
function showWeather() {
    document.getElementById("moveHeader").classList.remove("moveHeader");
    document.getElementById("moveHeader").classList.add("moveHeader");
    setTimeout(function () {
        document.getElementById("moveHeader").classList.remove("moveHeader");
    }, 3000);
    city = document.getElementById("userInput").value;
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        apiKey, { method: "GET" })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        if (data.cod == 404) {
            return alert("we couldn't find the city you were looking for, are you sure you typed everything correctly?");
        }
        else
            displayForecast(data);
        console.log(data);
    })
        .catch(function (error) { return console.log(error); });
}
function displayForecast(data) {
    var name = data.name;
    var _a = data.weather[0], icon = _a.icon, description = _a.description;
    var _b = data.main, temp = _b.temp, humidity = _b.humidity;
    var newTemp = parseFloat(temp);
    var speed = data.wind.speed;
    document.getElementById("cardHeader").innerHTML = name;
    document.getElementById("temp").innerHTML = "".concat(Math.round(newTemp), "\u00BAC");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + data.name + "')";
    document.getElementById("icon").src = "https://openweathermap.org/img/wn/".concat(icon, ".png");
    document.getElementById("humedtiy").innerHTML = "Humedtiy : ".concat(humidity, "%");
    document.getElementById("windSpeed").innerHTML = "Wind Speed : ".concat(speed, " km/h");
}
