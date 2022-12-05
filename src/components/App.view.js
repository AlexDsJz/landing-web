import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Route } from "seed/helpers"
import Comments from "components/Comments";
import Login from "seed/examples/components/auth/Login";
import Landing from "components/Landing"

const AppView = () =>
  <div >
    <BrowserRouter>
      <Switch>
        <Route path="/comments" component={Comments} />
        <Route path="/landing" component={Landing}/>
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  </div>;

AppView.propTypes = {};

export default AppView;