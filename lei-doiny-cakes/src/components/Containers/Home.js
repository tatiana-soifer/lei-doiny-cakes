import React from 'react';
import {Modal} from 'react-bootstrap';
import Title from '../Title/Title';
import {useProductsContext} from '../Context/ProductsContext';
import {useCartContext} from '../Context/CartContext';
import ProductsContainer from './ProductsContainer';
import Loader from '../Loader/Loader';
import Filters from '../Filters/Filters';
import ComoComprar from '../Sections/ComoComprar';
import '../css/Main.css'

const Home = () => {
    const {IsLoading} = useProductsContext();
    const {show, handleClose} = useCartContext();
    //MOSTRAR PRODUCTOS Y EL MODAL SI ES QUE LOS PRODUCTOS EN EL CARRITO SON IGUALES AL STOCK DISPONIBLE
    return(
            <>
            <div className="presentacion">
                <h1>Disfrutá increibles tortas artesanales</h1>
                <p> Nos encanta formar parte de tu festejo.¡Dejate tentar por las más ricas tentaciones!</p>
            </div>
            <ComoComprar />
            <div>
                <Title title="Explorá nuestro menú" />
                <Filters/>
                {IsLoading ? <Loader /> :
                    <div className="row">
                        <ProductsContainer />
                        <div>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton />
                                <Modal.Body>
                                    Lamentablemente no hay más stock disponible para agregar.
                                </Modal.Body>
                                <Modal.Footer>
                                    <button className="secondary" onClick={handleClose}>Cerrar</button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Home;