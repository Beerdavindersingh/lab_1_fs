import type { Employee } from "../models/Employee";
import type { Department } from "../models/Department";

const API_URL = "";

export const employeeRepo = {
  async getDepartments(): Promise<Department[]> {
    const res = await fetch(`${API_URL}/departments`);
    if (!res.ok) throw new Error("Failed to fetch departments");
    return res.json();
  },

  async getEmployees(): Promise<Employee[]> {
    const res = await fetch(`${API_URL}/employees`);
    if (!res.ok) throw new Error("Failed to fetch employees");
    return res.json();
  },

  async createEmployee(employee: { firstName: string; lastName?: string; departmentId: number }): Promise<Employee> {
    const res = await fetch(`${API_URL}/employees`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    });
    if (!res.ok) throw new Error("Failed to create employee");
    return res.json();
  }
};