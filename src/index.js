import React from "react";
import ReactDOM from "react-dom";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//Pages
import { About, Feature, Learn, Trader, Main, NotFound } from "./Pages";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={About} />
      <Route exact path="/feature" component={Feature} />
      <Route exact path="/trader" component={Trader} />
      <Route exact path="/learn" component={Learn} />
      <Route exact path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
