// Get current date and time
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Get current weather report
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'a63c638ef60e4b58a6064635242506';
    const city = 'Abuja';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Extract the necessary data from the API response
        const temperature = data.current.temp_c;
        const conditions = data.current.condition.text;
        const windSpeed = data.current.wind_kph;

        // Update the HTML with the fetched weather data
        document.querySelector('.weather .temperature').textContent = `Temperature: ${temperature}°C`;
        document.querySelector('.weather .conditions').textContent = `Conditions: ${conditions}`;
        document.querySelector('.weather .wind').textContent = `Wind: ${windSpeed} km/h`;

        // Calculate wind chill if temperature is low enough
        if (temperature <= 10) {
            const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
            document.getElementById('wind-chill').textContent = `${windChill.toFixed(2)}°C`;
        } else {
            document.getElementById('wind-chill').textContent = 'N/A';
        }
    })
    .catch(error => console.error('Error fetching weather data:', error));
});
