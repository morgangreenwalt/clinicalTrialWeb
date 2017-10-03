import React, {Component} from "react";
import {NavLink} from "react-router-dom";

// Importing components
import Nav from "./Nav";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Hero from "./Hero";

export default class Admin extends React.Component {  
    constructor(props){
        super(props)
        
        this.state = {
            foo: null,
            firstName: '',
            lastName: '',
            email: '',
            topic: '',
            question: '',
            ticket: ''
          };
          
          this.handleInputChange = this.handleInputChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }

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
        var firstName = this.state.firstName;
        var lastName = this.state.lastName;
        var email = this.state.email;
        var question = this.state.question;
        event.preventDefault();
        this.sendTicket(question, firstName, lastName, email);
    }

    // sendTicket(question, firstName, lastName, email) {

    //     fetch('/api/zendesk/newTicket/'+question+'/'+firstName+'/'+lastName+'/'+email)
    //     .then(response => response.json())
    //     .then((ticket) => { this.setState({ 
    //         foo: null,
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         topic: '',
    //         question: '',
    //         ticket: ''
    //         });
    //         alert('Thanks '+firstName+'! Your question has been submitted.');
    //         this.forceUpdate();
    //     });
    // }

    render() {
        return(
            <div className="wrapper">
            <Nav/>
            <Hero/>
            
            <div className="container">
                <div className="row">
                <form onSubmit={this.handleSubmit} style={{marginBottom: 30}}>
                    <div className="form-group">
                        <label for="topic">Select Category</label>
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
                        <label for="adminQuestion">Question</label>
                        <textarea className="form-control" id="adminQuestion" rows="3"
                            value={this.state.adminQuestion}
                            onChange={this.handleInputChange}>
                        </textarea>
                    </div>
                    
                    <div className="form-group">
                        <label for="adminAnswer">Answer</label>
                        <input type="firstName" className="form-control" id="adminAnswer"
                            value={this.state.adminAnswer}
                            onChange={this.handleInputChange}/>
                    </div>
                    
                    <button type="submit" className="btn searchBtn">Submit</button>
                    </form>
                </div> 
            </div> 
            </div>   
        )
    }
}