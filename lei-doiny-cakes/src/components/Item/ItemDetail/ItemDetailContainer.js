import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../../Factory/Firebase';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../../css/Main.css';


const ItemDetailContainer = () => {
    const [detalles, setDetalles] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('itemCollection');    
        const itemId = itemCollection.doc(id.substr(1));
        
        itemId.get().then(doc =>{
            if (!doc.exists) {
                console.log('No se encontro el Item.')
                return;
            }
            setDetalles({
                id: doc.id, ...doc.data()
            }); 
        });
    }, [id]);
    return (
        <>
            <ItemDetail detalle={detalles} />
        </>
    )
};

export default ItemDetailContainer;