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
                <Hero title={"Frequently Asked Questions"} bodyCopy={"Polynoma is currently running one of the world’s largest melanoma clinical trials for seviprotimut-L in the indication of resected stage IIB-III melanoma. For specific questions, filter by topic and/ or search specific words or phrases. If your question is still not answered, please contact us for more information."}/> 
                <div className="container">
                    <form action="/" method="POST">
                        <div className="row">
                            <div className="form-group col-md-8 col-md-offset-2">
                                <label htmlFor="faqCategory"> Topics </label>
                                <select className="form-control" id="faqCategory">
                                <option value="eligibility" name="eligibility">Eligibility</option>
                                <option value="recurrence" name="recurrence">Recurrence</option>
                                <option value="concomitantMeds" name="concomitantMeds">Concomitant Meds</option>
                                <option value="adverseEvent" name="adverseEvent">Adverse Event</option>
                                <option value="randomization" name="randomization">Randomization</option>
                                <option value="tumorAssessment" name="tumorAssessment">Tumor Assessment</option>
                                <option value="studyProcedures" name="studyProcedures">Study Procedures</option>
                                <option value="studyDrug" name="studyDrug">Study Drug</option>
                                <option value="labs" name="labs">Labs</option>
                                <option value="regulatory" name="regulatory">Regulatory</option>
                                <option value="Other" name="other">Other</option>
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
        // })}
        // </div>
        // )
    }
}