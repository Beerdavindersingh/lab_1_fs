import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const getEmployees = async (req: Request, res: Response) => {
  const employees = await employeeService.getEmployees();
  res.json(employees);
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await employeeService.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};