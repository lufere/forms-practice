let email = document.querySelector('#email');

let zipcode = document.querySelector('#zip');


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