let search = document.querySelector(".search");
let province = document.querySelector(".province");
let country = document.querySelector(".country");
let date = document.querySelector(".day");
let valueTemp = document.querySelector(".temp");
let weather = document.querySelector(".weather");
let visibility = document.querySelector(".visibility");
let wind = document.querySelector(".wind");
let sunny = document.querySelector(".sunny");
let icon = document.querySelector(".icon .sun");


 async  function AccessApi(capital){

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=943d46df905f1d830df94846c240c6e5`
    let data = await fetch(url).then(res => res.json())       
        province.innerText = data.name;
        country.innerText = data.sys.country;
        date.innerHTML = new Date().toLocaleString('vi');
        let temp = (data.main.temp - 273)
        valueTemp.innerText = Math.round(temp);
        weather.innerHTML = data.weather[0].description;
        visibility.innerHTML = data.visibility + "m";
        wind.innerHTML = data.wind.speed + " m/s";
 }

    search.addEventListener("keydown",(e)=>{
        if(e.key === "Enter"){
            let capital  = search.value.trim();
            AccessApi(capital)
        }
    })
    AccessApi("ho chi minh")

