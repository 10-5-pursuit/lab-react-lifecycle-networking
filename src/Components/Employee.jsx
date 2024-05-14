import PetList from "./PetList";
import "./Employee.css";
import generateName from "../Utils/generateName";
import { useEffect, useState } from "react";
import assignPets from "../Utils/assignPets";

export const Employee = ({employee}) => {

  const [pets, setPets] = useState([])
  const [petsVisibility, setPetsVisibility] = useState(false)
  const [showHide, setShowHide] = useState("Show")
  
  const petsArr = assignPets(pets, employee);
  
  const handleClick = () => {
    setPetsVisibility(!petsVisibility)
    showHide === "Show" ? setShowHide("Hide") : setShowHide("Show")
  }
  
  useEffect(() => {
    fetch("https://vet-app-0obi.onrender.com/api/pets")
    .then((response) => response.json())
    .then((data) => setPets(data))
    .catch((error) => console.error("Error fetching pets:", error));
  })

  return (
    <article className="employee">
      <h3>{generateName(employee)}</h3>
      <h4>{employee.title}</h4>
      <button onClick={handleClick}>{showHide} Pets</button>
      <PetList petsArr={petsArr} petsVisibility={petsVisibility}/> 
    </article>
  );
};

export default Employee;
