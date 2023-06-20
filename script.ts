const apiKey: string = "80c0494135a7a288b17f77c5b40a9fe3"

let forecast: [] = []
let city: string = "tokyo"

function showWeather(): any {

    city = (document.getElementById("userInput") as HTMLInputElement).value



    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        apiKey, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
            if (data.cod == 404) {
                return alert("we couldn't find the city you were looking for, are you sure you typed everything correctly?")   
            }
            else
                displayForecast(data)
            console.log(data);
        })
        .catch((error) => console.log(error))
}

function displayForecast(data: any): void {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const newTemp = parseFloat(temp)
    const { speed } = data.wind;
    document.getElementById("cardHeader")!.innerHTML = name
    document.getElementById("temp")!.innerHTML = `${Math.round(newTemp)}ºC`;
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + data.name + "')";
    (document.getElementById("icon") as HTMLImageElement).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.getElementById("humedtiy")!.innerHTML = `Humedtiy : ${humidity}%`
    document.getElementById("windSpeed")!.innerHTML = `Wind Speed : ${speed} km/h`


}