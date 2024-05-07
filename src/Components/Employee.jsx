import { useState, useEffect } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = () => {
  const [employees, setEmployees] = useState([])
  const [pets, setPets] = useState([])
  const [hidden,setHidden] = useState(-1)

  function gatherEmployeeData () {
    fetch('https://vet-app-0obi.onrender.com/api/employees')
      .then((response) => response.json())
      .then((response) => setEmployees(response))
      .catch((error) => {
        console.log('theres an error')
      })
  }
    useEffect(() => {
      gatherEmployeeData()
    },[])

    function gatherPetData () {
      fetch('https://vet-app-0obi.onrender.com/api/pets')
        .then((response) => response.json())
        .then((response) => setPets(response))
        .catch((error) => {
          console.log('theres an error')
        })
    }

    useEffect(() => {
      gatherPetData()
    },[])


    const formatName = (item) => {
      const {firstName, lastName, prefix, postfix} = item;

      return postfix.length > 1 ? `${prefix}${firstName} ${lastName}, ${postfix}` : `${prefix}${firstName} ${lastName}`;
    }

    const matchPets = (id) => {
      return pets.filter((pet) => pet.employeeId === id).map((pet) => pet.name).join(', ').split(' ')
    }

    const handleClick = (id) =>  {
      return hidden === id ? setHidden(-1) : setHidden(id)
    };
    

    

  return (
    <>
      {employees.map((employee, index) => {
        return (
          <article className="employee" key={employee.id}>
            <h3>{formatName(employee)}</h3>
            <h4>{employee.title}</h4>
            <button onClick={() => handleClick(index)}>{hidden === index ? 'Hide Pets' : 'Show Pets'}</button>
            <PetList index={index} state={hidden} data={matchPets(employee.id)}/>
          </article>
        )
      })}
    </>
  );
};

export default Employee;
