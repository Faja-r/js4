const apikey = "9bf2b6f8d80987ac43b0e0b8c27f9fd2";
const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
const searchInput=document.querySelector(".search input")
const searchbutton=document.querySelector(".search button")

async function checkweather(api_url) {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
}
searchbutton.addEventListener("click", ()=>{
    checkweather(searchInput.value);
})


