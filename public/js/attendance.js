document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const attendanceRecords = Array.from(document.querySelectorAll('.record'));
    
    // Debounce function to limit search frequency
    function debounce(func, delay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // Search function
    function performSearch() {
        const query = searchInput.value.toLowerCase();
        
        attendanceRecords.forEach((record) => {
            const name = record.querySelector('h3').textContent.toLowerCase();
            const room = record.querySelector('p').textContent.toLowerCase();
            if (name.includes(query) || room.includes(query)) {
                record.style.display = 'block';
            } else {
                record.style.display = 'none';
            }
        });
    }

    // Use debounced search with 300ms delay
    searchInput.addEventListener('input', debounce(performSearch, 300));
});