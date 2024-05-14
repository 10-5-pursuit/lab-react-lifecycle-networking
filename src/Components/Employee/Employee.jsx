// src/Components/Employee/Employee.jsx

import PetList from "../PetList/PetList";
import "./Employee.scss";

export default function Employee({ employee }) {
  const { firstName, lastName, prefix, postfix, title } = employee;
  const fulName = `${firstName} ${lastName}`;
  return (
    <article className="employee">
      <h3>
        {prefix != "" && prefix} {fulName}
        {postfix != "" && `, ${postfix}`}
      </h3>
      <h4>{title}</h4>
      <button>Show Pets</button>
      <PetList />
    </article>
  );
}
