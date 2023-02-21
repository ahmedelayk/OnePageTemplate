// Skills Progress Animation
let skillSection = document.querySelector(".skills");
let skillSpans = document.querySelectorAll(".skills span");
// Stats Number Animation Count
let statsSection = document.querySelector(".stats");
let statsNumber = document.querySelectorAll(".stats .stats-number");
let started = false;
window.onscroll = function () {
  if (window.scrollY >= skillSection.offsetTop - 250) {
    // skills Animation
    skillSpans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
  // Stats Animation
  if (window.scrollY >= statsSection.offsetTop - 250) {
    if (!started) {
      statsNumber.forEach((num) => startCount(num));
    }
    started = true;
  }
};
//Counting from 0 to goal Number
function startCount(el) {
  let goal = el.dataset.stats;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 1000 / goal);
}
// count Down Timer
let countDownDate = new Date("May 25, 2023 00:00:00");
let countDown = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate.getTime() - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(dateDiff % (1000 * 60) / (1000));
  document.querySelector(".time .days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".time .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".time .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".time .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff == 0) {
    clearInterval(countDown);
  }
}, 1000);
