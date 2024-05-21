const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const setDate = () => {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let seconds = now.getSeconds();

  const hourDegree = (hour / 60) * 360;
  const minuteDegree = (minute / 60) * 360;
  const secondDegree = (seconds / 60) * 360 + 90;

  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
};

setInterval(setDate, 1000);
