import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const employeeRepo = {
  async getAll() {
    return prisma.employee.findMany({ include: { department: true } });
  },

  async create(data: { firstName: string; lastName?: string; departmentId: number }) {
    return prisma.employee.create({ data });
  }
};