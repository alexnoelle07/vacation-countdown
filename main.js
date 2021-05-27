// setting end date

const deadline = 'June 7 2021 17:00:00';

//calculate remaining time

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24);
    const days = Math.floor( total/(1000*60*60*24) );

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
    function updateClock(){
        const t = getTimeRemaining(endtime);
    
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = t.hours;
        minutesSpan.innerHTML = t.minutes;
        secondsSpan.innerHTML = t.seconds;
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
}

initializeClock('clockdiv', deadline);

// show temperature in Houston

function searchHouston() {
  let apiKey = "cd0505d0c14f390be6a62ee650d13e27";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeatherHouston);
}

function showWeatherHouston(response) {
  let houstonTemp = document.querySelector("#houston");
  let houstonTempNow = Math.round(response.data.main.temp);
  houstonTemp.innerHTML = `${houstonTempNow}°C`;

}


let getHoustonTemp = document.getElementById("houston");
getHoustonTemp.addEventListener("click", searchHouston);

//show temperature in Aruba

function searchAruba() {
  let apiKey = "cd0505d0c14f390be6a62ee650d13e27";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Aruba&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeatherAruba);
}

function showWeatherAruba(response) {
  let arubaTemp = document.querySelector("#aruba");
  let arubaTempNow = Math.round(response.data.main.temp);
  arubaTemp.innerHTML = `${arubaTempNow}°C`;

}


let getArubaTemp = document.getElementById("aruba");

getArubaTemp.addEventListener("click", searchAruba);

