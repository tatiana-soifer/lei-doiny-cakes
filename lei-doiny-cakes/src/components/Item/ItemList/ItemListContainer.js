import React, {useEffect, useState} from 'react';
import ItemList from '../../Item/ItemList/ItemList';
import Productos from '../../Data/Productos.json';
import './../../css/Main.css';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        new Promise((result, reject) => {
            setTimeout(() => {
            result(Productos);
            }, 1000);
        }).then((response) => setItems(response));
    }, []);
    return (
        <>
            <div className="cuadriculaProductos">                
                <ItemList items={items} />
            </div>
        </>
    )
}

export default ItemListContainer;
