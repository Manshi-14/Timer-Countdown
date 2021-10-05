const daysEle = document.getElementById('days');
const hoursEle = document.getElementById('hours');
const minsEle = document.getElementById('mins');
const secondsEle = document.getElementById('seconds');

const newYear = '1 Jan 2022';
function countdown(){
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = Math.floor((newYearDate - currentDate) / 1000);
  //1000 mili sec = 1 sec

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60)% 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEle.innerHTML = days;
  hoursEle.innerHTML = hours;
  minsEle.innerHTML = mins;
  secondsEle.innerHTML = seconds;
}

//Intital call
countdown();

setInterval(countdown, 1000);
