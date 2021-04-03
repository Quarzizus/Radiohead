import React from "react";
import "../styles/Search.scss";

const Search = (props) => {
  return (
    <section className="Search_container">
      <input
        type="search"
        className="Search_input"
        placeholder="Search"
        value={props.value}
        onChange={props.onChange}
      />
    </section>
  );
};

export default Search;
