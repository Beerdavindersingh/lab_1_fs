import { useState } from "react";
import { employeeService } from "../components/services/employeeService";
import type { Department } from "../components/models/Department";
import type { NewEmployee } from "../components/models/Employee";

interface EmployeeFormProps {
  refresh: () => void;
}

export default function EmployeeForm({ refresh }: EmployeeFormProps) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [departmentId, setDepartmentId] = useState<number>(1);
  const [error, setError] = useState<string>("");

  const departments: Department[] = employeeService.getDepartments();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (firstName.trim().length < 3) {
      setError("First name must be at least 3 characters.");
      return;
    }

    try {
      const newEmployee: NewEmployee = {
        firstName,
        lastName,
        departmentId
      };

      employeeService.createEmployee(newEmployee);

      // Clear form
      setFirstName("");
      setLastName("");
      setDepartmentId(departments[0]?.id ?? 1);

      refresh();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        placeholder="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        required
      />
      <input
        placeholder="Last Name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <select
        value={departmentId}
        onChange={e => setDepartmentId(Number(e.target.value))}
      >
        {departments.map(d => (
          <option key={d.id} value={d.id}>
            {d.name}
          </option>
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  );
}