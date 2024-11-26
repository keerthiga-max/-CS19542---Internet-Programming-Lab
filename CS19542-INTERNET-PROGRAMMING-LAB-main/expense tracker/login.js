document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registration-form");
    const loginForm = document.getElementById("login-form");
    const registerMessage = document.getElementById("register-message");
    const loginErrorMessage = document.getElementById("login-error-message");

    // Registration logic
    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("register-username").value;
        const password = document.getElementById("register-password").value;

        // Check if user is already registered
        if (localStorage.getItem(username)) {
            registerMessage.textContent = "User already registered!";
            registerMessage.style.display = "block";
        } else {
            // Store user credentials in local storage
            localStorage.setItem(username, password);
            registerMessage.textContent = "Registration successful! You can now log in.";
            registerMessage.style.display = "block";
            document.getElementById("register-username").value = '';
            document.getElementById("register-password").value = '';
        }
    });

    // Login logic
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        // Check if the user exists and password matches
        if (localStorage.getItem(username) === password) {
            // Store the login status in local storage
            localStorage.setItem("loggedIn", "true");
            // Redirect to the expense tracker page
            window.location.href = "index.html";
        } else {
            loginErrorMessage.textContent = "Invalid username or password!";
            loginErrorMessage.style.display = "block";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registration-form");
    const loginForm = document.getElementById("login-form");
    const registerMessage = document.getElementById("register-message");
    const loginErrorMessage = document.getElementById("login-error-message");

    // Registration logic
    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("register-username").value;
        const password = document.getElementById("register-password").value;

        // Check if user is already registered
        if (localStorage.getItem(username)) {
            registerMessage.textContent = "User already registered!";
            registerMessage.style.display = "block";
        } else {
            // Store user credentials in local storage
            localStorage.setItem(username, password);
            registerMessage.textContent = "Registration successful! You can now log in.";
            registerMessage.style.display = "block";
            document.getElementById("register-username").value = '';
            document.getElementById("register-password").value = '';
        }
    });

    // Login logic
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        // Check if the user exists and password matches
        if (localStorage.getItem(username) === password) {
            // Store the login status in local storage
            localStorage.setItem("loggedIn", "true");
            // Redirect to the expense tracker page
            window.location.href = "index.html";
        } else {
            loginErrorMessage.textContent = "Invalid username or password!";
            loginErrorMessage.style.display = "block";
        }
    });
});
