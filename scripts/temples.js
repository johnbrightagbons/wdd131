document.addEventListener("DOMContentLoaded", function() {
    // Update current year in the footer
    const currentYearElement = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    // Update last modified date in the footer
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModified = document.lastModified;
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;

    // Hamburger menu toggle functionality
    const hamburger = document.querySelector('#menu');
    const navigation = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        // Toggle the 'open' class on both navigation and hamburger button
        navigation.classList.toggle('open');
        hamburger.classList.toggle('open');
        // Change the hamburger button symbol based on the menu state
        hamburger.textContent = hamburger.classList.contains('open') ? 'X' : '☰';
    });
});
