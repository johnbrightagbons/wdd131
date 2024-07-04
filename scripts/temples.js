document.addEventListener("DOMContentLoaded", function() {
    // Update current year in the footer
    const currentYearElement = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    // Update last modified date in the footer
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModified = document.lastModified;
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
})

    // Hamburger menu toggle functionality
    const burger = document.querySelector('#burgerMenu')
    const closeButton = document.querySelector('#closeButton')
    const nav = document.querySelector('#menu')

    burger.addEventListener('click', () => {
    nav.classList.toggle('open')
    closeButton.classList.toggle('show')
})

    closeButton.addEventListener('click', () => {
    nav.classList.toggle('open')
    closeButton.classList.toggle('show')
})
