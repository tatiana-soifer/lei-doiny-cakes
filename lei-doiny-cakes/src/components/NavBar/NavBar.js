import React, {useContext} from "react";
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
    return(
        <header>
            <nav className="navbar navbar-expand-lg fixed-top fondo_presentacion fondo_nav justify-content-end">
                <Link to="/">
                    <img id="logo" src={logo} alt="logo" />
                </Link>
                <ul className="nav-items">
                    <li className="navbar-brand">
                        <NavLink to="/" activeClassName="selected" className="nav-link">Menú</NavLink>
                    </li>
                    <li className="navbar-brand">
                        <NavLink to="/ComoComprar" activeClassName="selected" className="nav-link">Cómo comprar</NavLink>
                    </li>
                    <li className="navbar-brand">
                        <NavLink to="/Contacto" activeClassName="selected" className="nav-link">Contacto</NavLink>
                    </li>
                    <li className="navbar-brand">
                        <NavLink to="/FAQ" activeClassName="selected" className="nav-link">FAQ</NavLink>
                    </li>
                    <li className="navbar-brand">
                        <CartWidget cartLength={cartCantidad}/>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;