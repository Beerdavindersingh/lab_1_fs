import type { Department } from "../components/models/Department";

interface EmployeeListProps {
  departments: Department[];
}

export default function EmployeeList({ departments }: EmployeeListProps) {
  return (
    <main>
      <h2>Employees</h2>
      {departments.map(dept => (
        <section key={dept.id}>
          <h3>{dept.name}</h3>
          <ul>
            {dept.employees.map(emp => (
              <li key={emp.id}>
                {emp.firstName} {emp.lastName}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}