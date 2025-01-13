const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');

menuIcon.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});
const form = document.querySelector('form');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com)$/;

form.addEventListener('submit', (e) => {
    let isValid = true;

    clearErrors();

    if (!emailRegex.test(emailField.value)) {
        displayError(emailField, 'Please enter a valid email address');
        isValid = false;
    }

    if (passwordField.value.length < 8) {
        displayError(passwordField, 'Password must be at least 8 characters long.');
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
    }
});

function displayError(inputField, message) {
    const error = document.createElement('p');
    error.className = 'error-message';
    error.textContent = message;
    inputField.insertAdjacentElement('afterend', error);
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach((error) => error.remove());
}

///////////////
