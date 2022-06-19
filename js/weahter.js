//https://openweathermap.org/
const API_KEY = "d72173ee5a92c23736075ec24764e9af";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =
     `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            const city = data.name;
            const temp = Math.round(data.main.temp);
            const weather = data.weather[0].main;

            setFooter(city, temp, weather);
        });
}

function setFooter(city, temp, weather){
    const footer = document.querySelector("#weather");
    footer.querySelector("span:first-child").innerText = `${city}`;
    footer.querySelector("span:nth-child(2)").innerText = `${temp}`;
    footer.querySelector("span:last-child").innerText = `${weather}`;
}

navigator.geolocation.getCurrentPosition(onGeoOk);