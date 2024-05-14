// PetList.js
import React from 'react';

function PetList({ pets }) {
  return (
    <aside className="pets-list">
      <p>{pets.map(pet => pet.name).join(', ')}</p>
    </aside>
  );
}

export default PetList;
