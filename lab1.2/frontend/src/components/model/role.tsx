export interface Role {
  id: number;
  firstName: string;
  lastName: string;
  roleName: string;
}

export type NewRole = Omit<Role, "id">;