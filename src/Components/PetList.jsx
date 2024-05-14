import "./PetList.css"

export const PetList = ({petsArr, petsVisibility}) => {


  return (
    <aside className="pets-list">
      {petsVisibility &&
       (petsArr.length === 0 ? <p>No pets listed for this employee</p>  : petsArr.map((pet, i) => 
         <p key={pet.id}>{pet.name} {i === petsArr.length - 1 ? "" : " ,"} </p>
       ))
      }
    </aside>
  );
};

export default PetList;
