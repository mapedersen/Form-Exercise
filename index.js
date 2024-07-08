document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('accountform');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        
        const password = form.elements['password'].value;
        const confirmPassword = form.elements['confirmPassword'].value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (password.length < 8) {
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