import React, {Component} from "react";
import {NavLink} from "react-router-dom";

// Importing components
import Nav from "./Nav";
import Footer from "./Footer";
import FAQ from "./FAQ";

export default class Hero extends React.Component {  
    constructor(props){
        super(props)
       
    }

    render() {

        return(
            <div className="row">
                <div className="faqHero"></div>
                    <div className="container">
                        <div className="faqMain">
                            <h2 className="faqTitle">{this.props.title}</h2>
                            <p className="faqCopy">{this.props.bodyCopy}</p>
                        </div>
                </div>    
            </div>         
        )
    }
}