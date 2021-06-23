import React from 'react';
import Item from '../Item';
import '../../css/Main.css';

const ItemList = ({items}) => {
    return(
        <div className="container">               
            <div className="row">
                {items.map ((e, i) => {
                    return (
                        <Item id={e.id} Foto={e.Foto} Torta={e.Torta} Precio={e.Precio} Descripcion={e.Descripcion} key={i} />
                    )
                })};
            </div>
        </div> 
    );
};

export default ItemList;