import {Link} from 'react-router-dom';
import telefono from '../../assets/icons/telefono.png';
import ubicacion from '../../assets/icons/ubicacion.png';
import mail from '../../assets/icons/mail.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import pinterest from '../../assets/icons/pinterest.png';
import tiktok from '../../assets/icons/tiktok.png';
import visa from '../../assets/icons/visa.png';
import mastercard from '../../assets/icons/mastercard.png';
import mercadoPago from '../../assets/icons/mercado_pago.png';
import cabal from '../../assets/icons/cabal.png';
import diners from '../../assets/icons/diners.png';
import amex from '../../assets/icons/amex.png';
import '../css/Main.css';


const Footer = () =>{
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="contacto col-lg-4 col-sm-12">
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
                    <div className="sociales col-lg-6 col-sm-12">
                        <div>
                            <h4>Seguinos en nuestras redes</h4>
                        </div>
                        <div>
                            <Link to="https://web.whatsapp.com/" target="blank">
                                <img src={whatsapp} alt="whatsapp" title="whatsapp" />
                            </Link>
                            <Link to="https://www.facebook.com/Leidoiny-Cakes-1218950871493041/?hc_ref=ARQYTRuzalG90OdyVzor4YJlndkvL0GC6nX75gTqeBS0bhI_AiMVUQXqzjN_1IDtZUs&fref=nf&__tn__=kC-R" target="blank">
                                <img src={facebook} alt="facebook" title="facebook" />
                            </Link>
                            <Link to="https://www.instagram.com/leidoiny_cakes/?hl=es" target="blank">
                                <img src={instagram} alt="instagram" title="instagram" />
                            </Link>
                            <Link to="https://www.tiktok.com/" target="blank">
                                <img src={tiktok} alt="instagram" title="tiktok" />
                            </Link>
                            <Link to="https://ar.pinterest.com" target="blank">
                                <img src={pinterest} alt="instagram" title="pinterest" />
                            </Link>
                        </div>
                    </div>
                    <div className="pago col-lg-2 col-sm-12">
                        <h4>Medios de pago</h4>
                        <div className="grid_pago">
                            <div>
                                <img src={visa} alt="metodo de pago visa" />
                            </div>
                            <div>
                                <img src={amex} alt="metodo de pago amex" />
                            </div>
                            <div>
                                <img src={mercadoPago} alt="metodo de pago mercado pago" />
                            </div>
                            <div>
                                <img src={mastercard} alt="metodo de pago mastercard" />
                            </div>
                            <div>
                                <img src={diners} alt="metodo de pago diners" />
                            </div>
                            <div>
                                <img src={cabal} alt="metodo de pago cabal" />
                            </div>
                        </div>
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