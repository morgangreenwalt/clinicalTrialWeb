import React from "react";
import {NavLink} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return(
            <div className="site-header">
                <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button> 
                        <NavLink to="/" className="nav-item"><img src="http://demo.thesisawesome.com/site/blogskin/files/2012/10/your-logo-here.png" style={{height: 50}}/>
                        </NavLink>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav"></ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">FAQ</NavLink>
                            </li>

                            <li className="nav-item" style={{paddingTop: 7, paddingRight: 20}}>
                               
                                <NavLink to="/contact" className="nav-link"><button type="submit" className="btn btn-danger">Contact</button></NavLink>
                                
                            </li>
                        </ul>
                    </div>
                </nav>
          </div> 
        );
    }
}