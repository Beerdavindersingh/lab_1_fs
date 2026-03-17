import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const getEmployees = (req: Request, res: Response) => {
  const employees = employeeService.getEmployees();
  res.json(employees);
};

export const createEmployee = (req: Request, res: Response) => {

  try {

    const employee = employeeService.createEmployee(req.body);

    res.status(201).json(employee);

  } catch (error: any) {

    res.status(400).json({ message: error.message });

  }
};