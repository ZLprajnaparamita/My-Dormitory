document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const attendanceRecords = Array.from(document.querySelectorAll('.record'));

    searchInput.addEventListener('input', () => {
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
    });
});