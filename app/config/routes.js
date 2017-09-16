// Including React & React DOM
import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory()

// Including components
import Main from "../components/Main";
import Search from "../components/Search";

const Routes = () => (    
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={}/>
            <Route exact path="/" component={}/>
            <Route exact path="/" component={}/>
        </Switch>    
    </Router>
);

export default Routes