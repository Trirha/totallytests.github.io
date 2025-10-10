const correctUsername = "admin"; // Change this to your desired username
const correctPassword = "TrustNooneHere"; // Change this to your desired password

// Perform login check on page load
window.onload = function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const loginPage = "/secured.html"; // Ensure this reflects the correct path to your login page

    if (!isLoggedIn) {
        window.location.href = loginPage; // Redirect to login page if not logged in
    } 
};

function signIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = "/games/index14.html"; // Redirect to your protected page
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}

function signOut() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = "/secured.html"; // Redirect to login page upon sign-out
}
