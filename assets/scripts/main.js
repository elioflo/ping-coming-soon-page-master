function validateForm(e){
    e.preventDefault();
    const input = document.getElementById('email')
    const message = document.getElementById('email-validation')
    let errorMessage = "Unknown error ocurred!"
    if(input.validity.typeMismatch){
        errorMessage = "Please provide a valid email address"
    }

    if(input.validity.valueMissing){
        errorMessage = "Whoops! It looks like you forgot to add your email"
    }
    
    if(input.checkValidity()){
        message.classList.remove('header__message--invalid')
        message.classList.add('header__message--hidden')
        input.classList.remove('header__input--invalid')
    }else{
        message.textContent = errorMessage
        message.classList.remove('header__message--hidden')
        message.classList.add('header__message--invalid')
        input.classList.add('header__input--invalid')
    }
}

document.getElementById('form').addEventListener('submit',validateForm)