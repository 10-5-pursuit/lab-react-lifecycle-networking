// EmployeeList.jsx
import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({ employees }) => {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map(member => (
          <Employee key={member.id} employee={member} />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
