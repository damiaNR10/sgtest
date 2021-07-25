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
    //console.log(document.form.firstName.value);
    // if( document.form.firstName.value == "" ) {
    //     alert( "Please give your name!" );
    //     document.form.firstName.focus() ;
    //     return false;
    // }

    // for(let i = 0; i < inputs.length; i++) {
    //     if(inputs[i].value == "") {
    //       alert("You have to fill all fields!");  
    //       break;
    //     }
    // }

    if(!validateCreditCardNumber(creditCardNumberInput.value)) {
        alert("You have to give Credit Card Number in right format! (16 digits)");  
        isSuccess = false;
    }

    if(!validateEmail(emailInput.value)) {
        alert("You have to give Email in right format!");  
        isSuccess = false;
    }

    if(!validateExpirationDate(expirationDateInput.value)) {
        alert("You have to give Expiration Date in right format! [MM/YY]");  
        isSuccess = false;
    }

    if(!validatePhoneNumber(phoneNumberInput.value)) {
        alert("You have to give Phone Number in right format! (9 digits)");  
        isSuccess = false;
    }

    if(!validatePostalCode(postalCodeInput.value)) {
        alert("You have to give Postal Code in right format!");  
        isSuccess = false;
    }

    if(!validateSecurityCode(securityCodeInput.value)) {
        alert("You have to give Security Code in right format!");  
        isSuccess = false;
    }

    if(isSuccess) {
        document.form.submit();
        // console.log('Success: ', isSuccess);
        // var xhr = new XMLHttpRequest();
        // xhr.open("POST", "/order", true);
        // xhr.setRequestHeader('Content-Type', 'application/json');
        // xhr.send(JSON.stringify({
        //     firstName: firstNameInput.value,
        //     lastName: lastNameInput.value,
        //     email: emailInput.value,
        //     country: countryInput.value,
        //     postalCode: postalCodeInput.value,
        //     phone: phoneNumberInput.value,
        //     creditCard: creditCardNumberInput.value,
        //     CVV: securityCodeInput.value,
        //     expDate: expirationDateInput.value,
        // }));
    }
}

document.form.addEventListener('submit', validate);