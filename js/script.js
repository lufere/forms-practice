let email = document.querySelector('#email');


email.addEventListener('focusout', function(){
    if (email.validity.typeMismatch){
        alert("This is not an email address!")
    }
    if (email.validity.tooShort){
        alert("Email must be at least 7 characters long!");
    }
})