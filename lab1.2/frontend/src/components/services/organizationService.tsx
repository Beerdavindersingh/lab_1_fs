import { organizationRepo } from "../../components/repositories/organizationRepo";
import type { Role, NewRole } from "../../components/model/role";

class OrganizationService {
  getRoles(): Role[] {
    return organizationRepo.getRoles();
  }

  createRole(role: NewRole): Role {
    if (role.firstName.trim().length < 3) {
      throw new Error("First name must be at least 3 characters.");
    }

    const existing = organizationRepo
      .getRoles()
      .find(r => r.roleName.toLowerCase() === role.roleName.toLowerCase());

    if (existing) {
      throw new Error("This role is already occupied.");
    }

    return organizationRepo.createRole(role);
  }
}

export const organizationService = new OrganizationService();