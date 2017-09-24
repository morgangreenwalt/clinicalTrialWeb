// Including React & React DOM
import React from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory()

// Including components
import Main from "../components/Main";
import Contact from "../components/Contact";
import Login from "../components/Login";
// import Index from "../index.js";
import Auth from './Auth.js';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const checkAuth=(prop)=>{
    if(!auth.isAuthenticated()){
        console.log('not');
        auth.login();
        handleAuthentication(props);
    } else {
        props.history.replace("/main");
    }
};

export const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" render={(props) => {
                if(!auth.isAuthenticated()){
                    console.log('not');
                    auth.login();
                } else {
                    return <Redirect to="main" />
                }
            }} />
            <Route exact path="/main" render={(props) => {
                return <Main auth={auth}/>
            }} />
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Redirect to="main" />
            }} />
            
        </Switch>    
    </Router>
);

export default Routes