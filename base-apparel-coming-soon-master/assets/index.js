const form = document.querySelector('.form');
const email = form.querySelector('.inp');

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkValidation();
});


function checkValidation() {
    const emailValue = email.value.trim();
    
    if(emailValue == ''){
        sendErr(email,"Input cannot be empty");
    }

    else if(!isEmail(emailValue)){
        sendErr(email,"Please enter a valid email");
    }

    else{
        sendSucc(email);
    }
}

function sendErr(el, message) {
    const parentElement = el.parentElement.parentElement;
    const span = parentElement.querySelector('.err-msg');

    parentElement.className = 'form-control err';
    span.textContent = message;
}

function sendSucc(el) {
    const parentElement = el.parentElement.parentElement;

    parentElement.className = 'form-control';
}

const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmail(email){
    return pattern.test(email);
}