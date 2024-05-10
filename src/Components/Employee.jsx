import React, { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({employee}) => {


  const [showPets, setShowPets] = useState(false);
//setShowPets is a function that changes the state of showPets

    const toggleShowPets = () => {
        setShowPets(!showPets); //setting showPets to its opposite value with ! bang operator which equals not.
    };

  return (
    <article className="employee">
      <h3>Staff Member Name: <br /> {`${employee.prefix} ${employee.firstName} ${employee.lastName} ${employee.postfix}`}</h3>
      <h4>Staff Member Title: {`${employee.title}`}</h4>
      <button onClick={toggleShowPets} >Show Pets</button>
      <PetList showPets={showPets} employee={employee}/>
    </article>
  );
};

export default Employee;
