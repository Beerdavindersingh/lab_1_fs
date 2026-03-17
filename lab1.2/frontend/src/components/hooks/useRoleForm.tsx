import { useState } from "react";
import { organizationService } from "../services/organizationService";
import type { NewRole } from "../model/role";

export function useRoleForm(refresh: () => void) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roleName, setRoleName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const newRole: NewRole = { firstName, lastName, roleName };
      organizationService.createRole(newRole);

      setFirstName("");
      setLastName("");
      setRoleName("");

      refresh();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return {
    firstName,
    lastName,
    roleName,
    error,
    setFirstName,
    setLastName,
    setRoleName,
    handleSubmit
  };
}