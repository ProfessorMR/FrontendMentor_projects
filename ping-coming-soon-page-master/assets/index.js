const form  = document.querySelector('.form');
const email = form.querySelector('.email');
const confrimBtn = form.querySelector('.confrim-btn');

form.onsubmit = (e) => {
    e.preventDefault();
    validationFunc();
}

const validationFunc = ()  => {
    const emailValue = email.value.trim();

    if(emailValue == ''){
        sendErr(email,"input is empty!");
    }
    else if(!isEmail(emailValue)){
        sendErr(email,"Please enter a valid email");
    }
    else{
        sendSucc(email)
    }
}

const sendErr = (el,text) => {
    const parentElement = el.parentElement;
    const span = parentElement.querySelector('span');

    parentElement.className = 'form-control err';
    span.textContent = text;
    
}

const sendSucc = (el) => {
    const parentElement = el.parentElement;

    parentElement.className = 'form-control';
}

const pattern =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isEmail = (email) => {
    return pattern.test(email);
}