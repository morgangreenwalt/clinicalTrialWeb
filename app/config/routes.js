// Including React & React DOM
import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory()

// Including components
import Main from "../components/Main";
import Contact from "../components/Contact";
// import Search from "../components/Search";

const Routes = () => (    
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/contact" component={Contact}/>
            
        </Switch>    
    </Router>
);

export default Routes