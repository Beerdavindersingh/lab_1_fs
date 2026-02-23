import { Routes, Route, Link } from "react-router-dom";
import EmployeeList from "./components/employeeList";
import Organization from "./components/organization";

function App() {
  return (
    <>
      <header>
        <h1>Pixell River Employee Directory</h1>
        <p>Welcome to the Pixell River Financial staff directory</p>

        <nav>
          <Link to="/employees">Employees</Link> |{" "}
          <Link to="/organization">Organization</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="*" element={<EmployeeList />} />
      </Routes>

      <footer>
        <p>Copyright Pixell River Financial © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default App;