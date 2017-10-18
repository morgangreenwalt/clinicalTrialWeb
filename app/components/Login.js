import React from "react";
import {NavLink} from "react-router-dom";
import history from '../config/history.js';

export default class Login extends React.Component {

    constructor(){
        super();
        this.state ={
            trialNumber:"",
            error:"",
        }
    }

    handleChange = (event) => {
        this.setState({trialNumber: event.target.value})
    }

    handleSubmit = (event) => {
        console.log(this.state.trialNumber)
        if(this.state.trialNumber=="1122"){
            // event.preventDefault();
            history.push('/main');
        } else{
            event.preventDefault();
            // alert("Please enter the correct trial number.")
            this.setState({error: true})
        }
    }

    trialNumberValidation = (event) => {
        return(this.state.trialNumber=="1122")
    }

    render() {
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center"><i className="fa fa-facebook-square" aria-hidden="true"></i>Polynoma</h1>
                    <h3 className="text-justify">Bypass slow communication and login with your clinical trial number to get information and answers from doctors quickly and efficiencly!</h3><br/>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="trialNumber">Polynoma Clinical Trial Number</label>
                            <input type="text" name="trialNumber" className="form-control" id="trialNumber" placeholder="Clinical Trial Number" value={this.state.trialNumber} onChange={this.handleChange}/>
                        </div>
                        <div id="error"></div>
                        {/* <div className="form-group">
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
                        </div> */}
                        {this.state.error && <div><font color="red"><strong><em>* Please input a correct trial number *</em></strong></font></div>}
                        <button type="submit" id ="loginSubmit" className="btn contactBtn btn-lg">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}