import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/Main.css';

const ItemList = ({id, Foto, Torta, Precio, Descripcion}) => {
    return(
        <div className="itemCard" id={id}>               
            <div className="img-item-container">
                <img src={Foto} alt={Descripcion}></img>
            </div>
            <div>
                <div>
                    <h3>{Torta}</h3>
                    <h4>{Descripcion}</h4>
                    <p>-</p>
                    <p>${Precio}</p>
                    <p>-</p>
                    <Link to={`/item/:${id}`}>Ver mas</Link> 
                </div>
            </div>           
        </div>        
    );
}

export default ItemList;