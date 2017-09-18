import React from "react";
import {NavLink} from "react-router-dom";

export default class Login extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center"><i className="fa fa-facebook-square" aria-hidden="true"></i> Clinical Trial</h1>
                    <h3 className="text-justify">Bypass slow communication and login with your clinical trial number to get information and answers from doctors quickly and efficiencly!</h3><br/>

                    <form action="/login" method="POST">
                        <div className="form-group">
                            <label for="trialNumber">Clinical Trial Number</label>
                            <input type="text" name="trialNumber" className="form-control" id="trialNumber" placeholder="Clinical Trial Number"/>
                        </div>

                        <div className="form-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" className="form-control" id="username" placeholder="Username"/>
                        </div>

                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" className="form-control" id="password" placeholder="Password"/>
                        </div>

                        <div className="form-group">
                            <label for="password">Re-enter Password</label>
                            <input type="password" name="password" className="form-control" id="password" placeholder="Re-enter Password"/>
                        </div>

                        <NavLink to="/">
                            <button type="submit" id ="loginSubmit" className="btn contactBtn btn-lg">Login</button>
                        </NavLink>
                    </form>
                </div>
            </div>
        );
    }
}