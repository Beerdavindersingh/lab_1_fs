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
    <main className="employee-directory">
      {departments.map((department) => (
        <section className="department" key={department.name}>
          <h2 className="department-title">{department.name}</h2>

          <ul className="employee-list">
            {department.employees.map((employee, index) => (
              <li className="employee-name" key={index}>
                {employee.firstName} {employee.lastName}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
