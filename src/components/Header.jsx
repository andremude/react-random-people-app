import React from "react";
import Searchbar from "./Searchbar";

const Header = ({ query, setQuery }) => {
  return (
    <header className="navbar">
      <div><h1>Random People App</h1></div>
      <Searchbar query={query} setQuery={setQuery}></Searchbar>
    </header>
  );
};

export default Header;
