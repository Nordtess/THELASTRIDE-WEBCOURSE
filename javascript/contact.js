// Form handling with real-time validation
const form = document.getElementById("form-field");

// Get all input elements for real-time validation
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const emailInput = document.getElementById("mail");
const textAreaInput = document.getElementById("text-area");

// Get all error elements
const nameError = document.getElementById("name-error");
const numberError = document.getElementById("number-error");
const emailError = document.getElementById("email-error");
const textError = document.getElementById("message-error");

// Validation functions
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
    const numberRegex = /^[\+]?[\d\s\-\(\)]{7,15}$/;
    
    if (number === "") {
        numberError.textContent = "Please enter your phone number";
        return false;
    } else if (!numberRegex.test(number)) {
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

// Real-time validation with blur events
nameInput.addEventListener("blur", validateName);
numberInput.addEventListener("blur", validateNumber);
emailInput.addEventListener("blur", validateEmail);
textAreaInput.addEventListener("blur", validateMessage);

// Form submission with validation
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop form from submitting normally

    // Run all validations and get results
    const isNameValid = validateName();
    const isNumberValid = validateNumber();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    // Check if ALL fields are valid before submitting
    if (isNameValid && isNumberValid && isEmailValid && isMessageValid) {
        console.log("🎉 All fields are valid! Form submitted successfully!");
        
        // Show success message
        const formSent = document.getElementById("form-sent");
        formSent.textContent = "Thank you for your message!";
        
        // Reset the form after successful submission
        form.reset();
    } else {
        // Clear success message if validation fails
        const formSent = document.getElementById("form-sent");
        formSent.textContent = "";
        console.log("❌ Please fix the errors above before submitting.");
    }
});