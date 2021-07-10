import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {getFirestore} from '../../../Factory/Firebase.js';
import ItemList from '../../Item/ItemList/ItemList';
import './../../css/Main.css';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        if(!categoryId){            
            itemCollection.get().then(querySnapshot => {
            setItems(querySnapshot.docs.map(doc => (
                {id: doc.id, ...doc.data()}
            )));
        });
        } else{
            const category = itemCollection.where('categoryId', '===', categoryId);
            category.get().then(querySnapshot => {
            setItems(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
            });
        };
    }, [categoryId]);
    return (
        <>
            <div className="cuadriculaProductos"> 
                <ItemList items={items} />
            </div>
        </>
    )
};

export default ItemListContainer;