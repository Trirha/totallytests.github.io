const correctUsername = "admin"; // Change this to your desired username
const correctPassword = "TrustNooneHere"; // Change this to your desired password

// Perform login check on page load
window.onload = function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const loginPage = "secured.html"; // Change this to your login page filename

    if (!isLoggedIn) {
        window.location.href = loginPage; // Redirect to login page if not logged in
    } else {
        // Display the authenticated content, if necessary
        document.getElementById('content').style.display = 'block';
    }
};

function signIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.reload(); // Reload to show protected content
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}

function signOut() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = "secured.html"; // Redirect to login page upon sign-out
}
