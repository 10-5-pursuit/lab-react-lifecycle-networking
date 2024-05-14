// src/Components/PetList/PetList.jsx

import { useEffect, useState } from "react";

export default function PetList({ employeeID }) {
  const [petList, setPetList] = useState([]);

  function getPetList() {
    const BASE_API_URL =
      "https://vet-app-0obi.onrender.com/api/pets?employeeId=";
    fetch(BASE_API_URL + employeeID)
      .then((response) => response.json())
      .then((responseJon) => responseJon.map((pet) => pet.name))
      .then((data) => {
        console.log(data);
        return setPetList([...data]);
      });
  }

  useEffect(getPetList, []);

  return (
    <aside className="pets-list">
      <p>
        {petList.length == 0
          ? "No pets listed for this employee."
          : petList.join(", ")}
      </p>
    </aside>
  );
}
