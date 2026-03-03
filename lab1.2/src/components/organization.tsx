import { useState, useEffect } from "react";
import { organizationService } from "../components/services/organizationService";
import type { Role } from "../components/model/role";
import RoleForm from "./RoleForm";

export default function Organization() {
  const [roles, setRoles] = useState<Role[]>([]);

  const loadRoles = () => {
    setRoles(organizationService.getRoles());
  };

  useEffect(() => {
    loadRoles();
  }, []);

  return (
    <main>
      <h2>Leadership & Management</h2>

      <ul>
        {roles.map(role => (
          <li key={role.id} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{role.firstName} {role.lastName}</span>
            <span>{role.roleName}</span>
          </li>
        ))}
      </ul>

      <RoleForm refresh={loadRoles} />
    </main>
  );
}