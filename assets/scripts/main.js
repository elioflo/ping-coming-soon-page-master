function validateForm(e){
    e.preventDefault();
    const form = e.target
    const input = form.getElementsByTagName('input')[0]
    let message = "Unknown error ocurred!"
    if(input.validity.typeMismatch){
        message = "Please provide a valid email address"
    }

    if(input.validity.valueMissing){
        message = "Whoops! It looks like you forgot to add your email"
    }

    if(!input.checkValidity()){
        document.getElementById('email-validation').textContent = message
        input.classList.add('container__input--invalid')
    }
}

document.getElementById('form').addEventListener('submit',validateForm)