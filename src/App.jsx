import React, {useState, useEffect} from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {
// useState allows to store and change data. data is changed by crating a function within the state. employeeData holds the current value which is an empty array, setEmployee holds the changed value that is done when creating a function, it is the function.
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetch('https://vet-app-0obi.onrender.com/api/employees')
    .then((employeeList) => employeeList.json()) //employeeList becomes a json file
    .then((employeeList) => setEmployeeData(employeeList)) //we are taking an employeeList.json file and taking the array that is inside of it to then use the useState function we initialized called setEmployeeData to change employeeData to now contain employeeList.
  })
  console.log(employeeData)

  return (
    <>
      <NavBar />
      <EmployeeList employeeData={employeeData} />
    </>
  );
};

export default App;
