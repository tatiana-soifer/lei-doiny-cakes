
import './../../css/Main.css';

const productList = [
    {
      Torta: 'Praline',
      Descripción: 'Crema pastelera de chocolate y praline de frutos secos. Tamaño: Molde 26cm',
      Stock: 15
    },
    {
      Torta: 'Franui',
      Descripción: 'Base crocante de chocolate, con una mousse de chocolate negro y mousse de frambuesa, bañada en chocolate blanco. Tamaño: Molde 26cm',
      Stock: 3
    }
  ];

const task = new Promise((resolve, reject) => {
    console.log('Esperando 2 segundos..');
    setTimeout(() => {
        resolve(productList);
    }, 2000);
});

task.then(data => {
    data.forEach(producto => {
        console.log(producto);
    });
});