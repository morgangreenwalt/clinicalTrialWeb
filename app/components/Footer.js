import React from "react";
import createReactClass from "create-react-class";
import {NavLink} from "react-router-dom";

const Footer = () => (    
    <div className="footer">
        <footer className="footer">
            <div className="container">
            {/* <div className="footerSocial">
                <span className="title">Connect With Us</span>
                    <ul className="social-networks">
                        <li><NavLink to=""><span className="icon-twitter"></span></NavLink></li>
                        <li><NavLink to=""><span className="icon-facebook"></span></NavLink></li>
                        <li><NavLink to=""><span className="icon-instagram"></span></NavLink></li>
                        <li><NavLink to=""><span className="icon-linkedin"></span></NavLink></li>
                        <li><NavLink to=""><span className="icon-youtube"></span></NavLink></li>
                        <li><NavLink to=""><span className="icon-pinterest"></span></NavLink></li>
                    </ul>
            </div> */}

                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav"></ul>
                    <ul className="navbar-nav navbar-right">

                        <li className="footer-item">
                            <NavLink to="https://polynoma.com/privacy-policy/" target="_blank">Privacy Policy</NavLink>
                        </li>

                        <li className="footer-item">
                            <NavLink to="https://polynoma.com/terms-of-use/" target="_blank">Terms of Use</NavLink>
                        </li>

                    </ul>
                </div>    
            </div>
        </footer>
    </div>
);

export default Footer