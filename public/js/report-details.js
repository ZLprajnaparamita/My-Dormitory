// Report details page functionality
document.addEventListener('DOMContentLoaded', function() {
    const reportDetails = sessionStorage.getItem('reportDetails');
    
    if (reportDetails) {
        const data = JSON.parse(reportDetails);
        const detailsSection = document.getElementById('reportDetails');
        
        if (detailsSection) {
            detailsSection.innerHTML = `
                <div class="detail-card">
                    <h2>${data.residentName}</h2>
                    <div class="detail-row">
                        <span class="detail-label">Room:</span>
                        <span class="detail-value">${data.room}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Issue Type:</span>
                        <span class="detail-value">${data.type}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Incident Date:</span>
                        <span class="detail-value">${data.incidentDate}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Status:</span>
                        <span class="status ${data.status.toLowerCase().replace(' ', '-')}">${data.status}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Description:</span>
                        <p class="detail-description">${data.description}</p>
                    </div>
                </div>
            `;
        }
    }
});
