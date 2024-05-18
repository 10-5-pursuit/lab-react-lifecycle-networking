
import { useState, useEffect } from "react";

export const PetList = ({ employee, viewinfo }) => {

  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('https://vet-app-0obi.onrender.com/api/pets')
    .then(res => res.json())
    .then(data => setPets(data))
  }, [])
 


  
  const petByEmployee = pets.filter(pet => {
    return pet.employeeId === employee.id
  });


  return (


    <aside className="pets-list">

      <p>
    {
      petByEmployee.length === 0 ?  <p>No Pets Listed</p> : petByEmployee.map((animals, index) => 
          `${animals.name}, ` 
        ) 
      }
          </p>

    </aside>
  );
};

export default PetList;
