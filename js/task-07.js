
const inputEl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

window.addEventListener('DOMContentLoaded', onChange);

inputEl.addEventListener('input', onChange);

function onChange() {
  textSize.style.fontSize = `${inputEl.value}px`;
}

