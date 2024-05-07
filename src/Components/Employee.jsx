import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";

export const Employee = ({employee}) => {
  const {id, firstName, lastName, prefix, postfix, title} = employee;
  const [show, changeShowing] = useState(false);
  const [pets, setPets] = useState([]);

  function switchShowing(){
    changeShowing(!show);
  }
  function getPets(){
    fetch("https://vet-app-0obi.onrender.com/api/pets")
      .then((response) => response.json())
      .then((json) => {
        setPets(json);
      })
      .catch((err) => {
        console.log("error fetching list of employees");
      });
  }

  useEffect(() => {
    getPets();
  }, [])

  return (
    <article className="employee">
      <h3>{prefix} {firstName} {lastName} {postfix ? `, ${postfix}`: ""}</h3>
      <h4>{title}</h4>
      <button onClick={switchShowing}>Show Pets</button>
      {show ? <PetList pets={pets} id={id}/> : ""}
    </article>
  );
};

export default Employee;
