export interface Employee {
  id: number;
  firstName: string;
  lastName?: string;
  departmentId: number;
}

// For creating a new employee from form (no id yet)
export interface NewEmployee {
  firstName: string;
  lastName?: string;
  departmentId: number;
}