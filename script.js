const apiKey = '81f72ea9ba3e0ec01e6adaad48943f30';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchButton = document.querySelector('.search button');
const searchInput = document.querySelector('.search input');
const icon = document.querySelector('.weather-icon');
 
// const tmp = fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=mumbai&appid=81f72ea9ba3e0ec01e6adaad48943f30');
async function checkWeather(){
    const res = await fetch(apiUrl+`${searchInput.value}`+`&appid=${apiKey}`)
    if(res.status == '404'){
        alert('Enter valid city name !!')
    }
   else{
    const data = await res.json();
    console.log(data);
    document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#humid-per').innerHTML =Math.round(data.main.humidity);
    document.querySelector('#wind-num').innerHTML = Math.round(data.wind.speed);
    

    if (data.weather[0].main == 'Clouds') {
        icon.innerHTML = "<i class='ri-cloudy-line'></i>";
    }
    else if (data.weather[0].main == 'Haze') {
        icon.innerHTML = "<i class='ri-haze-fill'></i>";
    }
    else if (data.weather[0].main == 'Mist') {
        icon.innerHTML = "<i class='ri-mist-line'></i>"
    }
    else if (data.weather[0].main == 'Clear') {
        icon.innerHTML = "<i class='ri-sun-fill'></i>"
    }
    else if (data.weather[0].main == 'Rain') {
        icon.innerHTML = "<i class='ri-showers-fill'></i>"
    }
    else if (data.weather[0].main == 'Rain') {
        icon.innerHTML = "<i class='ri-showers-fill'></i>"
    }
    else if (data.weather[0].main == 'Rain') {
        icon.innerHTML = "<i class='ri-showers-fill'></i>"
    }
    document.querySelector('.weather').style.display = 'block';
   }

   
        

    
}


searchButton.addEventListener('click',()=>{
    document.querySelector('.weather').style.display = 'none';
    checkWeather();
});

searchInput.addEventListener('keypress',(e)=>{
    document.querySelector('.weather').style.display = 'none';
    if (e.key === "Enter") {
        checkWeather();
    }
});

