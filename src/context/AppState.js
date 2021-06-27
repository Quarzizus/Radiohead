import React, { useReducer, useState } from "react";
import AppContext from "./AppContext";
import Reducer from "../reducers/Reducer";
import db from "./db";

const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, db);
  const [user, setUser] = useState({});

  return (
    <AppContext.Provider value={{ state, dispatch, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
