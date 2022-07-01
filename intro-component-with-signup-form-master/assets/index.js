const form = document.querySelector('form');
const firstName = form.querySelector('#first-name');
const lastName = form.querySelector('#last-name');
const email = form.querySelector('#email');
const password = form.querySelector('#password');

form.onsubmit = (e) => {
    e.preventDefault();
    checkValidations();
}

const checkValidations = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue == ""){
        sendErr(firstName, 'Input firstname cannot be empty');
    }
    else{
        sendSucc(firstName);
    }

    if(lastNameValue == ""){
        sendErr(lastName, 'Input lastname cannot be empty');
    }
    else{
        sendSucc(lastName)
    }

    if(emailValue == ""){
        sendErr(email, 'Input email cannot be empty');
    }
    else if(!(isEmail(emailValue))){
        sendErr(email,'Please enter the correct email')
    }
    else{
        sendSucc(email);
    }
    if(passwordValue == ""){
        sendErr(password, 'Input password cannot be empty');
    }
    else{
        sendSucc(password);
    }
}

const sendErr = (el,text) => {
    const parent = el.parentElement;
    const span = parent.querySelector('span');

    parent.className = 'form-control err';
    span.textContent = text;
}

const sendSucc = (el) => {
    const parent = el.parentElement;
    
    parent.className = 'form-control';
}

const pattern =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isEmail = (email) => {
    return pattern.test(email);
}