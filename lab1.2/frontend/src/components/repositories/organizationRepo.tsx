const API_URL = "";

export const organizationRepo = {
  async getRoles() {
    const res = await fetch(`${API_URL}/roles`);
    if (!res.ok) throw new Error("Failed to fetch roles");
    return res.json();
  },

  async createRole(role: { roleName: string; firstName: string; lastName: string }) {
    const res = await fetch(`${API_URL}/roles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(role),
    });
    if (!res.ok) throw new Error("Failed to create role");
    return res.json();
  }
};