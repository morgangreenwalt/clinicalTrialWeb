import React from "react";
import {NavLink} from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return(
            <div className="site-header">
                <nav className="navbar navbar-light navbar-sticky-top">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button> 
                        {/* <NavLink to="/" className="nav-item">
                            <img src="" style={{height: 50, marginTop: 10}}/>
                        </NavLink> */}
                        <NavLink to="/" className="nav-item">
                            <h2 style={{marginTop: 15, paddingLeft: 25}}>Polynoma</h2>
                        </NavLink>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav"></ul>
                        <ul className="nav navbar-nav navbar-right">
                            {/* <li className="nav-item" style={{marginTop: 10}}>
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li> */}
                            
                            <li className="nav-item" style={{marginTop: 10}}>
                                <NavLink to="/resources" className="nav-link">Resources</NavLink>
                            </li>

                            <li className="nav-item" style={{marginTop: 10}}>
                                <NavLink to="/main" className="nav-link">FAQ</NavLink>
                            </li>

                            <li className="nav-item" style={{marginTop: 10}}>
                                <NavLink to="/logout" className="nav-link">Logout</NavLink>
                            </li>

                            <li className="nav-item" style={{paddingRight: 20}}>
                               
                                <NavLink to="/contact" className="nav-link"><button type="submit" className="btn btn-md contactBtn2">Contact</button></NavLink>
                                
                            </li>

                        </ul>
                    </div>
                </nav>
          </div> 
        );
    }
}