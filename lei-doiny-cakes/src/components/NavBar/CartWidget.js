import React from 'react';
import {Link} from 'react-router-dom';
import {useCart} from '../Context/CartContext.js';
import '../css/Main.css';

const Cartwidget = () => {
    const cartInfo = useCart();
    const {totalQuantity} = useCart();
    const totalCantidades = () => {
        return totalQuantity();
    }
    if(cartInfo.items.length === 0) return <h1> </h1>
    return(
        <>
            <Link to="/cart">
                <p> {totalCantidades()} </p>
            </Link>
        </>
    )
};

export default Cartwidget;
