import React from "react";
import "../styles/Search.scss";

const Search = (props) => {
  const [value, setValue] = React.useState("");
  return (
    <section className="Search_container">
      <input
        type="search"
        className="Search_input"
        placeholder="Search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </section>
  );
};

export default Search;
