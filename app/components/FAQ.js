import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import helpers from "./utils/helpers";

import Hero from "./Hero";

export default class FAQ extends React.Component {
    // return(
    //     <div>
    //     {this.props.faq.map((data, i) => {

    constructor(props){
        super(props);
        this.state = {
            FAQ: "",
            renderFAQ:"",
            faqCategory: "",
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // // Show data in database
    componentDidMount(){
        helpers.getAllFAQ().then((data) => {
            if (data !== "") {
                this.setState({ FAQ: data.data, renderFAQ: data.data });
            }
        })
        console.log("i just mounted")
    }
    // handleSubmit(event){
    //     event.preventDefaut();
    //     const newFAQ = [];
    //     for (var i =0; i< this.state.FAQ.length; i++){
    //         if(this.state.FAQ[i].Category == this.state.faqCategory){
    //             newFAQ.push(this.state.FAQ[i])
    //         }

    //     }
    //     this.setState({
    //         FAQ: newFAQ,
    //     })
    //     // this.forceUpdate();
    //     console.log(this.state.faqCategory);
    //     console.log("im in the middle")
    //     // console.log(this.state.FAQ);

    // }
    handleChange(event){
        const property = event.target.id;
        const value = event.target.value;

        this.setState({
            faqCategory: value
        })
        console.log("event.target: " + event.target)
        console.log("event.target.id: " +event.target.id)
        console.log("event.target.value: " +event.target.value)
        console.log("this.state.faqCategory: " +this.state.faqCategory)
        var newFAQ = [];
        console.log(this.state.FAQ);
        for (var i =0; i< this.state.FAQ.length; i++){
            if(this.state.FAQ[i].Category == event.target.value){
                newFAQ.push(this.state.FAQ[i])
            }

        }
        console.log("newFAQ", newFAQ)
        this.setState({
            renderFAQ: newFAQ,
        })
        

    }

    render() {

        return(
            <div className="faq">
                <Hero title={"Frequently Asked Questions"} bodyCopy={"Polynoma is currently running one of the world’s largest melanoma clinical trials for seviprotimut-L in the indication of resected stage IIB-III melanoma. For specific questions, filter by topic and/ or search specific words or phrases. If your question is still not answered, please contact us for more information."}/> 
                <div className="container">
                    <form action="/" method="POST" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="form-group col-md-8 col-md-offset-2">
                                <label for="faqCategory"> Topics </label>
                                <select className="form-control" id="faqCategory" value={this.state.faqCategory} onChange={this.handleChange}>
                                <option value = "Eligibility">Eligibility</option>
                                <option value = "Recurrence">Recurrence</option>
                                <option value = "Concomitant Meds">Concomitant Meds</option>
                                <option value = "Adverse Event">Adverse Event</option>
                                <option value = "Randomization">Randomization</option>
                                <option value = "Tumor Assessment">Tumor Assessment</option>
                                <option value = "Study Procedures">Study Procedures</option>
                                <option value = "Study Drug">Study Drug</option>
                                <option value = "Labs">Labs</option>
                                <option value = "Regulatory">Regulatory</option>
                                <option value = "Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">   
                            <div className="form-group col-md-7 col-md-offset-2">
                                <input type="text" name="searchInquiry" className="form-control" id="searchInquiry" placeholder="Enter Search Here"/>
                            </div>
                            <div className="col-md-2">
                                <NavLink to="/">
                                    <button type="submit" id ="loginSubmit" className="btn searchBtn btn-md">Search</button>
                                </NavLink>
                            </div>   
                        </div>
                    </form>

                    <div className="questions">
                        <div className="row">   
                            {(this.state.renderFAQ) && this.state.renderFAQ.map((data)=>{
                                return(
                                    <div className="col-md-12" key={data._id}>
                                        <h4 className="question">
                                            <span className="letter">Q:  </span> 
                                            {data.Question}
                                        </h4>
                                        <p className="answer">
                                            <span className="letterA">A:  </span> 
                                            {data['Clarification / Answer from Polynoma']}
                                        </p>
                                        <hr/>
                                    </div>
                                    
                                )
                            })}
                        </div>
                    </div>    
                </div>
                <div className="contactModule text-center">
                    <div className="row">
                        <div className="container">
                        <h2 className="contactText">Can't Find Your Answer?</h2>
                        <NavLink to="/contact"><button type="button" className="btn btn-secondary btn-lg contactBtn">Contact Us</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




