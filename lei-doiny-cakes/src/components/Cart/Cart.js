import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {getFirestore} from '../../Factory/Firebase.js';
import CartContext from '../Context/CartContext.js';
import Loader from '../Loader/Loader.js';
import firebase from 'firebase/app';
import Formulario from '../Cart/Formulario.js'
import '../css/Main.css';

const Cart = () => {
    const {cart, clear, removeItem} = useContext (CartContext);
    const [loader, setLoader] = useState(false);
    const [order, setOrder] = useState({ id: "", genenerado: false });
    const [formularioData, setFormularioData] = useState({});
    let total = cart.reduce (function (previo, actual) {
        return previo + actual.item.price * actual.quantity;
    }, 0);
    const finalizarCompra = () => {
        setLoader(true);
        const db = getFirestore();
        const orders = db.collection('orders');
        const buyer = {
            email: formularioData.email || '',
            name: formularioData.name || '',
            phone: formularioData.phone || '',
        };
        const newOrder = {
            buyer: buyer,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total,
        };
        orders
            .add(newOrder)
            .then(({id}) => {
            console.log('Pedido guardado correctamente', id);
            setOrder({id: id, generado: true});
            clear();
            })
            .catch((e) => {
                console.log('Error al guardar el pedido!', e);
            })
            .finally(() => {
                setLoader(false);
            });
        };
    return (
        <div className="container-fluid">
            <div className="row">
                {
                    !loader ? (
                            cart.length > 0 ? (
                                <div className="container">
                                    <div className="row">
                                        <div className="cart">
                                            <div className="cartHeader">
                                                <h2>Este es tu Carrito de Compras</h2>
                                            </div>
                                            <div className="cartBody">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Producto</th>
                                                            <th scope="col">Precio</th>
                                                            <th scope="col">Cantidad</th>
                                                            <th scope="col">Subtotal</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="tbody">
                                                        {cart.map((producto) => {
                                                            return(
                                                                <tr>
                                                                    <td>
                                                                        <h4>{producto.item.title}</h4>
                                                                    </td>
                                                                    <td className="tablaPrecio">{producto.item.price}</td>
                                                                    <td className="tablaCantidad">{producto.item.quantity}</td>
                                                                    <td className="tablaSubtotal">{producto.item.price * producto.quantity}</td>
                                                                    <td>
                                                                        <button className="delete btn btn-danger botonCarritoBorrar" onClick={() => removeItem(producto.item.id)}>Cancelar</button>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })};
                                                    </tbody>
                                                </table>
                                                <div className="row">
                                                    <button className="btn" onClick={() => clear()}>Vaciar Carrito</button>
                                                </div>
                                                <div className="col">
                                                    <h3 className="itemTotalCarrito">Total a Pagar:{total}</h3>
                                                </div>
                                                <Formulario finalizarCompra={finalizarCompra} formData={formularioData} setFormData={setFormularioData} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    {order.generated ? (
                                        <>
                                            <h2>Muchas gracias por tu compra!</h2>
                                            <p>El ID de tu Pedido es: {order.id}</p>
                                        </>
                                    ) : (
                                        <p>El carrito está vacío.</p>
                                    )}
                                    <Link className="btn" exact to={"/"}>Volver al Menu Principal</Link>
                                </div>
                            )
                    ) : (
                        <div className="container">
                            <div className="row">
                                <div className="loader">
                                    <Loader />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default Cart;