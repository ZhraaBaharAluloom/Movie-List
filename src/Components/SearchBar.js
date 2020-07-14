import React from "react";

const SearchBar = ({ setQuery }) => {
  return (
    <input
      placeholder="Search..."
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
