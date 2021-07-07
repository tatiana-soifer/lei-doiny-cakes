import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import Counter from '../../Counter/Counter';
import cartContext from '../../Context/CartContext';
import '../../css/Main.css';

const ItemDetail = ({detalle}) => {
    const [isClicked, setIsClicked] = useState (false);
    const {addItem} = useContext(CartContext);
    const onAdd = (cantidadSeleccionada) => {
        setIsClicked (cantidadSeleccionada);
        addItem (detalle, cantidadSeleccionada);
    };
    return(
        <>
        {
        <div id={detalle.id} className="container">
            <div className="row">
                <div className="col-lg-10">
                    <div className="col-lg-6 left-side-product-box pb-3 productoItem">
                        <img src={detalle.Foto} alt={detalle.Descripcion} />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h1>{detalle.Torta}</h1>
                        <h5>{detalle.Descripcion}</h5>
                        <h3>${detalle.Precio}</h3>
                    </div>
                </div>
            </div>
        </div>
        }
        {isClicked && <Link to="/cart">Terminar compra</Link>}
        {!isClicked && <Counter onAdd = {onAdd} stock={detalle.stock}/>}  
    </>  
    );
};

export default ItemDetail;