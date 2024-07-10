document.addEventListener('DOMContentLoaded', () => {
    // Get references to form elements and messages
    const form = document.getElementById('accountform');
    const message = document.getElementById('message');
    const errorMessage = document.getElementById('passwordErrorMessage');
    const passwordField = form.elements['password'];
    const confirmPasswordField = form.elements['confirmPassword'];

     // Function to validate password length and matching
     const validatePassword = () => {
        // Clear previous error styles and messages
        passwordField.classList.remove('error');
        confirmPasswordField.classList.remove('error');
        errorMessage.style.display = 'none';

        // Check if password length is at least 8 characters
        if (passwordField.value.length < 8) {
            passwordField.classList.add('error');
            errorMessage.textContent = "Password must be at least 8 characters long.";
            errorMessage.style.display = 'block';
            return;
        }

        // Check if passwords match
        if (passwordField.value !== confirmPasswordField.value) {
            passwordField.classList.add('error');
            confirmPasswordField.classList.add('error');
            errorMessage.textContent = "Passwords do not match.";
            errorMessage.style.display = 'block';
            return;
        }
    };

    // Add input event listeners to password fields
    passwordField.addEventListener('input', validatePassword);
    confirmPasswordField.addEventListener('input', validatePassword);

    // Form submission event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Create an object to store the form data
        const formData = {
            name: form.elements['name'].value,
            username: form.elements['username'].value,
            email: form.elements['email'].value,
            password: passwordField.value // Only include the password once, since they match
        };

        // Log the form data object to the console
        console.log(formData);

        // Reset the form
        form.reset();

        // Show the success message
        message.style.display = 'block';

        // Hide the success message after 3 seconds
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    });
});