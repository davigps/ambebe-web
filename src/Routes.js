import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function Routes() {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/*" component={() => <Redirect to="/" />} />
        </Switch>
      </App>
    </BrowserRouter>
  );
}

export default Routes;
