import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EmployeeList from "./components/employeeList";
import EmployeeForm from "./components/employeeForm";
import Organization from "./components/organization";
import { employeeService } from "./components/services/employeeService";
import type { Department } from "./components/models/Department";

export default function App() {
  const [departments, setDepartments] = useState<Department[]>([]);

  const loadDepartments = async () => {
    try {
      // Fetch flat employees from backend
      const employees = await employeeService.getEmployees();

      // Group employees into departments
      const deptMap = new Map<number, Department>();
      for (const emp of employees) {
        const dept = (emp as any).department;
        if (!deptMap.has(dept.id)) {
          deptMap.set(dept.id, { id: dept.id, name: dept.name, employees: [] });
        }
        deptMap.get(dept.id)!.employees!.push(emp);
      }

      setDepartments(Array.from(deptMap.values()));
    } catch (err) {
      console.error("Failed to load departments", err);
    }
  };

  useEffect(() => {
    loadDepartments();
  }, []);

  return (
    <>
      <header>
        <h1>Pixell River Directory</h1>
        <nav>
          <Link to="/employees" style={{ marginRight: 10 }}>Employees</Link>
          <Link to="/organization">Organization</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/employees"
          element={
            <>
              <EmployeeList departments={departments} />
              <EmployeeForm refresh={loadDepartments} />
            </>
          }
        />
        <Route path="/organization" element={<Organization />} />
        <Route path="*" element={<Navigate to="/employees" />} />
      </Routes>

      <footer>
        <p>Copyright Pixell River Financial {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}