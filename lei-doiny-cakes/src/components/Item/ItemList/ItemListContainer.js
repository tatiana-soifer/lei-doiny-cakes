import React, {useEffect, useState} from 'react';
import ItemList from '../../Item/ItemList/ItemList';
import Productos from '../../Data/Productos.json';
import './../../css/Main.css';

const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve (Productos)
            }, 2000);
        })
        .then((response) => setItems(response));
    }, []);
    return(
        <>
            <div className="ItemListContainer">
                <ItemList items={items} />
            </div> 
        </>
    );
};

export default ItemListContainer;