
import React, { useState, useEffect } from "react";

const API = "https://vet-app-0obi.onrender.com/api/pets";

export const PetList = ({ employeeId }) => {
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    if (employeeId) {
      fetch(`${API}?employeeId=${employeeId}`)
        .then((res) => res.json())
        .then((data) => {
          setPetList(data);
        })
        .catch((error) => {
          console.error("Error fetching pets:", error);
        });
    }
  }, [employeeId]);

  const generatePetNames = () => {
    return petList.map((pet) => pet.name).join(", ");
  };

  return (
    <aside className="pets-list">
      {petList.length ? (
        <p>{generatePetNames()}</p>
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
