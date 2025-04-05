document.getElementById('login-btn').addEventListener('click', function(e) {
    e.preventDefault(); 

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        window.alert('Please fill in both the email and password fields.');
    } else {
        window.alert('Logging in...');
        window.location.href = 'main.html'; 
    }
});
