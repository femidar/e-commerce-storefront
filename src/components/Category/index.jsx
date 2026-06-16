import { useState } from "react";

export default function Category() {
  let [choice, setChoice] = useState();

  function handleChange(event) {
    setChoice(event.target.value);
  }

  return (
    <>
      <select value={choice} onChange={handleChange} id="drop-down">
        <option>Men's clothing</option>
        <option>Jewelery</option>
        <option>Electronics</option>
        <option>Women's clothing</option>
      </select>
    </>
  );
}
