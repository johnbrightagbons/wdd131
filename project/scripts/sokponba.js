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
    // Array of player objects with name, position, and age
    const players = [
        { name: "Osazee Destiny", position: "Goalkeeper" , age: 18 },
        { name: "Sunday Omotosho", position: "Defender" , age: 18 },
        { name: "Onaghama Stanley", position: "Defender", age: 18 },
        { name: "Victor Pedro", position: "Defender", age: 25 },
        { name: "Aimudo Bright", position: "Defender", age: 31 },
        { name: "John Bright Agbons", position: "Midfielder", age: 25 },
        { name: "Ifeanyi Wisdom", position: "Midfielder", age: 18 },
        { name: "Samuel Edem", position: "Midfielder", age: 19 },
        { name: "Shedrack Osahon", position: "Midfielder", age: 20 },
        { name: "Eze Fidelis", position: "Forward", age: 18 },
        { name: "Albert Samuel", position: "Forward", age: 18 },
        { name: "Ekhator Destiny", position: "Forward", age: 22 },
        { name: "Osagie Presley", position: "Forward", age: 19 },
        { name: "Julius Divine", position: "Forward", age: 19 },
        { name: "Daniel Osaro", position: "Forward", age: 18 }
    ];

    // Get the container where the player profiles will be added
    const playersContainer = document.getElementById('players');

    // Loop through each player and create the HTML structure
    players.forEach(player => {
        // Create a section for each player
        const playerSection = document.createElement('section');

        // Create and set the player's name
        const playerName = document.createElement('h3');
        playerName.textContent = player.name;

        // Create and set the player's position
        const playerPosition = document.createElement('p');
        playerPosition.textContent = `Position: ${player.position}`;

        // Create and set the player's age
        const playerAge = document.createElement('p');
        playerAge.textContent = `Age: ${player.age}`;

        // Append the name, position, and age to the player section
        playerSection.appendChild(playerName);
        playerSection.appendChild(playerPosition);
        playerSection.appendChild(playerAge);

        // Append the player section to the players container
        playersContainer.appendChild(playerSection);
    });
});
