import React from 'react';
import {NavLink} from 'react-router-dom';

const menuProductos = () => {
	return (
		<div className="menuListado">
            <ul>
				<li>
					<NavLink className="categoriaItem" exact to="/category/todos" activeClassName="selected" category="">Menu Completo</NavLink>
				</li>
				<li>
					<NavLink className="categoriaItem" exact to="/category/tortas" activeClassName="selected" category="tortas">Tortas</NavLink>
				</li>
				<li>
					<NavLink className="categoriaItem" exact to="/category/desayunoMerienda" activeClassName="selected" category="desayunoMerienda">Desayunos y Meriendas</NavLink>
				</li>
				<li>
					<NavLink className="categoriaItem" exact to="/category/letterCake" activeClassName="selected" category="letterCake">Letter Cake</NavLink>
				</li>
				<li>
					<NavLink className="categoriaItem" exact to="/category/shots" activeClassName="selected" category="shots">Shots</NavLink>
				</li>
            </ul>
        </div>
	)
};

export default menuProductos;