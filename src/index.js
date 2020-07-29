import colors from './js/colors';

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttonStartRef = document.querySelector('button[data-action="start"]');
const buttonStopRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');

let colorRandomStatus = false;
let intervalColor;

buttonStartRef.addEventListener('click', startRandomColor);
buttonStopRef.addEventListener('click', stopRandomColor);

function startRandomColor() {
  if (!colorRandomStatus) {
    colorRandomStatus = true;
    intervalColor = setInterval(() => {
      const randomNum = randomIntegerFromInterval(0, colors.length);
      bodyRef.style.backgroundColor = `${colors[randomNum]}`;
    }, 1000);
  }
  return;
}

function stopRandomColor() {
  clearInterval(intervalColor);
  colorRandomStatus = false;
}
