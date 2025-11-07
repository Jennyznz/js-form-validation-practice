// Get DOM elements
const email = document.getElementById('email');
const emailErr = document.getElementById('email-error');
const country = document.getElementById('country');
const postal = document.getElementById('postal');
const postalErr = document.getElementById('postal-error');
const pwd = document.getElementById('pwd');
const pwdErr = document.getElementById('pwd-error');
const pwdConfirm = document.getElementById('pwd-confirm');
const pwdConfirmErr = document.getElementById('pwd-confirm-error');
const submitBtn = document.getElementById('submit-btn');

['blur', 'input'].forEach(e => {
    email.addEventListener(e, () => {
        checkEmail();
    });
});

['blur', 'input'].forEach(e => {
    postal.addEventListener(e, () => {
        checkPostal();
    });
});

['blur', 'input'].forEach(e => {
    pwd.addEventListener(e, () => {
        checkPwd();
    });
});

['blur', 'input'].forEach(e => {
    pwdConfirm.addEventListener(e, () => {
        checkPwdConfirm();
    });
});

submitBtn.addEventListener('click', () => {
    checkEmail();
    checkPostal();
    checkPwd();
    checkPwdConfirm();
});

function checkEmail() {
    if (email.validity.valid) {
        emailErr.textContent = '';
        emailErr.className = 'error'; // Removes `active` class, which hides the error message
    } else {
        showError('email');
    }
}

function checkPostal() {
    if (postal.validity.valid) {
        postalErr.textContent = '';
        postalErr.className = 'error'; // Removes `active` class, which hides the error message
    } else {
        showError('postal');
    }
}

function checkPwd() {
    if (pwd.validity.valid) {
        pwdErr.textContent = '';
        pwdErr.className = 'error'; // Removes `active` class, which hides the error message
    } else {
        showError('password');
    }
}

function checkPwdConfirm() {
    if ((pwdConfirm.validity.valid) && (pwdConfirm.value === pwd.value)) {
        pwdConfirmErr.textContent = '';
        pwdConfirmErr.className = 'error'; // Removes `active` class, which hides the error message
    } else {
        showError('password confirmation');
    }
}

function showError(element) {
    if (element === 'email') {
        // No input
        if (email.validity.valueMissing) {
            emailErr.textContent = "Please enter an email address.";
        // Input not an email address
        } else if (email.validity.typeMismatch) {
            emailErr.textContent = "Input must be an email address.";
        }

        // Add active class to display error
        emailErr.className = 'error active';
    }
    if (element === 'postal') {
        // No input
        if (postal.validity.valueMissing) {
            postalErr.textContent = "Please enter a postal code.";
        // Input not numbers only
        } else if (postal.validity.patternMismatch) {
            postalErr.textContent = "Input must be a valid postal code.";
        }

        // Add active class to display error
        postalErr.className = 'error active';
    }
    if (element === 'password') {
        // No input
        if (pwd.validity.valueMissing) {
            pwdErr.textContent = "Please enter a password.";
        // Input not numbers only
        } else if (pwd.validity.tooShort) {
            pwdErr.textContent = "Passwords must be at least 8 characters long.";
        }

        // Add active class to display error
        pwdErr.className = 'error active';
    }
    if (element === 'password confirmation') {
        if (pwdConfirm.validity.valueMissing) {
            pwdConfirmErr.textContent = "Please confirm password.";
        // Input not numbers only
        } else {
            pwdConfirmErr.textContent = "Does not match password.";
        }

        // Add active class to display error
        pwdConfirmErr.className = 'error active';
    }

}