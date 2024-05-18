import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";
export const Employee = ({ employee }) => {
// console.log(employee)
  const [ viewinfo, setViewInfo ] = useState( false )

if(!employee) {
  return <div>LIESSS!</div>

}

const revertViewInfo = () => {

  setViewInfo(!viewinfo)
  
}
  
  return (
  
    <article className="employee">

          <div >

          <h3>{`${employee.prefix} ${employee.firstName} ${employee.lastName} ${employee.postfix}`}</h3>
          <h4>{`${employee.title}`}</h4>
          <button onClick={ revertViewInfo }>Show Pets</button>
          {
          viewinfo ? <PetList employee={ employee } viewinfo = { viewinfo }/> : <p>No Pets Listed</p>
          }  
          </div>

      </article>

        )
};

export default Employee;
