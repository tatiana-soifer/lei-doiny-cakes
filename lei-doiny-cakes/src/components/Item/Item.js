import React from 'react';
import {Link} from 'react-router-dom';
import Counter from '../Counter/Counter';
import '../css/Main.css';

const Item = ({id, Torta, Descripcion, Precio, Foto}) => {
    const onAdd = (count) => {
        if(count > 0) {
            console.log(`${count} productos comprados`);
        }
    }
    return(
        <div className="container" id={id}>
            <div className="row">
                <div className="card shadow mb-1 rounded">
                    <div>
                        <img src={Foto} alt={Torta} />
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{Torta}</h2>
                    <h4>{Descripcion}</h4>
                    <h3>${Precio}</h3>
                    <Counter initialState={1} stock={15} onAdd={onAdd} />
                    <button>
                        <Link to={`/item/:${id}`} className="btn botonDetalle">Ver mas</Link> 
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Item;