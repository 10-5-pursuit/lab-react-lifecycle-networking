export const PetList = ({pets, id}) => {

  pets = pets.filter(pet => pet.employeeId === id);
  pets = pets.map(pet => pet.name);
  pets = pets.join(", ");

  return (
    <aside className="pets-list">
      {pets ? <p>{pets}</p> : 
        <p>No pets listed for this employee.</p>
      }
      
    </aside>
  );
};

export default PetList;
