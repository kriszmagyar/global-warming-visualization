import React from "react";
import { Switch, Route } from "react-router-dom";
import IndexPage from './IndexPage';
import CitiesPage from './CitiesPage';

function AppRouter() {
  return (
    <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/cities" component={CitiesPage} />
    </Switch>
  );
}

export default AppRouter;