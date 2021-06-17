import '../css/Main.css';
import ProductList from './../Item';

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
