// Attendance page functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const records = document.querySelectorAll('.record');
            
            records.forEach(record => {
                const text = record.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    record.style.display = 'block';
                } else {
                    record.style.display = 'none';
                }
            });
        });
    }
});
