function logout() {
    fetch('/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (response.ok) {
                // Clear both sessionStorage and localStorage for security
                sessionStorage.clear();
                localStorage.clear();
                window.location.href = '/login.html'; // Redirect after logout
            } else {
                console.error('Failed to log out:', response.statusText);
                alert('Logout failed. Please try again.');
            }
        })
        .catch((err) => {
            console.error('Error during logout:', err);
            alert('An error occurred during logout. Please try again.');
        });
}
