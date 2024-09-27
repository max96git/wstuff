document.addEventListener('DOMContentLoaded', () => {
    // Hide loader
    document.getElementById('loader').style.display = 'none';
    // Show content
    document.getElementById('content').classList.remove('hidden');

    // Cookie consent logic
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookies = document.getElementById('acceptCookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.classList.remove('hidden');
    }

    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.classList.add('hidden');
    });

    // Button functionality
    document.getElementById('signupButton').addEventListener('click', async () => {
        // Your signup logic here
        alert('Sign Up clicked!');
    });

    document.getElementById('loginButton').addEventListener('click', async () => {
        // Your login logic here
        alert('Login clicked!');
    });

    // Example of setting profile picture
    const isLoggedIn = false; // Replace with actual authentication check
    if (isLoggedIn) {
        document.getElementById('profilePicture').src = 'path_to_profile_picture.jpg'; // Set the profile picture path
        document.getElementById('profilePicture').classList.remove('hidden');
        document.getElementById('signupButton').classList.add('hidden');
        document.getElementById('loginButton').classList.add('hidden');
    }
});
