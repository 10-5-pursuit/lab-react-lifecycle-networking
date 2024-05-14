// Employee.jsx
import React, { useState } from 'react';
import PetList from './PetList';
import './Employee.css';


function Employee({ employee }) {
  const [showPets, setShowPets] = useState(false);
  const [petData, setPetData] = useState([]);

  const handleShowPetsClick = () => {
    setShowPets(!showPets);
    if (!showPets) {
      fetch(`https://vet-app-0obi.onrender.com/api/pets?employeeId=${employee.id}`)
        .then(response => response.json())
        .then(data => setPetData(data));
    }
  };

  const formatName = (employee) => {
    let formattedName = `${employee.firstName} ${employee.lastName}`;
    if (employee.prefix) {
      formattedName = `${employee.prefix} ${formattedName}`;
    }
    if (employee.postfix) {
      formattedName = `${formattedName}, ${employee.postfix}`;
    }
    return formattedName;
  };

  return (
    <article className="employee">
      <h3> {formatName(employee)} </h3>
      <h4> {employee.title}</h4>
      <button onClick={handleShowPetsClick}> Show Pets </button>
      {showPets && (
        petData.length > 0 ? (
          <PetList pets={petData} />
        ) : (
          <p>No pets listed for this employee.</p>
        )
      )}
    </article>
  );
}

export default Employee;