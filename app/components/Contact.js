import React, {Component} from "react";
import {NavLink} from "react-router-dom";

// Importing components
import Nav from "./Nav";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Hero from "./Hero";

export default class Contact extends React.Component {  
    constructor(props){
        super(props)
        
        this.state = {
            foo: null,
            topic: '',
            question: '',
            ticket: ''
          };
          
          this.handleInputChange = this.handleInputChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        // componentDidMount() {
        //   fetch("/api/zendesk/newTicket")
        //     .then(response => response.json())
        //     .then((foo) => { this.setState({ foo }); });
        // }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log("this submit was handled");
        console.log('A ticket was submitted: ' , this.state);
        event.preventDefault();
        this.sendTicket();
    }

    sendTicket() {

        fetch('/api/zendesk/newTicket/'+this.state.question)
        .then(response => response.json())
        .then((ticket) => { this.setState({ ticket }); });
    }

    render() {
        console.log("component loaded!");
        return(
            <div className="wrapper">
            <Nav/>
            <Hero/>
            
            <div className="container">
                <div className="row">
                <form onSubmit={this.handleSubmit}>
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
                        <label for="topic">Select Topic</label>
                        <select className="form-control" id="topic">              
                            {/* value={this.state.subject}
                            onChange={this.handleInputChange}> */}
                        <option>Eligibility</option>
                        <option>Recurrence</option>
                        <option>Concomitant Meds</option>
                        <option>Adverse Event</option>
                        <option>Randomization</option>
                        <option>Tumor Assessment</option>
                        <option>Study Procedures</option>
                        <option>Study Drug</option>
                        <option>Labs</option>
                        <option>Regulatory</option>
                        <option>Other</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label for="question">Question</label>
                        <textarea className="form-control" id="question" rows="3"
                            value={this.state.question}
                            onChange={this.handleInputChange}>
                        </textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div> 
            </div> 
            </div>   
        )
    }
}