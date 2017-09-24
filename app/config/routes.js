// Including React & React DOM
import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory()

// Including components
import Main from "../components/Main";
import Contact from "../components/Contact";
import Login from "../components/Login";
// import Index from "../index.js";
import Auth from './Auth.js';

const auth = new Auth();

if(!auth.isAuthenticated()){
    auth.login();
}
console.log(auth.auth0);

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/main" component={Main}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/login" component={Login}/>
            
        </Switch>    
    </Router>
);

export default Routes