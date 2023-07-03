const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', onText);

function onText()  {
    if (textInput.value === "") {
        textOutput.textContent = "Anonymous"
    } else {
        textOutput.textContent = textInput.value;
      }
};