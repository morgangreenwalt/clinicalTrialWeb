import React from "react";
import createReactClass from "create-react-class";

const Footer = () => (    
    <div className="footer">
        <footer className="footer">
            <div className="container">
            <div class="footerSocial">
                <span class="title">Connect With Us</span>
                    <ul class="social-networks">
                        <li><a href=""><span class="icon-twitter"></span></a></li>
                        <li><a href=""><span class="icon-facebook"></span></a></li>
                        <li><a href=""><span class="icon-instagram"></span></a></li>
                        <li><a href=""><span class="icon-linkedin"></span></a></li>
                        <li><a href=""><span class="icon-youtube"></span></a></li>
                        <li><a href=""><span class="icon-pinterest"></span></a></li>
                    </ul>
                <span class="copyright">&copy;Refundo, Inc.</span>
            </div>

            <p className="text-muted text-center">&copy; Clinical Trial App</p>
            </div>
        </footer>
    </div>
);

export default Footer