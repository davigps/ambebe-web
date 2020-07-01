import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function Routes() {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </App>
    </BrowserRouter>
  );
}

export default Routes;
