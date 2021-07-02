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
            }, 2000);
        }).then((response) => setItems(response));
    }, []);
    return (
        <div className="container">
            <div>
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;