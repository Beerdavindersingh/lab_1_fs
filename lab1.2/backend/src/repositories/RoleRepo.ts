import type { Role } from "../models/Role";

let roles: Role[] = [
  { id: 1, roleName: "CEO / Chair of Board", firstName: "Jo-Anne", lastName: "Sinclair" },
  { id: 2, roleName: "COO / VP Operations", firstName: "Jackson", lastName: "Smith" },
  { id: 3, roleName: "CFO / VP Administration", firstName: "Susan", lastName: "Thomas" },
  { id: 4, roleName: "VP Client Services", firstName: "Richa", lastName: "Kaur" },
  { id: 5, roleName: "CIO", firstName: "Josee", lastName: "Benjamin" },
  { id: 6, roleName: "VP Sales & Marketing", firstName: "Vincent", lastName: "Grey" },

  { id: 7, roleName: "Director Financial and Audit Services", firstName: "Rupa", lastName: "Kharki" },
  { id: 8, roleName: "Director Human Resources", firstName: "Xun", lastName: "Kuang" },
  { id: 9, roleName: "Director Legal Services / General Counsel", firstName: "Stien", lastName: "Pedersen" },
  { id: 10, roleName: "Director Information Technology", firstName: "Sandra", lastName: "Bear" },
  { id: 11, roleName: "Director Information Security and CISSO", firstName: "Gus", lastName: "Blue" },
  { id: 12, roleName: "Director Accounting", firstName: "Sam", lastName: "Kong" },
  { id: 13, roleName: "Director Physical Security", firstName: "Valentine", lastName: "Smith" },
  { id: 14, roleName: "Director Facilities", firstName: "Mariya", lastName: "Kaperski" },

  { id: 15, roleName: "Manager, Business Continuity and Disaster Recovery", firstName: "Abd al-Hamid", lastName: "Alami" },
  { id: 16, roleName: "Manager, Internal Audit", firstName: "Victoria", lastName: "Gray" },
  { id: 17, roleName: "Chief Architect", firstName: "Cheryl", lastName: "Guru" },
  { id: 18, roleName: "Manager, Security Architecture", firstName: "Jean", lastName: "Ngoy" },
  { id: 19, roleName: "Solution Architect, Online Banking", firstName: "Kris", lastName: "Gold" },
  { id: 20, roleName: "Manager, Application Solutions", firstName: "Isaac", lastName: "Smith" },
  { id: 21, roleName: "Lead Developer, Online Banking", firstName: "Payton", lastName: "Frost" },
  { id: 22, roleName: "Manager, Operational Risk", firstName: "Samantha", lastName: "Nettle" },
  { id: 23, roleName: "Manager, Vendor Relations", firstName: "Yolanda", lastName: "Ferreira" },
  { id: 24, roleName: "Manager, Purchasing", firstName: "Samir", lastName: "Hassan" },
  { id: 25, roleName: "Manager, Communications", firstName: "Yuna", lastName: "Aikawa" },
  { id: 26, roleName: "Manager, Customer Experience and Community Engagement", firstName: "Jonathan", lastName: "Carberry" },
  { id: 27, roleName: "Manager of Sales", firstName: "Roland", lastName: "Wei" },
  { id: 28, roleName: "Manager, Marketing", firstName: "Pran", lastName: "Singh" }
];

export const roleRepo = {
  getAll(): Role[] {
    return [...roles];
  },

  create(role: Role): Role {
    const newId = Math.max(0, ...roles.map(r => r.id)) + 1;
    const newRole = { ...role, id: newId };
    roles.push(newRole);
    return newRole;
  }
};