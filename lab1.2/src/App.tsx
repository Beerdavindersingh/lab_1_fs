import EmployeeList from "./components/employeeList";

function App() {
  return (
    <>
      <header>
        <h1>Pixell River Employee Directory</h1>
        <p>Welcome to the Pixell River Financial staff directory</p>
      </header>

      <EmployeeList />

      <footer>
        <p>
          Copyright Pixell River Financial ©{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}

export default App;
