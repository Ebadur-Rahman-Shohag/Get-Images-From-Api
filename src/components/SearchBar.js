import React from "react";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    setTerm("");
  };

  const [term, setTerm] = useState("");

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleFormSubmit}>
        <label className="label" htmlFor="">
          Enter Your Term
        </label>
        <input
          className="input-field "
          type="text"
          onChange={handleChange}
          value={term}
          placeholder="e.g cat,dog,flower"
        />
        <button className="submit-button">Search</button>
      </form>
    </div>
  );
}
export default SearchBar;
