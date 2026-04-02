import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const departments = await prisma.department.findMany();
  res.json(departments);
});

export default router;