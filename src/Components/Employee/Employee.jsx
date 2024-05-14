// src/Components/Employee/Employee.jsx

import { useState } from "react";
import PetList from "../PetList/PetList";
import "./Employee.scss";

export default function Employee({ employee }) {
  const [showPet, setShowPet] = useState(false);
  const { id, firstName, lastName, prefix, postfix, title } = employee;
  const fulName = `${firstName} ${lastName}`;

  return (
    <article className="employee">
      <h3>
        {prefix != "" && prefix} {fulName}
        {postfix != "" && `, ${postfix}`}
      </h3>
      <h4>{title}</h4>
      <button onClick={() => setShowPet(!showPet)}>Show Pets</button>
      {showPet && <PetList employeeID={id} />}
    </article>
  );
}
