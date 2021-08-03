import React from 'react';
import {Link} from 'react-router-dom';
import {useCartContext} from '../Context/CartContext';
import '../css/Main.css';

const EachProduct = ({product}) => {
    const {addProduct} = useCartContext();
    //MUESTRA LOS DATOS DEL PRODUCTO Y EL BOTON PARA AGREGARLOS AL CARRITO.
    //SI NO HAY STOCK, SE OCULTA EL BOTON DEL CARRITO.
    console.log(product.photo)
    return (
        <div key={product.id} className="each-product">
            <img src={product.photo} className="product-img" alt={product.title} />
            <h2>{product.title}</h2>
            <h3>$ {product.price}</h3>
            <Link to={`/${product.id}`}>
                <button className="secondary">
                    <i className="fas fa-info-circle"></i>
                </button>
            </Link>
            {product.stock > 0 ? 
                <button className="primary" onClick={() => addProduct(product)}>
                    <i className="fas fa-cart-plus"></i>
                </button> : null}
            <p><span className="light">Stock: {product.stock}</span></p>
        </div>
    );
};

export default EachProduct;