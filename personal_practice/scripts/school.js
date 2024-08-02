// Wait for the DOM content to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Set the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});

// Function to calculate attendance percentage
function calculateAttendance() {
    // Get input values from the form
    const week = document.getElementById('week').value;
    const morningAttendance = document.getElementById('morningAttendance').value;
    const afternoonAttendance = document.getElementById('afternoonAttendance').value;
    const numberStudents = document.getElementById('numberStudents').value;
    const daysOpened = document.getElementById('daysOpened').value;

    // Calculate total attendance
    const totalAttendance = parseInt(morningAttendance) + parseInt(afternoonAttendance);
    // Calculate attendance percentage
    const attendancePercentage = (totalAttendance * 100) / (numberStudents * daysOpened);

    // Display the result in the result div
    document.getElementById('result').textContent = `The Attendance Percentage for week ${week} is: ${attendancePercentage.toFixed(2)}%`;
}

// Function to clear the form fields
function clearFields() {
    // Reset the form and clear the result div
    document.getElementById('attendanceForm').reset();
    document.getElementById('result').textContent = '';
}

// Function to exit the application
function exitApplication() {
    // Confirm if the user really wants to exit
    if (confirm("Are you sure you want to exit?")) {
        window.close();
    }
}
