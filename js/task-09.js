function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const nameColor = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');


colorBtn.addEventListener('click', changeColor);

function changeColor() {
const newColor = getRandomHexColor();
bodyColor.style.backgroundColor = newColor;
nameColor.textContent = newColor;
}
