// Setting the current year in the footer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});

// Function to save school information and display a success message
function saveSchoolInfo() {
    const schoolName = document.getElementById('schoolName').value;
    const subject = document.getElementById('subject').value;
    const session = document.getElementById('session').value;
    const teacherName = document.getElementById('teacherName').value;
    const className = document.getElementById('className').value;

    // Display saved school information message
    document.getElementById('saveMessage').textContent = `School Info Saved: ${schoolName}, ${subject}, ${session}, ${teacherName}, ${className}`;
}

// Function to add a new student row in the table
function addStudent() {
    const studentName = document.getElementById('studentName').value;
    if (!studentName) {
        alert("Please enter a student's name.");
        return;
    }

    const table = document.getElementById('studentsList');
    const rowCount = table.rows.length;
    const row = table.insertRow(rowCount);

    const snCell = row.insertCell(0);
    const nameCell = row.insertCell(1);
    const term1Test1Cell = row.insertCell(2);
    const term1Test2Cell = row.insertCell(3);
    const term1ExamCell = row.insertCell(4);
    const term1TotalCell = row.insertCell(5);
    const term2Test1Cell = row.insertCell(6);
    const term2Test2Cell = row.insertCell(7);
    const term2ExamCell = row.insertCell(8);
    const term2TotalCell = row.insertCell(9);
    const term3Test1Cell = row.insertCell(10);
    const term3Test2Cell = row.insertCell(11);
    const term3ExamCell = row.insertCell(12);
    const term3TotalCell = row.insertCell(13);
    const positionCell = row.insertCell(14);
    const gradeCell = row.insertCell(15);

    snCell.textContent = rowCount + 1;
    nameCell.textContent = studentName;
    term1Test1Cell.innerHTML = '<input type="number" oninput="updateTotal(this)">';
    term1Test2Cell.innerHTML = '<input type="number" oninput="updateTotal(this)">';
    term1ExamCell.innerHTML = '<input type="number" oninput="updateTotal(this)">';
    term1TotalCell.textContent = '0';
    term2Test1Cell.innerHTML = '<input type="number" oninput="updateTotal(this)">';
    term2Test2Cell.innerHTML = '<input type="number" oninput="updateTotal(this)">';
    term2ExamCell.innerHTML = '<input type="number" oninput="updateTotal(this)">';
    term2TotalCell.textContent = '0';
    term3Test1Cell.innerHTML = '<input type="number" oninput="updateTotal(this)">';
    term3Test2Cell.innerHTML = '<input type="number" oninput="updateTotal(this)">';
    term3ExamCell.innerHTML = '<input type="number" oninput="updateTotal(this)">';
    term3TotalCell.textContent = '0';
    positionCell.textContent = '';
    gradeCell.textContent = '';

    document.getElementById('studentName').value = '';
}

// Function to update term total and validate the total marks
function updateTotal(input) {
    const row = input.parentNode.parentNode;
    const term1Total = calculateTermTotal(row, 2, 3, 4, 5);
    const term2Total = calculateTermTotal(row, 6, 7, 8, 9);
    const term3Total = calculateTermTotal(row, 10, 11, 12, 13);

    // Display an error message if term total exceeds 100
    if (term1Total > 100 || term2Total > 100 || term3Total > 100) {
        alert("Error: Total marks for a term cannot exceed 100.");
        input.value = '';
        updateTotal(input); // Recalculate the totals after resetting the input
        return;
    }
}

// Function to calculate term total
function calculateTermTotal(row, test1Index, test2Index, examIndex, totalIndex) {
    const test1 = parseFloat(row.cells[test1Index].querySelector('input').value) || 0;
    const test2 = parseFloat(row.cells[test2Index].querySelector('input').value) || 0;
    const exam = parseFloat(row.cells[examIndex].querySelector('input').value) || 0;
    const total = test1 + test2 + exam;
    row.cells[totalIndex].textContent = total;
    return total;
}

// Function to save data (currently a placeholder)
function saveData() {
    alert('Data saved!');
}

// Function to clear fields
function clearFields() {
    document.getElementById('studentInfoForm').reset();
    document.getElementById('studentsList').innerHTML = '';
}

// Function to download data as an Excel file
function downloadExcel() {
    const table = document.getElementById('gradeTable');
    const wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, 'StudentScores.xlsx');
}

// Function to search for students by name
function searchStudent() {
    const searchName = document.getElementById('searchName').value.toLowerCase();
    const studentsList = document.getElementById('studentsList');
    const rows = studentsList.getElementsByTagName('tr');
    let found = false;

    // Loop through all rows and hide those that don't match the search query
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const studentName = cells[1].textContent.toLowerCase();
        if (studentName.includes(searchName)) {
            rows[i].style.display = '';
            found = true;
        } else {
            rows[i].style.display = 'none';
        }
    }

    // Display search result message
    const searchResult = document.getElementById('searchResult');
    if (found) {
        searchResult.textContent = `Student(s) found for "${searchName}"`;
    } else {
        searchResult.textContent = `No student found for "${searchName}"`;
    }
}
