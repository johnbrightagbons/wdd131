document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});

function calculateAttendance() {
    const week = document.getElementById('week').value;
    const morningAttendance = document.getElementById('morningAttendance').value;
    const afternoonAttendance = document.getElementById('afternoonAttendance').value;
    const numberStudents = document.getElementById('numberStudents').value;
    const daysOpened = document.getElementById('daysOpened').value;

    const totalAttendance = parseInt(morningAttendance) + parseInt(afternoonAttendance);
    const attendancePercentage = (totalAttendance * 100) / (numberStudents * daysOpened);

    document.getElementById('result').textContent = `The Attendance Percentage for week ${week} is: ${attendancePercentage.toFixed(2)}%`;
}
