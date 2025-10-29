import React, { useState } from "react";

export const SearchForm = ({ setSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(searchTerm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};
