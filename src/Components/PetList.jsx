// PetList.js
import React from "react";
import "./PetList.css";

const PetList = ({ pets }) => {
  const sortedPets = pets.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <aside className="pets-list">
      {sortedPets.length > 0 ? (
        <ul className="pet-list">
          {sortedPets.map((pet, index) => (
            <li key={pet.id}>{pet.name}</li>
          ))}
        </ul>
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
