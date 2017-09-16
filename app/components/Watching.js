import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class Watching extends React.Component {  
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
            {this.props.watchBoots.map((data, i) => {

        return(
            <div className="row">

            </div> 
        );
        })}
        </div>
        )
    }
}