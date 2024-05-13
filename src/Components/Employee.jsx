import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";
export const Employee = ({ employees, pets }) => {

  const [ viewinfo, setViewInfo ] = useState( false )

if(!employees) {
  return <div>LIESSS!</div>

}


const revertViewInfo = () => {
  setViewInfo(!viewinfo)
}
  
  return (
    
    <>
    {
      employees.map(( employee, i ) => {

        return (
    <article className="employee" key={ i }>

          <div >

          <h3>{`${employee.prefix} ${employee.firstName} ${employee.lastName} ${employee.postfix}`}</h3>
          <h4>{`${employee.title}`}</h4>
          <button onClick={ revertViewInfo }>Show Pets</button>
          <PetList pets = { pets } employee = { employee } viewinfo = { viewinfo }/>
          
          </div>

      </article>
        )
    })
      
  }
  </>

    
  );
};

export default Employee;
