import React from 'react';
import {useCart} from './CartContext.js';
import Formulario from './Formulario.js';
import '../css/Main.css';

function CheckOut () {
    const cartInfo = useCart()
    const cartItems = cartInfo.cartInfo.items
    const totalPriceItems= () => {
        return cartInfo.totalPrice() 
    }
    const totalQuantitys= () => {
        return cartInfo.totalQuantity() 
        }
    const itemProduct = cartItems.map((i)=>{return (i.item)})
    const itemQuantity = cartItems.map((i)=>{return ( i)})
    return(
        <div className="container-checkOut">
            <div className="container-compra">
                <h1>Resumen de compra</h1>
                <p><span>{totalQuantitys()}</span> productos en el carrito</p>
                <div className="container-ItemsCompra">
                    {cartItems?.map((i) => {
                        return(
                            <div key= {i.item.id}>
                                <img src= {i.item.photo} alt={i.item.description} />
                                <h3>{i.item.description}</h3>
                                <p>Precio: ${i.item.price} </p>
                                <p>Cantidad: {i.quantity} </p>
                            </div>
                        )
                    })}
                </div>
                <p>Precio total:$ <span> {totalPriceItems()}</span></p>
            </div>
            <div className="container">
                <Formulario value={{itemProduct, itemQuantity}} />
            </div>
        </div>
    )
}

export default CheckOut;