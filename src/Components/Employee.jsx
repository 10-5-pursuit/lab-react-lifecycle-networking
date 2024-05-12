import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ employees }) => {

if(!employees) {
  return <div>LIESSS!</div>
}
  
  return (
    
    <>
    {
      employees.map((employee, i) => {
        console.log(employee)
        return (
    <article className="employee" key={i}>

          <div >

          <h3>{`${employee.prefix} ${employee.firstName} ${employee.lastName} ${employee.postfix}`}</h3>
          <h4>{`${employee.title}`}</h4>
          <button>Show Pets</button>
          <PetList />
          
          </div>




      </article>
        )
    })
      
  }
  </>

    
  );
};

export default Employee;
