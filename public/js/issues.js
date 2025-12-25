// Issues page functionality
function loadDetails(element) {
    const residentName = element.dataset.residentName;
    const room = element.dataset.room;
    const type = element.dataset.type;
    const incidentDate = element.dataset.incidentDate;
    const status = element.dataset.status;
    const description = element.dataset.description;
    
    // Store data in sessionStorage for the details page
    sessionStorage.setItem('reportDetails', JSON.stringify({
        residentName,
        room,
        type,
        incidentDate,
        status,
        description
    }));
    
    // Navigate to report details page
    window.location.href = '/report-details.html';
}
