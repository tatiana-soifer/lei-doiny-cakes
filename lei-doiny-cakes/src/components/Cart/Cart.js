import React, {useContext} from "react";
import {Link} from "react-router-dom";
import CartContext from '../Context/CartContext.js';
import '../css/Main.css';

const Cart = () => {
    const {cart, clear, removeItem} = useContext (CartContext);
    let total = cart.reduce (function (previo, actual) {
        return previo + actual.item.Precio * actual.cantidad;
    }, 0);
    return (
        <>
            {cart.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="cart">
                            <div className="cartHeader">
                                <h2>Carrito de Compras</h2>
                            </div>
                            <div className="cartBody">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tbody">
                                        {cart.map((producto)=> {
                                            return(
                                                <tr>
                                                    <td>
                                                        <img className="tablaImg" src={producto.item.foto} alt={producto.item.descripcion}/>
                                                        <h4 className="tablaTitulo">{producto.item.foto}</h4>
                                                    </td>
                                                    <td className="tablaPrecio">{producto.item.precio}</td>
                                                    <td className="tablaCantidad">{producto.item.cantidad}</td>
                                                    <td className="tablaSubtotal">{producto.item.precio * producto.cantidad}</td>
                                                    <td>
                                                        <button className="delete btn btn-danger botonCarritoBorrar" onClick={() => removeItem(producto.item.id)}>Cancelar</button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                                <div className="row">
                                    <button className="btn btn-info" onClick={() => clear()}>Vaciar carrito</button>
                                </div>
                                <div className="col">
                                    <h3 className="itemTotalCarrito">{total}</h3>
                                </div>
                                <div className="row mx-4">
                                    <div className="col d-flex justify-content-end">
                                        <Link id="botonCartFinal" className="btn btn-secondary" exact to={"/"}>Seguir comprando</Link>
                                        <button className="btn btn-secondary" type="button" >Finalizar compra</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <p>El carrito está vacío.</p>
                        <Link className="btn btn-primary" exact to={"/"}>Volver al Menu</Link>
                </div>
            )}
        </>
    )
};

export default Cart;

