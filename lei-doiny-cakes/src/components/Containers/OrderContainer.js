import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import {GetDB} from '../../Factory/Firebase';
import Title from '../Title/Title';
import {useCartContext} from '../Context/CartContext';
import OrderDetailContainer from './OrderDetailContainer';
import {useProductsContext} from '../Context/ProductsContext';
import Loader from '../Loader/Loader';
import '../css/Main.css';

const DB = GetDB();
const OrderContainer = () => {
    const {cartList , totalPrice, setCartAmount, setCartList, setTotalPrice,show, handleShow} = useCartContext();
    const {SetLoading, IsLoading } = useProductsContext();
    const [OrderId, setOrderId] = useState(""); 
    const newOrderTem = {
        cliente:{nombre:"Leila", telefono:"01136996266", email:"leila@gmail.com",},
        items: cartList,
        precio:totalPrice,
    }
    const newOrder = {...newOrderTem}
    function postNewOrder() {
        const orders = DB.collection('orders');
        orders
            .add(newOrder)
            .then(({ id }) => {
                console.log(`Ya recibimos tu pedido!! El id de tu orden es: ${id}`);
                setOrderId(`${id}`)                
                handleShow();
            }).catch((error) => {
                console.log("Error buscando productos", error)
            }).finally(() => {
                setCartAmount(0)
                setCartList([])
                setTotalPrice(0)
                updateProduct(newOrder)
                console.log("Listo!!")
            })
    };
    function updateProduct() {
        newOrder.items.forEach((prod, index) => {
            SetLoading(true)
            const productToUpdate = DB.collection('itemCollection').doc(prod.id);
            productToUpdate
                .get()
                .then(( doc => {
                    if(!doc.exists) {
                        console.log('Sin resultados')
                    }
                    const returnedProduct = doc.data();
                    productToUpdate.update({stock: returnedProduct.stock - prod.amount})
                    //GetAll();
                }))
                .catch((error) => console.log(error))
                .finally(() => {
                    SetLoading(false)
                });
        })
    }
    return (
        <div>
            <Title title="Confirmá tu pedido" />
            { IsLoading ? <Loader /> :
                <div className="order-container">
                    <h4>{newOrderTem.cliente.nombre}</h4>
                    {cartList.length > 0 ? <p>El detalle de tu pedido es:</p> : <p>¡Muchas gracias por tu compra!</p>}
                    <ul className="cart-list-container">
                        <OrderDetailContainer />
                        <div className="divider"></div>  
                    </ul>
                    {cartList.length > 0 ? 
                        <p>$ {totalPrice}</p> : null
                    }
                    {
                        cartList.length > 0 ?
                        <button className="primary" onClick={postNewOrder}>Confirmar</button> : 
                        <Link to={`/`}>
                            <button className="secondary">Volver al inicio</button>
                        </Link>
                    }
                </div>
            }
            <div>
                <Modal show={show}>
                    <Modal.Header />
                    <Modal.Body>Se creó el pedido! Tu ID es: {OrderId}</Modal.Body>
                    <Modal.Footer>
                        <button className="secondary" onClick={() => window.location.reload()}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default OrderContainer;