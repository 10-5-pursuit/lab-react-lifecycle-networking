import React, { useState, useEffect } from "react";
import PetList from "./PetList";
import "./Employee.css";

const Employee = ({ employee }) => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPets, setShowPets] = useState(false);

  useEffect(() => {
    // Fetch pets for the current employee from the API
    const fetchPets = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://vet-app-0obi.onrender.com/api/pets?employeeId=${employee.id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch pets");
        }
        const data = await response.json();
        setPets(data);
        setShowPets(data.length > 0); // Set showPets based on whether pets exist
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPets();
  }, [employee.id]);

  const hidePets = () => {
    setShowPets(false);
  };

  return (
    <article className="employee">
      <h3>
        {employee.prefix && `${employee.prefix} `}
        {employee.firstName} {employee.lastName}
        {employee.postfix && `, ${employee.postfix}`}
      </h3>
      <h4>{employee.title}</h4>
      {!showPets && (
        <button onClick={() => setShowPets(true)} disabled={isLoading}>
          {isLoading ? "Loading pets..." : "Show Pets"}
        </button>
      )}
      {showPets && <button onClick={hidePets}>Hide Pets</button>}
      {showPets && pets.length > 0 && <PetList pets={pets} />}
      {showPets && pets.length === 0 && (
        <p>No pets listed for this employee.</p>
      )}
    </article>
  );
};

export default Employee;
