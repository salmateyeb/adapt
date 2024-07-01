document.addEventListener('DOMContentLoaded', (event) => {
    displaySubmissions();
});

function displaySubmissions() {
    const submissionsTableBody = document.querySelector('#submissionsTable tbody');
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];

    submissions.forEach((submission) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${submission.firstName}</td>
            <td>${submission.lastName}</td>
            <td>${submission.country}</td>
            <td>${submission.animal}</td>
            <td>${submission.subject}</td>
        `;
        submissionsTableBody.appendChild(row);
    });
}
