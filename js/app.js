const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = 'Pleas fill out all fields.';
        message.style.color = 'red';
    }
    if(password1.value === password2El.value){
        passwordsMatch = true;
        password1.style.borderColor = 'green';
        password2El.style.borderColor = 'green';

    }
    else{
        passwordsMatch=false;
        message.textContent = 'Make sure passwords'
    }

}

function processFormData(e) {
    e.preventDefault();
    validateForm();

}


form.addEventListener('submit', processFormData);