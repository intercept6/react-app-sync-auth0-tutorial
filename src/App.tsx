import React from "react";
import { NavBar } from "./components/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import { Profile } from "./components/Profile";
import { DemoTable } from "./components/DemoTable";
import { history } from "./utils/history";
import { PrivateRoute } from './components/PrivateRoute';

export const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/demo-table" component={DemoTable} />
        </Switch>
      </Router>
    </div>
  );
};
