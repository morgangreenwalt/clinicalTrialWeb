import React, {Component} from "react";
import {NavLink} from "react-router-dom";

// Importing components
import Nav from "./Nav";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Hero from "./Hero";
import Add_Resource from "./Add_Resource";

export default class Resources extends React.Component {  
    constructor(props){
        super(props)
    }

    render() {

        return(
            <div className="resources-wrapper">
                <Nav/>
                <Hero title={"Resources"} bodyCopy={"Search through our documentation for answers to questions or concerns related to your recent clinical trial. If you'd like to contact a doctor or nurse directly, please contact us."} hero={"/assets/img/resources.png"}/>
                <div className="container mainRes">
                    <div className="row">
                        <div className="col-md-4 resRow">
                            <Add_Resource resourceImg={"/assets/investigators_brochure.png"} resourceTitle={"Investigators Brochure"} resourceDesc={"Treatment of patients with resected melanoma, American Joint Committee on Cancer (AJCC) stages IIB, IIC, or III, who have not received prior adjuvant therapy."} resourceLink={"#"} cta={"Download PDF"}/>
                        </div>  

                        <div className="col-md-4 resRow">
                            <Add_Resource resourceImg={"/assets/phase_3_trial_high_risk_reoccurrence.png"} resourceTitle={"Risk Reoccurrence"} resourceDesc={"Many patients with successfully resected stage IIB to III melanoma relapse after surgery. The only treatment approved by the US FDA and other international regulatory agencies."} resourceLink={"#"} cta={"Download PDF"}/>
                        </div>

                        <div className="col-md-4 resRow">
                            <Add_Resource resourceImg={"/assets/prohibited_mediciations_for_polynoma_protocol.png"} resourceTitle={"Prohibited Medications"} resourceDesc={"Restricted only if administered systemically. Inhaled or topical uses are permitted. Contact the Study Monitor if there is any uncertainty regarding a medication."} resourceLink={"#"} cta={"Download PDF"}/>
                        </div>
                    </div>
                </div>
                <div className="contactModule text-center">
                    <div className="row">
                        <div className="container">
                        <h2 className="contactText">Still Have Questions?</h2>
                        <NavLink to="/main"><button type="button" className="btn btn-secondary btn-lg contactBtn">Visit FAQs</button></NavLink>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>      
        )
    }
}