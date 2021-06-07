import React from 'react';
import carrito from '../../assets/icons/carrito.png';

//IMAGEN CARRITO PARA EL NAVBAR
const CardWidget = () => {
    return (
        <div>
            <button id="carrito_menu" className="btn" type="button" data-toggle="modal" data-target="#exampleModal">
                <img src={carrito} alt="carrito de compras" />
            </button>
        </div>
    );
};

export default CardWidget;