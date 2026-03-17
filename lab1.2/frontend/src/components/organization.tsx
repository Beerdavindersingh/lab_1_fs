interface Role {
  roleName: string;
  firstName: string;
  lastName: string;
}

const leadership: Role[] = [
  { roleName: "CEO/Chair of Board", firstName: "Jo-Anne", lastName: "Sinclair" },
  { roleName: "COO/VP Operations", firstName: "Jackson", lastName: "Smith" },
  { roleName: "CFO/VP Administration", firstName: "Susan", lastName: "Thomas" },
  { roleName: "VP Client Services", firstName: "Richa", lastName: "Kaur" },
  { roleName: "CIO", firstName: "Josee", lastName: "Benjamin" },
  { roleName: "VP Sales & Marketing", firstName: "Vincent", lastName: "Grey" },
  { roleName: "Director Human Resources", firstName: "Xun", lastName: "Kuang" },
  { roleName: "Director Information Technology", firstName: "Sandra", lastName: "Bear" },
  { roleName: "Manager, Communications", firstName: "Yuna", lastName: "Aikawa" },
  { roleName: "Manager of Sales", firstName: "Roland", lastName: "Wei" }
];

export default function Organization() {
  return (
    <main>
      <h2>Leadership & Management</h2>
      <ul>
        {leadership.map((person, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{person.firstName} {person.lastName}</span>
            <span>{person.roleName}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}