import './PetList.css'

export const PetList = (props) => {
  const {data, state, index} = props;


  return (
    <aside className={state === index ? "pets-list" : 'pets-list hidden'}>
      {data.length > 1 ? 
       data.map((pet,index) => {
        return(
          <p className='pet' key={index}>{pet}</p>
        )
       }):  <p>No pets listed for this employee.</p>
      }
    </aside>
  );
};

export default PetList;
