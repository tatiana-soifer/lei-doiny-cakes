import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../../css/Main.css';

function ItemDetailContainer ({itemsDetailContainer}) {
    const [productos, setProductos] = useState ({});
    useEffect(() => {
        const fetchProductos = async () => {
            const promesaProducto = new Promise (resolve => {
                setTimeout(() => {
                    resolve(
                        {
                            Id: 1,
                            Torta: 'Praline',
                            Descripcion: 'Crema pastelera de chocolate y praline de frutos secos. Tamaño: Molde 26cm',
                            Stock: 15,
                            Precio: 1750,
                            Foto: 'https://drive.google.com/drive/folders/1zYa3Ln-CfiBxN3stbNoop5UKzzMXzVoD'
                        },
                        {
                            Id: 2,                
                            Torta: 'Franui',
                            Descripcion: 'Base crocante de chocolate, con una mousse de chocolate negro y mousse de frambuesa, bañada en chocolate blanco. Tamaño: Molde 26cm',
                            Stock: 3,
                            Precio: 1950,
                            Foto: 'https://drive.google.com/drive/folders/1zYa3Ln-CfiBxN3stbNoop5UKzzMXzVoD'
                        },
                        {
                            Id: 3,
                            Torta: 'Choco-oreo',
                            Descripcion: 'Es la mezcla perfecta entre la Chocotorta y la Doble Oreo. Una bomba explosiva que hay que probar. Tamaño: Molde 26cm',
                            Stock: 10,
                            Precio: 1850,
                            Foto: 'https://drive.google.com/drive/folders/1zYa3Ln-CfiBxN3stbNoop5UKzzMXzVoD'
                        },
                        {
                            Id: 4,
                            Torta: 'Doble-oreo',
                            Descripcion: 'Dos capas de Oreo, dulce de leche y crema chantillí. Tamaño: Molde 26cm',
                            Stock: 5,
                            Precio: 1850,
                            Foto: 'https://drive.google.com/drive/folders/1zYa3Ln-CfiBxN3stbNoop5UKzzMXzVoD'
                        },
                        {
                            Id: 5,
                            Torta: 'Mousse de Chocolate',
                            Descripcion: 'Clásica mousse de chocolate negro, con una base de brownie humedo y chocolate amargo rallado por arriba. Tamaño: Molde 26cm',
                            Stock: 5,
                            Precio: 1800,
                            Foto: 'https://drive.google.com/drive/folders/1zYa3Ln-CfiBxN3stbNoop5UKzzMXzVoD'
                        },
                        {
                            Id: 6,
                            Torta: 'Marquisse',
                            Descripcion: 'Brownie húmedo, dulce de leche, crema chantillí o merengue Italiaano y lluvia de chocolate. Tamaño: Molde 26cm',
                            Stock: 5,
                            Precio: 1850,
                            Foto: 'https://drive.google.com/drive/folders/1zYa3Ln-CfiBxN3stbNoop5UKzzMXzVoD'
                        },
                        {
                            Id: 7,
                            Torta: 'Cheesecake',
                            Descripcion: 'Cheescake con base crocante, crema de limon y frutos rojos. Tamaño: Molde 26cm',
                            Stock: 5,
                            Precio: 1800,
                            Foto: 'https://drive.google.com/drive/folders/1zYa3Ln-CfiBxN3stbNoop5UKzzMXzVoD'
                        },
                        {
                            Id: 8,
                            Torta: 'Crumble de Manzana',
                            Descripcion: 'Base de masa quebrada dulce, manzana y un crumble crocante. Tamaño: Molde 26cm',
                            Stock: 5,
                            Precio: 1850,
                            Foto: 'https://drive.google.com/drive/folders/1zYa3Ln-CfiBxN3stbNoop5UKzzMXzVoD'
                        }
                    )
                }, 2000)
            })
            setProductos(await promesaProducto)
            }
            fetchProductos ()
        }, [])
    return (
        <div className="container">
            <div className="row">
                <ItemDetail item={productos} />
            </div>
        </div>
    )
};

export default ItemDetailContainer;