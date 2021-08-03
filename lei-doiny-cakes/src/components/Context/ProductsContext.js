import React, {createContext , useContext, useState, useEffect} from 'react';
import {GetDB} from '../../Factory/Firebase';

//CREACION DEL CONTEXTO
export const ProductsContext = createContext();
export const useProductsContext = () => useContext(ProductsContext);
const ProductsContextProvider = ({children}) => {
    //VARIABLES Y MODIFICADORES
    const [SourceProducts, setProducts] = useState([]);
    const DB = GetDB();
    const allProducts = DB.collection('itemCollection');
    //MODIFICADOR PARA ACTIVAR EL LOADER
    const [IsLoading, SetLoading] = useState(false);
    //MODIFICADOR PARA DARLE ESTILO "ACTIVE" AL FILTRO SELECCIONADO
    const [ActiveFilter, SetActiveFilter] = useState("All");
    //FUNCION PARA TRER TODOS LOS PRODUCTOS DE LA DB
    function GetAll () {
        SetLoading(true)
        allProducts
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("No se encontraron resultados")
                }
                setProducts(querySnapshot.docs.map (doc => ({ ...doc.data(), id: doc.id })))
                SetLoading(false)
                SetActiveFilter('All')
            }).catch((error) => {
                console.log('Error buscando productos', error)
            }).finally(() => {})
    }
    //FUNCION PARA FILTRAR LOS PRODUCTOS POR CATEGORIA
    function GetByCategory(category) {
        SetLoading(true)
        const filter = allProducts.where('category', "==", category);
        filter
            .get()
            .then((result) => {
                if (result.size === 0) {
                    console.log('Sin resultados');
                }
            setProducts(result.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            SetLoading(false)
            SetActiveFilter(category)
        })
            .catch((error) => console.log(error))
            .finally(() => {});
    }
    //DISPARO EL GETALL AL INICIAR PARA QUE TRAIGA LOS PRODUCTOS DE LA DB
    useEffect(() => {
        GetAll();
    },[])
    return (
        <ProductsContext.Provider value={{SourceProducts, setProducts, GetAll, GetByCategory, SetLoading, IsLoading, ActiveFilter}}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;