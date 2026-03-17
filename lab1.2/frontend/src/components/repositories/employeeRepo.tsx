import type { Employee, NewEmployee } from "../models/Employee";
import type { Department } from "../models/Department";

class EmployeeRepo {
  private departments: Department[] = [
    {
      id: 1,
      name: "Administration",
      employees: [
        { id: 1, firstName: "Zoë", lastName: "Robins", departmentId: 1 },
        { id: 2, firstName: "Madeleine", lastName: "Madden", departmentId: 1 }
      ]
    },
    {
      id: 2,
      name: "Audit",
      employees: [
        { id: 3, firstName: "Josha", lastName: "Sadowski", departmentId: 2 },
        { id: 4, firstName: "Kate", lastName: "Fleetwood", departmentId: 2 }
      ]
    },
    {
      id: 3,
      name: "Banking Operations",
      employees: [
        { id: 5, firstName: "Priyanka", lastName: "Bose", departmentId: 3 },
        { id: 6, firstName: "Hammed", lastName: "Animashaun", departmentId: 3 },
        { id: 7, firstName: "Álvaro", lastName: "Morte", departmentId: 3 },
        { id: 8, firstName: "Taylor", lastName: "Napier", departmentId: 3 },
        { id: 9, firstName: "Alan", lastName: "Simmonds", departmentId: 3 }
      ]
    },
    {
      id: 4,
      name: "Communications",
      employees: [
        { id: 10, firstName: "Gil", lastName: "Cardinal", departmentId: 4 },
        { id: 11, firstName: "Richard J.", lastName: "Lewis", departmentId: 4 }
      ]
    },
    {
      id: 5,
      name: "Corporate Services",
      employees: [
        { id: 12, firstName: "Randy", lastName: "Bradshaw", departmentId: 5 },
        { id: 13, firstName: "Tracey", lastName: "Cook", departmentId: 5 },
        { id: 14, firstName: "Lubomir", lastName: "Mykytiuk", departmentId: 5 }
      ]
    },
    {
      id: 6,
      name: "Facilities",
      employees: [
        { id: 15, firstName: "Dakota", lastName: "House", departmentId: 6 },
        { id: 16, firstName: "Lori Lea", lastName: "Okemah", departmentId: 6 },
        { id: 17, firstName: "Renae", lastName: "Morrisseau", departmentId: 6 },
        { id: 18, firstName: "Rick", lastName: "Belcourt", departmentId: 6 }
      ]
    },
    {
      id: 7,
      name: "Financial Services",
      employees: [
        { id: 19, firstName: "Selina", lastName: "Hanusa", departmentId: 7 },
        { id: 20, firstName: "Buffy", lastName: "Gaudry", departmentId: 7 },
        { id: 21, firstName: "Shaneen Ann", lastName: "Fox", departmentId: 7 },
        { id: 22, firstName: "Allan", lastName: "Little", departmentId: 7 },
        { id: 23, firstName: "Danny", lastName: "Rabbit", departmentId: 7 }
      ]
    },
    {
      id: 8,
      name: "Human Resources",
      employees: [
        { id: 24, firstName: "Jesse Ed", lastName: "Azure", departmentId: 8 },
        { id: 25, firstName: "Stacy", lastName: "Da Silva", departmentId: 8 },
        { id: 26, firstName: "Vladimír", lastName: "Valenta", departmentId: 8 },
        { id: 27, firstName: "Samone", lastName: "Sayeses-Whitney", departmentId: 8 },
        { id: 28, firstName: "Paul", lastName: "Coeur", departmentId: 8 }
      ]
    },
    {
      id: 9,
      name: "Information Technology",
      employees: [
        { id: 29, firstName: "Graham", lastName: "Greene", departmentId: 9 },
        { id: 30, firstName: "Sandika", lastName: "Evergreen", departmentId: 9 },
        { id: 31, firstName: "Jennifer", lastName: "Rodriguez", departmentId: 9 }
      ]
    },
    {
      id: 10,
      name: "IT Technician",
      employees: [
        { id: 32, firstName: "Aiyana", lastName: "Littlebear", departmentId: 10 },
        { id: 33, firstName: "Inara", lastName: "Thunderbird", departmentId: 10 },
        { id: 34, firstName: "Kaya", lastName: "Runningbrook", departmentId: 10 },
        { id: 35, firstName: "Elara", lastName: "Firehawk", departmentId: 10 },
        { id: 36, firstName: "Siona", lastName: "Moonflower", departmentId: 10 },
        { id: 37, firstName: "Kaiyu", lastName: "Greywolf", departmentId: 10 },
        { id: 38, firstName: "Ayawamat", lastName: "Nightwind", departmentId: 10 },
        { id: 39, firstName: "Tala", lastName: "Braveheart", departmentId: 10 },
        { id: 40, firstName: "Iniko", lastName: "Stonebear", departmentId: 10 },
        { id: 41, firstName: "Onatah", lastName: "Redhawk", departmentId: 10 }
      ]
    }
  ];

  getDepartments(): Department[] {
  return this.departments.map(dept => ({
    ...dept,
    employees: [...dept.employees]
  }));
}

  getEmployees(): Employee[] {
    return this.departments.flatMap(d => d.employees);
  }

  createEmployee(employee: NewEmployee): Employee {
    const department = this.departments.find(d => d.id === employee.departmentId);
    if (!department) throw new Error("Department does not exist.");

    const newId =
      Math.max(
        0,
        ...this.departments.flatMap(d => d.employees.map(e => e.id))
      ) + 1;

    const newEmployee: Employee = { ...employee, id: newId };
    department.employees.push(newEmployee);
    return newEmployee;
  }
}

export const employeeRepo = new EmployeeRepo();