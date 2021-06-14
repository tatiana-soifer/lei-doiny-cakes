import React, {Component, useState} from 'react';
import '../css/Main.css';


function ItemList({items}){
    const [tortas, setTortas] = useState([
        {
            Id: 1,
            Torta: 'Praline',
            Descripción: 'Crema pastelera de chocolate y praline de frutos secos. Tamaño: Molde 26cm',
            Stock: 15,
            Precio: 1750
        },
        {
            Id: 2,
            Torta: 'Franui',
            Descripción: 'Base crocante de chocolate, con una mousse de chocolate negro y mousse de frambuesa, bañada en chocolate blanco. Tamaño: Molde 26cm',
            Stock: 3,
            Precio: 1950
        },
        {
            Id: 3,
            Torta: 'Choco-oreo',
            Descripción: 'Descripción: Es la mezcla perfecta entre la Chocotorta y la Doble Oreo. Una bomba explosiva que hay que probar. Tamaño: Molde 26cm',
            Stock: 10,
            Precio: 1850
        },
        {
            Id: 4,
            Torta: 'Doble-oreo',
            Descripción: 'Descripción: Dos capas de Oreo, dulce de leche y crema chantillí. Tamaño: Molde 26cm',
            Stock: 5,
            Precio: 1850
        },
        {
            Id: 5,
            Torta: 'Mousse',
            Descripción: 'Descripción: Clásica mousse de chocolate negro, con una base de brownie humedo y chocolate amargo rallado por arriba. Tamaño: Molde 26cm',
            Stock: 5,
            Precio: 1800
        },
        {
            Id: 6,
            Torta: 'Marquisse',
            Descripción: 'Descripción: Brownie húmedo, dulce de leche, crema chantillí o merengue Italiaano y lluvia de chocolate. Tamaño: Molde 26cm',
            Stock: 5,
            Precio: 1850
        },
        {
            Id: 7,
            Torta: 'Cheesecake',
            Descripción: 'Descripción: Cheescake con base crocante, crema de limon y frutos rojos. Tamaño: Molde 26cm',
            Stock: 5,
            Precio: 1800
        },
        {
            Id: 8,
            Torta: 'Crumble',
            Descripción: 'Descripción: Base de masa quebrada dulce, manzana y un crumble crocante. Tamaño: Molde 26cm',
            Stock: 5,
            Precio: 1850
        }
    ]);
    return<ul>
        {tortas.map (u => <li key={u.Id}>{u.Torta}</li>)}
        </ul>
};