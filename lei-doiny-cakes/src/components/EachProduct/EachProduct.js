import React from 'react';
import {Link} from 'react-router-dom';
import {useCartContext} from '../Context/CartContext';
import '../css/Main.css';

const EachProduct = ({product}) => {
    const {addProduct} = useCartContext();
    //MUESTRA LOS DATOS DEL PRODUCTO Y EL BOTON PARA AGREGARLOS AL CARRITO.
    //SI NO HAY STOCK, SE OCULTA EL BOTON DEL CARRITO.
    return (
        <div key={product.id} className="each-product card shadow mb-1 rounded">
            <div className="card_show">
                <img src={product.photo} className="product-img card-img-top" alt={product.title} />
                <Link to={`/${product.id}`}>
                    <div className="cardCapa">
                        <h2>VER MÁS</h2>
                    </div>
                </Link>
            </div>
            <div className="product-card-body card-body">
                <h2 className="card-title">{product.title}</h2>
                <h3 className="precio">$ {product.price} . -</h3>
                <div className="productButtons">
                    {product.stock > 0 ? 
                        <button className="primary fondoBoton" onClick={() => addProduct(product)}>
                            <i className="fas fa-cart-plus"></i>
                        </button> : null}
                    <p><span className="light">Stock: {product.stock}</span></p>
                </div>
            </div>
        </div>
    );
};

export default EachProduct;