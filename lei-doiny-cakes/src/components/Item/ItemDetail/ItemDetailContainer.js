import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Productos from '../../Data/Productos.json';
import '../../css/Main.css';


const ItemDetailContainer = () => {
    const [detalles, setDetalles] = useState([]);
    let { id: productId } = useParams();
    const [producto] = Productos.filter((detalles) => detalles.id === parseInt(productId));
    const getItems = () => {
        new Promise((result, reject) => {
            setTimeout(() => {
                result(producto);
            }, 2000);
        }).then((response) => setDetalles(response));
    };
    useEffect(() => {
        getItems();
    }, [producto, productId]);
    return (
        <>
            <ItemDetail detalle={detalles} />
        </>
    )
};

export default ItemDetailContainer;