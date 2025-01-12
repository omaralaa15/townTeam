// Select elements
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');

// Show the sidebar
menuIcon.addEventListener('click', () => {
    sidebar.classList.add('active');
});

// Hide the sidebar
closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});
// Select elements
const form = document.querySelector('form');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

// Email validation regex
const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com)$/;

// Handle form submission
form.addEventListener('submit', (e) => {
    // Initialize a flag to track validation status
    let isValid = true;

    // Clear previous error messages
    clearErrors();

    // Validate email
    if (!emailRegex.test(emailField.value)) {
        displayError(emailField, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate password
    if (passwordField.value.length < 8) {
        displayError(passwordField, 'Password must be at least 8 characters long.');
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        e.preventDefault();
    }
});

// Function to display an error message
function displayError(inputField, message) {
    const error = document.createElement('p');
    error.className = 'error-message';
    error.textContent = message;
    inputField.insertAdjacentElement('afterend', error);
}

// Function to clear all previous error messages
function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach((error) => error.remove());
}