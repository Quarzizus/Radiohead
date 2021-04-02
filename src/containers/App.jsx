import React from "react";
import Layout from "./Layout";
import Home from "../components/Home";
import ContainerHero from "../components/ContainerHero";
import ContainerList from "../components/ContainerList";
import ItemEdit from "../components/ItemEdit";
import ItemDetails from "../components/ItemDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={ContainerList} />
          <Route exact path="/registre" component={ContainerHero} />
          <Route exact path="/list/:itemId/edit" component={ItemEdit} />
          <Route exact path="/list/:itemId/" component={ItemDetails} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
