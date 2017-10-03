import React, {Component} from "react";
import helpers from "./utils/helpers";

// Importing components
import Nav from "./Nav";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Hero from "./Hero";

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            FAQ: "",
        };
        this.props.auth.handleAuthentication(this.props);
    }

    // // Show data in database
    componentDidMount(){
    // this.props.auth.handleAuthentication(this.props);
        this.props.auth.getProfile((x,y) =>{console.log(y)});
        helpers.getAllFAQ().then((data) => {
        if (data !== "") {
            this.setState({ FAQ: data });
        }
        });
    }

    // // Fire when you search, watch, save etc (every time you complete action/ change)
    // componentDidUpdate(){

    // }

    // //   When "Reset" button is clicked,  clear results
    // handleClear(event){
    //     event.preventDefault();

    // }

    // //   When "Watching" button is clicked,  update boot to "Watching" (doesn't work)
    // handleClick(){

    // }

    render() {
        return(
            <div className="main-wrapper">
                <Nav/>
                <FAQ FAQ={this.state.FAQ} />
                <Footer/>
            </div>
        );
    }
}