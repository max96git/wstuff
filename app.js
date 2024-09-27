document.addEventListener('DOMContentLoaded', () => {
    // Hide loader
    document.getElementById('loader').style.display = 'none';
    // Show content
    const content = document.getElementById('content');
    if (content) {
        content.classList.remove('hidden');
    }

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
    document.getElementById('signupButton')?.addEventListener('click', (event) => {
        // Redirect to signup page
        window.location.href = 'signup.html';
    });

    document.getElementById('loginButton')?.addEventListener('click', (event) => {
        // Redirect to login page
        window.location.href = 'login.html';
    });

    // Handle signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Your signup logic here (API call)
            alert(`Signing up: ${username}, ${email}`);
            // Clear form after submission
            signupForm.reset();
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
