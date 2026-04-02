import { Request, Response } from "express";
import { roleService } from "../services/roleService";

export const getRoles = async (req: Request, res: Response) => {
  const roles = await roleService.getRoles();
  res.json(roles);
};

export const createRole = async (req: Request, res: Response) => {
  try {
    const role = await roleService.createRole(req.body);
    res.status(201).json(role);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};