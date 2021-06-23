import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import praline from '../../../assets/img/praline.jpg';
import franui from '../../../assets/img/franui.jpg';
import chocoOreo from '../../../assets/img/choco_oreo.jpg';
import dobleOreo from '../../../assets/img/doble_oreo.jpg';
import mousseChocolate from '../../../assets/img/mousse.jpg';
import marquisse from '../../../assets/img/marquisse.jpg';
import cheesecake from '../../../assets/img/chessecake_frutos_rojos.jpg';
import crumbleManzana from '../../../assets/img/crumble_manzana.jpg';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../../css/Main.css';

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState ([]);
    const {id} = useParams ();
    useEffect(() => { 
        const listadoProductos = [
            {
                Id: 1,
                Torta: 'Praline',
                Descripcion: 'Crema pastelera de chocolate y praline de frutos secos. Tamaño: Molde 26cm',
                Stock: 15,
                Precio: 1750,
                Foto: praline
            },
            {
                Id: 2,                
                Torta: 'Franui',
                Descripcion: 'Base crocante de chocolate, con una mousse de chocolate negro y mousse de frambuesa, bañada en chocolate blanco. Tamaño: Molde 26cm',
                Stock: 3,
                Precio: 1950,
                Foto: franui
            },
            {
                Id: 3,
                Torta: 'Choco-oreo',
                Descripcion: 'Es la mezcla perfecta entre la Chocotorta y la Doble Oreo. Una bomba explosiva que hay que probar. Tamaño: Molde 26cm',
                Stock: 10,
                Precio: 1850,
                Foto: chocoOreo
            },
            {
                Id: 4,
                Torta: 'Doble-oreo',
                Descripcion: 'Dos capas de Oreo, dulce de leche y crema chantillí. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1850,
                Foto: dobleOreo
            },
            {
                Id: 5,
                Torta: 'Mousse de Chocolate',
                Descripcion: 'Clásica mousse de chocolate negro, con una base de brownie humedo y chocolate amargo rallado por arriba. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1800,
                Foto: mousseChocolate
            },
            {
                Id: 6,
                Torta: 'Marquisse',
                Descripcion: 'Brownie húmedo, dulce de leche, crema chantillí o merengue Italiaano y lluvia de chocolate. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1850,
                Foto: marquisse
            },
            {
                Id: 7,
                Torta: 'Cheesecake',
                Descripcion: 'Cheescake con base crocante, crema de limon y frutos rojos. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1800,
                Foto: cheesecake
            },
            {
                Id: 8,
                Torta: 'Crumble de Manzana',
                Descripcion: 'Base de masa quebrada dulce, manzana y un crumble crocante. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1850,
                Foto: crumbleManzana
            }
        ];
        const getItems = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve ( listadoProductos.find(f => f.id === id.substr(1)) ), 2000);
            });    
        };    
            getItems().then((data) => {
            setProductos(data);
        });
    }, [id]);
    return(
        <div>
            <ItemDetail item={productos} />            
        </div>        
    );
};

export default ItemDetailContainer;