import React from 'react';
import {Link} from 'react-router-dom';
import informacion from '../../assets/icons/informacion.png';
import '../css/Main.css';

function Item ({photo, title, price, pId}) {
    return(
        <>
            <div id="item" className="mb-4 productoItem">
                <div className="card shadow mb-1 rounded">
                    <img className="card-img-top" src={photo} alt={title} />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h3>${price}</h3>
                    <Link to={`/item/${pId}`} className="botonDetalle">
                        <img src={informacion} alt='informacion'/>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Item;