import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from '../../Item/ItemList/ItemList';
import praline from '../../../assets/img/praline.jpg';
import chocoOreo from '../../../assets/img/choco_oreo.jpg';
import dobleOreo from '../../../assets/img/doble_oreo.jpg';
import mousseChocolate from '../../../assets/img/mousse.jpg';
import marquisse from '../../../assets/img/marquisse.jpg';
import cheesecake from '../../../assets/img/chessecake_frutos_rojos.jpg';
import desayuno1 from '../../../assets/img/desayuno1.jpg';
import desayuno2 from '../../../assets/img/desayuno2.jpg';
import desayuno3 from '../../../assets/img/desayuno3.jpg';
import desayuno4 from '../../../assets/img/desayuno4.jpg';
import letterCake from '../../../assets/img/letter_cake_chocotorta_.jpg';
import numberCake from '../../../assets/img/letter_cake_marquisse_.jpg';
import shots from '../../../assets/img/shots.jpg';
import './../../css/Main.css';

const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const {Categoria} = useParams ();
    useEffect(() => {
        const listadoProductos = [
            {
                Id: 1,
                Torta: 'Praline',
                Descripcion: 'Crema pastelera de chocolate y praline de frutos secos. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1750,
                Catogoria: 'tortas',
                Foto: praline
            },
            {
                Id: 2,
                Torta: 'Choco-oreo',
                Descripcion: 'Es la mezcla perfecta entre la Chocotorta y la Doble Oreo. Una bomba explosiva que hay que probar. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1850,
                Catogoria: 'tortas',
                Foto: chocoOreo
            },
            {
                Id: 3,
                Torta: 'Doble-oreo',
                Descripcion: 'Dos capas de Oreo, dulce de leche y crema chantillí. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1850,
                Catogoria: 'tortas',
                Foto: dobleOreo
            },
            {
                Id: 4,
                Torta: 'Mousse de Chocolate',
                Descripcion: 'Clásica mousse de chocolate negro, con una base de brownie humedo y chocolate amargo rallado por arriba. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1800,
                Catogoria: 'tortas',
                Foto: mousseChocolate
            },
            {
                Id: 5,
                Torta: 'Marquisse',
                Descripcion: 'Brownie húmedo, dulce de leche, crema chantillí o merengue Italiaano y lluvia de chocolate. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1850,
                Catogoria: 'tortas',
                Foto: marquisse
            },
            {
                Id: 6,
                Torta: 'Cheesecake',
                Descripcion: 'Cheescake con base crocante, crema de limon y frutos rojos. Tamaño: Molde 26cm',
                Stock: 5,
                Precio: 1800,
                Catogoria: 'tortas',
                Foto: cheesecake
            },
            {
                Id: 7,
                Torta: 'Desayuno Simple',
                Descripcion: '2 mini tortas a elección (coco con dulce de leche o sablé), un jugo, dos muffins y un brownie bien húmedo.',
                Stock: 5,
                Precio: 1850,
                Catogoria: 'tortas',
                Foto: desayuno1
            },
            {
                Id: 8,
                Torta: 'Desayuno Para 2 ',
                Descripcion: '2 mini tortas a elección (coco con dulce de leche o sablé), 2 jugos, 4 muffins, 2 brownies húmedos.',
                Stock: 5,
                Precio: 2500,
                Catogoria: 'desayunosMeriendas',
                Foto: desayuno2
            },
            {
                Id: 9,
                Torta: 'Desayuno Para Niños',
                Descripcion: '1 mini chocotorta, 2 chocolatadas Nesquik, 4 muffins, 2 brownies húmedos, galletitas de vainilla y productos para decorar las mismas.',
                Stock: 5,
                Precio: 3000,
                Catogoria: 'desayunosMeriendas',
                Foto: desayuno3
            },
            {
                Id: 10,
                Torta: 'Desayuno Completo',
                Descripcion: '2 mini tortas a elección (coco con dulce de leche o sablé), 2 jugos, 4 muffins, 2 brownies húmedos, 2 granolas, un paquete de talitas.',
                Stock: 5,
                Precio: 4500,
                Catogoria: 'desayunosMeriendas',
                Foto: desayuno4
            },
            {
                Id: 11,
                Torta: 'Letter Cake',
                Descripcion: 'Descripción: Es la clásica chocotorta con forma de letra o número decorada de manera personalizada con golosinas o alguna temática en particular. Tamaño: 21cm x 15cm aproximadamente.',
                Stock: 5,
                Precio: 2500,
                Catogoria: 'letterCakes',
                Foto: letterCake
            },
            {
                Id: 12,
                Torta: 'Number Cake',
                Descripcion: 'Descripción: Torta en forma de número, de brownie húmedo, dulce de leche, crema chantillí o merengue Italiaano y lluvia de golosinas. Tamaño: 21cm x 15cm aproximadamente.',
                Stock: 5,
                Precio: 2500,
                Catogoria: 'letterCakes',
                Foto: numberCake
            },
            {
                Id: 13,
                Torta: 'Caja de Shots Surtidos x 24 unidades',
                Descripcion: 'Descripción: Incluye 6 shots de Chocotorta, 6 shots de Lemmon Pie, 6 shots de Marquisse, y 6 shots de Cheescake.',
                Stock: 5,
                Precio: 4000,
                Catogoria: 'shots',
                Foto: shots
            },
            {
                Id: 14,
                Torta: 'Caja de Shots Surtidos x 60 unidades',
                Descripcion: 'Descripción: Incluye 10 shots de Chocotorta, 10 shots de Lemmon Pie, 10 shots de Marquisse, 10 shots de Cheescake, 10 shots de Bon o Bon, y 10 shots de Banana Split.',
                Stock: 5,
                Precio: 5000,
                Catogoria: 'shots',
                Foto: shots
            }
        ];
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                !Categoria ? resolve(listadoProductos) : resolve(listadoProductos.filter(f => f.Categoria === Categoria))                
            }, 2000);
        });
        promesa.then(data => {
            setItems(data)
        });
    }, [Categoria]);
    return(
        <div className="ItemListContainer">
            <ItemList items={items} />
        </div> 
    );
};

export default ItemListContainer;