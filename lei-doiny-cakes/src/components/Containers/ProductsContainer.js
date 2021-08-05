import React from 'react';
import {useProductsContext} from '../Context/ProductsContext';
import EachProduct from '../EachProduct/EachProduct';

const ProductsContainer = () => {
    const {SourceProducts} = useProductsContext();
    //RECORRIDO DE LOS PRODUCTOS EN EL CARRITO Y CARGO SUS DATOS EN EL COMPONENTE EACHPRODUCTS  
    return (
        SourceProducts.map((item, i) => {
            return(
                <div className="cuadriculaProductos col-md-3">
                    <EachProduct product={item}/>
                </div>
            )
        })
    );
};

export default ProductsContainer;