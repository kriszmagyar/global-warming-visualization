import React from "react";
import { Switch, Route } from "react-router-dom";
import IndexPage from './IndexPage';
import CitiesPage from './CitiesPage';
import WorldPage from './WorldPage';

function AppRouter() {
  return (
    <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/cities" component={CitiesPage} />
        <Route path="/world" component={WorldPage} />
    </Switch>
  );
}

export default AppRouter;