import React from 'react';
import {Link} from 'react-router-dom';
import Counter from '../Counter/Counter';
import '../css/Main.css';

const Item = ({id, Torta, Precio, Foto, category}) => {
    const onAdd = (count) => {
        if(count > 0) {
            console.log(`${count} productos comprados`);
        }
    }
    return(
        <div id={id} category={category} className="col-lg-3 col-md-6 col-sm-12">
            <div className="card shadow mb-1 rounded">
                <div>
                    <img className="card-img-top" src={Foto} alt={Torta} />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{Torta}</h2>
                    <h3>${Precio}</h3>
                    <Counter initialState={1} stock={15} onAdd={onAdd} />
                    <Link to={`/item/:${id}`} className="btn botonDetalle">Ver mas</Link> 
                </div>
            </div>
        </div>
    );
};

export default Item;