import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../../Factory/Firebase.js';
import ItemList from '../../Item/ItemList/ItemList';
import LoaderingLoader from '../../Loader/Loader.js';
import './../../css/Main.css';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection('itemCollection');            
            if(!categoryId){itemCollection
                    .get()
                    .then((querySnapshot) => {
                    if (querySnapshot.size === 0) {
                        console.log('No results!');
                    }
                    setItems(querySnapshot.docs.map((doc) => doc.data()));
                    })
                    .catch((e) => {
                    console.e('Error buscando items', e);
                    })
                    .finally(() => {
                    setLoading(false);
                    });
                }else{
                const itemCollectionCategory = itemCollection.where('idCategory', '===', categoryId)
                itemCollectionCategory
                    .get()
                    .then((querySnapshot) => {
                    if (querySnapshot.size === 0) {
                        console.log('No hay esultados!');
                    }
                    setItems(querySnapshot.docs.map((doc) => doc.data()));
                    })
                    .catch((error) => {
                    console.error('Error searching items', error);
                    })
                    .finally(() => {
                    setLoading(false);
                    });
                }
            }, [categoryId]);
        
    return (
        <>
        {
            loading ?
            <LoaderingLoader />
            :
            <div className="cuadriculaProductos"> 
                <ItemList items={items} />
            </div>
        }
        </>
    )
};

export default ItemListContainer;