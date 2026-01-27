import { useState } from "react";
import EmployeeList from "./components/employeeList";
import EmployeeForm from "./components/employeeForm";

interface Employee {
  firstName: string;
  lastName?: string;
}

interface Department {
  name: string;
  employees: Employee[];
}

function App() {
  const [departments, setDepartments] = useState<Department[]>([
    {
      name: "Administration",
      employees: [
        { firstName: "Zoë", lastName: "Robins" },
        { firstName: "Madeleine", lastName: "Madden" }
      ]
    },
    {
      name: "Audit",
      employees: [
        { firstName: "Josha", lastName: "Sadowski" },
        { firstName: "Kate", lastName: "Fleetwood" }
      ]
    }
  ]);

  function addEmployee(firstName: string, lastName: string, departmentName: string) {
    setDepartments((prev) =>
      prev.map((dept) =>
        dept.name === departmentName
          ? {
              ...dept,
              employees: [...dept.employees, { firstName, lastName }]
            }
          : dept
      )
    );
  }

  return (
    <>
      <header>
        <h1>Pixell River Employee Directory</h1>
        <p>Welcome to the Pixell River Financial staff directory</p>
      </header>

      <EmployeeList departments={departments} />

      <EmployeeForm
        departments={departments.map((d) => d.name)}
        onAddEmployee={addEmployee}
      />

      <footer>
        <p>Copyright Pixell River Financial © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default App;
