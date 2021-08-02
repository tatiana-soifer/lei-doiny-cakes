import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../../Factory/Firebase.js';
import ItemList from './ItemList.js';
import Loader from '../../Loader/Loader.js';
import './../../css/Main.css';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const {pId} = useParams();
    useEffect(() => {
        setLoader(true);
        const db = getFirestore();
        const itemCollection = db.collection('itemCollection');
        const filteredItems = pId ? itemCollection.where('category', '===', pId) : itemCollection
        filteredItems.get().then((querySnapshot) => {
            if (querySnapshot.size === 0){
                console.log("No hay resultados");
            }
            setItems(querySnapshot.docs.map(doc => {return {'id': doc.id, ...doc.data()}}));
        }).finally(() => {
            setLoader(false)
        })
    },[pId]);
    return (
        <div className="container-itemList">
            <div className="container-home">
                <h1>Tienda Online</h1>
                <div className="container-item-list">
                    {loader ?
                        <Loader />
                        :
                        <ItemList items={items} />
                    }
                </div>
            </div>
        </div>
    )
};

export default ItemListContainer;