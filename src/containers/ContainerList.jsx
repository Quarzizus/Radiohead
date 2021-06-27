import React, { useState, useMemo, useContext } from "react";
import ItemList from "../components/ItemList";
import Search from "../components/Search";
import List from "../pages/List";
import AppContext from "../context/AppContext";

const ContainerList = () => {
  const {
    state: { items },
  } = useContext(AppContext);
  const [filtered, setFiltered] = useState(items);
  const [value, setValue] = useState("");

  useMemo(() => {
    const filteredItems = items.filter((item) => {
      return `${item.firstName} ${item.lastName}`
        .toLowerCase()
        .includes(value.toLowerCase());
    });
    setFiltered(filteredItems);
  }, [items, value]);

  if (!filtered.length) {
    <div className="containerList">
      <Search
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <List></List>
    </div>;
  }
  return (
    <div className="containerList">
      <Search
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <List>
        {filtered.map((item) => (
          <ItemList
            key={item.id}
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
            twitter={item.twitter}
            jobTitle={item.jobTitle}
          />
        ))}
      </List>
    </div>
  );
};

export default ContainerList;
