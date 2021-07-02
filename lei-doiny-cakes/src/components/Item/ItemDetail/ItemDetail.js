import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Counter from '../../Counter/Counter';
import '../../css/Main.css';

const ItemDetail = ({detalle}) => {
    const [isClicked, setIsClicked] = useState (false);
    const onAdd = (amount) =>{
        console.log(amount)
        setIsClicked(true)
    }
    console.log(isClicked);
    return(
        <>
        {
        <div id={detalle.id} className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 productoItem">
                    <img src={detalle.Foto} alt={detalle.Descripcion} />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h1>{detalle.Torta}</h1>
                    <h4>{detalle.Descripcion}</h4>
                    <h3>${detalle.Precio}</h3>
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