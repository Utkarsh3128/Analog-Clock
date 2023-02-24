const degree = 6;
const hour = document.querySelector("#hr");
const minute = document.querySelector("#min");
const second = document.querySelector("#sec");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let min = day.getMinutes() * degree;
  let sec = day.getSeconds() * degree;

  hour.style.transform = `rotateZ(${hh + min / 12}deg)`;
  minute.style.transform = `rotateZ(${min}deg)`;
  second.style.transform = `rotateZ(${sec}deg)`;
});
