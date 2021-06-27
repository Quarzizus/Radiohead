import React from "react";
import "../styles/Search.scss";

const Search = ({ value, onChange }) => {
  return (
    <section className="Search_container">
      <input
        type="search"
        className="Search_input"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </section>
  );
};

export default Search;
