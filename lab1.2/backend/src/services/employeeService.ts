import { employeeRepo } from "../repositories/EmployeeRepo";
import type { Employee } from "../models/Employee";

export const employeeService = {
  getEmployees(): Employee[] {
    return employeeRepo.getAll();
  },

  createEmployee(employee: Employee): Employee {

    if (!employee.firstName || employee.firstName.trim().length < 3) {
      throw new Error("First name must be at least 3 characters");
    }

    return employeeRepo.create(employee);
  }
};