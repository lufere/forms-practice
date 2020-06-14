let email = document.querySelector('#email');
let country = document.querySelector('#country');
let zipcode = document.querySelector('#zip');
let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#passwordConfirm');
let submit = document.querySelector('#submit');


email.addEventListener('focusout', function(){
    if (email.validity.typeMismatch){
        alert("This is not an email address!")
    }
    if (email.validity.tooShort){
        alert("Email must be at least 7 characters long!");
    }
})

zipcode.addEventListener('focusout', function(){
    if(!zipcode.validity.valid && (!zipcode.validity.rangeUnderflow && !zipcode.validity.rangeOverflow)){
        alert("Zip codes are just numbers!");
    }
    if (zipcode.validity.rangeUnderflow || zipcode.validity.rangeOverflow){
        alert("Zip codes are 5 characters long!");
    }
})

country.addEventListener('focusout', function(){
    if(country.validity.patternMismatch){
        alert("There are no countries with numbers on their name!");
    }
    if(country.validity.tooShort){
        alert("There are no countries with less than 4 characters!")
    }
})

password.addEventListener('focusout', function(){
    if(!password.validity.valid){
        alert("Password must have a lower case character, an upper case character, a number and be at least 6 characters long");
    }
})

passwordConfirm.addEventListener('focusout', function(){
    if(password.value != passwordConfirm.value){
        passwordConfirm.setCustomValidity("Invalid field");
        alert("Passwords don't match!");
    }else{
        passwordConfirm.setCustomValidity("");
    }
})

submit.addEventListener('click', function(){
    if(email.validity.valid && country.validity.valid && zipcode.validity.valid && password.validity.valid && password.validity.valid){
        alert("High five!");
    }else{
        alert("Fix the errors!");
    }
})