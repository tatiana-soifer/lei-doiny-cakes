import React from 'react';
import carrito from '../../assets/icons/carrito.png';
import '../css/Main.css';

//IMAGEN CARRITO PARA EL NAVBAR
const CartWidget = ({contadorCart}) => {
    return (
        <>
            <button id="carrito_menu" className="btn" type="button" data-toggle="modal" data-target="#exampleModal">
                <span>{contadorCart}</span>
                <img src={carrito} alt="carrito de compras" />
            </button>
        </>
    );
};

export default CartWidget;