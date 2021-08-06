import React from 'react';
import {useCartContext} from '../Context/CartContext';
import '../css/Main.css';;

const CartEachProduct = ({prod}) => {
    const {removeProduct} = useCartContext();
    return(
        <div className="cart-item-container col-md-2">
            <div className="inline product-cart-img-container">
                <img src={prod.photo} className="product-cart-img" alt={prod.title} />
            </div>
            <div className="inline text-left cart-info">
                <p>{prod.title} x {prod.amount} = ${prod.price * prod.amount}</p>
            </div>
            <button className="inline secondary" onClick={() => removeProduct(prod)}>
                <i className="fas fa-minus"></i>
            </button>
        </div>    
    );
};

export default CartEachProduct;