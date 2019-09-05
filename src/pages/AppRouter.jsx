import React from "react";
import { Switch, Route } from "react-router-dom";
import IndexPage from './IndexPage';
import StationPage from './StationPage';

function AppRouter() {
  return (
    <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/station" component={StationPage} />
    </Switch>
  );
}

export default AppRouter;