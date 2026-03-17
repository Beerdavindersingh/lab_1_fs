
export interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  departmentId: number;
}

export interface Department {
  id: number;
  name: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

const API_URL = "http://localhost:3000"; 

export const employeeService = {
  getDepartments: async (): Promise<Department[]> => {
    const res = await fetch("http://localhost:3000/departments");
    if (!res.ok) throw new Error("Failed to fetch departments");
    return res.json();
  },

  getEmployees: async (): Promise<Employee[]> => {
    const res = await fetch(`${API_URL}/employees`);
    if (!res.ok) throw new Error("Failed to fetch employees");
    return res.json();
  },

  createEmployee: async (employee: Employee): Promise<ApiResponse<Employee>> => {
    const res = await fetch(`${API_URL}/employees`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    });
    return res.json();
  },
};