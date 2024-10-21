const loginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");

// Dummy credentials for demonstration
const validUsername = "user";
const validPassword = "password";

loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials
    if (username === validUsername && password === validPassword) {
        localStorage.setItem("loggedIn", "true"); // Set login status in localStorage
        window.location.href = "index.html"; // Redirect to Todo List page
    } else {
        errorMsg.innerText = "Invalid username or password."; // Show error message
    }
});



