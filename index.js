// getFirstLetter('test') === 't' ;
// getFirstLetter('9-test') === '0-9';
// getFirstLetter("'/symbol") === 's';

const input = document.querySelector('input')
const div = document.querySelector('div')
const h1 = document.querySelector('h1')
const button = document.querySelector('button')

function getFirstLetter () {
    const text = input.value;
    const firstLetter = text.charAt(0);
    const secondLetter = text.charAt(1);
    const marks = ['.', ',', '/', '?', '|', '+', '=', '-', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '№', ';', ':']

    if (marks.includes(firstLetter)) {
        h1.textContent = secondLetter
    }   else if (isNaN(firstLetter)) {
        h1.textContent = firstLetter
    } else if (text) {
        h1.textContent = '0-9'
    }
}

button.addEventListener('click', getFirstLetter)