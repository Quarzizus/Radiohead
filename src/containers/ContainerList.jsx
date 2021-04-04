import React, { useEffect, useState, useMemo } from "react";
import ItemList from "../components/ItemList";
import Search from "../components/Search";
import List from "../pages/List";

const ContainerList = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ badges: [] });
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState(data.badges);

  useMemo(() => {
    const filteredItems = data.badges.filter((item) => {
      return `${item.firstName} ${item.lastName}`
        .toLowerCase()
        .includes(value.toLowerCase());
    });
    setFiltered(filteredItems);
  }, [data.badges, value]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/badges`);
        const data = await response.json();
        setLoading(false);
        setData({ badges: data });
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (filtered.length == 0) {
    <div className="containerList">
      <Search
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <List loading={loading}></List>
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
      <List loading={loading}>
        {filtered.map((dato) => (
          <ItemList
            key={dato.id}
            id={dato.id}
            firstName={dato.firstName}
            lastName={dato.lastName}
            email={dato.email}
            twitter={dato.twitter}
            jobTitle={dato.jobTitle}
          />
        ))}
      </List>
    </div>
  );
};

export default ContainerList;
