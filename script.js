document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Define valid credentials
    const validEmail = 'test@example.com';
    const validPassword = 'password123';

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Invalid email format.';
        return;
    }

    // Validate email and password
    if (email === validEmail && password === validPassword) {
        window.location.href = 'welcome.html';
    } else {
        errorMessage.textContent = 'Invalid email or password.';
    }
});
