export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  departmentId: number;
}

export interface Department {
  id: number;
  name: string;
}

const API_URL = "";

export const employeeService = {
  getDepartments: async (): Promise<Department[]> => {
    const res = await fetch(`${API_URL}/departments`);
    if (!res.ok) throw new Error("Failed to fetch departments");
    return res.json();
  },

  getEmployees: async (): Promise<Employee[]> => {
    const res = await fetch(`${API_URL}/employees`);
    if (!res.ok) throw new Error("Failed to fetch employees");
    return res.json();
  },

  createEmployee: async (employee: Employee): Promise<Employee> => {
    const res = await fetch(`${API_URL}/employees`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    });
    if (!res.ok) throw new Error("Failed to create employee");
    return res.json();
  },
};