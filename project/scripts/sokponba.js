document.getElementById("currentyear").textContent = new Date().getFullYear();
        document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(registrationForm);
        const formObject = {};
        formData.forEach((value, key) => formObject[key] = value);
        localStorage.setItem('registrationData', JSON.stringify(formObject));
        alert('Registration data saved!');
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const fixtures = [
        { match: "Sokponba Stake vs Fire Blazers", date: "19-07-2024", time: "15:00" },
        { match: "Horizon vs Sokponba Stake", date: "20-07-2024", time: "17:00" },
        { match: "Sokponba Stake vs Desert Warriors", date: "22-07-2024", time: "19:00" },
        { match: "White Angels vs Sokponba Stake", date: "23-07-2024", time: "21:00" }
    ];

    const results = [
        { match: "Sokponba Stake 2 vs 1 Umelu FC" },
        { match: "Umelu FC 3 vs 3 Sokponba Stake" },
        { match: "Batters 1 vs 0 Sokponba Stake" },
        { match: "Sokponba Stake 5 vs 2 Eagles Wingers" }
    ];

    const mainContent = document.getElementById('main-content');

    const resultsTitle = document.createElement('h2');
    resultsTitle.textContent = "Results";
    mainContent.appendChild(resultsTitle);

    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.textContent = result.match;
        mainContent.appendChild(resultDiv);
    });

    const fixturesTitle = document.createElement('h2');
    fixturesTitle.textContent = "Fixtures";
    mainContent.appendChild(fixturesTitle);

    fixtures.forEach(fixture => {
        const fixtureDiv = document.createElement('div');
        fixtureDiv.textContent = `${fixture.match} - Date: ${fixture.date} Time: ${fixture.time}`;
        mainContent.appendChild(fixtureDiv);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    hamburgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => formObject[key] = value);
        localStorage.setItem('contactFormData', JSON.stringify(formObject));
        alert('Contact data saved!');
    });
});