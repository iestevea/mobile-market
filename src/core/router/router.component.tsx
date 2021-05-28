import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {
  MobileDetailScene,
  MobilesListScene,
} from "../../scenes";
import { switchRoutes } from "./routes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={switchRoutes.mobiles}
          component={MobilesListScene}
        />
        <Route
          exact
          path={switchRoutes.detailMobile}
          component={MobileDetailScene}
        />
        <Redirect from={switchRoutes.root} to={switchRoutes.mobiles}/>
      </Switch>
    </Router>
  );
};
