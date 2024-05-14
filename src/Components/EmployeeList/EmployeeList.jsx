// src/Components/EmployeeList/EmployeeList.jsx

import React from "react";
import { useState, useEffect } from "react";
import Employee from "../Employee/Employee";
import "./EmployeeList.scss";

export default function EmployeeList() {
  const [employeeList, setEmployeeList] = useState([]);

  function getEmployeeList() {
    fetch("https://vet-app-0obi.onrender.com/api/employees")
      .then((response) => response.json())
      .then((responseJon) => setEmployeeList([...responseJon]));
  }

  useEffect(getEmployeeList, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeeList.map((employee) => (
          <Employee key={employee.key} employee={employee} />
        ))}
      </section>
    </main>
  );
}
