document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);

    const residentName = params.get('residentName');
    const room = params.get('room');
    const type = params.get('type');
    const incidentDate = params.get('incidentDate');
    const status = params.get('status');
    const description = params.get('description');

    const details = `
        <p><strong>Resident Name:</strong> ${residentName}</p>
        <p><strong>Room Number:</strong> ${room}</p>
        <p><strong>Issue Type:</strong> ${type}</p>
        <p><strong>Date of Incident:</strong> ${incidentDate}</p>
        <p><strong>Status:</strong> <span class="${status}">${status}</span></p>
        <p><strong>Description:</strong> ${description}</p>
    `;

    document.getElementById('reportDetails').innerHTML = details;
});