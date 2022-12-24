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
        message.classList.remove('container__message--invalid')
        message.classList.add('container__message--hidden')
        input.classList.remove('container__input--invalid')
    }else{
        message.textContent = errorMessage
        message.classList.remove('container__message--hidden')
        message.classList.add('container__message--invalid')
        input.classList.add('container__input--invalid')
    }
}

document.getElementById('form').addEventListener('submit',validateForm)