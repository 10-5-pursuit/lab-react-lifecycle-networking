import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { useState, useEffect } from "react";


function App () {

const [error,setError] = useState();
const [employees, setEmployees] = useState(null);
const [isLoading, setIsLoading] = useState(false)

useEffect(() => {

  const fetchEmployees = async () => {

    setIsLoading(true)

    try{
      
      const response = await fetch("https://vet-app-0obi.onrender.com/api/employees");
      const employee = (await response.json())
      setEmployees(employee);

    } catch (error) {
      setError(error)
    }

    setIsLoading(false)
  }
  fetchEmployees();
  


  // fetch("https://vet-app-0obi.onrender.com/api/employees")
  //   .then(response => {
  //     // if it is not true it will run this error
  //     if(!response.ok) {
  //       throw new Error("No Data was fetched")
  //     }
  //     //should return data converted to json.
  //     return response.json();
  //   })
  //   .then(data => {
  //     //sets employee as data for access.
  //     setEmployees(data)
  //   })
  //   .catch(error => {
  //     //throws error if they is an issue fetching data.
  //     console.error("Error was found fetching data:", error)
  //   })
},[])


if(isLoading) {
  return <div>Loading...</div>
}

if(error) {
  return <div> {`${error}`} Occurred!</div>
}

  return (
    <>
      <NavBar />
      <EmployeeList />
    </>
  );
};

export default App;
