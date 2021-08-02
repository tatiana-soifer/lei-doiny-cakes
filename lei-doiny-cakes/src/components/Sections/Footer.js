import React from 'react';
import '../css/Main.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="sociales">
                        <h3>Seguinos en nuestras redes</h3>
                        <i className="fab fa-facebook-f footer-icon" />
                        <i className="fab fa-twitter footer-icon" />
                        <i className="fab fa-instagram footer-icon" />
                        <i className="fab fa-linkedin-in footer-icon" />
                    </div>
                </div>
            </div>                 
            <div className="copy">
                <p>Copyright 2021 © TS | Made with ❤️</p>
            </div>
        </div>
    );
};

export default Footer;