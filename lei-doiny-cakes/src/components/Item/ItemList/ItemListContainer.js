import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../../Factory/Firebase.js';
import ItemList from './ItemList.js';
import Loader from '../../Loader/Loader.js';
import './../../css/Main.css';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const {categoryId} = useParams();
    useEffect(() => {
        setLoader(true);
        const db = getFirestore();
        const itemCollection = db.collection('itemCollection');
        const filteredItems = categoryId ? itemCollection.where('category', '===', categoryId) : itemCollection
        filteredItems.get().then((querySnapshot) => {
            if (querySnapshot.size === 0){
                console.log("No hay resultados");
            }
            setItems(querySnapshot.docs.map(doc => {return {'id': doc.id, ...doc.data()}}));
        }).finally(() => {
            setLoader(false)
        })
    },[categoryId]);
    return (
        <div className="container">
            <div className="row">
                <h1>Tienda Online</h1>
                <div>
                    {loader ?
                        <Loader />
                        :
                            <div className="cuadriculaProductos"> 
                                <ItemList items={items} />
                            </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default ItemListContainer;