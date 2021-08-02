import React from 'react';
import {useProductsContext} from '../Context/ProductsContext';
import '../css/Main.css';


const Filters = () => {
  const {GetAll, GetByCategory, ActiveFilter} = useProductsContext();
  // al dispararl las funciones getall y getby category seteo el valor de active filter la opcion que corresponda para que el boton elegido se coloree (style active)
  return (
    <div>
      <ul className="nav justify-content-center filters">
        <li className="nav-item">
          {ActiveFilter === "All" ? 
          <button className="nav-link filter active" onClick={() => GetAll()}>Todas</button> :
          <button className="nav-link filter" onClick={() => GetAll()}>Todas</button>}
        </li>
        <li className="nav-item">
          {ActiveFilter === "tortas" ? 
          <button className="nav-link filter active" onClick={() =>GetByCategory("tortas")}>Tortas</button> :
          <button className="nav-link filter" onClick={() =>GetByCategory("tortas")}>Tortas</button>}
        </li>
        <li className="nav-item">
          {ActiveFilter === "desayunoMerienda" ? 
          <button className="nav-link filter active" onClick={() => GetByCategory("desayunoMerienda")}>Desayunos y Meriendas</button> :
          <button className="nav-link filter" onClick={() => GetByCategory("desayunoMerienda")}>Desayunos y Meriendas</button>}
        </li>
        <li className="nav-item">
          {ActiveFilter === "shots" ? 
          <button className="nav-link filter active" onClick={() => GetByCategory("shots")}>Shots</button> :
          <button className="nav-link filter" onClick={() => GetByCategory("shots")}>Shots</button>}
        </li>
        <li className="nav-item">
          {ActiveFilter === "letterCake" ? 
          <button className="nav-link filter active" onClick={() => GetByCategory("letterCake")}>Letter Cake</button> :
          <button className="nav-link filter" onClick={() => GetByCategory("letterCake")}>Letter Cake</button>}
        </li>
      </ul>
    </div>
  );
};

export default Filters;