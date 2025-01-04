// console.log("Hello World");

(async function () {
    const data = await fetch("./data.json");
    const res = await data.json();
    console.log(res);

    let employees = res;
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];

    const employeeList = document.querySelector(".employees_names--list");
    const employeeInfo = document.querySelector(".employees_names--info");
    const renderEmployees = () => {
        employeeList.innerHTML = "";
        employees.forEach((employee) => {
            const employee = document.createElement("span");
            employee.classList.add("employee__names--item");
            if (parseInt(selectedEmployeeId, 10) === employee.id) {
                employee.classList.add("selected");
                selectedEmployee = employee;
            }
            employee.setAttribute("id", employee.id);
            employee.innerHTML = `${employee.firstName} ${employee.lastName} <i class="employeeDelete">❌</i>`;
            employeeList.append(employee);
        });
    };
    renderEmployees();

    //Render Single Employee
})();
