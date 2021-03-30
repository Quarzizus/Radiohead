import React from "react";
import Layout from "./Layout";
import Home from "../components/Home";
import ContainerHero from "../components/ContainerHero";
import ContainerList from "../components/ContainerList";
import "../styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={ContainerList} />
          <Route exact path="/registre" component={ContainerHero} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
