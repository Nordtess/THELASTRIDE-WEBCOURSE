const form = document.getElementById("form-field");


const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const emailInput = document.getElementById("mail");
const textAreaInput = document.getElementById("text-area");


const nameError = document.getElementById("name-error");
const numberError = document.getElementById("number-error");
const emailError = document.getElementById("email-error");
const textError = document.getElementById("message-error");


function validateName() {
    const name = nameInput.value.trim();
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    
    if (name === "") {
        nameError.textContent = "Please enter your name";
        return false;
    } else if (!nameRegex.test(name)) {
        nameError.textContent = "Name can only contain letters, no symbols or numbers";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

function validateNumber() {
    const number = numberInput.value.trim();
    const numberRegex = /^[\+]?[\d][\d\s\-\(\)]*$/;
    const digitsOnly = number.replace(/[\D]/g, '');
    
    if (number === "") {
        numberError.textContent = "Please enter your phone number";
        return false;
    } else if (!numberRegex.test(number)) {
        numberError.textContent = "Please enter a valid phone number format";
        return false;
    } else if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        numberError.textContent = "Please enter between 7-15 digits";
        return false;
    } else {
        numberError.textContent = "";
        return true;
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === "") {
        emailError.textContent = "Please enter your email";
        return false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Your email address needs to have an @ and your .com address";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validateMessage() {
    const textArea = textAreaInput.value.trim();
    
    if (textArea === "") {
        textError.textContent = "Please enter a message";
        return false;
    } else if (textArea.length < 5) {
        textError.textContent = "Please enter at least 5 characters";
        return false;
    } else {
        textError.textContent = "";
        return true;
    }
}


nameInput.addEventListener("blur", validateName);
numberInput.addEventListener("blur", validateNumber);
emailInput.addEventListener("blur", validateEmail);
textAreaInput.addEventListener("blur", validateMessage);


form.addEventListener("submit", (event) => {
    event.preventDefault();

    
    const isNameValid = validateName();
    const isNumberValid = validateNumber();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    
    if (isNameValid && isNumberValid && isEmailValid && isMessageValid) {
        const formSent = document.getElementById("form-sent");
        formSent.textContent = "Thank you for your message!";
        form.reset();
    } else {
        const formSent = document.getElementById("form-sent");
        formSent.textContent = "";
    }
});