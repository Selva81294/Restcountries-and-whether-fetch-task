let temp1 = "";
let tempMax = "";
let tempMin = "";


let countryRequired = "";
async function countryData(){
    try {
        let response = await fetch("https://restcountries.com/v3.1/all");
        let data = await response.json();
        data.map((value)=>{
        countryRequired = {
                name : value.name.common,
                flag: value.flags.png,
                Capital: value.capital,
                Region: value.region,
                Latlng: value.capitalInfo.latlng,
                codes: value.cca3
            }
            createCountryName(countryRequired,temp1,tempMax,tempMin); 
        })

        
    } catch (error) {
        console.log(error)
    }
}
countryData()


function createCountryName({name,flag,Capital,Region,Latlng,codes}){
   
    document.body.innerHTML += 
    `<div class = "container">
    <div class = "info">
    <h2 id="head">${name}</h2>
    <img class="flag" src="${flag}" alt="">
    <h3><span>Country Capital:</span> ${Capital}</h3>
    <h3><span>Country Region:</span> ${Region}</h3>
    <h3><span>Country Latlng:</span> ${Latlng}</h3>
    <h3><span>Country Code:</span> ${codes}</h3>
    <div class="dropdown">
    <button id = "btn${codes}" class="btn btn-danger" onclick="fetchWeather('${Capital}')" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Click for Whether
    </button>
    <ul class="dropdown-menu dropdown-">
    <li><a class="dropdown-item" id = "temp1" href="#"></a></li>
    <li><a class="dropdown-item" id = "tempMax" href="#"></a></li>
    <li><a class="dropdown-item" id = "tempMin" href="#"></a></li>
    </ul>
    </div>
    </div>
    </div>`
}



async function fetchWeather(Capital){
   //console.log(Capital)
    //console.log(`https://api.openweathermap.org/data/2.5/weather?q=${Capital}&APPID=cf3f5a9bcb598a78dc13d454ceab932c&units=metric`)
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Capital}&APPID=cf3f5a9bcb598a78dc13d454ceab932c&units=metric`)
        let data = await response.json();
        //console.log(data);
        temp1 = data.main.temp;
        tempMax = data.main.temp_max;
        tempMin = data.main.temp_min;
        //console.log(temp1,tempMax,tempMin)
        let outTemp1 = document.getElementById("temp1");
        let outTemp2 = document.getElementById("tempMax");
        let outTemp3 = document.getElementById("tempMin");
        console.log(outTemp1)
        console.log(outTemp2)
        console.log(outTemp3)
        outTemp1.innerText = temp1;
        outTemp2.innerText = tempMax;
        outTemp3.innerText = tempMin;
        //console.log(output);
        
    } catch (error) {
        console.log(error) 
    }    
}