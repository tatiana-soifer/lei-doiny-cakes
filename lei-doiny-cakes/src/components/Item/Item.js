
import '../css/Main.css';

const productList = [
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
    }
];

const task = new Promise((resolve, reject) => {
    console.log('Esperando 2 segundos.');
    setTimeout(() => {
        resolve(productList);
    }, 2000);
});

task.then(data => {
    data.forEach(producto => {
        console.log(producto);
    });
});