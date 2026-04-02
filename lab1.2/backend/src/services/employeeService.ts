import { employeeRepo } from "../repositories/EmployeeRepo";

export const employeeService = {
  async getEmployees() {
    return employeeRepo.getAll();
  },

  async createEmployee(data: { firstName: string; lastName?: string; departmentId: number }) {
    if (!data.firstName || data.firstName.trim().length < 3) {
      throw new Error("First name must be at least 3 characters");
    }
    return employeeRepo.create(data);
  }
};