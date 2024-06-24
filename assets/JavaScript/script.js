// Array to store employee data
const employees = [];

// Event listener for the 'Add Data' button
document.getElementById('addDataButton').addEventListener('click', () => {
    // Prompt user for employee details
    const firstName = window.prompt('Enter First Name:');
    const lastName = window.prompt('Enter Last Name:');
    const salary = parseFloat(window.prompt('Enter Salary:'));

    // Create an object for employee data
    const employeeData = { firstName, lastName, salary };

    // Add employee data to the array
    employees.push(employeeData);

    // Ask user if they want to add another employee
    const addAnother = window.confirm('Do you want to add another employee?');
    if (addAnother) {
        // If yes, trigger the 'Add Data' button click again
        document.getElementById('addDataButton').click();
    } else {
        // If no, display the employee data
        displayEmployeeData();
    }
});

// Function to display employee data in a table
function displayEmployeeData() {
    // Sort employees by last name
    employees.sort((a, b) => a.lastName.localeCompare(b.lastName));

    // Get the table body element
    const tableBody = document.getElementById('employeeTableBody');
    // Clear existing table data
    tableBody.innerHTML = '';

    // Loop through each employee and create a table row
    employees.forEach((employee) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.salary}</td>
        `;
        // Append the row to the table body
        tableBody.appendChild(row);
    });

    // Calculate and log the average salary
    const averageSalary = calculateAverageSalary(employees);
    console.log('The Average Employee Salary is:', averageSalary,'!');
}

// Function to calculate the average salary of employees
function calculateAverageSalary(employees) {
    // Use reduce to calculate the total salary
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    // Return the average salary
    return totalSalary / employees.length;
}

// Event listener for the 'Remove Recent Data' button
document.getElementById('removeRecentData').addEventListener('click', () => {
    // Remove the last employee from the array
    employees.pop(); 
    // Display the updated employee data
    displayEmployeeData();
});

// Event listener for the 'Employee Draw' button
document.getElementById('employeeDrawButton').addEventListener('click', () => {
    // Generate a random index within the array length
    const randomIndex = Math.floor(Math.random() * employees.length);
    // Select the employee at the random index
    const randomEmployee = employees[randomIndex];
    // Log a congratulatory message for the selected employee
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName} for winning today's draw!`);
});