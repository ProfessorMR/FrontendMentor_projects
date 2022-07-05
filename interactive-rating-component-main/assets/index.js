const cardWrapper = document.querySelector('.card-wrapper');
const ratingNumbers = document.querySelector('.rating').children;
const yourRating = document.querySelector('.your-rating').children[0].children[0];
const btn = document.querySelector('.submit');
let value = '';

for(let i = 0; i < ratingNumbers.length; i++){
    ratingNumbers[i].addEventListener('click',(e) => {
        for(let j = 0; j < ratingNumbers.length; j++){
            ratingNumbers[j].classList.remove('selected');
        }
        e.target.classList.add('selected');
        value = e.target.textContent;
    });
}

btn.addEventListener('click',() => {
    if(value == ""){
        alert('Please give a rating!');
    }
    else{
        cardWrapper.classList.add('nextPage');
        yourRating.textContent = value;
    }
});