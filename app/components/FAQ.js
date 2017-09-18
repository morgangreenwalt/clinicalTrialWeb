import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import Hero from "./Hero";

export default class FAQ extends React.Component {
    // return(
    //     <div>
    //     {this.props.faq.map((data, i) => {

    render() {
        

        return(
            <div className="faq">
                <Hero/> 
                <div className="container">
                    <form action="/" method="POST">
                        <div className="form-group">
                            <label for="faqCategory">Select Category</label>
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

                        <div className="form-group">
                            <label for="textarea">Search</label>
                            <textarea class="form-control" id="textarea" rows="3"></textarea>
                        </div>

                        <NavLink to="/">
                            <button type="submit" id ="loginSubmit" className="btn contactBtn btn-lg">Search FAQ</button>
                        </NavLink>
                    </form>

                    <div className="questions">
                        <div className="row">   
                            <div className="col-md-6">
                                <h4 className="question">Questions</h4>
                                <p className="answer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                <h4 className="question">Questions</h4>
                                <p className="answer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="col-md-6">
                                <h4 className="question">Questions</h4>
                                <p className="answer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                <h4 className="question">Questions</h4>
                                <p className="answer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
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