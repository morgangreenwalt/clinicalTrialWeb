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
        var firstName = this.state.firstName;
        var lastName = this.state.lastName;
        var email = this.state.email;
        var question = this.state.question;
        event.preventDefault();
        this.sendTicket(question, firstName, lastName, email);
    }

    sendTicket(question, firstName, lastName, email) {

        fetch('/api/zendesk/newTicket/'+question+'/'+firstName+'/'+lastName+'/'+email)
        .then(response => response.json())
        .then((ticket) => { this.setState({ 
            foo: null,
            firstName: '',
            lastName: '',
            email: '',
            topic: '',
            question: '',
            ticket: ''
            });
            alert('Thanks '+firstName+'! Your question has been submitted.');
            this.forceUpdate();
        });
    }

    render() {
        console.log("component loaded!");
        return(
            <div className="wrapper">
            <Nav/>
            <Hero title={"Contact Us"} bodyCopy={"For more information about Polynoma, your clinical trial, or our technology, please contact us. Use the form below to provide your information along with any questions or comments, and a representative will get back to you."} hero={"/assets/img/contact.png"}/>
            
            <div className="container">
                <div className="row">
                <form onSubmit={this.handleSubmit} style={{marginBottom: 30}}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="firstName" className="form-control" id="firstName" placeholder="Enter First Name"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="lastName" className="form-control" id="lastName" placeholder="Enter Last Name"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleInputChange}/>
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="topic">Select Topic</label>
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
                        <label htmlFor="question">Question</label>
                        <textarea className="form-control" id="question" rows="3"
                            value={this.state.question}
                            onChange={this.handleInputChange}>
                        </textarea>
                    </div>
                    
                    <button type="submit" className="btn searchBtn">Submit</button>
                    </form>
                </div> 
            </div>
            <Footer/>
            </div>   
        )
    }
}