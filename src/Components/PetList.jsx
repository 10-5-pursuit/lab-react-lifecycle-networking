import {useState, useEffect} from "react";

const API = 'https://vet-app-0obi.onrender.com/api/'

//showPets data is caught in petList by putting its property inside its parameters.
export const PetList = ({showPets, employee}) => {


const [petList, setPetList] = useState([]);

const employeePets = petList.filter((pet) => pet.employeeId === employee.id)

useEffect(() => {
  fetch(`${API}/pets`)
  .then((res) => res.json())
  .then((data) => {
    setPetList(data);
  })
  .catch((error) => {

  })

}, [])



  return (
    <>
    {/*if showPets is true then execute whatever is on the right.for && you dont need 2 conditions bc of the boolean value*/}
      {showPets &&
    <aside className="pets-list">
    {employeePets.length ? (
      <>

        {employeePets.map(pet => {
        return <p key={pet.id}>{pet.name}</p>
        })}
  
      </>

    ) : ( 

    <p>No pets listed for this employee.</p>
    )}
  </aside>
      }
    </>


  );
};

export default PetList;
