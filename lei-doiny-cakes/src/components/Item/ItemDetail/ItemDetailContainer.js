import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../../Factory/Firebase';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../../Loader/Loader.js';
import '../../css/Main.css';


const ItemDetailContainer = () => {
    const {id} = useParams();
    const [detalles, setDetalles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection('itemCollection');    
        const itemId = itemCollection.where('id', '==', id);
        itemId.get().then ((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No hay resultados.');
                return;
            }
        let result = querySnapshot.docs.map((doc) => doc.data());
        result = result[0];
        setDetalles(result)
        })
        .catch ((e) => {
            console.log('Error en la busqueda', e);
        })
        .finally (() =>{
            setLoading (false);
        });
    }, [id]);
    return(
        <>
            {
                loading ?
                <Loader />
                :
                <ItemDetail detalle={detalles} />
            }
        </>
    )
};

export default ItemDetailContainer;