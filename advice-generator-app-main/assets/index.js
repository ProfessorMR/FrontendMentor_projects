const dice = document.querySelector('.dice');
const card = document.querySelector('.card');
const url = 'https://api.adviceslip.com/advice';

let cardId = card.querySelector('p').children[0];
let cardAdvice = card.querySelector('h1');

fetch(url,{
    method: 'GET',
})
.then(response => response.json())
.then(data => {
    cardId.textContent = `#${data.slip.id}`;
    cardAdvice.textContent = `"${data.slip.advice}"`;
});

dice.addEventListener('click',() => {
    fetch(url,{
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        cardId.textContent = "";
        cardAdvice.textContent = "";
        cardId.textContent = `#${data.slip.id}`;
        cardAdvice.textContent = `"${data.slip.advice}"`;
    })
});