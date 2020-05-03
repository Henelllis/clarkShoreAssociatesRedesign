import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routeNames } from "../../constants";
import { Meetings } from "./Pages";
import "./AppRoutes.css";

const { beaches, byLaws, directors, gallery, home, meetings } = routeNames;

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path={`/${byLaws}`}>
          <div className="Body">This is Laws</div>
        </Route>
        <Route path={`/${meetings}`}>
          <Meetings />
        </Route>
        <Route path={`/${directors}`}>
          <div className="Body">This is Directors</div>
        </Route>
        <Route path={`/${beaches}`}>
          <div className="Body">This is Beaches</div>
        </Route>
        <Route path={`/${gallery}`}>
          <div className="Body">This is Gallery</div>
        </Route>
        <Route path={"/"}>
          <div className="Routes_Body">This is home</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
