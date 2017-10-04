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
            adminQuestion: '',
            adminAnswer: '',
            adminCategory: 'Eligibility',
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
        console.log('An admin FAQ is trying to submit: ' , this.state);
        var adminQuestion = this.state.adminQuestion;
        var adminAnswer = this.state.adminAnswer;
        var adminCategory = this.state.adminCategory;
        event.preventDefault();
        this.sendQuestion(adminQuestion, adminAnswer, adminCategory);
    }

    sendQuestion(adminQuestion, adminAnswer, adminCategory) {
        console.log(adminQuestion);
        console.log(adminAnswer);
        console.log(adminCategory);
        fetch('/api/faq/adminAdd/'+adminQuestion+'/'+adminAnswer+'/'+adminCategory,{method:"POST"})
        .then(response => console.log(response))
        .then((ticket) => { this.setState({ 
            foo: null,
            adminQuestion: '',
            adminAnswer: '',
            adminCategory: '',
            });
            alert('You have submitted this question/answer to the '+adminCategory+' category.' 
            +'\nClients can now find this submission on the FAQ page.');
            this.forceUpdate();
        });
    }

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
                        <select className="form-control" id="adminCategory"
                            value={this.state.adminCategory}
                            onChange={this.handleInputChange}>>              
                            {/* value={this.state.subject}
                            onChange={this.handleInputChange}> */}
                        <option value='Eligibility'>Eligibility</option>
                        <option value='Recurrence'>Recurrence</option>
                        <option value='Concomitant Meds'>Concomitant Meds</option>
                        <option value='Adverse Event'>Adverse Event</option>
                        <option value='Randomization'>Randomization</option>
                        <option value='Tumor Assessment'>Tumor Assessment</option>
                        <option value='Study Procedures'>Study Procedures</option>
                        <option value='Study Drug'>Study Drug</option>
                        <option value='Labs'>Labs</option>
                        <option value='Regulatory'>Regulatory</option>
                        <option value='Other'>Other</option>
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