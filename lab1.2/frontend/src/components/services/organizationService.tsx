import { organizationRepo } from "../repositories/organizationRepo";

export const organizationService = {
  async getRoles() {
    return organizationRepo.getRoles();
  },

  async createRole(role: { roleName: string; firstName: string; lastName: string }) {
    if (role.firstName.trim().length < 3) {
      throw new Error("First name must be at least 3 characters.");
    }
    return organizationRepo.createRole(role);
  }
};