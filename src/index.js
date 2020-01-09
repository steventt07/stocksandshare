import React, { useLayoutEffect } from "react"
import ReactDOM from "react-dom"

import { 
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect} from "react-router-dom"

//Pages
import MainPage from "./pages/index"
import AboutPage from "./pages/about"
import NotFoundPage from "./pages/404"

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/404" component={NotFoundPage}/>
            <Redirect to="/404"/>
        </Switch>
    </Router>, 
    document.getElementById("root"))