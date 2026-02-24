import { employeeRepo } from "../repositories/employeeRepo";
import type { NewEmployee } from "../models/Employee";

class EmployeeService {
  getDepartments() {
    return employeeRepo.getDepartments();
  }

  getEmployees() {
    return employeeRepo.getEmployees();
  }

  createEmployee(employee: NewEmployee): { success: boolean; message?: string } {
    if (employee.firstName.length < 3) {
      return { success: false, message: "First name must be at least 3 characters." };
    }

    const departmentExists = employeeRepo
      .getDepartments()
      .some(d => d.id === employee.departmentId);

    if (!departmentExists) {
      return { success: false, message: "Department does not exist." };
    }

    employeeRepo.createEmployee(employee);
    return { success: true };
  }
}

export const employeeService = new EmployeeService();