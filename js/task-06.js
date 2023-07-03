const number = document.querySelector('#validation-input');

number.addEventListener('blur', onFocus);

const inputLength = Number(number.dataset.length);

function onFocus() {
    if (number.value.length === inputLength){
        number.classList.add('valid');
        number.classList.remove('invalid');
    } else {
        number.classList.add('invalid');
        number.classList.remove('valid');
    }
}