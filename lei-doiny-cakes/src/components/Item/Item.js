import React from 'react';
import {getFirestore} from '../../Factory/Firebase.js'
import {Link} from 'react-router-dom';
import Counter from '../Counter/Counter';
import informacion from '../../assets/icons/informacion.png';
import '../css/Main.css';

const Item = ({item}) => {
    const onAdd = (count) => {
        if(count > 0) {
            console.log(`${count} productos comprados`);
        }
    }
    return(
        <div id="item" className="mb-4 productoItem">
            <div className="card shadow mb-1 rounded">
                <img className="card-img-top" src={item.photo} alt={item.title} />
            </div>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <h3>${item.price}</h3>
                <Counter initialState={1} stock={15} onAdd={onAdd} />
                <Link to={`/item/${item.id}`} className="botonDetalle">
                    <img src={informacion} alt='informacion'/>
                </Link>
            </div>
        </div>
    );
};

export default Item;