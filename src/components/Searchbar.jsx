import React from "react";

const Searchbar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      className="input"
      placeholder="Search"
      value={query}
      onChange={(event) => setQuery(event.currentTarget.value)}
    />
  );
};

export default Searchbar;
