import type { Employee } from "../models/Employee";

let employees: Employee[] = [
  // Administration (departmentId: 1)
  { id: 1, firstName: "Zoë", lastName: "Robins", departmentId: 1 },
  { id: 2, firstName: "Madeleine", lastName: "Madden", departmentId: 1 },

  // Audit (departmentId: 2)
  { id: 3, firstName: "Josha", lastName: "Sadowski", departmentId: 2 },
  { id: 4, firstName: "Kate", lastName: "Fleetwood", departmentId: 2 },

  // Banking Operations (departmentId: 3)
  { id: 5, firstName: "Priyanka", lastName: "Bose", departmentId: 3 },
  { id: 6, firstName: "Hammed", lastName: "Animashaun", departmentId: 3 },
  { id: 7, firstName: "Álvaro", lastName: "Morte", departmentId: 3 },
  { id: 8, firstName: "Taylor", lastName: "Napier", departmentId: 3 },
  { id: 9, firstName: "Alan", lastName: "Simmonds", departmentId: 3 },

  // Communications (departmentId: 4)
  { id: 10, firstName: "Gil", lastName: "Cardinal", departmentId: 4 },
  { id: 11, firstName: "Richard J.", lastName: "Lewis", departmentId: 4 },

  // Corporate Services (departmentId: 5)
  { id: 12, firstName: "Randy", lastName: "Bradshaw", departmentId: 5 },
  { id: 13, firstName: "Tracey", lastName: "Cook", departmentId: 5 },
  { id: 14, firstName: "Lubomir", lastName: "Mykytiuk", departmentId: 5 },

  // Facilities (departmentId: 6)
  { id: 15, firstName: "Dakota", lastName: "House", departmentId: 6 },
  { id: 16, firstName: "Lori Lea", lastName: "Okemah", departmentId: 6 },
  { id: 17, firstName: "Renae", lastName: "Morrisseau", departmentId: 6 },
  { id: 18, firstName: "Rick", lastName: "Belcourt", departmentId: 6 },

  // Financial Services (departmentId: 7)
  { id: 19, firstName: "Selina", lastName: "Hanusa", departmentId: 7 },
  { id: 20, firstName: "Buffy", lastName: "Gaudry", departmentId: 7 },
  { id: 21, firstName: "Shaneen Ann", lastName: "Fox", departmentId: 7 },
  { id: 22, firstName: "Allan", lastName: "Little", departmentId: 7 },
  { id: 23, firstName: "Danny", lastName: "Rabbit", departmentId: 7 },

  // Human Resources (departmentId: 8)
  { id: 24, firstName: "Jesse Ed", lastName: "Azure", departmentId: 8 },
  { id: 25, firstName: "Stacy", lastName: "Da Silva", departmentId: 8 },
  { id: 26, firstName: "Vladimír", lastName: "Valenta", departmentId: 8 },
  { id: 27, firstName: "Samone", lastName: "Sayeses-Whitney", departmentId: 8 },
  { id: 28, firstName: "Paul", lastName: "Coeur", departmentId: 8 },

  // Information Technology (departmentId: 9)
  { id: 29, firstName: "Graham", lastName: "Greene", departmentId: 9 },
  { id: 30, firstName: "Sandika", lastName: "Evergreen", departmentId: 9 },
  { id: 31, firstName: "Jennifer", lastName: "Rodriguez (Software Developer)", departmentId: 9 },

  // IT Technician (departmentId: 10)
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
];

export const employeeRepo = {
  getAll(): Employee[] {
    return [...employees]; 
  },

  create(emp: Employee): Employee {
    const newId =
      Math.max(0, ...employees.map(e => e.id)) + 1;

    const newEmployee = { ...emp, id: newId };

    employees.push(newEmployee);

    return newEmployee;
  }
};