let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let eidulfitr = '3 May 2022';
function countdown(){
    let eidDay = new Date(eidulfitr);
    let currentDay = new Date();
    let totalTime = (eidDay-currentDay)/1000;
    // console.log(totalTime);
    let day = Math.floor(totalTime/3600/24);
    let hour = Math.floor(totalTime/3600) % 24;
    let minute = Math.floor(totalTime/60) % 60;
    let second = Math.floor(totalTime)%60;
    // console.log(day, hour, minute, second);
    days.innerHTML = day;
    hours.innerHTML =hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;

}
countdown();
setInterval(countdown,1000);