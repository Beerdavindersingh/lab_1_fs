import { Request, Response } from "express";
import { roleService } from "../services/roleService";

export const getRoles = (req: Request, res: Response) => {
  const roles = roleService.getRoles();
  res.json(roles);
};

export const createRole = (req: Request, res: Response) => {

  try {

    const role = roleService.createRole(req.body);

    res.status(201).json(role);

  } catch (error: any) {

    res.status(400).json({ message: error.message });

  }
};