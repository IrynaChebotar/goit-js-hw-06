const inputEl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');


inputEl.addEventListener('input', onChange);

function onChange() {
textSize.style.fontSize = inputEl.value + 'px';
}