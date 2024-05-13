export const PetList = ({ employee, pets, viewinfo }) => {


  const petByEmployee =
    pets.filter(pet => {
    return pet.employeeId === employee.id
  });


  return (
    <aside className="pets-list">
      { viewinfo && petByEmployee.length === 0 ? 
      
      <p>Awwww</p> : 
      
      <>

      { console.log(petByEmployee) }

       {petByEmployee.map(pet => {
        <p>{ pet.name } </p>
       })} 
      </>
      
      }

    </aside>
  );
};

export default PetList;
