document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Define valid credentials
    const validEmail = 'test@example.com';
    const validPassword = 'password123';

    // Validate email format
	flag = false;
	atChar = email.indexOf(email);
	dotChar = email.indexOf(email);
	spaceChar = email.indexOf(email);
	if(atChar==-1 && dotChar==-1 && spaceChar>-1){
		errorMessage.textContent = 'Invalid email format.';
        return;
	}

    // Validate email and password
    if (email == validEmail && password == validPassword) {
        window.location.href = 'welcome.html';
    } else {
        errorMessage.textContent = 'Invalid email or password.';
    }
});

