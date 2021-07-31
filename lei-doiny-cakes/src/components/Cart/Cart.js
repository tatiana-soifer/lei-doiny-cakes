import React from 'react';
import {Link} from 'react-router-dom';
import {useCart} from './CartContext.js';
import CartContent from './CartContent.js';
import '../css/Main.css';

function Cart(){
    const cartInfo = useCart();
    const cartItems = cartInfo.cartInfo.items;
    const clearProducts = () => {
        cartInfo.clear();
    };
    const totalPriceItems = () => {
        return cartInfo.totalPrice();
    };
    return(
        <> 
            <div className="container-cart">
                {cartInfo.cartInfo.items.length === 0 ? (
                    <h1>No hay productos agregados</h1>
                ) : (
                    <>
                        <h1>Carrito de compras</h1>
                        <div className="container-contenidoCarrito">
                            <div>
                                <div className="cart-info">
                                    <h2>Producto</h2>
                                    <h2>Artículo</h2>
                                    <h2>Precio</h2>
                                    <h2>Cantidad</h2>
                                    <h2>Subtotal</h2>
                                </div>
                                {cartItems?.map (i => {
                                    return (
                                        <CartContent item={i.item} quantity={i.quantity} key={i.item.id} />
                                    )
                                })}
                                <div className="total-price">
                                    <h2><span> Total $ </span>{totalPriceItems()}</h2>
                                </div>
                                <div className="btns-carrito">
                                    <Link to= "/" className="btn btn-carrito">Continuar comprando</Link>
                                    <button className="btn btn-carrito" onClick={clearProducts}>Vaciar carrito</button>
                                </div>
                            </div>
                            <div className="container-resumenCompra"> 
                                <h1>Resumen de compra</h1>
                                <div className="item-resumenCompra">
                                    <h3>Subtotal</h3> 
                                    <p>$ {totalPriceItems()}</p>
                                </div>
                                <div className="item-resumenCompra">
                                    <h3>Envío (retiro por sucursal)</h3>
                                    <p>$ 0.00</p>
                                </div>
                                <div className="item-resumenCompra">
                                    <h3>Total del pedido</h3>
                                    <p>$ {totalPriceItems()}</p>
                                </div>
                                <Link to="/Cart/CheckOut" className="btn btn-important">Realizar pedido</Link>
                            </div>
                        </div>
                    </>
                    )
                }
            </div>
        </>
    )
}

export default Cart;