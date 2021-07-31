import React from 'react';
import telefono from '../../assets/icons/telefono.png';
import ubicacion from '../../assets/icons/ubicacion.png';
import mail from '../../assets/icons/mail.png';
import '../css/Main.css';


const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="contacto">
                        <h4>Contacto</h4>
                        <ol>
                            <li>
                                <img src={telefono} alt="telefono" />
                                <p>011 7367 1776</p>
                            </li>
                            <li>
                                <img src={mail} alt="mail" />
                                <p>leidoiny@gmail.com</p>
                            </li>
                            <li>
                                <img src={ubicacion} alt="ubicacion" />
                                <p> Villa Crespo, CABA</p>
                            </li>
                        </ol>
                    </div>
                    <div className="sociales">
                        <h4>Seguinos en nuestras redes</h4>
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