import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);


  function getEmployees(){
    fetch("https://vet-app-0obi.onrender.com/api/employees")
      .then((response) => response.json())
      .then((json) => {
        setEmployees(json);
      })
      .catch((err) => {
        console.log("error fetching list of employees");
      });
  }

  useEffect(()=>{
    getEmployees();
  }, [])

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => <Employee key={employee.id} employee={employee} />)}
      </section>
    </main>
  );
};

export default EmployeeList;
