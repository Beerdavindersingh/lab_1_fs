import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const roleRepo = {
  async getAll() {
    return prisma.role.findMany({ include: { person: true } });
  },

  async create(data: { roleName: string; personId: number }) {
    return prisma.role.create({ data });
  }
};