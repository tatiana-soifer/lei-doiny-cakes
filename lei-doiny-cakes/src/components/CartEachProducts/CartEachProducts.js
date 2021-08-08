import React from 'react';
import {useCartContext} from '../Context/CartContext';
import '../css/Main.css';;

const CartEachProduct = ({prod}) => {
    const {removeProduct} = useCartContext();
    const {addProduct} = useCartContext();
    return(
        <div className="cart-item-container">
            <div className="inline product-cart-img-container">
                <img src={prod.photo} className="product-cart-img" alt={prod.title} />
            </div>
            <div className="inline cart-info">
                <p>{prod.title} x {prod.amount} = ${prod.price * prod.amount}</p>
            </div>
            <div className="cart-buttons">
                <button className="inline secondary" onClick={() => removeProduct(prod)}>
                    <i className="fas fa-minus"></i>
                </button>
                <button className="inline secondary" onClick={() => addProduct(prod)}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        </div>    
    );
};

export default CartEachProduct;