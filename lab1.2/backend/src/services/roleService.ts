import { roleRepo } from "../repositories/RoleRepo";

export const roleService = {
  async getRoles() {
    return roleRepo.getAll();
  },

  async createRole(data: { roleName: string; firstName: string; lastName: string }) {
    if (!data.firstName || data.firstName.trim().length < 3) {
      throw new Error("First name must be at least 3 characters");
    }

    const existing = await roleRepo.getAll();
    const conflict = existing.find(
      r => r.roleName.toLowerCase() === data.roleName.toLowerCase()
    );
    if (conflict) throw new Error("This role is already occupied");

    const prisma = (await import("@prisma/client")).PrismaClient;
    const db = new prisma();
    const person = await db.person.create({
      data: { firstName: data.firstName, lastName: data.lastName }
    });

    return roleRepo.create({ roleName: data.roleName, personId: person.id });
  }
};