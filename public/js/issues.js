function loadDetails(issueElement) {
    const residentName = issueElement.dataset.residentName;
    const room = issueElement.dataset.room;
    const type = issueElement.dataset.type;
    const incidentDate = issueElement.dataset.incidentDate;
    const status = issueElement.dataset.status;
    const description = issueElement.dataset.description;

    const detailsUrl = `/report-details.html?residentName=${encodeURIComponent(residentName)}&room=${encodeURIComponent(
        room
    )}&type=${encodeURIComponent(type)}&incidentDate=${encodeURIComponent(incidentDate)}&status=${encodeURIComponent(
        status
    )}&description=${encodeURIComponent(description)}`;

    window.location.href = detailsUrl;
}