let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

// let time1 = new Date("Nov 22 2022 10:30:00");
// let time2 = new Date("Nov 23 2022 11:40:30");

function countdown() {
  let today = new Date();
  let currentYear = today.getFullYear();
  console.log(currentYear);
  let newYear = new Date(`Jan 01 ${currentYear + 1} 00:00:00`);
  let diff = (newYear - today) / 1000;
  console.log(diff);
  let d = Math.floor(diff / 60 / 60 / 24);
  let h = Math.floor(diff / 60 / 60) % 24;
  let m = Math.floor(diff / 60) % 60;
  let s = Math.floor(diff % 60);
  console.log(d, h, m, s);
  seconds.innerText = s;
  minutes.innerText = m;
  hours.innerText = h;
  days.innerText = d;
}
countdown();
setInterval(countdown, 1000);
