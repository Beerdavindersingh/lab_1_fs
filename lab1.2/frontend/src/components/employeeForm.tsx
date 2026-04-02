import { useState, useEffect } from "react";
import { employeeRepo } from "./repositories/employeeRepo";
import type { Department } from "./models/Department";

interface EmployeeFormProps {
  refresh: () => void;
}

export default function EmployeeForm({ refresh }: EmployeeFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [departmentId, setDepartmentId] = useState<number>(0);
  const [error, setError] = useState("");
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const deps = await employeeRepo.getDepartments();
        setDepartments(deps);
        if (deps.length > 0) setDepartmentId(deps[0].id);
      } catch (err) {
        console.error("Failed to fetch departments", err);
        setError("Could not load departments");
      }
    };
    fetchDepartments();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await employeeRepo.createEmployee({ firstName, lastName, departmentId });
      setFirstName("");
      setLastName("");
      setDepartmentId(departments[0]?.id || 0);
      refresh();
    } catch (err: any) {
      setError(err.message || "Error adding employee");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />

      <select value={departmentId} onChange={(e) => setDepartmentId(Number(e.target.value))}>
        {departments.map((d) => (
          <option key={d.id} value={d.id}>{d.name}</option>
        ))}
      </select>

      <button type="submit">Add</button>
    </form>
  );
}