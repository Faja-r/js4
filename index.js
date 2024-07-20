
const Apikey="9bf2b6f8d80987ac43b0e0b8c27f9fd2";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore";

async function checkWeather(){
    const response = await fetch(apiurl + '&appid=${Apikey}');
    var data = await response.json();
    console.log(data);
}
checkWeather();