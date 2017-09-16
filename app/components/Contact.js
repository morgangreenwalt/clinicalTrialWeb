import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class Contact extends React.Component {  
    constructor(props){
        super(props)
    }

    render() {

        return(
            <div className="container">
                <div className="row">
                <form>
                    <div className="form-group">
                        <label for="firstName">First Name</label>
                        <input type="firstName" className="form-control" id="firstName" placeholder="Enter First Name"/>
                    </div>
                    <div className="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="lastName" className="form-control" id="lastName" placeholder="Enter Last Name"/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email"/>
                    </div>
            
                    <div className="form-group">
                        <label for="exampleSelect1">Example select</label>
                        <select className="form-control" id="exampleSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label for="question">Question</label>
                        <textarea className="form-control" id="question" rows="3"></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div> 
            </div>    
        )
    }
}