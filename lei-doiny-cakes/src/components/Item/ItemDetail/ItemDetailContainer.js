import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getFireStore } from '../firebase/firebase';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';
import ItemDetailInfo from './ItemDetailInfo';
import Loader from '../../Loader/Loader.js';

function ItemDetailContainer(){
    const [itemDetail, setItemDetail] = useState([]);
    const [loader, setLoader]= useState(false);
    const [error, setError]=useState()
    const { pId } = useParams();
    useEffect(()=>{
        setLoader (true);
    const db= getFireStore();
    const itemCollection = db.collection('itemCollection');
    const productid = pId;
    const item = itemCollection.doc(productid);
        item.get().then((doc) => {
            if (!doc.exists){
                console.log('No existe el producto');
                setError(true)
                return;
            }
            setItemDetail([{id: doc.id, ...doc.data()}]);
        }).catch ((e) => {
            console.log('Error en la busqueda', e);
        }).finally (() => {
            setLoader(false)
        });
    },[pId]);
    return(
        <div className="container">
            <div className="row">
                <div className="sk-center">
                    {loader && <Loader/>}
                </div>
                {error === true && 
                    <>
                        <div className="container-error">
                            <h1>No existe el producto</h1>
                            <Link to="/" className="btn">Volver al inicio</Link>
                        </div>
                    </>
                }
                <div>
                    {itemDetail?.map (it =>{
                        return(
                            <>
                                <ItemDetail title={it.title} img={it.photo} price={it.price} description={it.description} id={it.id} stock={it.stock}></ItemDetail>
                                <div className="item-detail-info-container">
                                    <ItemDetailInfo desc={it.desc} id={it.id}></ItemDetailInfo>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>    
        </div>        
    );
};

export default ItemDetailContainer;