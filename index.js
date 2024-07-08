document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('accountform');
    const message = document.getElementById('message');
    const passwordField = form.elements['password'];
    const confirmPasswordField = form.elements['confirmPassword'];

    const validatePassword = () => {
        // Remove error class if password length is at least 8 characters
        if (passwordField.value.length >= 8) {
            passwordField.classList.remove('error');
        }
        
        // Remove error class if passwords match
        if (passwordField.value === confirmPasswordField.value) {
            confirmPasswordField.classList.remove('error');
        }
    };

    passwordField.addEventListener('input', validatePassword);
    confirmPasswordField.addEventListener('input', validatePassword);

    form.addEventListener('submit', function(event){
        event.preventDefault();
        
        // Get the values of the password fields
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;

        // Reset any previous error styles
        passwordField.classList.remove('error');
        confirmPasswordField.classList.remove('error');

        if (password !== confirmPassword) {
            passwordField.classList.add('error');
            confirmPasswordField.classList.add('error');
            alert("Passwords do not match.");
            return;
        }

        if (password.length < 8) {
            passwordField.classList.add('error');
            alert("Password must be at least 8 characters long.");
            return;
        }

        const formData = {
            name: form.elements['name'].value,
            username: form.elements['username'].value,
            email: form.elements['email'].value,
            password: password,
        };


        //Log data
        console.log(formData)

        //Reset form
        form.reset();

        //Shows the success message
        message.style.display = 'block';

        //Hide the sucess message after 3 seconds
        setTimeout(() => {
            message.style.display = 'none'
        }, 3000);
        
    })
});