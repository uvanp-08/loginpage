function validateEmail(email) {
    var emailInput = document.getElementById('emailInput');
    var validationMessage = document.getElementById('validationMessage');

    var atIndex = email.indexOf('@');
    var dotIndex = email.lastIndexOf('.');

    if (atIndex < 1) {
        emailInput.style.border = '1px solid red';
        validationMessage.textContent = "Invalid email address";
        validationMessage.style.color = 'red';
        return;
    }
	
    if (dotIndex <= atIndex + 1 || dotIndex === email.length - 1) {
        emailInput.style.border = '1px solid red';
        validationMessage.textContent = "Invalid email address";
        validationMessage.style.color = 'red';
        return;
    }

    emailInput.style.border = '1px solid green';
    validationMessage.textContent = "Valid email address";
    validationMessage.style.color = 'green';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Define valid credentials
    const validEmail = 'test@example.com';
    const validPassword = 'password123';

    // Validate email and password
    if (email == validEmail && password == validPassword) {
        window.location.href = 'welcome.html';
    } else {
        errorMessage.textContent = 'Invalid email or password.';
    }
});
