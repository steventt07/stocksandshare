import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import MainPage from "./pages/index";
import AboutPage from "./pages/about";
import FeaturePage from "./pages/feature";
import TraderPage from "./pages/trader";
import NotFoundPage from "./pages/404";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/feature" component={FeaturePage} />
      <Route exact path="/trader" component={TraderPage} />
      <Route exact path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
