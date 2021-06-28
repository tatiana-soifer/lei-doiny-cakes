import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Counter from '../../Counter/Counter';
import '../../css/Main.css';

const ItemDetail = (item) => {
    const [isClicked, setIsClicked] = useState (false);
    const onAdd = (amount) =>{
        console.log(amount)
        setIsClicked(true)
    }
    console.log(isClicked);
    return(
        <>
        {
        <div id={item.id} className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 productoItem">
                    <img src={item.Foto} alt={item.Descripcion} />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h1>{item.Torta}</h1>
                    <h4>{item.Descripcion}</h4>
                    <h3>${item.Precio}</h3>
                </div>
            </div>
        </div>
        }
        {isClicked && <Link to="/cart">Terminar compra</Link>}
        {!isClicked && <Counter onAdd = {onAdd} stock={item.stock}/>}  
    </>  
    );
};

export default ItemDetail;