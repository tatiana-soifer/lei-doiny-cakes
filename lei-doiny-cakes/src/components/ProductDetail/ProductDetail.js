import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {useCartContext} from '../Context/CartContext';
import '../css/Main.css';

const ProductDetail = ({product}) => {
    const {addProduct, show, handleClose} = useCartContext();
    return (
        <div key={product.id} className="row detail-container">
            <div className="col-md-6 detail-img">
                <img src={product.photo} className="detail-img" alt={product.title} />
            </div>
            <div className="col-md-6 detail-info">
                <h1>{product.title}</h1>
                <h4>{product.description}</h4>
                <p>$ {product.price}</p>
                <span className="light">Stock: {product.stock}</span>
                <div className="divider">
                </div>
                {
                    product.stock > 0 ? 
                    <button className="primary" onClick={() => addProduct(product)}>
                        <i className="fas fa-cart-plus"></i>
                    </button> : null
                }
                <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton />
                        <Modal.Body>No hay más stock disponible para agregar.</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;