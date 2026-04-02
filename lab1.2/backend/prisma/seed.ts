import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Seed Departments
  const departments = [
    "Administration", "Audit", "Banking Operations", "Communications",
    "Corporate Services", "Facilities", "Financial Services",
    "Human Resources", "Information Technology", "IT Technician"
  ];
  for (const name of departments) {
    await prisma.department.upsert({ where: { name }, update: {}, create: { name } });
  }

  // Seed Employees (map departmentId to name)
  const dept = await prisma.department.findMany();
  const deptMap = Object.fromEntries(dept.map((d: { name: string; id: number }) => [d.name, d.id]));

  const employees = [
    { firstName: "Zoë", lastName: "Robins", dept: "Administration" },
    // ... (all your employees from EmployeeRepo.ts, using dept name)
  ];
  for (const e of employees) {
    await prisma.employee.create({
      data: { firstName: e.firstName, lastName: e.lastName, departmentId: deptMap[e.dept] }
    });
  }

  // Seed Persons + Roles
  const roles = [
    { firstName: "Jo-Anne", lastName: "Sinclair", roleName: "CEO / Chair of Board" },
    // ... (all your roles from RoleRepo.ts)
  ];
  for (const r of roles) {
    const person = await prisma.person.create({ data: { firstName: r.firstName, lastName: r.lastName } });
    await prisma.role.create({ data: { roleName: r.roleName, personId: person.id } });
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());