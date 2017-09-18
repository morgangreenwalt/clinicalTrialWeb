import React from "react";
import createReactClass from "create-react-class";
import {NavLink} from "react-router-dom";

const Footer = () => (    
    <div className="footer">
        <footer className="footer">
            <div className="container">
            <div className="footerSocial">
                <span className="title">Connect With Us</span>
                    <ul className="social-networks">
                        <li><NavLink to=""><span className="icon-twitter"></span></NavLink></li>
                        <li><NavLink to=""><span className="icon-facebook"></span></NavLink></li>
                        <li><NavLink to=""><span className="icon-instagram"></span></NavLink></li>
                        <li><NavLink to=""><span className="icon-linkedin"></span></NavLink></li>
                        <li><NavLink to=""><span className="icon-youtube"></span></NavLink></li>
                        <li><NavLink to=""><span className="icon-pinterest"></span></NavLink></li>
                    </ul>
                <span className="copyright">&copy;Refundo, Inc.</span>
            </div>

            <p className="text-muted text-center">&copy; Clinical Trial App</p>
            </div>
        </footer>
    </div>
);

export default Footer