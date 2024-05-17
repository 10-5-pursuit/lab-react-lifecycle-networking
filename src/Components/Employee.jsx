
import React, { useState, useEffect } from "react";
import PetList from "./PetList";
import "./Employee.css";

const API = "https://vet-app-0obi.onrender.com/api/employees";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    fetch(`${API}`)
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  const handleShowPets = (employeeId) => {
    if (employeeId === selectedEmployeeId) {
      setSelectedEmployeeId(null);
      setPetList([]);
    } else {
      fetch(`${API}/pets?employeeId=${employeeId}`)
        .then((res) => res.json())
        .then((data) => {
          setSelectedEmployeeId(employeeId);
          setPetList(data);
        })
        .catch((error) => {
          console.error("Error fetching pets:", error);
        });
    }
  };

  return (
    <article className="employee">
      {employees.map((employee) => (
        <div className="emp" key={employee.id}>
          <h3>{`${employee.prefix || ""} ${employee.firstName} ${employee.lastName}${employee.postfix ? `, ${employee.postfix}` : ""}`}</h3>
          <h4>{employee.title}</h4>
          <button onClick={() => handleShowPets(employee.id)}>
            {selectedEmployeeId === employee.id ? "Hide Pets" : "Show Pets"}
          </button>
          {selectedEmployeeId === employee.id && <PetList employeeId={employee.id} />}
        </div>
      ))}
    </article>
  );
};

export default Employee;
