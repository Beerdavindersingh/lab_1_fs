import { useState } from "react";

interface Props {
  departments: string[];
  onAddEmployee: (firstName: string, lastName: string, department: string) => void;
}

export default function EmployeeForm({ departments, onAddEmployee }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState(departments[0]);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (firstName.trim().length < 3) {
      setError("First name must be at least 3 characters long.");
      return;
    }

    onAddEmployee(firstName, lastName, department);

    // clear form
    setFirstName("");
    setLastName("");
    setDepartment(departments[0]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Employee</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>First Name:</label><br />
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label>Last Name:</label><br />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <label>Department:</label><br />
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Add Employee</button>
    </form>
  );
}
