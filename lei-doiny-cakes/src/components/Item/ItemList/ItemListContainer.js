import React, {useEffect, useState} from 'react';
import ItemList from '../../Item/ItemList/ItemList';
import {getFirestore} from '../../../Factory/Firebase';
import Productos from '../../Data/Productos.json';
import './../../css/Main.css';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection ('items');
        itemCollection.get().then((querySnapshot)=>{
            if (querySnapshot.size === 0){
                console.log('No hay resultados.')
            }
        setItems(querySnapshot.docs.map(doc.data()));
        }).catch ((e)=>{
        console.log('Hubo un error', e);
        }).finally(()=>{
            setLoading(false);
        });
    return (
        <>
            <div className="cuadriculaProductos">                
                <ItemList items={items} />
            </div>
        </>
    )
};

export default ItemListContainer;