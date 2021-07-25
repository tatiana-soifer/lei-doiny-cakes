import React from 'react';
import {Link} from 'react-router-dom';
import {useCart} from '../context/CartContext.js';
//import carrito from '../../assets/icons/carrito.png';
import '../css/Main.css';

const CartWidget = () => {
    const cartInfo = useCart()
    const {totalQuantity}= useCart()
    const totalQuantitys= ()=>{
    return totalQuantity() 
    }
    if (cartInfo.cartInfo.items.length === 0) return <h1> </h1>
    return (
        <>
        <Link to="/cart">
            <p>{totalQuantitys()}</p>
        </Link>
        </>
    )
};

export default CartWidget;

/*return (
    <>
        <Link id="carritoMenu" type="button" exact to="/cart" data-toggle="modal" data-target="#exampleModal">
            <span>{contadorCart}</span>
            <img src={carrito} alt="carrito de compras" />
        </Link>
    </>
)
*/