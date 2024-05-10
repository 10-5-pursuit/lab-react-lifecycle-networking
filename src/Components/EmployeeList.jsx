import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({employeeData}) => {
  
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeeData.map(employee => {
          return <Employee employee={employee}/>
        })
         }
      </section>
    </main>
  );
  console.log(employeeData)
};


export default EmployeeList;
