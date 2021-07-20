import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {getFirestore} from '../../Factory/Firebase.js';
import CartContext from '../Context/CartContext.js';
import Loader from '../../Loader/Loader.js';
import firebase from 'firebase/app';
import Formulario from '../Cart/Formulario.js'
import '../css/Main.css';

const Cart = () => {
    const {cart, clear, removeItem} = useContext (CartContext);
    const [loader, setLoader] = useState(false);
    const [order, setOrder] = useState({ id: "", generated: false });
    const [formularioData, setFormularioData] = useState({});
    let total = cart.reduce (function (previo, actual) {
        return previo + actual.item.price * actual.quantity;
    }, 0);
    const finalizarCompra = () => {
        setLoader(true);
        const db = getFirestore();
        const orders = db.collection("orders");
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
            .then(({ id }) => {
            console.log("Pedido guardado correctamente", id);
            setOrder({ id: id, generated: true });
            clear();
            })
            .catch((e) => {
                console.log("Error al guardar el pedido!", e);
            })
            .finally(() => {
                setLoader(false);
            });
        };
    return (
        <div className="container">
            <div className="row">
                    {cart.length === 0 && 
                        <div>
                            <h3>No hay productos en tu carrito.</h3>
                            <Link className="btn btn-primary" to={"/"}>Ir al Menu</Link>
                        </div>
                    }
                    {cart.length !== 0 && (
                        <div className="container">
                            <div className="row">
                                {!loading ? (
                                    cart.length > 0 ? (
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
                                                        {cart.map((producto) => {
                                                            return(
                                                                <tr>
                                                                    <td>
                                                                        <img className="tablaImg" src={producto.item.photo} alt={producto.item.description}/>
                                                                        <h4 className="tablaTitulo">{producto.item.photo}</h4>
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
                                                    <button className="btn btn-info" onClick={() => clear()}>Vaciar carrito</button>
                                                </div>
                                                <div className="col">
                                                    <h3 className="itemTotalCarrito">Total a pagar:{total}</h3>
                                                </div>
                                                <Formulario finalizarCompra={finalizarCompra} formData={formularioData} setFormData={setFormularioData}/>
                                                ) : (
                                            <div>
                                                {order.generated ? (
                                                <>
                                                    <h2>Compra finalizada con exito.</h2>
                                                    <p>Orden ID: {order.id}</p>
                                                </>
                                                ) : (
                                                <p>El carrito está vacío.</p>
                                                )}
                                                <NavLink className="btn btn-primary" exact to={"/"}>
                                                Volver a la lista de productos
                                                </NavLink>
                                            </div>
                                            )
                                        ) : (
                                            <Loader />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
        </>
    )
};

export default Cart;