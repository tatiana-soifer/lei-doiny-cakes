import React from 'react';
import {Link} from 'react-router-dom';
import carrito from '../../assets/icons/carrito.png';
import '../css/Main.css';

const CartWidget = ({contadorCart}) => {
    return (
        <>
            <Link id="carritoMenu" type="button" exact to="/cart" data-toggle="modal" data-target="#exampleModal">
                <span>{contadorCart}</span>
                <img src={carrito} alt="carrito de compras" />
            </Link>
        </>
    )
};

export default CartWidget;