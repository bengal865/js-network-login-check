// User Login Project

// HTML elements
let loginBtnEl = document.getElementById('login-btn');
let usernameInputEl = document.getElementById('username-in');
let passwordInputEl = document.getElementById('password-in');
let feedbackEl = document.getElementById('feedback');

// Event listener
loginBtnEl.addEventListener('click', login);

// Event function
function login() {
    // Get user credentials
    let username = usernameInputEl.value;
    let password = passwordInputEl.value;

    // Check user login info
    if (username == 'admin' && password == 'password') {
        feedbackEl.innerHTML = 'Login successful!';
    } else {
        feedbackEl.innerHTML = 'Login failed! Please try again!';
    }
}
