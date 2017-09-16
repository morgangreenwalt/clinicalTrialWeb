import React, {Component} from "react";

export default class Results extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
        <div>
        {this.props.bootsData.map((data, i) => {

        return(
            <div className="results">
                
            </div> 
        );
    })}
    </div>
        )
    }
}