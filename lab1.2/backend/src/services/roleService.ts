import { roleRepo } from "../repositories/RoleRepo";
import type { Role } from "../models/Role";

export const roleService = {

  getRoles(): Role[] {
    return roleRepo.getAll();
  },

  createRole(role: Role): Role {

    if (!role.firstName || role.firstName.trim().length < 3) {
      throw new Error("First name must be at least 3 characters");
    }

    const existing = roleRepo
      .getAll()
      .find(r => r.roleName.toLowerCase() === role.roleName.toLowerCase());

    if (existing) {
      throw new Error("This role is already occupied");
    }

    return roleRepo.create(role);
  }
};