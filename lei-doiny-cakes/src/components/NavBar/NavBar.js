import React, {useContext, useState} from "react";
import {NavLink, Link} from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import CartWidget from '../NavBar/CartWidget.js';
import CartContext from '../Context/CartContext.js';
import '../css/Main.css';

const NavBar = () => {
    const {cart} = useContext(CartContext);
    let cartCantidad = cart.reduce (function (previo, actual) {
        return previo + actual.cantidad;
    }, 0);
    const [navbar, setNavbar] = useState(false);
    const cambioColor = () => {
        window.scroll >= 70 ? setNavbar(true) : setNavbar(false)
    };
    window.addEventListener('scroll', cambioColor);
    return(
        <header>
            <Link to="/">
                <img src={logo} id="logo" alt="logo"/>
            </Link>
            <nav id="menu2" className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar navbar-expand-lg fixed-top">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                            <li className="nav-item">
                                <NavLink className="navbar-brand" exact to="/" activeClassName="selected">Menú</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="navbar-brand" exact to="/Contacto" activeClassName="selected">Contacto</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="navbar-brand" exact to="/FAQ" activeClassName="selected">FAQ</NavLink>
                            </li>
                            <li className="nav-item">
                                <CartWidget cartLength={cartCantidad}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;