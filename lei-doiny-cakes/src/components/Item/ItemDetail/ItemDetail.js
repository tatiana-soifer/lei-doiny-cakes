import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Counter from '../../Counter/Counter';
import '../../css/Main.css';

const ItemDetail = (detail) => {
    const [isClicked, setIsClicked] = useState (false);
    const onAdd = (amount) =>{
        console.log(amount)
        setIsClicked(true)
    }
    console.log(isClicked);
    return(
        <>
        {
        <div id={detail.id} className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 productoItem">
                    <img src={detail.Foto} alt={detail.Descripcion} />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h1>{detail.Torta}</h1>
                    <h4>{detail.Descripcion}</h4>
                    <h3>${detail.Precio}</h3>
                </div>
            </div>
        </div>
        }
        {isClicked && <Link to="/cart">Terminar compra</Link>}
        {!isClicked && <Counter onAdd = {onAdd} stock={detail.stock}/>}  
    </>  
    );
};

export default ItemDetail;