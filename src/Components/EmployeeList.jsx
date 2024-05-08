import React, {useState, useEffect} from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://vet-app-0obi.onrender.com/api/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching employees:", error));
  },[]);
  

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map(employee => {
          return <Employee employee={employee} key={employee.id}/>
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
