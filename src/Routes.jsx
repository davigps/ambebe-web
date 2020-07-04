import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from './services/auth';

import App from "./App";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from './pages/Login';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isAuthenticated()
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )}
  />
);

function Routes() {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="/*" component={() => <Redirect to="/" />} />
        </Switch>
      </App>
    </BrowserRouter>
  );
}

export default Routes;
