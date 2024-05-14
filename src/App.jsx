// App.jsx
import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://vet-app-0obi.onrender.com/api/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <>
      <NavBar />
      <EmployeeList employees={employees} />
    </>
  );
};

export default App;
