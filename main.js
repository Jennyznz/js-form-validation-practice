// Get DOM elements
const email = document.getElementById('email');
const emailErr = document.getElementById('email-error');
const country = document.getElementById('country');
const postalCode = document.getElementById('postal-code');
const password = document.getElementById('password');
const pwdConfirm = document.getElementById('password-confirmation');
const submitBtn = document.getElementById('submit-btn');

email.addEventListener('input', (event) => {
    if (email.validity.valid) {
        emailErr.textContent = '';
        emailErr.className = 'error'; // Removes `active` class
    } else {
        showError('email');
    }
});

function showError(element) {
    if (element === 'email') {
        // No input
        if (email.validity.valueMissing) {
            emailErr.textContent = "Please enter an email address.";
        // Input not an email address
        } else if (email.validity.typeMismatch) {
            emailErr.textContent = "Input must be an email address.";
        }

        // Add active class
        emailErr.className = 'error active';
    }
}