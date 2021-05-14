// setting end date

const deadline = 'June 3 2021 17:00:00';

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
