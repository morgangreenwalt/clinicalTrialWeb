import React, {Component} from "react";
import {NavLink} from "react-router-dom";

// Importing components
import Nav from "./Nav";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Hero from "./Hero";
import Resources from "./Resources";

export default class Add_Resource extends React.Component {  
    constructor(props){
        super(props)
    }

    render() {

        return(
            <div className="wrapper">
                <div className="row resource">
                    <div className="col-md-12">
                        <div className="img">
                            <img className="resourceImg" src={this.props.resourceImg}/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="resourceDetails">
                            <h3 className="resourceTitle">{this.props.resourceTitle}</h3>
                            <p className="resourceDesc">{this.props.resourceDesc}</p>
                        </div>  
                        <NavLink to={this.props.resourceLink}><button type="button" className="btn btn-secondary btn-lg contactBtn2">{this.props.cta}</button></NavLink>  
                    </div>
                </div>
            </div>      
        )
    }
}