import { useRoleForm } from "../components/hooks/useRoleForm";

interface RoleFormProps {
  refresh: () => void;
}

export default function RoleForm({ refresh }: RoleFormProps) {
  const {
    firstName,
    lastName,
    roleName,
    error,
    setFirstName,
    setLastName,
    setRoleName,
    handleSubmit
  } = useRoleForm(refresh);

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Role</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        placeholder="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        required
      />

      <input
        placeholder="Last Name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />

      <input
        placeholder="Role"
        value={roleName}
        onChange={e => setRoleName(e.target.value)}
        required
      />

      <button type="submit">Add Role</button>
    </form>
  );
}