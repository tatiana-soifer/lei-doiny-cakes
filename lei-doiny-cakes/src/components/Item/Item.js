
import '../css/Main.css';

const ProductList = () =>{
    const lista = [
        {
            Id: 1,
            Torta: 'Praline',
            Descripcion: 'Crema pastelera de chocolate y praline de frutos secos. Tamaño: Molde 26cm',
            Stock: 15,
            Precio: 1750
        },
        {
            Id: 2,
            Torta: 'Franui',
            Descripcion: 'Base crocante de chocolate, con una mousse de chocolate negro y mousse de frambuesa, bañada en chocolate blanco. Tamaño: Molde 26cm',
            Stock: 3,
            Precio: 1950
        },
        {
            Id: 3,
            Torta: 'Choco-oreo',
            Descripcion: 'Descripción: Es la mezcla perfecta entre la Chocotorta y la Doble Oreo. Una bomba explosiva que hay que probar. Tamaño: Molde 26cm',
            Stock: 10,
            Precio: 1850
        },
        {
            Id: 4,
            Torta: 'Doble-oreo',
            Descripcion: 'Descripción: Dos capas de Oreo, dulce de leche y crema chantillí. Tamaño: Molde 26cm',
            Stock: 5,
            Precio: 1850
        },
        {
            Id: 5,
            Torta: 'Mousse',
            Descripcion: 'Descripción: Clásica mousse de chocolate negro, con una base de brownie humedo y chocolate amargo rallado por arriba. Tamaño: Molde 26cm',
            Stock: 5,
            Precio: 1800
        },
        {
            Id: 6,
            Torta: 'Marquisse',
            Descripcion: 'Descripción: Brownie húmedo, dulce de leche, crema chantillí o merengue Italiaano y lluvia de chocolate. Tamaño: Molde 26cm',
            Stock: 5,
            Precio: 1850
        },
        {
            Id: 7,
            Torta: 'Cheesecake',
            Descripcion: 'Descripción: Cheescake con base crocante, crema de limon y frutos rojos. Tamaño: Molde 26cm',
            Stock: 5,
            Precio: 1800
        },
        {
            Id: 8,
            Torta: 'Crumble',
            Descripcion: 'Descripción: Base de masa quebrada dulce, manzana y un crumble crocante. Tamaño: Molde 26cm',
            Stock: 5,
            Precio: 1850
        }
    ];
    return (
        <div>
            {lista.map(element => {
                return (
                    <div>
                        <h2>Torta: {element.Torta}</h2>
                        <h4>Descripción: {element.Descripcion}</h4>
                        <h3>Descripción: {element.Precio}</h3>
                        <h4>Stock: {element.Stock}</h4>
                    </div>
                )
            }
            )}
        </div>
    )
};


const promise = new Promise((resolve, reject) => {
    console.log('Esperando 2 segundos.');
    setTimeout(() => {
        ProductList !== [] ? resolve(ProductList) : reject('No hay productos')
    }, 2000);
});

promise.then(
    data => {
        console.log(data);
    },
    error => {
        console.log (error);
    }
);

export default ProductList;
