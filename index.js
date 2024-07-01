document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const country = document.getElementById('states').value;
        const animal = document.getElementById('country').value;
        const subject = document.getElementById('subject').value;

        const formData = {
            firstName,
            lastName,
            country,
            animal,
            subject,
        };
        if(firstName==""){
            alert('missing first name submit again !');
        }

        else {
        saveToLocalStorage(formData);
        form.reset();
        alert('Your submission has been saved!');
        }

        
    });
});

function saveToLocalStorage(data) {
    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    submissions.push(data);
    localStorage.setItem('submissions', JSON.stringify(submissions));
}
