let name = [];
let id = [];
let income = [];
let counter = 0;

function addCommissionEmployee() {
    const empName = document.getElementById("empName").value;
    name[counter] = empName;
    const empId = document.getElementById("empId").value;
    id[counter] = empId;
    const sales = parseFloat(document.getElementById("sales").value);

    const totalEarnings = sales;

    document.getElementById("output").innerHTML = `Total Earnings: $${totalEarnings.toFixed(2)}`;
    income[counter] = totalEarnings;
    counter++;
}

function addSalariedEmployee() {
    const empName = document.getElementById("empName").value;
    name[counter] = empName;
    const empId = document.getElementById("empId").value;
    id[counter] = empId;
    const salary = parseFloat(document.getElementById("salary").value);

    let bonus;
    if (salary <= 50000) {
        bonus = salary * 0.3;
    } else if (salary > 50000 && salary <= 250000) {
        bonus = salary * 0.2;
    } else {
        bonus = salary * 0.1;
    }

    const totalEarnings = salary + bonus;

    document.getElementById("output").innerHTML = `Total Earnings: $${totalEarnings.toFixed(2)}`;
    income[counter] = totalEarnings;
    counter++;
}

function addHourlyEmployee() {
    const empName = document.getElementById("empName").value;
    name[counter] = empName;
    const empId = document.getElementById("empId").value;
    id[counter] = empId;
    const hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
    const hoursWorked = parseInt(document.getElementById("hoursWorked").value);

    const totalEarning = hourlyRate * hoursWorked;
    let totalEarningsWithOvertime;
    if (hoursWorked <= 40) {
        document.getElementById("output").innerHTML = `Total earning is: $${totalEarning.toFixed(2)}`;
    } else {
        const overtimeHours = hoursWorked - 40;
        const overtimeRate = hourlyRate * 1.5;
        const overtimeEarnings = overtimeHours * overtimeRate;
        totalEarningsWithOvertime = totalEarning + overtimeEarnings;
        income[counter] = totalEarningsWithOvertime;

        document.getElementById("output").innerHTML = `Total earning is: $${totalEarningsWithOvertime.toFixed(2)}`;
    }
    counter++;
}

function displayAllEmployees() {
    let table = `<table border="1">
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Income</th>
        </tr>`;
    for (let i = 0; i < counter; i++) {
        table += `<tr>
            <td>${name[i]}</td>
            <td>${id[i]}</td>
            <td>${income[i].toFixed(2)}</td>
        </tr>`;
    }
    table += "</table>";
    document.getElementById("output").innerHTML = table;
}

function displayOneEmployee() {
    const emp = document.getElementById("searchName").value;
    let table = `<table border="1">
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Income</th>
        </tr>`;
    for (let i = 0; i < counter; i++) {
        if (emp === name[i]) {            table += `<tr>
        <td>${name[i]}</td>
        <td>${id[i]}</td>
        <td>${income[i].toFixed(2)}</td>
    </tr>`;
}
}
table += "</table>";
document.getElementById("output").innerHTML = table;
}

