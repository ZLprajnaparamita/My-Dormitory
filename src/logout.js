function logout() {
    fetch('/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (response.ok) {
                sessionStorage.clear();
                localStorage.clear();
                window.location.href = '/login.html'; // Redirect after logout
            } else {
                console.error('Failed to log out:', response.statusText);
            }
        })
        .catch((err) => {
            console.error('Error during logout:', err);
        });
}