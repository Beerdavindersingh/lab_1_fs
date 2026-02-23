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
    },
    {
      name: "Banking Operations",
      employees: [
        { firstName: "Priyanka", lastName: "Bose" },
        { firstName: "Hammed", lastName: "Animashaun" },
        { firstName: "Álvaro", lastName: "Morte" },
        { firstName: "Taylor", lastName: "Napier" },
        { firstName: "Alan", lastName: "Simmonds" }
      ]
    },
    {
      name: "Communications",
      employees: [
        { firstName: "Gil", lastName: "Cardinal" },
        { firstName: "Richard J.", lastName: "Lewis" }
      ]
    },
    {
      name: "Corporate Services",
      employees: [
        { firstName: "Randy", lastName: "Bradshaw" },
        { firstName: "Tracey", lastName: "Cook" },
        { firstName: "Lubomir", lastName: "Mykytiuk" }
      ]
    },
    {
      name: "Facilities",
      employees: [
        { firstName: "Dakota", lastName: "House" },
        { firstName: "Lori Lea", lastName: "Okemah" },
        { firstName: "Renae", lastName: "Morrisseau" },
        { firstName: "Rick", lastName: "Belcourt" }
      ]
    },
    {
      name: "Financial Services",
      employees: [
        { firstName: "Selina", lastName: "Hanusa" },
        { firstName: "Buffy", lastName: "Gaudry" },
        { firstName: "Shaneen Ann", lastName: "Fox" },
        { firstName: "Allan", lastName: "Little" },
        { firstName: "Danny", lastName: "Rabbit" }
      ]
    },
    {
      name: "Human Resources",
      employees: [
        { firstName: "Jesse Ed", lastName: "Azure" },
        { firstName: "Stacy", lastName: "Da Silva" },
        { firstName: "Vladimír", lastName: "Valenta" },
        { firstName: "Samone", lastName: "Sayeses-Whitney" },
        { firstName: "Paul", lastName: "Coeur" }
      ]
    },
    {
      name: "Information Technology",
      employees: [
        { firstName: "Graham", lastName: "Greene" },
        { firstName: "Sandika", lastName: "Evergreen" },
        { firstName: "Jennifer", lastName: "Rodriguez" }
      ]
    },
    {
      name: "IT Technician",
      employees: [
        { firstName: "Aiyana", lastName: "Littlebear" },
        { firstName: "Inara", lastName: "Thunderbird" },
        { firstName: "Kaya", lastName: "Runningbrook" },
        { firstName: "Elara", lastName: "Firehawk" },
        { firstName: "Siona", lastName: "Moonflower" },
        { firstName: "Kaiyu", lastName: "Greywolf" },
        { firstName: "Ayawamat", lastName: "Nightwind" },
        { firstName: "Tala", lastName: "Braveheart" },
        { firstName: "Iniko", lastName: "Stonebear" },
        { firstName: "Onatah", lastName: "Redhawk" }
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