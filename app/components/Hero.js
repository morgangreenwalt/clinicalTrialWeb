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
                            <h2 className="faqTitle">Frequenty Asked Questions</h2>
                            <p className="faqCopy">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                </div>    
            </div>         
        )
    }
}