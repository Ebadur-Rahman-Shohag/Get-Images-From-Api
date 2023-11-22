import React from "react";
import { useState } from "react";
import "./SearchBar.css";

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
    <div className="search-bar">
      <form className="search-bar-form" onSubmit={handleFormSubmit}>
        <label htmlFor="">Enter Your Term</label>
        <input type="text" onChange={handleChange} value={term} />
      </form>
    </div>
  );
}
export default SearchBar;
