import '../css/app.css'
import '../css/style.scss'

(function() {
    const button = document.querySelector('button');

    if(button) button.addEventListener('click', () => {
        const img = document.createElement('img');
        img.src = '/images/bacon.jpg';
        document.querySelector("body").appendChild(img);
    })
 })();


const inputs = document.querySelectorAll('.form__input--validation');
const countryInput = document.querySelector('.form__input--credit-card-number');
const creditCardNumberInput = document.querySelector('.form__input--credit-card-number');
const emailInput = document.querySelector('.form__input--email');
const expirationDateInput = document.querySelector('.form__input--expiration-date');
const firstNameInput = document.querySelector('.form__input--first-name');
const lastNameInput = document.querySelector('.form__input--last-name');
const phoneNumberInput = document.querySelector('.form__input--phone-number');
const postalCodeInput = document.querySelector('.form__input--postal-code');
const securityCodeInput = document.querySelector('.form__input--security-code');
let isSuccess = null;

function validateCreditCardNumber(creditCardNumber) {
    //return /^[0-9]{4}[-\.]{1}[0-9]{4}[-\.]{1}[0-9]{4}[-\.]{1}[0-9]{4}$/.test(creditCardNumber);
    return /^[0-9]{16}$/.test(creditCardNumber);
}

function validateEmail(email) {
    //const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase());
}

function validateExpirationDate(expirationDate) {
    return /^[0-9]{2}\/[0-9]{2}$/.test(expirationDate);
}

function validateFirstName(firstName) {
    if(firstName.length > 0) {
        return true;
    } else {
        return false;
    }
}

function validateLastName(lastName) {
    if(lastName.length > 0) {
        return true;
    } else {
        return false;
    }
}

function validatePhoneNumber(phoneNumber) {
    //return /^[(]{1}([0-9]{3})[)]{1}[\s\.]{1}[0-9]{3}[-\.]{1}[0-9]{2}[-\.]{1}[0-9]{2}$/.test(phoneNumber);
    return /^[0-9]{9}$/.test(phoneNumber);
}

function validatePostalCode(postalCode) {
    return /^([0-9]{5}|)$/.test(postalCode);
}

function validateSecurityCode(securityCode) {
    return /^[0-9]{3}$/.test(securityCode);
}

function validate(e) {
    e.preventDefault();
    isSuccess = true;

    if(!validateCreditCardNumber(creditCardNumberInput.value)) {
        creditCardNumberInput.classList.add('form__input--invalid');
        isSuccess = false;
    }

    if(!validateEmail(emailInput.value)) {
        emailInput.classList.add('form__input--invalid');
        isSuccess = false;
    }

    if(!validateExpirationDate(expirationDateInput.value)) {
        expirationDateInput.classList.add('form__input--invalid');
        isSuccess = false;
    }

    if(!validateFirstName(firstNameInput.value)) {
        firstNameInput.classList.add('form__input--invalid');
        isSuccess = false;
    }

    if(!validateLastName(lastNameInput.value)) {
        lastNameInput.classList.add('form__input--invalid');
        isSuccess = false;
    }

    if(!validatePhoneNumber(phoneNumberInput.value)) {
        phoneNumberInput.classList.add('form__input--invalid');
        isSuccess = false;
    }

    if(!validatePostalCode(postalCodeInput.value)) {
        postalCodeInput.classList.add('form__input--invalid');
        isSuccess = false;
    }

    if(!validateSecurityCode(securityCodeInput.value)) {
        securityCodeInput.classList.add('form__input--invalid');
        isSuccess = false;
    }

    if(isSuccess) {
        document.form.submit();
    }
}

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', (e) => {
        if(e.target.classList.contains('form__input--invalid')){
            e.target.classList.remove('form__input--invalid') 
        }
    })
}

document.form.addEventListener('submit', validate);