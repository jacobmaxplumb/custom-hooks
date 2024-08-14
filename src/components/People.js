import { useState } from "react";

const initialFormValues = {
  name: "",
  email: "",
  phone: ""
};

export const People = () => {
  const [people, setPeople] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const addPerson = () => {
    const person = {id: Date.now(), ...formValues};
    setPeople([...people, person]);
    setFormValues(initialFormValues);
  }

  return (
    <div>
      <div>
        <input
          value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
        />
      </div>
      <div>
        <input
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />
      </div>
      <div>
        <input
          value={formValues.phone}
          onChange={(e) =>
            setFormValues({ ...formValues, phone: e.target.value })
          }
        />
      </div>
      <button onClick={addPerson}>Add</button>
      <ul>
        {people.map((person) => (
          <li
            key={person.id}
          >
            {person.name} - {person.email} - {person.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};
