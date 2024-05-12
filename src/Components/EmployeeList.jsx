import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({ employees }) => {

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        <Employee  employees = { employees }/>
      </section>
    </main>
  );
};

export default EmployeeList;
