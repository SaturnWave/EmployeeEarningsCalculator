const employeeTypeElement = document.getElementById('employee-type');
const employeeNameElement = document.getElementById('employee-name');
const employeeIdElement = document.getElementById('employee-id');
const employeeInfoContainer = document.getElementById('employee-info-container');
const employeeInfoElement = document.getElementById('employee-info');
const resultElement = document.getElementById('result');
const displayEmployeesElement = document.getElementById('display-employees');

let employees = [];

function login(){
    const loginId = document.getElementById('loginId').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const employee = employees.find (e => e.id === loginId && e.password === loginPassword);

    const loginMessageElement = document.getElementById('loginMessage');

    if (employee){
        loginMessageElement.textContent = ' Welcome, ${employee.name}!';
        loginMessageElement.style.color = 'green';
        setTimeout(() => {
            localStorage.setItem('loggedInEmployee', JSON.stringify(employee));
            window.location.href = 'profile.html';
        }, 2000);
    
}else{
    loginMessageElement.textContent ='Invalid ID or password.';
    loginMessageElement.style.color = 'red';

}
}
function signup(){
    const signupName=document.getElementById('signupName').value;
    const signupDob=document.getElementById('signupDob').value;

    const birthYear = new Date (signupDob).getFullYear();
    const newId = birthyear +'-' (employees.length + 1);
    const newPassword = (employees.length+1)+'-'+ birthYear;
    const newEmployee = {
        name: signupName,
        dob: signupDob,
        id: newId,
        password: newPassword
    };

    employees.push(newEmployee);
    localStorage.setItem('employees', JSON.stringify(employees));

    const signupMessageElement = document.getElementById('signupMessage');
    signupMessageElement.textContent = `Signup successful! Your User ID: ${newId} and Password: ${newPassword}`;
    signupMessageElement.style.color = 'green';
}



function updateAdditionalInfo() {
    const employeeType = parseInt(employeeTypeElement.value);

    if (employeeType === 1) {
        employeeInfoContainer.innerHTML = `
            <label for="employee-info">Commission Sales:</label>
            <input type="number" id="employee-info" placeholder="Enter Commission Sales">`;
    } else if (employeeType === 2) {
        employeeInfoContainer.innerHTML = `
            <label for="employee-info">Salary:</label>
            <input type="number" id="employee-info" placeholder="Enter Salary">`;
    } else if (employeeType === 3) {
        employeeInfoContainer.innerHTML = `
            <label for="employee-info">Hourly Rate:</label>
            <input type="number" id="employee-info" placeholder="Enter Hourly Rate">`;
    }
}

function calculateEarnings() {
    const employeeType = parseInt(employeeTypeElement.value);
    const employeeName = employeeNameElement.value;
    const employeeId = employeeIdElement.value;
    const employeeInfo = parseFloat(employeeInfoElement.value);

    let totalEarnings = 0;

    if (employeeType === 1) {
        totalEarnings = employeeInfo * 0.1;
    } else if (employeeType === 2) {
        totalEarnings = employeeInfo;
    } else if (employeeType === 3) {
        totalEarnings = employeeInfo * 40;
    }

    resultElement.innerHTML = `Total Earnings: $${totalEarnings.toFixed(2)}`;

    employees.push({
        type: employeeType,
        name: employeeName,
        id: employeeId,
        earnings: totalEarnings
    });
}

function displayEmployees() {
    let output = '<table><tr><th>Name</th><th>ID</th><th>Earnings</th></tr>';

    for (const employee of employees) {
        output += `<tr><td>${employee.name}</td><td>${employee.id}</td><td>$${employee.earnings.toFixed(2)}</td></tr>`;
    }

    output += '</table>';

    displayEmployeesElement.innerHTML = output;
}

updateAdditionalInfo(); // Initialize the form with the correct input fields.

