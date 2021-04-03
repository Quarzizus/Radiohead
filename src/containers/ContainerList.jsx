import React from "react";
import ItemList from "../components/ItemList";
import Search from "../components/Search";
import List from "../pages/List";

class ContainerList extends React.Component {
  state = {
    loading: true,
    data: {
      badges: [],
    },
    error: null,
  };

  fetchData = async () => {
    this.setState({
      loading: true,
    });
    try {
      const response = await fetch(`http://localhost:8081/badges`);
      const data = await response.json();
      this.setState({
        data: {
          badges: data,
        },
        loading: false,
        error: null,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div className="containerList">
        <Search />
        <List loading={this.state.loading}>
          {this.state.data.badges.reverse().map((dato) => (
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
  }
}

export default ContainerList;
