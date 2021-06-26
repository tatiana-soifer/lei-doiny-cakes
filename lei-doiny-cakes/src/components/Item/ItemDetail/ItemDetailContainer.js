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
import desayuno1 from '../../../assets/img/desayuno1.jpg';
import desayuno2 from '../../../assets/img/desayuno2.jpg';
import desayuno3 from '../../../assets/img/desayuno3.jpg';
import desayuno4 from '../../../assets/img/desayuno4.jpg';
import letterCake from '../../../assets/img/letter_cake_chocotorta_.jpg';
import numberCake from '../../../assets/img/letter_cake_marquisse_.jpg';
import shots from '../../../assets/img/shots.jpg';
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
                Stock: 5,
                Precio: 1750,
                category: 'tortas',
                Foto: praline
            },
            {
                Id: 2,                
                Torta: 'Franui',
                Descripcion: 'Base crocante de chocolate, con una mousse de chocolate negro y mousse de frambuesa, bañada en chocolate blanco. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1950,
                category: 'tortas',
                Foto: franui
            },
            {
                Id: 3,
                Torta: 'Choco-oreo',
                Descripcion: 'Es la mezcla perfecta entre la Chocotorta y la Doble Oreo. Una bomba explosiva que hay que probar. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1850,
                category: 'tortas',
                Foto: chocoOreo
            },
            {
                Id: 4,
                Torta: 'Doble-oreo',
                Descripcion: 'Dos capas de Oreo, dulce de leche y crema chantillí. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1850,
                category: 'tortas',
                Foto: dobleOreo
            },
            {
                Id: 5,
                Torta: 'Mousse de Chocolate',
                Descripcion: 'Clásica mousse de chocolate negro, con una base de brownie humedo y chocolate amargo rallado por arriba. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1800,
                category: 'tortas',
                Foto: mousseChocolate
            },
            {
                Id: 6,
                Torta: 'Marquisse',
                Descripcion: 'Brownie húmedo, dulce de leche, crema chantillí o merengue Italiaano y lluvia de chocolate. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1850,
                category: 'tortas',
                Foto: marquisse
            },
            {
                Id: 7,
                Torta: 'Cheesecake',
                Descripcion: 'Cheescake con base crocante, crema de limon y frutos rojos. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1800,
                category: 'tortas',
                Foto: cheesecake
            },
            {
                Id: 8,
                Torta: 'Crumble de Manzana',
                Descripcion: 'Base de masa quebrada dulce, manzana y un crumble crocante. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1850,
                category: 'tortas',
                Foto: crumbleManzana
            },
            {
                Id: 9,
                Torta: 'Crumble de Manzana',
                Descripcion: 'Base de masa quebrada dulce, manzana y un crumble crocante. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1850,
                category: 'tortas',
                Foto: desayuno1
            },
            {
                Id: 10,
                Torta: 'Crumble de Manzana',
                Descripcion: 'Base de masa quebrada dulce, manzana y un crumble crocante. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1850,
                category: 'desayunosMeriendas',
                Foto: desayuno2
            },
            {
                Id: 11,
                Torta: 'Crumble de Manzana',
                Descripcion: 'Base de masa quebrada dulce, manzana y un crumble crocante. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1850,
                category: 'desayunosMeriendas',
                Foto: desayuno3
            },
            {
                Id: 12,
                Torta: 'Crumble de Manzana',
                Descripcion: 'Base de masa quebrada dulce, manzana y un crumble crocante. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1850,
                category: 'desayunosMeriendas',
                Foto: desayuno4
            },
            {
                Id: 13,
                Torta: 'Letter Cake',
                Descripcion: 'Descripción: Es la clásica chocotorta con forma de letra o número decorada de manera personalizada con golosinas o alguna temática en particular. Tamaño: 21cm x 15cm aproximadamente.',
                Stock: 5,
                Precio: 2500,
                category: 'letterCakes',
                Foto: letterCake
            },
            {
                Id: 14,
                Torta: 'Number Cake',
                Descripcion: 'Descripción: Torta en forma de número, de brownie húmedo, dulce de leche, crema chantillí o merengue Italiaano y lluvia de golosinas. Tamaño: 21cm x 15cm aproximadamente.',
                Stock: 5,
                Precio: 2500,
                category: 'letterCakes',
                Foto: numberCake
            },
            {
                Id: 15,
                Torta: 'Caja de Shots Surtidos x 24 unidades',
                Descripcion: 'Descripción: Incluye 6 shots de Chocotorta, 6 shots de Lemmon Pie, 6 shots de Marquisse, y 6 shots de Cheescake.',
                Stock: 5,
                Precio: 4000,
                category: 'shots',
                Foto: shots
            },
            {
                Id: 16,
                Torta: 'Caja de Shots Surtidos x 60 unidades',
                Descripcion: 'Descripción: Incluye 10 shots de Chocotorta, 10 shots de Lemmon Pie, 10 shots de Marquisse, 10 shots de Cheescake, 10 shots de Bon o Bon, y 10 shots de Banana Split.',
                Stock: 5,
                Precio: 5000,
                category: 'shots',
                Foto: shots
            }
        ];
        const getItems = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve (listadoProductos.find(f => f.id === id.substr(1)) ), 2000);
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