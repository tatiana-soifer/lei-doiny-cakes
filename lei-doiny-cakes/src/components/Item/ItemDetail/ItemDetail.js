import React from 'react';
import Counter from '../../Counter/Counter';
import '../../css/Main.css';

const ItemDetail = ({item}) => {
    const onAdd = (amount) =>{
        console.log(amount)
    };
    return(
        <>
        {
        <div id={item.id} className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <img src={item.Foto} alt={item.Descripcion} />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h2>{item.Torta}</h2>
                    <h4>{item.Descripcion}</h4>
                    <h3>${item.Precio}</h3>
                    <Counter initialState={1} stock={15} onAdd={onAdd} />
                </div>
            </div>
        </div>
        }
    </>  
    );
};

export default ItemDetail;