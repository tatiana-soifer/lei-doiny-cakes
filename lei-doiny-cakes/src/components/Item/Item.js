import React from 'react';
import {Link} from 'react-router-dom';
import Counter from '../Counter/Counter';
import '../css/Main.css';

const Item = ({item}) => {
    const onAdd = (count) => {
        if(count > 0) {
            console.log(`${count} productos comprados`);
        }
    }
    return(
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card shadow mb-1 rounded">
                <div className="card-img-top">
                    <img src={item.Foto} alt={item.Torta} />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{item.Torta}</h2>
                    <h3>${item.Precio}</h3>
                    <Counter initialState={1} stock={15} onAdd={onAdd} />
                    <Link to={`/item/${item.id}`} className="btn botonDetalle">Ver mas</Link> 
                </div>
            </div>
        </div>
    );
};

export default Item;