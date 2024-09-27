document.addEventListener('DOMContentLoaded', async () => {
    await loadUserProfile();
    document.getElementById('toggleThemeButton')?.addEventListener('click', toggleDarkMode);
    document.getElementById('savePictureButton')?.addEventListener('click', saveProfilePicture);
});

async function loadUserProfile() {
    const response = await fetch('/api/user');
    const data = await response.json();
    document.getElementById('usernameDisplay').innerText = data.username;
    document.getElementById('profilePicture').src = data.profilePicture || 'public/default-profile.png';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

async function saveProfilePicture() {
    const input = document.getElementById('profilePicInput');
    if (input.files.length > 0) {
        const formData = new FormData();
        formData.append('profilePicture', input.files[0]);
        
        const response = await fetch('/api/updateProfilePicture', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        if (data.success) {
            alert('Profile picture updated!');
            loadUserProfile();
        } else {
            alert('Error: ' + data.message);
        }
    }
}

function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}
