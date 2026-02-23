interface Employee {
  firstName: string;
  lastName?: string;
}

interface Department {
  name: string;
  employees: Employee[];
}

interface Props {
  departments: Department[];
}

export default function EmployeeList({ departments }: Props) {
  return (
    <main>
      {departments.map((dept) => (
        <section key={dept.name}>
          <h2>{dept.name}</h2>
          <ul>
            {dept.employees.map((emp, index) => (
              <li key={index}>
                {emp.firstName} {emp.lastName}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}