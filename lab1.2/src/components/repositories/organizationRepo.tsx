import type { Role, NewRole } from "../model/role";

class OrganizationRepo {
  private roles: Role[] = [
    { id: 1, roleName: "CEO/Chair of Board", firstName: "Jo-Anne", lastName: "Sinclair" },
    { id: 2, roleName: "COO/VP Operations", firstName: "Jackson", lastName: "Smith" }
  ];

  getRoles(): Role[] {
    return [...this.roles];
  }

  createRole(newRole: NewRole): Role {
    const newId =
      Math.max(0, ...this.roles.map(r => r.id)) + 1;

    const role: Role = { ...newRole, id: newId };
    this.roles.push(role);
    return role;
  }
}

export const organizationRepo = new OrganizationRepo();