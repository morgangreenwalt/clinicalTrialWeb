import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import Hero from "./Hero";

export default class FAQ extends React.Component {
    // return(
    //     <div>
    //     {this.props.faq.map((data, i) => {

    constructor(props) {
        super(props);
    }

    render() {
        

        return(
            <div className="faq">
                <Hero/> 
                <div className="container">
                    <form action="/" method="POST">
                        <div className="row">
                            <div className="form-group col-md-8 col-md-offset-2">
                                <label for="faqCategory"> Topics </label>
                                <select className="form-control" id="faqCategory">
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
                        <div className="row"> {console.log(this.props.FAQ)}   
                            {(this.props.FAQ) && this.props.FAQ.data.map((data)=>{
                                return(
                                    <div className="col-md-12">
                                        <h4 className="question">Question: {data.Question}</h4>
                                        <p className="answer">Answer: {data['Clarification / Answer from Polynoma']}</p>
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
        // })}
        // </div>
        // )
    }
}