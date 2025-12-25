document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);

    const residentName = params.get('residentName') || '';
    const room = params.get('room') || '';
    const type = params.get('type') || '';
    const incidentDate = params.get('incidentDate') || '';
    const status = params.get('status') || '';
    const description = params.get('description') || '';

    // Use textContent to prevent XSS attacks
    const detailsContainer = document.getElementById('reportDetails');
    
    // Create elements safely
    const elements = [
        { label: 'Resident Name:', value: residentName },
        { label: 'Room Number:', value: room },
        { label: 'Issue Type:', value: type },
        { label: 'Date of Incident:', value: incidentDate },
        { label: 'Status:', value: status, className: status },
        { label: 'Description:', value: description }
    ];
    
    elements.forEach(item => {
        const p = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = item.label;
        p.appendChild(strong);
        p.appendChild(document.createTextNode(' '));
        
        if (item.className) {
            const span = document.createElement('span');
            span.className = item.className;
            span.textContent = item.value;
            p.appendChild(span);
        } else {
            p.appendChild(document.createTextNode(item.value));
        }
        
        detailsContainer.appendChild(p);
    });
});